import React, { Component } from 'react';
import { List, ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class Card extends Component {
  constructor(props) {
    super(props);
      this.state = {
  }
}
render() {
  console.log("card",this.props);
  const { value }= this.props;
  return (
    <div>
      <ListItem
        primaryText={
         <Link to={"/item/" + value.id}> {value.pt}</Link>
        }
        secondaryText={
          <p>{value.st}</p>
        }
        secondaryTextLines={2}
      />
      <Divider inset={true} />
    </div>
  )
}
}

export default Card;