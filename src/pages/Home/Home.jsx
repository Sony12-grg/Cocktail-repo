import React from 'react'
import Header from '../../Components/Header'
import Hero from '../../Components/Hero'
import SearchBar from '../../Components/SearchBar'
import { useGetDrinkQuery } from '../Drink/DrinkApi'
export default function Home() {
         
       const { data, error, isLoading } = useGetDrinkQuery();
       if(isLoading) return <p>Loading...</p>
        if(error) return <p>Error fetching data</p>
       
  return (
    <div>
       <Header />
       <Hero />
       <SearchBar />
       <h1 className='text-center text-lg my-2 '>Popular Drinks</h1>
    
      <div>
        {
          data.drinks.map((drink)=> {
            return (
               <div key={drink.idDrink}>
                   <h2>{drink.strDrink}</h2>
                   <img src={drink.strDrinkThumb} alt="" />
                </div>
            )
          })
        }
      </div>

    </div>
  )
}
