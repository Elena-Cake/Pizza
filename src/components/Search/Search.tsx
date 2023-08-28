import React, { ChangeEvent } from 'react';
import s from './Search.module.scss'
import debounce from 'lodash.debounce'

type Props = {
    setSearchValue: (value: string) => void
    onDeleteSearchValue: () => void
}

const Search: React.FC<Props> = (props) => {
    const [searchStr, setSearchStr] = React.useState('')

    const inputRef = React.useRef<HTMLInputElement>(null)

    const onChangeInputDebounsed = React.useCallback(
        debounce((value) => {
            props.setSearchValue(value)
        }, 250),
        []
    )
    const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchStr(e.target.value)
        onChangeInputDebounsed(e.target.value)
    }

    const handleDeleteSearchValue = () => {
        if (inputRef.current) inputRef.current.focus()
        props.onDeleteSearchValue()
    }

    return (
        <div className={s.search}>
            <div className={s.search__icon}></div>
            <input
                ref={inputRef}
                value={searchStr}
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