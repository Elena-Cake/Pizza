import React from 'react';
import { useAppDispatch, useAppSelector } from '../../store/store';
import s from './Sort.module.scss'
import { changeOrder, changeSort } from '../../store/filterSlice';

const Sort = () => {
  const dispatch = useAppDispatch()
  const isOrderDesc = useAppSelector(s => s.filter.isOrderDesc)
  const selectedSortId = useAppSelector(s => s.filter.sort)

  const [isPopupOpen, setIsOpenPopup] = React.useState(false)
  const sortNames = [
    {
      value: 0,
      name: 'популярности',
      nameEng: 'rating'
    },
    {
      value: 1,
      name: 'цене',
      nameEng: 'price'
    },
    {
      value: 2,
      name: 'алфавиту',
      nameEng: 'title'
    }
  ]

  const onChangeFilter = (filterId: number) => {
    dispatch(changeSort(filterId))
    setIsOpenPopup(false)
  }

  return (
    <div className="sort">
      <div className="sort__label" >
        <div className={`${s.arrow} ${isOrderDesc ? s.arrow__up : s.arrow__down}`}
          onClick={() => dispatch(changeOrder())}></div>
        <b>Сортировка по:</b>
        <span onClick={() => setIsOpenPopup(!isPopupOpen)}>{sortNames[selectedSortId].name}</span>
      </div>
      {isPopupOpen &&
        <div className="sort__popup">
          <ul>
            {sortNames.map((sort, i) => {
              return <li
                key={i}
                className={selectedSortId === i ? 'active' : ''}
                onClick={() => onChangeFilter(sort.value)}
              >
                {sort.name}
              </li>
            })
            }
          </ul>
        </div>
      }
    </div>
  )
}
export default Sort;