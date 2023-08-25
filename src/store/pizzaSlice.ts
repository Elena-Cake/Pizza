import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface pizzaState {

}

const initialState: pizzaState = {

}

export const pizzaSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        changeSearchRow: (state) => {

        }

    },
})

export const { changeSearchRow } = pizzaSlice.actions

export default pizzaSlice.reducer