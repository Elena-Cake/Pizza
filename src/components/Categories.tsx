import React from 'react';
import { useAppDispatch, useAppSelector } from '../store/store';
import { changeCategory } from '../store/filterSlice';

const Categories = () => {

  const activeCategoryId = useAppSelector(s => s.filter.category)
  const dispatch = useAppDispatch()
  const [activeIndex, setActiveIndex] = React.useState(0)

  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']
  const categoriesElements = categories.map((c, i) => {
    return (
      <li
        key={i}
        className={activeCategoryId === i ? 'active' : ''}
        onClick={() => dispatch(changeCategory(i))}
      >
        {c}
      </li>
    )
  })

  return (
    <div className="categories">
      <ul>
        {categoriesElements}
      </ul>
    </div>
  )
}
export default Categories;