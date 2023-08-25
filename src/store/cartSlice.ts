import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface cartState {

}

const initialState: cartState = {

}

export const cartSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        changeSearchRow: (state) => {

        }
    },
})

export const { changeSearchRow } = cartSlice.actions

export default cartSlice.reducer