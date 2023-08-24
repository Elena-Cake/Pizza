
import React, { useEffect } from 'react';
import Sort from '../components/Sort';
import Categories from '../components/Categories';
import { PizzasType } from '../types/types';
import PizzaCard from '../components/PizzaBlock/PizzaCard';
import PizzaSkelet from '../components/PizzaBlock/PizzaSkelet';
import Search from '../components/Search/Search';

const Home: React.FC = () => {
    const [allPizzas, setAllPizzas] = React.useState([] as PizzasType[])
    const [pizzas, setPizzas] = React.useState([] as PizzasType[])
    const [isLoading, setIsLoading] = React.useState(true)

    const [serchValue, setSearchValue] = React.useState('')

    const onSearchChange = (value: string) => {
        setSearchValue(value)
    }
    const onDeleteSearchValue = () => {
        setSearchValue('')
    }

    useEffect(() => {
        setIsLoading(true)
        fetch('https://64e5e69209e64530d17f38d2.mockapi.io/items')
            .then(res => {
                return res.json()
            })
            .then(res => {
                setAllPizzas(res)
                setPizzas(res)
                setIsLoading(false)
            })
        window.scrollTo(0, 0)
    }, [])

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
        </>
    )
}
export default Home;
