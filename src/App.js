import React, { useState } from 'react';
import './styles/styles.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Nav from './components/Nav';
import Shop from './components/Shop';
import About from './components/About';
import Item from './components/Item';

function App() {
  const [cart, setCart] = useState([]);

  const cards = [
    {
      title: 'Black Snake Dress',
      src: '/img/clothes/one.jpeg',
      price: '$1849.99',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      key: '1',
    },
    {
      title: 'Tattered Silk Coat',
      src: '/img/clothes/two.jpeg',
      price: '$1379.99',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      key: '2',
    },
    {
      title: 'Royal Gold Gown',
      src: '/img/clothes/three.jpeg',
      price: '$859.99',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      key: '3',
    },
    {
      title: 'Fine Ripped Shirt',
      src: '/img/clothes/four.jpeg',
      price: '$1319.99',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      key: '4',
    },
    {
      title: 'Renaissance Dress',
      src: '/img/clothes/five.jpeg',
      price: '$2899.99',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      key: '5',
    },
    {
      title: 'Black Buttoned Overcoat',
      src: '/img/clothes/six.jpeg',
      price: '$659.99',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      key: '6',
    },
    {
      title: 'Black Layered Top',
      src: '/img/clothes/seven.jpeg',
      price: '$779.99',
      description: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      key: '7',
    },
  ];
  return (
    <Router>
      <div className="App">
        <Nav></Nav>
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
            path="/shop/item/:id"
            render={(props) => <Item {...props} cards={cards} />}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
