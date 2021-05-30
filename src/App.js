import React, { useState } from 'react';
import './styles/styles.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Nav from './components/Nav';
import Shop from './components/Shop';
import Women from './components/Women';
import Men from './components/Men';
import About from './components/About';
import Item from './components/Item';
import Search from './components/Search';
import cards from './components/functions/cards';
import Checkout from './components/Checkout';

function App() {
  const [cart, setCart] = useState([]);
  const [categories, setCategories] = useState([
    {
      brand: [],
    },
    {
      type: [],
    },
    {
      color: [],
    },
  ]);

  return (
    <Router>
      <div className="App">
        <Nav cart={cart} setCart={setCart}></Nav>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/women">
            <Women
              cards={cards}
              categories={categories}
              setCategories={setCategories}
            />
          </Route>
          <Route exact path="/men">
            <Men
              cards={cards}
              categories={categories}
              setCategories={setCategories}
            />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/checkout">
            <Checkout cart={cart} setCart={setCart} />
          </Route>
          <Route
            exact
            path="/shop/item/:title"
            render={(props) => (
              <Item {...props} cards={cards} cart={cart} setCart={setCart} />
            )}
          />
          <Route exact path="/search">
            <Search cards={cards} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
