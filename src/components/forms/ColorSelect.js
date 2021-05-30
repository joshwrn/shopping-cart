import React, { useEffect, useState } from 'react';

const ColorSelect = ({
  handleChange,
  i,
  formType,
  categories,
  setCategories,
  id,
  gender,
  cards,
}) => {
  const [firstLoad, setLoad] = useState(true);

  const updateCat = (i, keys) => {
    const cloneCards = cards.filter((item) => item.gender === gender);
    setCategories(
      (prev) => [...prev],
      {
        [categories[i]]: ([categories[i][keys]] = [
          [...new Set(cloneCards.map((item) => item[keys]))],
        ]),
      },
      console.log(categories)
    );
  };

  useEffect(() => {
    for (let i = 0; i < categories.length; i++) {
      updateCat(i, Object.keys(categories[i])[0]);
    }
  }, []);

  return (
    <div>
      <form onChange={handleChange}>
        <select menuIsOpen={true} id="color-form" defaultValue={'all'}>
          <option value="all">Colors</option>
          <option value="all">All Colors</option>
          {categories[i][formType].map((item) => {
            return (
              <option key={id} value={item}>
                {item}
              </option>
            );
          })}
        </select>
      </form>
    </div>
  );
};

export default ColorSelect;
