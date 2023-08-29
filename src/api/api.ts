import axios from "axios"
import { COUNT_PIZZAS_ON_PAGE } from "../assets/constans"
import { UrlFilterType, filtersType } from "../types/types"

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
    getPizzasWithFilters(filters: UrlFilterType) {

        const { sortBy, order, category, search } = filters
        const sortParam = `sortBy=${sortBy}&order=${order}`
        const categoryParam = category && category > 0 ? `&category=${category}` : ''
        const searchParam = search ? `&search=${search}` : ''

        return axios.get(`${Base_URL}items?` +
            sortParam + categoryParam + searchParam
        )
            .then(res => {
                return res.data
            })
    }
}