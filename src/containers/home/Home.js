import React, { Component } from 'react';
import './Home.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as ItemsActions from '../../actions/items';

import Header from '../header/Header'
import Card from '../../components/card'


import { List, ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Home extends Component {
  constructor(props) {
  super(props);
  }

componentDidMount() {
  console.log('componet did mount', this.props);
  this.props.action.getItems();
}

render() {
console.log('this props', this.props.items);
const items = this.props.items;
if (items.length > 0) {
  return (
    <div>
        <Header />
    <div>
      <div>
        <List>
          <Subheader>Welcome to Abbreviations.com</Subheader>
          {items.map((item, i) => <Card key={i} value={item} />)}
        </List>
      </div>  
    </div>
    </div>
  )
} else {
return (
  <div>
    <Header />
      </div>
)}
}
}



function mapStateToProps(state, prop) {
  return {
    items: state.items
  }
}
function mapDispathcToProps(dispatch) {
  return {
    action: bindActionCreators(ItemsActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispathcToProps)(Home);