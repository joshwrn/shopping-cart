import React, { useState, useEffect, useRef } from 'react';
import '../styles/filter-box.css';

const FilterBox = (props) => {
  const { cards, filters, setFilters, currentItems, setItems } = props;

  //< SORT ITEMS

  //// SORT CARDS

  const updateSort = () => {
    if (filters.sort === 'default') {
      cards.sort((a, b) => parseFloat(a.key) - parseFloat(b.key));
    } else if (filters.sort === 'price-asc') {
      cards.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
    } else if (filters.sort === 'price-desc') {
      cards.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
    }
  };

  //< SET FILTERS

  const fade = () => {
    const shop = document.getElementById('shop-section');
    shop.style.setProperty('opacity', '0');
    shop.style.setProperty('animation', '');
    setTimeout(function () {
      shop.style.setProperty('animation', 'fade-in 1.3s forwards');
    }, 0);
  };

  //// FIRST ADD FILTER TO ARRAY
  const handleChange = (e) => {
    e.preventDefault();
    const colorForm = document.getElementById('color-form');
    const typeForm = document.getElementById('type-form');
    const brandForm = document.getElementById('brand-form');
    const sortForm = document.getElementById('sort-form');

    e.preventDefault();
    setFilters((filters) => ({
      ...filters,
      sort: sortForm.value,
      type: typeForm.value,
      brand: brandForm.value,
      color: colorForm.value,
    }));
  };

  //// WHEN FILTERS ARE UPDATED SET THE FILTERS

  useEffect(() => {
    updateSort();
    updateFilters();
    fade();
  }, [filters]);

  //// FILTER FUNCTION
  const updateFilters = () => {
    setItems(
      cards.filter(
        (item) =>
          (item.type === filters.type || filters.type === 'all') &&
          (item.color === filters.color || filters.color === 'all') &&
          (item.brand === filters.brand || filters.brand === 'all')
      )
    );
  };

  return (
    <div className="custom-select" id="filter-box">
      <form onChange={handleChange}>
        <select id="sort-form" defaultValue={'none'}>
          <option disabled value="none">
            Sort
          </option>
          <option value="default">Default</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
        </select>
      </form>
      <form onChange={handleChange}>
        <select id="color-form" defaultValue={'all'}>
          <option value="all">All Colors</option>
          <option value="black">Black</option>
          <option value="white">White</option>
          <option value="grey">Grey</option>
          <option value="gold">Gold</option>
          <option value="blue">Blue</option>
        </select>
      </form>
      <form onChange={handleChange}>
        <select id="brand-form" defaultValue={'all'}>
          <option value="all">All Brands</option>
          <option value="Anne Sofie Madsen">Anne Sofie Madsen</option>
          <option value="Comme De Garcons">Comme De Garcons</option>
          <option value="Dolce & Gabbana">Dolce & Gabbana</option>
          <option value="Gucci">Gucci</option>
          <option value="Jean Paul Gaultier">Jean Paul Gaultier</option>
          <option value="Luisa Beccaria">Luisa Beccaria</option>
          <option value="Maison Margiela">Maison Margiela</option>
          <option value="Manish Arora">Manish Arora</option>
          <option value="Moschino">Moschino</option>
          <option value="Simone Rocha">Simone Rocha</option>
          <option value="Valentino">Valentino</option>
          <option value="Versace">Versace</option>
          <option value="Yohji Yamamoto">Yohji Yamamoto</option>
        </select>
      </form>
      <form onChange={handleChange}>
        <select id="type-form" defaultValue={'all'}>
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
