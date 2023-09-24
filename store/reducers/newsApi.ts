import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/dist/query/react'
import build from 'next/dist/build'


export const newsAPI = createApi({
    reducerPath: 'newsAPI',
    baseQuery: fetchBaseQuery({baseUrl: 'https://content.guardianapis.com/'}),
    endpoints: (build) => ({
        getNews: build.query({
            query: ({pageSize = '', sortBy = '', searchValue = ''}) => `/search?q=${searchValue}&api-key=${process.env.NEXT_PUBLIC_GUARDIAN_API_KEY}&show-blocks=all&page-size=${pageSize}&order-by=${sortBy}`
        })
    })
})

export const { useGetNewsQuery } = newsAPI;