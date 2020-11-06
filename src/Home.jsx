import React from "react";
import { Container } from "semantic-ui-react";
import "./home.css";

const Home = () => {
  return (
    <Container id="welcome">
      <h1 id="home">Hi!😃</h1>
      <h2>
        My name is Kyungin Na, <br />a web developer based in Stockholm, Sweden.
      </h2>
      <p>
        I'm currently studying at Craft Academy to start a career as a full
        stack web developer.
      </p>
      <p>
        On this website, you can find some brief information about me and check
        the projects that I have worked on.
      </p>
    </Container>
  );
};

export default Home;
