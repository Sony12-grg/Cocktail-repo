import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function getGitFiles() {
  const out = execSync('git ls-files', { encoding: 'utf8' });
  return out.split('\n').filter(Boolean);
}

function findTrackedMatchCaseInsensitive(candidate, trackedFiles) {
  const lc = candidate.toLowerCase();
  return trackedFiles.find(f => f.toLowerCase() === lc);
}

function resolveImport(importer, importPath) {
  if (importPath.startsWith('@/')) {
    return path.join('src', importPath.slice(2));
  }
  if (importPath.startsWith('./') || importPath.startsWith('../')) {
    return path.join(path.dirname(importer), importPath);
  }
  return null;
}

function possibleFileCandidates(resolved) {
  const exts = ['.js', '.jsx', '.ts', '.tsx', '.json', '/index.js', '/index.jsx', '/index.ts', '/index.tsx'];
  const candidates = [];
  if (fs.existsSync(resolved) && fs.lstatSync(resolved).isFile()) candidates.push(resolved);
  exts.forEach(ext => {
    const c = resolved.endsWith(ext) ? resolved : resolved + ext;
    candidates.push(c);
  });
  return candidates;
}

function run() {
  const tracked = getGitFiles();
  const jsFiles = tracked.filter(f => /\.(js|jsx|ts|tsx)$/.test(f));
  const importRegex = /import\s+(?:[^'";]+)\s+from\s+['"]([^'"]+)['"]|require\(['"]([^'"]+)['"]\)/g;
  const fixes = [];

  jsFiles.forEach(file => {
    const content = fs.readFileSync(file, 'utf8');
    let m;
    while ((m = importRegex.exec(content)) !== null) {
      const imp = m[1] || m[2];
      if (!imp) continue;
      if (!(imp.startsWith('./') || imp.startsWith('../') || imp.startsWith('@/'))) continue;
      const resolvedRel = resolveImport(file, imp);
      if (!resolvedRel) continue;
      const candidates = possibleFileCandidates(resolvedRel);
      const match = candidates.find(c => tracked.includes(c.replace(/\\/g,'/')));
      if (match) continue;
      // try case-insensitive match
      const ciMatch = candidates.map(c=>c.replace(/\\/g,'/')).map(c=> findTrackedMatchCaseInsensitive(c, tracked)).find(Boolean);
      if (ciMatch) {
        fixes.push({ file, original: imp, resolved: resolvedRel.replace(/\\/g,'/'), found: ciMatch });
      }
    }
  });

  if (fixes.length === 0) {
    console.log('No casing mismatches found.');
    return;
  }

  console.log('Found', fixes.length, 'casing mismatches. Applying fixes...');

  fixes.forEach(f => {
    const text = fs.readFileSync(f.file, 'utf8');
    // compute replacement import path that maps to found tracked file path
    const absImporterDir = path.dirname(f.file);
    const trackedPath = f.found; // e.g. src/Components/ui/card.jsx
    let newImport;
    if (f.original.startsWith('@/')) {
      // build new alias import from trackedPath by stripping leading src/
      let rel = trackedPath.replace(/\\/g,'/');
      if (rel.startsWith('src/')) rel = rel.slice(4);
      newImport = `@/${rel}`;
    } else {
      // create relative path from importer to trackedPath
      const relPath = path.relative(absImporterDir, trackedPath).replace(/\\/g,'/');
      newImport = relPath.startsWith('.') ? relPath : './' + relPath;
    }
    // remove file extensions for import to keep style (optional)
    newImport = newImport.replace(/\.(js|jsx|ts|tsx)$/, '');

    const escapedOld = f.original.replace(/[.*+?^${}()|[\\]\\]/g, '\\$&');
    const importStrRegex = new RegExp(`(['\"])${escapedOld}(['\"])`,'g');
    const newText = text.replace(importStrRegex, `"${newImport}"`);
    fs.writeFileSync(f.file, newText, 'utf8');
    console.log(`Patched ${f.file}: '${f.original}' -> '${newImport}'`);
  });

  console.log('Applied all fixes.');
}

run();
