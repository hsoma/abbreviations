import React, { Component } from 'react';
import './Header.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as ItemsActions from '../../actions/items';


import { Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui/Toolbar';
import AutoComplete from 'material-ui/AutoComplete';

class Header extends Component {
  constructor(props) {
    super(props);
  }
  onChange(event) {
    console.log(event.target.value);
    const key = event.target.value;
    console.log(this.props);
    this.props.action.searchKey(key)
  }
  render() {
    return (
      <Toolbar>
        <ToolbarGroup>
          <ToolbarTitle text="Abbreviations" />
        </ToolbarGroup>
        <ToolbarGroup>
          {/*<AutoComplete
            hintText="Search"
            filter={AutoComplete.caseInsensitiveFilter}
            dataSource={colors}
          />*/}

          <input type="text" placeholder="Search" onChange={this.onChange.bind(this)}/>
        </ToolbarGroup>
      </Toolbar>
    )
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

export default connect(mapStateToProps, mapDispathcToProps)(Header);