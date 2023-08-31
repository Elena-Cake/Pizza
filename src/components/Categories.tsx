import React from 'react';
import { useAppDispatch, useAppSelector } from '../store/store';
import { changeCategory } from '../store/filterSlice';

const Categories = () => {

  const activeCategoryId = useAppSelector(s => s.filter.categoryId)
  const dispatch = useAppDispatch()

  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']

  return (
    <div className="categories">
      <ul>
        {categories.map((c, i) => {
          return (
            <li
              key={i}
              className={activeCategoryId === i ? 'active' : ''}
              onClick={() => dispatch(changeCategory(i))}
            >
              {c}
            </li>
          )
        })}
      </ul>
    </div>
  )
}
export default Categories;