import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface filterState {
    search: null | string
    categoryId: number
    sort: { value: number, name: string, nameEng: string }
    isOrderDesc: boolean
}

export const sortNames = [
    {
        value: 0,
        name: 'популярности',
        nameEng: 'rating'
    },
    {
        value: 1,
        name: 'цене',
        nameEng: 'price'
    },
    {
        value: 2,
        name: 'алфавиту',
        nameEng: 'title'
    }
]

const initialState: filterState = {
    search: null,
    categoryId: 0,
    sort: {
        value: 0,
        name: 'популярности',
        nameEng: 'rating'
    },
    isOrderDesc: true
}

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        changeSearchRow(state, action: PayloadAction<string>) {
            state.search = action.payload
        },
        changeCategory(state, action: PayloadAction<number>) {
            state.categoryId = action.payload
        },
        changeSort(state, action: PayloadAction<number>) {
            state.sort = sortNames[action.payload]
        },
        changeOrder(state) {
            state.isOrderDesc = !state.isOrderDesc
        }

    },
})

export const { changeSearchRow, changeCategory, changeSort, changeOrder } = filterSlice.actions

export default filterSlice.reducer