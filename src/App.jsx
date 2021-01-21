import React from "react";
import Home from "./Home";
import Header from "./Header";
import Footer from "./Footer";
import About from "./About";
import Projects from "./Projects";
import Cv from "./Cv";
import { Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/about" component={About}></Route>
        <Route exact path="/projects" component={Projects}></Route>
        <Route exact path="/cv" component={Cv}></Route>
        <Home />
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
