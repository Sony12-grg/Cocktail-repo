import React from 'react'

export default function Api() {
  return (
    <div className='flex flex-col items-center gap-8 mt-12'>
        <div className='flex flex-col items-center'>
            <div className='flex gap-2' >
              <img src="https://www.thecocktaildb.com/images/icons/thumb_up.gif" alt="" />
              <h1>Free Cocktail API Support</h1>
            </div>
            <p>The API and site will always remain free to access at its basic level.</p>
         </div>
             
          <div className='flex flex-col items-center'>
            <div className='flex gap-2'>
                <img src="https://www.thecocktaildb.com/images/icons/api.png" alt="" />
                <h1> Test API Key</h1>
            </div>
            <p>You can use the test API key "1" during development of your app or for educational use (see test links below)</p>
            <p>However you must sign up to Premium API for a small one-off fee if you want a production API key if releasing publicly on an appstore.</p>
         </div>
         <div className='flex flex-col items-center'>
            <div className='flex gap-2'>
            <img src="https://www.thecocktaildb.com/images/icons/up_arrow.png" alt="" />
            <h1>API Upgrade</h1>
            </div>
            <p>All Premium API subscribers have access to the beta version of the API which allows mutiple ingredient filters.</p>
            <p>Supporters also get special lookups for Popular and Recent Cocktails. You can also list the full database rather than limited to 100 items.</p>
            <p>You also get access to the latest and random image API methods.</p>
         </div>
           <button className='bg-yellow-300 text-white rounded-xl px-3 py-2'>Go Premium ($10)</button>
           <div className='flex flex-col items-center'>
            <div className='flex gap-2'>
                <img src="https://www.thecocktaildb.com/images/icons/email.png" alt="" />
                 <h1>Contact</h1>
            </div>
            <p>Email: thedatadb@gmail.com</p>
           </div>
           <h1 className='text-4xl'>V1 API</h1>
           <div className='flex gap-2'>
            <img src="https://www.thecocktaildb.com/images/icons/code.png" alt="" />
            <p> API Methods using the developer test key '1' in the URL</p>
           </div>
           <div className='flex flex-col items-center'>
            <p className='italic'>Search cocktail by name</p>
            <p className='text-[#D47BD4]'>www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita</p>
           </div>
           <div className='flex flex-col items-center'>
            <p className='italic'>List all cocktails by first letter</p>
            <p className='text-[#D47BD4]'>www.thecocktaildb.com/api/json/v1/1/search.php?f=m</p>
           </div>
           <div className='flex flex-col items-center'>
            <p className='italic'>Search ingredient by name</p>
            <p className='text-[#D47BD4]'>www.thecocktaildb.com/api/json/v1/1/search.php?i=vodka</p>
           </div>
           <div className='flex flex-col items-center'>
            <p className='italic'>Lookup full cocktail details by id</p>
            <p className='text-[#D47BD4]'>www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007
</p>
           </div>
           <div className='flex flex-col items-center'>
            <h1>Images</h1>
             <h3>Drink thumbnails</h3>
             <p >Add /small to the end of the cocktail image URL</p>
             <p className='text-[#D47BD4]'>/images/media/drink/vrwquq1478252802.jpg/small (200x200 px)</p>
             <p className='text-[#D47BD4]'>/images/media/drink/vrwquq1478252802.jpg/medium (350x350 px)</p>
             <p className='text-[#D47BD4]'>/images/media/drink/vrwquq1478252802.jpg/large (500x500 px)</p>
             <img src="https://www.thecocktaildb.com/images/media/drink/vrwquq1478252802.jpg/small" alt="" />
           </div>
           
    </div>
  )
}
