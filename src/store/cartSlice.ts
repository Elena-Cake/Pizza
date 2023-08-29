import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { PizzasType } from '../types/types'

export interface cartState {
    items: PizzasType[],
    totalPrice: number
}

const initialState: cartState = {
    items: [],
    totalPrice: 0
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProduct: (state, action: PayloadAction<PizzasType>) => {
            state.items.push(action.payload)
        },
        removeProduct: (state, action: PayloadAction<number>) => {
            state.items = state.items.filter(item => item.id !== action.payload)
        },
        clearProducts: (state) => {
            state.items = []
            state.totalPrice = 0
        },

    },
})

export const { addProduct, removeProduct, clearProducts } = cartSlice.actions

export default cartSlice.reducer