import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { SORT_PROPERTIES } from '../assets/constans'
import { filtersUrlType } from '../types/types'

export interface filterState {
    searchValue: null | string
    categoryId: number
    sort: { value: number, name: string, nameEng: string }
    isOrderDesc: boolean,
    currentPage: number,
    countPages: number
}



const initialState: filterState = {
    searchValue: null,
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
        setFilters(state, action: PayloadAction<filtersUrlType>) {
            // {sortBy: 'rating', order: 'desc', category: '3', search: 's'}
            state.categoryId = Number(action.payload.category)
            state.isOrderDesc = action.payload.order === 'desc'
            // @ts-ignore
            state.sort = SORT_PROPERTIES.find(item => item.nameEng === action.payload.sortBy)
            state.searchValue = action.payload.search
        },
        changeSearchRow(state, action: PayloadAction<string>) {
            state.searchValue = action.payload
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
    setFilters,
    changeSearchRow, changeCategory, changeSort, changeOrder,
    setCountPages, setCurrentPage
} = filterSlice.actions

export default filterSlice.reducer