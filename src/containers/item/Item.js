import React, { Component } from 'react';
import './Item.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as ItemsActions from '../../actions/items';

import Header from '../header/Header'

class Item extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    console.log('componet did mount2', this.props);
    
    this.props.action.selectedItem(this.props.match.params.id);
  }

  render() {
    return (
      <div>
        <Header />
        <h2>{this.props.selectedItem.pt}</h2>
        <p> {this.props.selectedItem.st}</p>
      </div>
    )
  }
}


function mapStateToProps(state, prop) {
    return {
        items: state.items,
        selectedItem: state.selectedItem
    }
}
function mapDispathcToProps(dispatch) {
    return {
        action: bindActionCreators(ItemsActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispathcToProps)(Item);