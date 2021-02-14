import React from "react";
import { Container } from "semantic-ui-react";
import AboutBasicInfo from "./AboutBasicInfo";
import AboutBackground from "./AboutBackground";
import AboutSkills from "./AboutSkills";
import AboutHobby from "./AboutHobby";

const About = () => {
  return (
    <Container>
      <AboutBasicInfo />
      <AboutBackground />
      <AboutSkills />
      <AboutHobby />
    </Container>
  );
};

export default About;
