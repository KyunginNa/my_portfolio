import { React, Component } from "react";
import { Menu } from "semantic-ui-react";
import { NavLink, Link } from "react-router-dom";

class Header extends Component {
  state = { activeItem: "" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <div>
        <Menu pointing secondary size="huge">
          <Menu.Item
            id="header"
            name="home"
            active={activeItem === "home"}
            onClick={this.handleItemClick}
            as={Link}
            to={{ pathname: "/" }}
          />
          <Menu.Item
            id="about-tab"
            name="about me"
            active={activeItem === "about me"}
            onClick={this.handleItemClick}
            as={NavLink}
            to={{ pathname: "/about" }}
          />
          <Menu.Item
            name="my projects"
            id="projects-tab"
            active={activeItem === "my projects"}
            onClick={this.handleItemClick}
            as={NavLink}
            to={{ pathname: "/projects" }}
          />
        </Menu>
      </div>
    );
  }
}

export default Header;
