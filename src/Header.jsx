import React, { Component } from "react";
import { Menu, Segment } from "semantic-ui-react";

class Header extends Component {
  render() {
    return (
      <Segment inverted>
        <Menu inverted secondary>
          <Menu.Item name="My Portfolio" />
        </Menu>
      </Segment>
    );
  }
}

export default Header;
