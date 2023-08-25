
import React, { useEffect } from 'react';
import Sort from '../components/Sort/Sort';
import Categories from '../components/Categories';
import { PizzasType } from '../types/types';
import PizzaCard from '../components/PizzaBlock/PizzaCard';
import PizzaSkelet from '../components/PizzaBlock/PizzaSkelet';
import Search from '../components/Search/Search';
import Pagination from '../components/Pagination/Pagination';

const Home: React.FC = () => {
    const [allPizzas, setAllPizzas] = React.useState([] as PizzasType[])
    const [pizzas, setPizzas] = React.useState([] as PizzasType[])
    const [isLoading, setIsLoading] = React.useState(true)
    const [currentPage, setCurrentPage] = React.useState(1)
    const [countPages, setCountPages] = React.useState(1)

    const [serchValue, setSearchValue] = React.useState('')

    const onSearchChange = (value: string) => {
        setSearchValue(value)
    }
    const onDeleteSearchValue = () => {
        setSearchValue('')
    }

    useEffect(() => {
        setIsLoading(true)
        fetch(`https://64e5e69209e64530d17f38d2.mockapi.io/items`)
            .then(res => {
                return res.json()
            })
            .then(res => {
                setAllPizzas(res)
                setPizzas(res)
                setCountPages(res.length / 3)
                setIsLoading(false)
            })
        window.scrollTo(0, 0)
    }, [])

    useEffect(() => {
        setIsLoading(true)
        fetch(`https://64e5e69209e64530d17f38d2.mockapi.io/items?limit=3&page=${currentPage}`)
            .then(res => {
                return res.json()
            })
            .then(res => {
                setPizzas(res)
                setIsLoading(false)
            })
        window.scrollTo(0, 0)
    }, [currentPage])

    const PizzasElements = pizzas.map((pizza, i) => {
        return (<PizzaCard key={i} {...pizza} />)
    })

    useEffect(() => {
        if (serchValue !== '') {
            setPizzas(allPizzas.filter(p => p.title.toLocaleLowerCase().includes(serchValue)))
        } else {
            setPizzas(allPizzas)
        }
    }, [serchValue])

    const onChangeCurrentPage = (item: number) => {
        setCurrentPage(item)
    }

    return (
        <>
            <Search serchValue={serchValue} setSearchValue={onSearchChange} onDeleteSearchValue={onDeleteSearchValue} />
            <div className="content__top">
                <Categories />
                <Sort />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {isLoading
                    ? [...new Array(6)].map((_, i) => <PizzaSkelet key={i} />)
                    : PizzasElements
                }
            </div>
            <Pagination countPages={countPages} onChangeCurrentPage={onChangeCurrentPage} />
        </>
    )
}
export default Home;
