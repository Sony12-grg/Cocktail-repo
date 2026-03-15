import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const randomApi = createApi({
    reducerPath: 'randomApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://www.thecocktaildb.com/api/json/v1/1'}),

   endpoints: (builder) => ({
    getRandom : builder.query({
        query: () => ({
            url: 'random.php',
            method: 'GET',
            
        }),
    })
   })
})
  
export const { useGetRandomQuery } = randomApi