import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { newsAPI } from "./reducers/newsApi";
import searchState from "./reducers/searchSlice"


export const store = configureStore({
    reducer: {
      [newsAPI.reducerPath]: newsAPI.reducer,
      searchState
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(newsAPI.middleware)
  })
  
  // Infer the `RootState` and `AppDispatch` types from the store itself
  export type RootState = ReturnType<typeof store.getState>
  // Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
  export type AppDispatch = typeof store.dispatch