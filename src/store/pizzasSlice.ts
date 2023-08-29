import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { PizzasType, UrlFilterType } from '../types/types'
import { api } from '../api/api'

export interface pizzaState {
    allPizzasPageCount: number
    items: PizzasType[]
    status: 'loading' | 'sucsess' | 'error'
}

const initialState: pizzaState = {
    allPizzasPageCount: 0,
    items: [],
    status: 'loading'
}

export const getAllPizzas = createAsyncThunk(
    'pizzas/getAllPizzas',
    async () => {
        const res = await api.getPizzas()
        return res
    }
)

export const getPizzas = createAsyncThunk(
    'pizzas/getPizzas',
    async (filters: UrlFilterType) => {
        const res = await api.getPizzasWithFilters(filters)
        return res
    }
)

export const pizzasSlice = createSlice({
    name: 'pizzas',
    initialState,
    reducers: {
        setPizzas: (state, action: PayloadAction<PizzasType[]>) => {
            state.items = action.payload
        }

    },
    extraReducers: (builder) => {
        builder.addCase(getAllPizzas.fulfilled, (state, action) => {
            state.allPizzasPageCount = action.payload.length
        })

        builder.addCase(getPizzas.pending, (state) => {
            state.status = 'loading'
            state.items = []
        })
        builder.addCase(getPizzas.fulfilled, (state, action) => {
            state.status = 'sucsess'
            state.items = action.payload
        })
        builder.addCase(getPizzas.rejected, (state) => {
            state.status = 'error'
        })

    },
})

export const { setPizzas } = pizzasSlice.actions

export default pizzasSlice.reducer