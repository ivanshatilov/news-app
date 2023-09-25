import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/dist/query/react'
import build from 'next/dist/build'


export const newsAPI = createApi({
    reducerPath: 'newsAPI',
    baseQuery: fetchBaseQuery({baseUrl: 'https://content.guardianapis.com/'}),
    endpoints: (build) => ({
        getNews: build.query({
            query: ({pageSize = '', sortBy = '', searchValue = '', page = 1}) => `/search?q=${searchValue}&api-key=${process.env.NEXT_PUBLIC_GUARDIAN_API_KEY}&show-blocks=all&page-size=${pageSize}&order-by=${sortBy}&page=${page}`
        })
    })
})

export const { useGetNewsQuery } = newsAPI;