import React from "react";
import { Container } from "semantic-ui-react";
import BasicInfo from "./BasicInfo";
import Skills from "./Skills";
import Hobby from "./Hobby";

const About = () => {
  return (
    <Container>
      <BasicInfo />
      <Skills />
      <Hobby />
    </Container>
  );
};

export default About;
