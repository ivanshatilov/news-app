import axios from "axios";
import {createAsyncThunk} from '@reduxjs/toolkit'

export const fetchNews = createAsyncThunk(
    'news/fetchAll',
    async (_, thunkAPI) => {
        const response = await axios.get(`//content.guardianapis.com/search?api-key=${process.env.NEXT_PUBLIC_GUARDIAN_API_KEY}&show-blocks=all&page-size=5`);
        return response.data
    }
)

//content.guardianapis.com/search?api-key=${process.env.GUARDIAN_API_KEY}