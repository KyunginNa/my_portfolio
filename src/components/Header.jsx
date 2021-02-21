import { React, Component } from "react";
import { Menu } from "semantic-ui-react";
import { NavLink, Link } from "react-router-dom";

class Header extends Component {
  state = { activeItem: sessionStorage.getItem('activeItem') || "home" };

  handleItemClick = (e, { name }) => {
    sessionStorage.setItem('activeItem', name)
    this.setState({ activeItem: name })
  };

  render() {
    const { activeItem } = this.state;

    return (
      <div>
        <Menu inverted pointing secondary size="huge">
          <Menu.Item
            data-cy="home"
            name="home"
            active={activeItem === "home"}
            onClick={this.handleItemClick}
            as={Link}
            to={{ pathname: "/" }}
          />
          <Menu.Item
            data-cy="about-tab"
            name="about me"
            active={activeItem === "about me"}
            onClick={this.handleItemClick}
            as={NavLink}
            to={{ pathname: "/about" }}
          />
          <Menu.Item
            data-cy="projects-tab"
            name="my projects"
            active={activeItem === "my projects"}
            onClick={this.handleItemClick}
            as={NavLink}
            to={{ pathname: "/projects" }}
          />
          <Menu.Item
            name="cv"
            style={{ height: 48.13 }}
          >
            <a href="../data/resume.pdf" target="_blank" rel="noreferrer noopener">CV</a>
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}

export default Header;
