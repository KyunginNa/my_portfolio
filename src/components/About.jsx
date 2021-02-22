import React from "react";
import AboutBasicInfo from "./AboutBasicInfo";
import AboutBackground from "./AboutBackground";
import AboutSkills from "./AboutSkills";
import AboutHobby from "./AboutHobby";

const About = () => {
  return (
    <div style={{ backgroundColor: 'rgba(255,255,255,0.8)', bottom: 0, position: 'fixed', top: 50, paddingTop: '2em'}}>
      <AboutBasicInfo />
      <AboutBackground />
      <AboutSkills />
      <AboutHobby />
    </div>
  );
};

export default About;
