import { NewsType } from '@/types'
import {PayloadAction, createSlice} from '@reduxjs/toolkit'

interface newsProps {
    page: number,
    totalPages: number,
    news: NewsType[]
}

const initialState: newsProps = {
    page: 1,        //
    totalPages: 2, // Доделаю
    news: []
}

export const newsSlice = createSlice({
    name: 'news',
    initialState,
    reducers: {
       setNews: (state, action: PayloadAction<NewsType[]>) => {
            state.news = state.news.concat(action.payload)
       },
       clearNews: (state) => {
        state.news = []
       },
       setTotalPages: (state, action: PayloadAction<number>) => {
        state.totalPages = action.payload
       }
       ,
       setPage: (state, action: PayloadAction<number>) => {
        state.page = state.page + action.payload
       },
       clearPage: (state) => {
        state.page = 1      // Доделаю
       }
        
    },
})

export default newsSlice.reducer