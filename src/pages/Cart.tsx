import React from 'react';
import { useAppSelector } from '../store/store';
import CartBlock from '../components/Cart/CartBlock';
import CartEmpty from '../components/Cart/CartEmpty';

const Cart = () => {
    const countPizzasInCart = useAppSelector(s => s.cart.countProducts)
    return (
        <>
            {countPizzasInCart > 0 ?
                <CartBlock /> :
                <CartEmpty />}
        </>
    )

}
export default Cart;

