import React from "react";
import { Item } from "semantic-ui-react";

const Skills = () => {
  return (
    <Item>
      <Item.Content verticalAlign="middle">
        <Item.Header>Skills</Item.Header>
        <Item.Description>
          <h4>Development</h4>
          <p>JavaScript(ES6), HTML5, CSS3, React, Ruby</p>
          <h4>Testing Framework</h4>
          <p>Cypress, RSpec</p>
          <h4>Tools</h4>
          <p>Git & Github</p>
        </Item.Description>
      </Item.Content>
    </Item>
  );
};

export default Skills;
