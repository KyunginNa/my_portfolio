import React from "react";
import { Header, List } from "semantic-ui-react";

const CvSkills = () => {
  return (
    <div>
      <Header id="cv-skills-header" as="h3" color="blue">
        Skills
      </Header>
      <List id="cv-skills-list">
        <List.Item>
          <List.Header>Programming languages:</List.Header> JavaScript(ES6), CSS, HTML, Ruby
        </List.Item>
        <List.Item>
          <List.Header>Programming Libraries:</List.Header> React, Ruby on Rails
        </List.Item>
        <List.Item>
          <List.Header> Testing Frameworks:</List.Header> Cypress, RSpec
        </List.Item>
        <List.Item>
          <List.Header>Application Architectures</List.Header>
        </List.Item>
        <List.Item>
          <List.Header>Business Requirements Analysis</List.Header>
        </List.Item>
        <List.Item>
          <List.Header>Release Management</List.Header>
        </List.Item>
        <List.Item>
          <List.Header>Business Process Improvement</List.Header>
        </List.Item>
        <List.Item>
          <List.Header> Data Visualization Tool:</List.Header> Tableau Desktop
        </List.Item>
      </List>
      <Header as="h3" color="blue" id="cv-languages-header">
        Languages
      </Header>
      <List id="cv-languages-list">
        <List.Item>Korean</List.Item>
        <List.Item>Japanese</List.Item>
        <List.Item>English</List.Item>
        {/* <List.Item style={{ color: "grey" }}>( Slowly learning Swedish😉 )</List.Item> */}
      </List>
    </div>
  );
};

export default CvSkills;
