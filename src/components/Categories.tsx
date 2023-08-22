import React from 'react';

const Categories = () => {

  const [activeIndex, setActiveIndex] = React.useState(0)

  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']
  const categoriesElements = categories.map((c, i) => {
    return (
      <li
        key={i}
        className={activeIndex === i ? 'active' : ''}
        onClick={() => setActiveIndex(i)}
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