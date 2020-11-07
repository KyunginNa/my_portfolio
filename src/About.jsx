import React from "react";
import { Container, Item } from "semantic-ui-react";
import BasicInfo from "./BasicInfo";
import Skills from "./Skills"
import Hobby from "./Hobby"

const About = () => {
  return (
    <Container>
      <h1 id="about-header">About Me</h1>
      <Item.Group relaxed>
        <BasicInfo />
        <Skills />
        <Hobby />
      </Item.Group>
    </Container>
  );
};

export default About;
