import React from 'react';

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