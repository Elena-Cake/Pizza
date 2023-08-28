import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { SORT_PROPERTIES } from '../assets/constans'

export interface filterState {
    search: null | string
    categoryId: number
    sort: { value: number, name: string, nameEng: string }
    isOrderDesc: boolean,
    currentPage: number,
    countPages: number
}



const initialState: filterState = {
    search: null,
    categoryId: 0,
    sort: {
        value: 0,
        name: 'популярности',
        nameEng: 'rating'
    },
    isOrderDesc: true,
    countPages: 0,
    currentPage: 0
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
            state.sort = SORT_PROPERTIES[action.payload]
        },
        changeOrder(state) {
            state.isOrderDesc = !state.isOrderDesc
        },
        setCountPages(state, action: PayloadAction<number>) {
            state.countPages = action.payload
        },
        setCurrentPage(state, action: PayloadAction<number>) {
            state.currentPage = action.payload
        }

    },
})

export const {
    changeSearchRow, changeCategory, changeSort, changeOrder,
    setCountPages, setCurrentPage
} = filterSlice.actions

export default filterSlice.reducer