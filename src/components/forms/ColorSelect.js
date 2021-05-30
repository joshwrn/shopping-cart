import React, { useEffect, useState } from 'react';

const ColorSelect = ({
  handleChange,
  i,
  formType,
  categories,
  setCategories,
  gender,
  cards,
}) => {
  const [firstLoad, setLoad] = useState(true);

  const updateCat = (i, keys) => {
    const cloneCards = cards.filter((item) => item.gender === gender);
    setCategories((prev) => [...prev], {
      [categories[i]]: ([categories[i][keys]] = [
        [...new Set(cloneCards.map((item) => item[keys]))],
      ]),
    });
  };

  useEffect(() => {
    for (let z = 0; z < categories.length; z++) {
      updateCat(z, Object.keys(categories[z])[0]);
    }
  }, []);

  return (
    <div>
      <form onChange={handleChange}>
        <select id="color-form" defaultValue={'all'}>
          <option value="all">{formType}</option>
          {categories[i][formType].map((item) => {
            return (
              <option key={item} value={item}>
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
