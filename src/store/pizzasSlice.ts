import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { PizzasType, UrlFilterType } from '../types/types'
import { api } from '../api/api'

export interface pizzaState {
    allPizzasPageCount: number
    items: PizzasType[]
    status: 'loading' | 'sucsess' | 'error'
    item: PizzasType
}

const initialState: pizzaState = {
    allPizzasPageCount: 0,
    items: [],
    status: 'loading',
    item: { id: 0, imageUrl: "", title: "", types: [0], sizes: [0], price: 0, category: 0, rating: 6 }
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

export const getPizzaWithId = createAsyncThunk(
    'pizzas/getPizzaWithId',
    async (id: number) => {
        const res = await api.getPizzaWithId(id)
        return res
    }
)

export const pizzasSlice = createSlice({
    name: 'pizzas',
    initialState,
    reducers: {
        setPizzas: (state, action: PayloadAction<PizzasType[]>) => {
            state.items = action.payload
        },
        setPizzaWithId: (state, action: PayloadAction<number>) => {
            const item = state.items.find(item => item.id === action.payload)
            if (item) state.item = item
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


        builder.addCase(getPizzaWithId.fulfilled, (state, action) => {
            state.status = 'sucsess'
            state.item = action.payload
        })
    },
})

export const { setPizzas } = pizzasSlice.actions

export default pizzasSlice.reducer