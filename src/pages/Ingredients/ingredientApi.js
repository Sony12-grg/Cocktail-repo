import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const ingredientApi = createApi({
    reducerPath: 'ingredientApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://www.thecocktaildb.com/api/json/v1/1'}),
    endpoints: (builder) => ({
        getIngredients : builder.query({
            query: ({item = 'list'} = {}) => ({
                url: 'list.php',
                method: 'GET',
                params:{
                    i: item
                }
            }),
             transformResponse: (response, meta, arg) => {
                const limit = arg?.limit ?? 4
                return {
                    ...response,
                    drinks: (response?.drinks || []).slice(0, limit)
                }
            }
            
        })
    })
})

export const { useGetIngredientsQuery } = ingredientApi