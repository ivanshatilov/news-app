import {createSlice} from '@reduxjs/toolkit'
import { fetchNews } from './ActionCreators'

interface newsProps {
    news: any[],
    isLoading: boolean,
    error: string,
    sortBy: 'relevance' | 'newest' | 'oldest',
    pageSize: string,
    searchValue: string,

}

const initialState: newsProps = {
    news: [],
    isLoading: false,
    error: "",
    sortBy: "relevance",
    pageSize: "10",
    searchValue: ""
}

export const newsSlice = createSlice({
    name: 'news',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchNews.pending.type]: (state) => {
            state.isLoading = true
        },
        [fetchNews.fulfilled.type]: (state, action) => {
            state.isLoading = false;
            state.error = "";
            state.news = action.payload.response.results
        },
        [fetchNews.rejected.type]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload
        },
    }
})

export default newsSlice.reducer