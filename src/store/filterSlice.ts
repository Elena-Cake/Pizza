import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { sortNames } from '../types/types'

export interface filterState {
    search: null | string
    category: number
    sort: number
    isOrderDesc: boolean
}

const initialState: filterState = {
    search: null,
    category: 0,
    sort: 0,
    isOrderDesc: true
}

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        changeSearchRow: (state, action: PayloadAction<string>) => {
            state.search = action.payload
        },
        changeCategory: (state, action: PayloadAction<number>) => {
            state.category = action.payload
        },
        changeSort: (state, action: PayloadAction<number>) => {
            state.sort = action.payload
        },
        changeOrder: (state) => {
            state.isOrderDesc = !state.isOrderDesc
        }

    },
})

export const { changeSearchRow, changeCategory, changeSort, changeOrder } = filterSlice.actions

export default filterSlice.reducer