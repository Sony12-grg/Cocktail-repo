import React from 'react'

export default function SearchBar() {
  return (
    <div>
        <div className='mx-22'>
             <hr className='border-2' />
        </div>
        <div>
          <div className=' my-8 flex justify-center'>
          <input 
           type="text" 
           placeholder="Search for a Cocktail..." 
           className="px-12 py-1 rounded bg-white text-black border-2 border-gray-300  "
  />
          </div>
        <div className='flex justify-center my-6 '>
            <div className='flex gap-4'>
                <div className='flex items-center gap-2'>
                    <img src="https://www.thecocktaildb.com/images/icons/cocktail-logo.png" alt="" />
                    <p><span className='font-bold'>Total Drinks:</span> 636 </p>
                </div>
                <div className='flex items-center gap-2'>
                    <img src="https://www.thecocktaildb.com/images/icons/ingredient-logo.png" alt="" />  
                    <p><span className='font-bold'>Total Ingredients:</span> 489</p>
                </div>
                <div className='flex items-center gap-2'>
                    <img src="https://www.thecocktaildb.com/images/icons/image2.png" alt="" />
                    <p><span className='font-bold'>Drink Images:</span> 636(93cc)</p>
                </div>  
            </div>
          </div>
        </div>
         <div className='mx-22'>
             <hr className='border-2' />
        </div>
     
    </div>
  )
}
