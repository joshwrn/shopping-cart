import React, { useState, useEffect } from 'react';
import '../styles/filter-box.css';

const FilterBox = (props) => {
  const { cards, filters, setFilters, currentItems, setItems } = props;

  //< SET COLOR

  //// FIRST ADD FILTER TO ARRAY
  const setColor = (e) => {
    const colorForm = document.getElementById('color-form');
    const typeForm = document.getElementById('type-form');
    setFilters(
      (old) => [...old],
      {
        [filters[0]]: (filters[0].color = colorForm.value),
      },
      {
        [filters[0]]: (filters[0].type = typeForm.value),
      }
    );
    console.log(filters);
  };

  //// WHEN FILTER UPDATED RUN FILTER FUNCTION
  useEffect(() => {
    filteredColor();
  }, [filters]);

  let hi = 'hi';

  //// FILTER FUNCTION
  const filteredColor = () => {
    setItems(
      cards.filter(
        (item) =>
          (item.type === filters[0].type || filters[0].type === 'all') &&
          (item.color === filters[0].color || filters[0].color === 'all')
      )
    );
  };

  return (
    <div className="custom-select" id="filter-box">
      <form onChange={setColor}>
        <select id="color-form" defaultValue={'all'}>
          <option value="all" disabled>
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
        <select id="type-form" defaultValue={'all'}>
          <option value="all" disabled>
            Type
          </option>
          <option value="all">All Types</option>
          <option value="top">Top</option>
          <option value="bottom">Bottom</option>
          <option value="shoes">Shoes</option>
          <option value="accessories">Accessories</option>
        </select>
      </form>
    </div>
  );
};

export default FilterBox;
