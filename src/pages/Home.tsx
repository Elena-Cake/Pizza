
import React, { useEffect } from 'react';
import Sort from '../components/Sort';
import Categories from '../components/Categories';
import { PizzasType } from '../types/types';
import PizzaCard from '../components/PizzaBlock/PizzaCard';
import PizzaSkelet from '../components/PizzaBlock/PizzaSkelet';

const Home: React.FC = () => {
    const [pizzas, setPizzas] = React.useState([] as PizzasType[])
    const [isLoading, setIsLoading] = React.useState(true)

    useEffect(() => {
        fetch('https://64e5e69209e64530d17f38d2.mockapi.io/items')
            .then(res => {
                return res.json()
            })
            .then(res => {
                setPizzas(res)
                setIsLoading(false)
            })
    }, [])

    const PizzasElements = pizzas.map((pizza, i) => {
        return (<PizzaCard key={i} {...pizza} />)
    })

    return (
        <>
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
