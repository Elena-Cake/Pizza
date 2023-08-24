import React from 'react';
import s from './NotFoundBlock.module.scss'

const NotFoundBlock = () => {

    return (
        <div className={s.root}>
            <span className={s.smile}>😔</span>
            <p className={s.description}>К сожалению такая страница отсутствует в нашем онлайн-магазине</p>
        </div>
    )
}
export default NotFoundBlock;