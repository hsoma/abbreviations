import React, { Component } from 'react';
import './App.css';

import Home from './containers/home/Home'
import Item from './containers/item/Item'

import { BrowserRouter as Router, Route } from "react-router-dom";

//import Cart from './components/cart';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 3,
    };
  }

  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/item/:id" component={Item} />
        </div>
      </Router>
    );
  }
}

export default App;
