import React from 'react';
import { useAppDispatch, useAppSelector } from '../../store/store';
import s from './Sort.module.scss'
import { changeOrder, changeSort } from '../../store/filterSlice';
import { SORT_PROPERTIES } from '../../assets/constans';

const Sort = () => {
  const dispatch = useAppDispatch()
  const isOrderDesc = useAppSelector(s => s.filter.isOrderDesc)
  const selectedSortObj = useAppSelector(s => s.filter.sort)

  const [isPopupOpen, setIsOpenPopup] = React.useState(false)


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
        <span onClick={() => setIsOpenPopup(!isPopupOpen)}>{selectedSortObj.name}</span>
      </div>
      {isPopupOpen &&
        <div className="sort__popup">
          <ul>
            {SORT_PROPERTIES.map((sort, i) => {
              return <li
                key={i}
                className={selectedSortObj.value === i ? 'active' : ''}
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