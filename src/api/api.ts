import axios from "axios"
import { COUNT_PIZZAS_ON_PAGE } from "../assets/constans"
import { filtersType } from "../types/types"

const Base_URL = `https://64e5e69209e64530d17f38d2.mockapi.io/`

export const api = {
    getPizzas() {
        return axios.get(`${Base_URL}items`)
            .then(res => {
                return res.data
            })
    },
    getPizzasPage(page: number) {
        return axios.get(`${Base_URL}items?limit=${COUNT_PIZZAS_ON_PAGE}&page=${page}`)
            .then(res => {
                return res.data
            })
    },
    getPizzasWithFilters(filters: filtersType) {
        const { sortProperty, isOrderDesc, categoryId, searchValue } = filters
        const sort = `sortBy=${sortProperty}&order=${isOrderDesc ? 'desc' : 'asc'}`
        const category = categoryId > 0 ? `category=${categoryId}` : ''
        const search = searchValue ? `&search=${searchValue}` : ''

        return axios.get(`${Base_URL}items?` +
            category + sort + search
        )
            .then(res => {
                return res.data
            })
    }
}