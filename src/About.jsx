import React from "react";
import { Container, Item } from "semantic-ui-react";
import BasicInfo from "./BasicInfo";
import Skills from "./Skills";
import Hobby from "./Hobby";

const About = () => {
  return (
    <Container>
      <BasicInfo />
      <Item.Group>
        <Skills />
        <Hobby />
      </Item.Group>
    </Container>
  );
};

export default About;
