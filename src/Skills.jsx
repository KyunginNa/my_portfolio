import React from "react";
import { Divider, Header, Icon, Grid, List } from "semantic-ui-react";

const Skills = () => {
  return (
    <div id="about-skills">
      <Divider horizontal>
        <Header as="h4">
          <Icon name="keyboard" />
          Skills
        </Header>
      </Divider>
      <Grid columns={3} relaxed textAlign="center">
        <Grid.Column>
          <h4>Development</h4>
          <List id="about-skills-dev">
            <List.Item>
              <List.Content>HTML5</List.Content>
            </List.Item>
            <List.Item>
              <List.Content>CSS3</List.Content>
            </List.Item>
            <List.Item>
              <List.Content>JavaScript(ES6)</List.Content>
            </List.Item>
            <List.Item>
              <List.Content>React</List.Content>
            </List.Item>
            <List.Item>
              <List.Content>Ruby</List.Content>
            </List.Item>
          </List>
        </Grid.Column>
        <Grid.Column>
          <h4>Testing Framework</h4>
          <List id="about-skills-test">
            <List.Item>
              <List.Content>Cypress</List.Content>
            </List.Item>
            <List.Item>
              <List.Content>RSpec</List.Content>
            </List.Item>
          </List>
        </Grid.Column>
        <Grid.Column>
          <h4>Tools</h4>
          <List id="about-skills-tools">
            <List.Item>
              <List.Content>Git & Github</List.Content>
            </List.Item>
          </List>
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default Skills;
