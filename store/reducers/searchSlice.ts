import {PayloadAction, createSlice} from '@reduxjs/toolkit'

interface searchProps {
    sortBy: string,
    pageSize: string,
    searchValue: string,

}

const initialState: searchProps = {
    sortBy: "newest",
    pageSize: "10",
    searchValue: ""
}

export const searchSlice = createSlice({
    name: 'news',
    initialState,
    reducers: {
        setSearchValue: (state, action: PayloadAction<string>) => {
            state.searchValue = action.payload
        },
        setSortBy: (state, action: PayloadAction<string>) => {
            state.sortBy = action.payload
        },
        setPageSize: (state, action: PayloadAction<string>) => {
            state.pageSize = action.payload
        },
        
    },
})

export default searchSlice.reducer