import { configureStore } from '@reduxjs/toolkit'
import  chartDataSlice  from './slices/chartData/index.ts'
// ...

export const store = configureStore({
    reducer: {
        chartData : chartDataSlice
    }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch