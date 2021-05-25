import React, { useState, useEffect } from 'react';
import '../styles/filter-box.css';

const FilterBox = (props) => {
  const { cards, filters, setFilters, currentItems, setItems } = props;

  //< SET COLOR

  //// FIRST ADD FILTER TO ARRAY
  const setColor = (e) => {
    const colorForm = document.getElementById('color-form');
    setFilters((old) => [...old], {
      [filters[0]]: (filters[0].color = colorForm.value),
    });
    console.log(colorForm.value);
  };

  //// WHEN FILTER UPDATED RUN FILTER FUNCTION
  useEffect(() => {
    filteredColor();
  }, [filters]);

  //// FILTER FUNCTION
  const filteredColor = () => {
    if (filters[0].color !== 'all') {
      setItems(cards.filter((item) => item.color === filters[0].color));
    } else {
      setItems(cards);
    }
  };

  //< SET TYPE

  return (
    <div className="custom-select" id="filter-box">
      <form onChange={setColor}>
        <select id="color-form" defaultValue={'DEFAULT'}>
          <option value="DEFAULT" disabled>
            Color
          </option>
          <option value="all">All Colors</option>
          <option value="black">Black</option>
          <option value="white">White</option>
          <option value="grey">Grey</option>
          <option value="blue">Blue</option>
        </select>
      </form>
      <form onChange={setColor}>
        <select defaultValue={'DEFAULT'}>
          <option value="DEFAULT" disabled>
            Type
          </option>
          <option value="all">All Types</option>
          <option value="Top">Top</option>
          <option value="Bottom">Bottom</option>
          <option value="Shoes">Shoes</option>
          <option value="Accessories">Accessories</option>
        </select>
      </form>
    </div>
  );
};

export default FilterBox;
