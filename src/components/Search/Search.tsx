import React, { ChangeEvent } from 'react';
import s from './Search.module.scss'

type Props = {
    serchValue: string
    setSearchValue: (value: string) => void
    onDeleteSearchValue: () => void
}

const Search: React.FC<Props> = (props) => {
    const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
        props.setSearchValue(e.target.value)
    }

    return (
        <div className={s.search}>
            <div className={s.search__icon}></div>
            <input
                value={props.serchValue}
                className={s.input}
                placeholder='Поиск пиццы ...'
                onChange={(e) => onChangeInput(e)}
            />
            <div className={s.delete__icon} onClick={props.onDeleteSearchValue}></div>
        </div>
    )
}
export default Search;