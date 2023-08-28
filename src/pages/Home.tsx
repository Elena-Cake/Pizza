
import React, { useEffect } from 'react';
import Sort from '../components/Sort/Sort';
import Categories from '../components/Categories';
import { PizzasType, filtersUrlType } from '../types/types';
import PizzaCard from '../components/PizzaBlock/PizzaCard';
import PizzaSkelet from '../components/PizzaBlock/PizzaSkelet';
import Search from '../components/Search/Search';
import Pagination from '../components/Pagination/Pagination';
import { api } from '../api/api';
import { COUNT_PIZZAS_ON_PAGE } from '../assets/constans';
import { useAppDispatch, useAppSelector } from '../store/store';
import { changeSearchRow, setCountPages, setCurrentPage, setFilters } from '../store/filterSlice';
import qs from 'qs'
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const isUrlParams = React.useRef(false)
    const isMounted = React.useRef(false)

    const currentPage = useAppSelector(s => s.filter.currentPage)
    const { searchValue, categoryId, sort, isOrderDesc } = useAppSelector(s => s.filter)

    const [allPizzas, setAllPizzas] = React.useState([] as PizzasType[])
    const [pizzas, setPizzas] = React.useState([] as PizzasType[])
    const [isLoading, setIsLoading] = React.useState(true)


    const onSearchChange = (value: string) => {
        dispatch(changeSearchRow(value))
    }
    const onDeleteSearchValue = () => {
        dispatch(changeSearchRow(''))
    }

    useEffect(() => {
        if (window.location.search) {
            isUrlParams.current = true
            const params = qs.parse(window.location.search.substring(1))
            dispatch(setFilters(params as filtersUrlType))
        }
    }, [])

    useEffect(() => {
        setIsLoading(true)
        api.getPizzas()
            .then(res => {
                setAllPizzas(res)
                dispatch(setCountPages(res.length / COUNT_PIZZAS_ON_PAGE))
                dispatch(setCurrentPage(1))
                setIsLoading(false)
            })
        window.scrollTo(0, 0)
    }, [])

    useEffect(() => {
        if (!isUrlParams) {
            api.getPizzasPage(currentPage)
                .then(res => {
                    setPizzas(res)
                    setIsLoading(false)
                })
        }
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
        if (isMounted.current) {
            const urlPropertyString = qs.stringify({
                sortBy: sort.nameEng,
                order: isOrderDesc ? 'desc' : 'asc',
                category: categoryId,
                search: searchValue
            })
            navigate(`?${urlPropertyString}`)
        } else {
            isMounted.current = true
        }
    }, [searchValue, categoryId, sort.value, isOrderDesc])

    useEffect(() => {
        if (searchValue && searchValue !== '') {
            setPizzas(allPizzas.filter(p => p.title.toLocaleLowerCase().includes(searchValue)))
        } else {
            setPizzas(allPizzas)
        }
    }, [searchValue])



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
