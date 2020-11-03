import React, { Component } from "react";
import { Container } from "semantic-ui-react";

class Footer extends Component {
  render() {
    return (
      <footer>
        <p id="footer">Made with React {React.version}</p>
      </footer>
    );
  }
}

export default Footer;
