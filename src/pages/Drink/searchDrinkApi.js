import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const searchDrinkApi = createApi({
    reducerPath: 'searchDrinkApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://www.thecocktaildb.com/api/json/v1/1'}),
    endpoints: (builder) => ({
        searchDrink : builder.query({
            query: ({name = 'Margarita'} = {}) => ({
                url: 'search.php',
                method: 'GET',
                params: {
                    s: name
                }
            })
        })
    })
})

export const { useSearchDrinkQuery } = searchDrinkApi

