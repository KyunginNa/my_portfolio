import React from "react";
import { Container } from "semantic-ui-react";
import HomeIcon from "./HomeIcon";

const Home = () => {
  return (
    <Container className="home-container" data-cy="home-container">
      <h1 className="home-header">Hej!<br />
      I'm Kyungin Na, <br />a web developer based in Stockholm, Sweden.
      </h1>
      <h2 className="home-description">
        On this website, you can find some brief information about me <br />
        and the projects that I have worked on.
      </h2>
      <div>
        <HomeIcon />
      </div>
    </Container>
  );
};

export default Home;
