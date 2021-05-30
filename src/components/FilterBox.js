import React, { useState, useEffect, useRef } from 'react';
import '../styles/filter-box.css';

const FilterBox = (props) => {
  const {
    cards,
    filters,
    setFilters,
    currentItems,
    setItems,
    gender,
    categories,
    setCategories,
  } = props;

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
    console.log(categories);
  }, [filters]);

  //// FILTER FUNCTION
  const updateFilters = () => {
    setItems(
      cards.filter(
        (item) =>
          item.gender === gender &&
          (item.type === filters.type || filters.type === 'all') &&
          (item.color === filters.color || filters.color === 'all') &&
          (item.brand === filters.brand || filters.brand === 'all')
      )
    );
  };

  const updateCat = (i, keys) => {
    const cloneCards = cards.filter((item) => item.gender === gender);
    setCategories((prev) => [...prev], {
      [categories[i]]: ([categories[i][keys]] = [
        [...new Set(cloneCards.map((item) => item[keys]))],
      ]),
    });
  };

  useEffect(() => {
    for (let i = 0; i < categories.length; i++) {
      updateCat(i, Object.keys(categories[i])[0]);
    }
  }, []);

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
          {categories[2].color.map((item) => {
            return (
              <option key={item} value={item}>
                {item}
              </option>
            );
          })}
        </select>
      </form>
      <form onChange={handleChange}>
        <select id="brand-form" defaultValue={'all'}>
          <option value="all">All Brands</option>
          {categories[0].brand.map((item) => {
            return (
              <option key={item} value={item}>
                {item}
              </option>
            );
          })}
        </select>
      </form>
      <form onChange={handleChange}>
        <select id="type-form" defaultValue={'all'}>
          <option value="all">All Types</option>
          {categories[1].type.map((item) => {
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

export default FilterBox;
