import { number, strict } from "yargs"

export type sortNames = 'rating' | 'title' | 'price'

export type PizzasType = {
    id: number,
    imageUrl: string,
    title: string,
    types: number[],
    sizes: number[],
    price: number,
    category: number,
    rating: number,
    selectedSize?: number,
    selectedType?: string,
    count?: number
}
// export type PizzasType = typeof pizza


export type filtersType = {
    sortProperty: string,
    isOrderDesc: boolean,
    categoryId: number,
    searchValue: string
}
export type filtersUrlType = {
    [key: string]: string
}

export type UrlFilterType = {
    sortBy?: string,
    order: 'desc' | 'asc',
    category?: number,
    search?: string
}