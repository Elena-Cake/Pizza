import React from 'react';
import cartEmptyImg from '../../assets/img/empty-cart.png'
import { Link } from 'react-router-dom';
// !!!!!classes
const ErrorPiazzas = () => {
    return (
        <div className=" cart cart--empty ">
            <h2>Произошла ошибка 😕</h2>
            <p>
                Не удалось загрузить пиццы...<br />
                Попробуйте обновить страницу позже.
            </p>
        </div>
    )
}
export default ErrorPiazzas;