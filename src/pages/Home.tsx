
import React, { useEffect } from 'react';
import Sort from '../components/Sort/Sort';
import Categories from '../components/Categories';
import { PizzasType } from '../types/types';
import PizzaCard from '../components/PizzaBlock/PizzaCard';
import PizzaSkelet from '../components/PizzaBlock/PizzaSkelet';
import Search from '../components/Search/Search';
import Pagination from '../components/Pagination/Pagination';
import { api } from '../api/api';
import { COUNT_PIZZAS_ON_PAGE } from '../assets/constans';
import { useAppDispatch, useAppSelector } from '../store/store';
import { changeSearchRow, setCountPages, setCurrentPage } from '../store/filterSlice';

const Home: React.FC = () => {
    const dispatch = useAppDispatch()
    const [allPizzas, setAllPizzas] = React.useState([] as PizzasType[])
    const [pizzas, setPizzas] = React.useState([] as PizzasType[])
    const [isLoading, setIsLoading] = React.useState(true)

    const currentPage = useAppSelector(s => s.filter.currentPage)

    const serchValue = useAppSelector(s => s.filter.search)

    const onSearchChange = (value: string) => {
        dispatch(changeSearchRow(value))
    }
    const onDeleteSearchValue = () => {
        dispatch(changeSearchRow(''))
    }

    useEffect(() => {
        setIsLoading(true)
        api.getPizzas()
            .then(res => {
                setAllPizzas(res)
                setPizzas(res)
                dispatch(setCountPages(res.length / COUNT_PIZZAS_ON_PAGE))
                dispatch(setCurrentPage(1))
                setIsLoading(false)
            })
        window.scrollTo(0, 0)
    }, [])

    useEffect(() => {
        console.log('Page', currentPage)
        if (currentPage !== 0) {
            setIsLoading(true)
            api.getPizzasPage(currentPage)
                .then(res => {
                    setPizzas(res)
                    setIsLoading(false)
                })
            window.scrollTo(0, 0)
        }
    }, [currentPage])

    const PizzasElements = pizzas.map((pizza, i) => {
        return (<PizzaCard key={i} {...pizza} />)
    })

    useEffect(() => {
        if (serchValue && serchValue !== '') {
            setPizzas(allPizzas.filter(p => p.title.toLocaleLowerCase().includes(serchValue)))
        } else {
            setPizzas(allPizzas)
        }
    }, [serchValue])



    return (
        <>
            <Search setSearchValue={onSearchChange} onDeleteSearchValue={onDeleteSearchValue} />
            <div className="content__top">
                <Categories />
                <Sort />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {isLoading
                    ? [...new Array(COUNT_PIZZAS_ON_PAGE)].map((_, i) => <PizzaSkelet key={i} />)
                    : PizzasElements
                }
            </div>
            <Pagination />
        </>
    )
}
export default Home;
