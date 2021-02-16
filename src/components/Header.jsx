import { React, Component } from "react";
import { Menu } from "semantic-ui-react";
import { NavLink, Link } from "react-router-dom";

class Header extends Component {
  state = { activeItem: localStorage.getItem('activeItem') };

  handleItemClick = (e, { name }) => {
    localStorage.setItem('activeItem', name)
    this.setState({ activeItem: name })
  };

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
            id="projects-tab"
            name="my projects"
            active={activeItem === "my projects"}
            onClick={this.handleItemClick}
            as={NavLink}
            to={{ pathname: "/projects" }}
          />
          <Menu.Item style={{ height: 48.13 }}>
            <a href="../data/resume.pdf" target="_blank" rel="noreferrer noopener" style={{ color: '#000000DE' }}>Resume</a>
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}

export default Header;
