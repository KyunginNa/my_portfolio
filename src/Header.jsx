import React, { Component } from "react";
import { Menu, Segment } from "semantic-ui-react";
import { NavLink, Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <Segment inverted>
        <Menu inverted secondary>
          <Menu.Item
            id="header"
            name="my portfolio"
            as={Link}
            to={{ pathname: "/" }}
          />
          <Menu.Item
            id="about-tab"
            name="about me"
            as={NavLink}
            to={{ pathname: "/about" }}
          />
          <Menu.Item
            id="projects-tab"
            name="my projects"
            as={NavLink}
            to={{ pathname: "/projects" }}
          />
        </Menu>
      </Segment>
    );
  }
}

export default Header;
