import { NavLink } from "react-router-dom";


export default function Header() {
  return (
    <div className='bg-[#1D000D]'>
      <header className='mx-22 p-2 '>
        <div className='flex justify-between items-center'>
          <img src="https://www.thecocktaildb.com/images/logo.png" alt="" />
          <div className='flex gap-6'>
          <NavLink to="/" className='hover:bg-red-700  text-white px-4 py-2  rounded '>Home</NavLink>
          <NavLink to="/api" className='hover:bg-red-700  text-white px-4 py-2  rounded '>API</NavLink>
          <input 
           type="text" 
           placeholder="Search" 
           className="px-1 py-1 rounded bg-white text-black border-2 border-gray-300"
  />
          </div>
        </div>
      </header>
    </div>
  )
}
