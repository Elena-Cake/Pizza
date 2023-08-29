import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { PizzasType } from '../types/types'

export interface cartState {
    items: PizzasType[],
    countProducts: number
    totalPrice: number
}

const initialState: cartState = {
    items: [],
    countProducts: 0,
    totalPrice: 0
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProduct: (state, action: PayloadAction<PizzasType>) => {
            const sameProduct = state.items.find(item => item.id === action.payload.id
                && item.selectedSize === action.payload.selectedSize
                && item.selectedType === action.payload.selectedType
            )
            if (sameProduct) {
                if (sameProduct.count) sameProduct.count++
            } else {
                state.items.push({ ...action.payload, count: 1 })
            }
            state.countProducts++
            state.totalPrice += action.payload.price
        },
        removeProduct: (state, action: PayloadAction<number>) => {
            state.items = state.items.filter(item => item.id !== action.payload)
            state.countProducts--
        },
        clearProducts: (state) => {
            state.items = []
            state.totalPrice = 0
        },


    },
})

export const { addProduct, removeProduct, clearProducts } = cartSlice.actions

export default cartSlice.reducer