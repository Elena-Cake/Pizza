import React, { ChangeEvent } from 'react';
import s from './Search.module.scss'
import debounce from 'lodash.debounce'
import { useAppDispatch, useAppSelector } from '../../store/store';
import { changeSearchRow } from '../../store/filterSlice';



const Search: React.FC = () => {
    const dispatch = useAppDispatch()
    const searchStr = useAppSelector(s => s.filter.searchValue)

    const inputRef = React.useRef<HTMLInputElement>(null)

    const onChangeInputDebounsed = React.useCallback(
        debounce((value) => {
            dispatch(changeSearchRow(value))
        }, 250),
        []
    )
    const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {

        onChangeInputDebounsed(e.target.value)
    }

    const handleDeleteSearchValue = () => {
        inputRef.current?.focus()
        dispatch(changeSearchRow(''))
    }

    return (
        <div className={s.search}>
            <div className={s.search__icon}></div>
            <input
                ref={inputRef}
                value={searchStr || ''}
                className={s.input}
                placeholder='Поиск пиццы ...'
                onChange={(e) => handleChangeInput(e)}
            />
            {searchStr &&
                <div className={s.delete__icon} onClick={handleDeleteSearchValue}></div>
            }
        </div>
    )
}
export default Search;