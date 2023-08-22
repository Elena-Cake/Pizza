import React from 'react';
import './scss/app.scss';
import Header from './components/Header';
import Categories from './components/Categories';
import Sort from './components/Sort';
import PizzaCard from './components/PizzaCard';

import pizzas from './assets/pizzas.json'

function App() {

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
            {PizzasElements}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;