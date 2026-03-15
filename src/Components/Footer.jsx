import React from 'react'
import { NavLink } from 'react-router-dom'
export default function Footer() {
  return (
    <div className='bg-[#1D000D] bottom-0 text-white p-4 mt-10'>
      <div className='flex justify-around my-5 mx-22'>
        <div >
        <p>© 2026 TheCocktailDB.</p>
        <span className='flex gap-2'>
        <p>Proudly built in the UK  </p>
        <img src="https://www.thecocktaildb.com/images/icons/flags/big/16/gb.png" alt="UK Flag" />
        </span>
       </div>
       <div className='flex flex-col gap-4'>
          <div className='flex gap-1 mx-auto'>
           Socials:
           <a href="https://www.thecocktaildb.com/images/facebook_icon.png"   target="_blank" >
          <img src="https://www.thecocktaildb.com/images/facebook_icon.png" alt="Facebook" />
          </a>
          <a href="https://www.thecocktaildb.com/images/twitter_icon.png" target="_blank" >
            <img src="https://www.thecocktaildb.com/images/twitter_icon.png" alt="Twitter" />
          </a>
        <a href="https://www.thecocktaildb.com/images/discord_icon.png" target="_blank">
          <img src="https://www.thecocktaildb.com/images/discord_icon.png" alt="Discord" />
        </a>
      </div>
      <div className='flex'>
        <a href="https://www.thecocktaildb.com/images/logo-tsdb.png" target="_blank" >
        <img src="https://www.thecocktaildb.com/images/logo-tsdb.png" alt="TSDB Logo" />
      </a>
      <a href="https://www.thecocktaildb.com/images/logo-tadb.png" target="_blank">
        <img src="https://www.thecocktaildb.com/images/logo-tadb.png" alt="TADB Logo" />
      </a>
      <a href="https://www.thecocktaildb.com/images/logo-tmdb.png" target="_blank">
        <img src="https://www.thecocktaildb.com/images/logo-tmdb.png" alt="TMDB Logo" />
      </a>
      </div>
       </div>
       

      <div className='flex gap-6'>
        <NavLink className='hover:text-red-800'>Terms</NavLink>
        <NavLink className='hover:text-red-800'>Privacy</NavLink>
        <NavLink className='hover:text-red-800'>Contact</NavLink>
        <NavLink className='hover:text-red-800'>Refunds</NavLink>
      </div>
      </div>
        
    </div>

  )
}
