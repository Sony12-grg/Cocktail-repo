import React from 'react'
import Header from '../../Components/Header'
import Hero from '../../Components/Hero'
import SearchBar from '../../Components/SearchBar'
import { useGetDrinkQuery } from "../Drink/DrinkApi"
import { useGetIngredientsQuery } from '../Ingredients/ingredientApi'
import { useSearchDrinkQuery } from '../Drink/searchDrinkApi'
import { useGetRandomQuery } from '../Ingredients/randomApi'
import { Card } from '@/Components/ui/card'

export default function Home() {
      const { data, error, isLoading } = useGetDrinkQuery({ limit: 8 });
      const {data: ingredientData, isLoading: ingredientIsLoading, isError: ingredientIsError} = useGetIngredientsQuery({ limit: 4 });
      const {data: searchData, isLoading: searchIsLoading, isError: searchIsError} = useSearchDrinkQuery();
      const {data: randomData, isLoading: randomIsLoading, isError: randomIsError} = useGetRandomQuery();
      // fetching data
        if (isLoading || ingredientIsLoading || searchIsLoading || randomIsLoading) return <p>Loading...</p>
        if (error || ingredientIsError || searchIsError || randomIsError) return <p>Error fetching data</p>
        console.log(searchData);
      
       
  return (
    <div>
       <Hero />
       <SearchBar />

       <h1 className='text-center text-lg my-2 '>Popular Drinks</h1>
       <div className='grid grid-cols-4 gap-8 mx-26'>
        {
          data.drinks.map((drink) => {
            return (
                <Card key={drink.idDrink} className=" w-full max-w-sm  gap-0 py-0 bg-transparent overflow-hidden">
                <img
                   src={drink.strDrinkThumb} 
                    alt={drink.strDrink}
                    className='w-full object-cover'
                 />
                 <p className='py-1 text-center text-md text-[#8A757D] hover:text-[#b29817d7] cursor-pointer'>{drink.strDrink}</p>
                  
                 </Card>
            )
          })
        }
     

      </div>
       <div className='mt-14 mx-22'>
             <hr className='border-2' />
        </div>
        <div>
         <h1 className='text-center text-lg my-2 '>Popular Ingredients</h1>
         <div  className='grid grid-cols-4 gap-8 mx-26'>
            {
             ingredientData?.drinks.map((ingredient) => {
            return (
             <Card key={ingredient.strIngredient1} className=" w-full max-w-sm  gap-0 py-0 bg-transparent overflow-hidden">
               
                <img
               src={`https://www.thecocktaildb.com/images/ingredients/${ingredient.strIngredient1}.png`}
                alt={ingredient.strIngredient1}
                    className='w-full object-cover'
                 />
              <p className='py-1 text-center text-md text-[#8A757D] hover:text-[#b29817d7] cursor-pointer'>{ingredient.strIngredient1 }</p>
               
                 </Card>
            )
          })
        }
         </div>
        </div>
        

    
      <div className='mt-14 mx-22'>
             <hr className='border-2' />
        </div>
        <h1 className='text-center text-lg my-2 '>Search Drinks</h1>
        <div className='grid grid-cols-4 gap-8 mx-26'>
          {
            searchData?.drinks.map((drink) => {
              return (
                <Card key={drink.idDrink} className=" w-full max-w-sm  gap-0 py-0 bg-transparent overflow-hidden">
                <img
                   src={drink.strDrinkThumb} 
                    alt={drink.strDrink}
                    className='w-full object-cover'
                 />
                 <p className='py-1 text-center text-md text-[#8A757D] hover:text-[#b29817d7] cursor-pointer'>{drink.strDrink}</p>
                </Card>
              )
            })

          }
        </div>

          <div className='mt-14 mx-22'>
             <hr className='border-2' />
        </div>
        <h1 className='text-center text-lg my-2 '>Random Ingredients</h1>
        <div className='flex justify-center'>
          {
            randomData?.drinks.map((drink) => {
              return (
                <Card key={drink.idDrink} className=" w-full max-w-sm  gap-0 py-0 bg-transparent overflow-hidden">
                <img
                   src={`https://www.thecocktaildb.com/images/ingredients/${drink.strIngredient2}.png `  } 
                    alt={drink.strIngredient2}
                    className='w-full object-cover'
                 />
                 <p className='py-1 text-center text-md text-[#8A757D] hover:text-[#b29817d7] cursor-pointer'>{drink.strIngredient2}</p>
                </Card>
              )
            })
          }
        </div>
        <div className='mt-14 mx-22'>
             <hr className='border-2' />
        </div>
        <h1 className='text-center text-lg my-2 '>Browse By Name</h1>
    </div>
  )
}
