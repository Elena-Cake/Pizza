
export type sortNames = 'rating' | 'title' | 'price'

const pizza = {
    id: 0,
    imageUrl: "https://dodopizza.azureedge.net/static/Img/Products/f035c7f46c0844069722f2bb3ee9f113_584x584.jpeg",
    title: "Пепперони Фреш с перцем",
    types: [
        0,
        1
    ],
    sizes: [
        26,
        30,
        40
    ],
    price: 803,
    category: 0,
    rating: 4
}
export type PizzasType = typeof pizza