import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const searchLetterApi = createApi({
    reducerPath :'searchLetterApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://www.thecocktaildb.com/api/json/v1/1'}),
    endpoints: (builder) => ({
        searchLetter : builder.query({
            query: ({letter = 'a'} = {}) => ({  
                url: 'search.php',
                method: 'GET',
                params: {
                    f: letter
                }
            })
        })
    })
})

export const { useSearchLetterQuery } = searchLetterApi;