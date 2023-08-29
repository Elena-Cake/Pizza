import { configureStore } from '@reduxjs/toolkit'
import filterSlice from './filterSlice'

import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux'
import cartSlice from './cartSlice'
import pizzasSlice from './pizzasSlice'

export const store = configureStore({
    reducer: {
        filter: filterSlice,
        cart: cartSlice,
        pizzas: pizzasSlice
    },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppDispatch = () => useDispatch<AppDispatch>();