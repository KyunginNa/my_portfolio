import React from "react";
import { Container } from "semantic-ui-react";
import HomeIcon from "./HomeIcon";

const Home = () => {
  return (
    <Container id="welcome">
      <h2 id="home">Welcome!😃</h2>
      <h1>
        I'm Kyungin Na, <br />a web developer based in Stockholm, Sweden.
      </h1>
      <p id="home-intro">
        On this website, <br />
        you can find some brief information about me and
        the projects that I have worked on.
      </p>
      <div id="homeIcon">
        <HomeIcon />
      </div>
    </Container>
  );
};

export default Home;