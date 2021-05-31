import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/search.css';

const Search = ({ cards }) => {
  const [input, setInput] = useState('');
  const [results, setResults] = useState([...cards]);

  const search = (value) => {
    setResults(
      cards.filter((obj) =>
        JSON.stringify(obj).toLowerCase().includes(value.toLowerCase())
      )
    );
  };

  useEffect(() => {
    setResults([]);
  }, []);

  useEffect(() => {
    search(input);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [input]);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div id="search">
      <div id="check-gradient">
        <h1 id="check-title">SEARCH</h1>
      </div>
      <img id="search-hero" src="/img/search.jpg" alt="hero" />
      <div id="search-section">
        <form>
          <input
            id="search-box"
            type="text"
            value={input}
            onChange={handleChange}
            placeholder={'Search'}
          />
        </form>
        {/* LIST */}
        <ul id="check-list">
          <p id="current-search">
            "{input === '' ? 'all' : input}" ({results.length})
          </p>
          {results.map((item) => {
            return (
              <li className="check-item" key={item.key}>
                <Link to={`/shop/item/${item.title}`}>
                  <img
                    className="check-item-image"
                    src={item.src}
                    alt={item.key}
                  />
                </Link>
                <div className="check-details">
                  <div className="details-left">
                    <Link to={`/shop/item/${item.title}`} key={item.title}>
                      <span className="check-brand">{item.brand}</span>
                      <span className="check-name">{item.title}</span>
                      <span className="check-price">
                        ${Number(item.price).toLocaleString('en-US')}
                      </span>
                    </Link>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Search;
