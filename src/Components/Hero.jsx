import React from 'react'

export default function Hero() {
  return (
    <div className='flex  justify-between items-center mx-18 my-1'>
      <div>
        <img src="https://www.thecocktaildb.com/images/cocktail_left.png" alt="drink" />
      </div>
      <div className='flex flex-col mx-2 space-y-5' >
         <h1 className='text-center text-4xl font-bold '>Welcome to TheCocktailDB</h1>
         <div>
           <p>An open, crowd-sourced database of drinks and cocktails from around the world.</p>
           <p className='text-center'> We also offer a <span className='text-[#8A757D]'>free cocktail API </span>for anyone wanting to use it.</p>
          </div>
          <div className='flex justify-center gap-5'>
             <button className='bg-[#10A528] px-3 py-2 text-white rounded'>Free API</button>
             <button className='bg-[#FEC43A] px-3 py-2 text-white rounded'>Go Premium</button>
          </div>
           <div>
            <p>Click above to upgrade the free Cocktail API to premium for <span className='text-[#8A757D]'>$10 lifetime one-off</span> 
            </p>
            <p className='text-center'>Currently 248 supporters.</p>
            </div>
      </div>
      <div className='px-10'>
        <img src="https://www.thecocktaildb.com/images/cocktail_left.png" alt="drink" />
      </div>

    </div>
  )
}
