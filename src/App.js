import React, { useState } from 'react';
import './styles/styles.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Nav from './components/Nav';
import Shop from './components/Shop';
import About from './components/About';
import Item from './components/Item';
import cards from './components/functions/cards';

function App() {
  const [cart, setCart] = useState([]);

  return (
    <Router>
      <div className="App">
        <Nav cart={cart} setCart={setCart}></Nav>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/shop">
            <Shop cardsArray={cards} />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route
            exact
            path="/shop/item/:title"
            render={(props) => (
              <Item {...props} cards={cards} cart={cart} setCart={setCart} />
            )}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
