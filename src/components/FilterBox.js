import React, { useState, useEffect } from 'react';
import '../styles/filter-box.css';

const FilterBox = (props) => {
  const { cards, filters, setFilters, currentItems, setItems } = props;

  //< SET COLOR

  //// FIRST ADD FILTER TO ARRAY
  const setColor = (e) => {
    const colorForm = document.getElementById('color-form');
    const typeForm = document.getElementById('type-form');
    const brandForm = document.getElementById('brand-form');
    setFilters(
      (old) => [...old],
      {
        [filters[0]]: (filters[0].color = colorForm.value),
      },
      {
        [filters[0]]: (filters[0].type = typeForm.value),
      },
      {
        [filters[0]]: (filters[0].brand = brandForm.value),
      }
    );
    console.log(filters);
  };

  //// WHEN FILTER UPDATED RUN FILTER FUNCTION
  useEffect(() => {
    filteredColor();
  }, [filters]);

  //// FILTER FUNCTION
  const filteredColor = () => {
    setItems(
      cards.filter(
        (item) =>
          (item.type === filters[0].type || filters[0].type === 'all') &&
          (item.color === filters[0].color || filters[0].color === 'all') &&
          (item.brand === filters[0].brand || filters[0].brand === 'all')
      )
    );
  };

  return (
    <div className="custom-select" id="filter-box">
      <form onChange={setColor}>
        <select id="color-form" defaultValue={'all'}>
          <option value="all">All Colors</option>
          <option value="black">Black</option>
          <option value="white">White</option>
          <option value="grey">Grey</option>
          <option value="gold">Gold</option>
          <option value="blue">Blue</option>
        </select>
      </form>
      <form onChange={setColor}>
        <select id="type-form" defaultValue={'all'}>
          <option value="all">All Types</option>
          <option value="top">Top</option>
          <option value="bottom">Bottom</option>
          <option value="shoes">Shoes</option>
          <option value="accessories">Accessories</option>
        </select>
      </form>
      <form onChange={setColor}>
        <select id="brand-form" defaultValue={'all'}>
          <option value="all">All Brands</option>
          <option value="anne sofie madsen">Anne Sofie Madsen</option>
          <option value="comme de garcons">Comme De Garcons</option>
          <option value="dolce">Dolce & Gabbana</option>
          <option value="gucci">Gucci</option>
          <option value="jean paul gaultier">Jean Paul Gaultier</option>
          <option value="luisa beccaria">Luisa Beccaria</option>
          <option value="maison margiela">Maison Margiela</option>
          <option value="manish arora">Manish Arora</option>
          <option value="moschino">Moschino</option>
          <option value="simone rocha">Simone Rocha</option>
          <option value="valentino">Valentino</option>
          <option value="versace">Versace</option>
          <option value="yohji yamamoto">Yohji Yamamoto</option>
        </select>
      </form>
    </div>
  );
};

export default FilterBox;
