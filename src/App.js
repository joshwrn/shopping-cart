import React from 'react';
import './styles/styles.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Cart from './components/Cart';
import Home from './components/Home';
import Nav from './components/Nav';
import Shop from './components/Shop';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav></Nav>
        <Cart></Cart>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Shop" component={Shop} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
