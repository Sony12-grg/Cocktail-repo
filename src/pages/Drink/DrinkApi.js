import { fetchBaseQuery } from '@reduxjs/toolkit/query'
import { createApi } from '@reduxjs/toolkit/query/react'

export const drinkApi = createApi({
    reducerPath: 'drinkApi',
    baseQuery: fetchBaseQuery({
        baseUrl:'https://www.thecocktaildb.com/api/json/v1/1'
    }),

    endpoints: (builder) => ({
        getDrink: builder.query({
            query: ({ category = 'Cocktail' } = {}) =>  ({
                  url: 'filter.php',
                  method: 'GET',
                  params: {
                    c: category
                  }
            }),
            transformResponse: (response, meta, arg) => {
                const limit = arg?.limit ?? 8
                return {
                    ...response,
                    drinks: (response?.drinks || []).slice(0, limit)
                }
            }
        })
    })
})

export const { useGetDrinkQuery } = drinkApi