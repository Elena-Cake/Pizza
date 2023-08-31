import React from 'react';
import { typesNames } from '../../assets/constans';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { addProduct } from '../../store/cartSlice';
import { PizzasType } from '../../types/types';
import s from './PizzaCard.module.scss'
import { Link } from 'react-router-dom';

type PropsType = {
    pizza: PizzasType
}

const PizzaCard: React.FC<PropsType> = ({ pizza }) => {
    const dispatch = useAppDispatch()

    const [activeType, setActiveType] = React.useState(0)
    const [activeSize, setActiveSize] = React.useState(0)

    const countPizzasInCart = useAppSelector(s => s.cart.items.find(item => item.id === pizza.id
        && item.selectedSize === pizza.sizes[activeSize]
        && item.selectedType === typesNames[activeType])
        ?.count)

    const handleAddProduct = () => {
        dispatch(addProduct({ ...pizza, selectedSize: pizza.sizes[activeSize], selectedType: typesNames[activeType] }))
    }

    return (
        <div className="pizza-block">
            <Link to={`/pizza/${pizza.id}`}>
                <img
                    className="pizza-block__image"
                    src={pizza.imageUrl}
                    alt="Pizza"
                />
                <h4 className="pizza-block__title">{pizza.title}</h4>
            </Link>
            <div className="pizza-block__selector">
                <ul>
                    {pizza.types.map((type, i) => {
                        return <li
                            key={i}
                            className={i === activeType ? "active" : ''}
                            onClick={() => setActiveType(i)}
                        >
                            {typesNames[type]}
                        </li>
                    })
                    }
                </ul>
                <ul>
                    {pizza.sizes.map((s, i) => {
                        return <li
                            key={i}
                            className={i === activeSize ? 'active' : ''}
                            onClick={() => setActiveSize(i)}
                        >
                            {s} см.
                        </li>
                    })}
                </ul>
            </div>
            <div className="pizza-block__bottom">
                <div className="pizza-block__price">от {pizza.price} ₽</div>
                <button onClick={() => handleAddProduct()} className="button button--outline button--add">
                    <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                            fill="white"
                        />
                    </svg>
                    <span >Добавить</span>
                    {countPizzasInCart && <i>{countPizzasInCart}</i>}
                </button>
            </div>
        </div>
    )
}
export default PizzaCard;