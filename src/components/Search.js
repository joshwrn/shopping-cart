import React from 'react';
import '../styles/search.css';

const Search = ({ cards }) => {
  const search = 'black';

  const res = cards.filter((obj) =>
    Object.values(obj).some((val) => val.includes(search))
  );

  const test = () => {
    console.log(res);
  };

  return (
    <div id="search">
      <p onClick={test}>test</p>
    </div>
  );
};

export default Search;
