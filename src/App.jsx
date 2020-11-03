import React, { Component } from "react";
import Hello from "./Hello";
import Header from "./Header";
import Footer from "./Footer";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Hello />
        <Footer />
      </div>
    );
  }
}

export default App;
