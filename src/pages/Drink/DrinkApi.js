import { fetchBaseQuery } from '@reduxjs/toolkit/query'
import { createApi } from '@reduxjs/toolkit/query/react'

export const drinkApi = createApi({
    reducerPath: 'drinkApi',
    baseQuery: fetchBaseQuery({
        baseUrl:'https://www.thecocktaildb.com/api/json/v1/1'
    }),

    endpoints: (builder) => ({
        getDrink: builder.query({
            query: () =>  ({
                  url: 'filter.php',
                  method: 'GET',
                  params: {
                    c: 'Cocktail'
                  }
            })
                
        })
    })
})

export const { useGetDrinkQuery } = drinkApi