import React, { useEffect } from 'react';
import './scss/app.scss';
import Header from './components/Header';
import Categories from './components/Categories';
import Sort from './components/Sort';
import PizzaCard from './components/PizzaBlock/PizzaCard';

// import pizzas from './assets/pizzas.json'
import { PizzasType } from './types/types';
import PizzaSkelet from './components/PizzaBlock/PizzaSkelet';

function App() {
  // https://64e5e69209e64530d17f38d2.mockapi.io/items
  const [pizzas, setPizzas] = React.useState([] as PizzasType[])

  useEffect(() => {
    fetch('https://64e5e69209e64530d17f38d2.mockapi.io/items')
      .then(res => {
        return res.json()
      })
      .then(res => {
        setPizzas(res)
      })
  }, [])

  const PizzasElements = pizzas.map((pizza, i) => {
    return (
      <PizzaCard
        key={i} {...pizza}
      />
    )
  })

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            <PizzaSkelet />
            {PizzasElements}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
