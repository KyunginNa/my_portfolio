import React from "react";
import { Divider, Header, Icon, Grid, List } from "semantic-ui-react";

const AboutSkills = () => {
  return (
    <>
      <Divider horizontal>
        <Header as="h4" color="teal">
          <Icon name="keyboard" color="teal" />
          Skills
        </Header>
      </Divider>
      <Grid textAlign="center">
        <Grid.Column width={3}>
          <h4>Development</h4>
          <List>
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
              <List.Content>React Native</List.Content>
            </List.Item>
            <List.Item>
              <List.Content>Redux</List.Content>
            </List.Item>
            <List.Item>
              <List.Content>Ruby</List.Content>
            </List.Item>
          </List>
        </Grid.Column>
        <Grid.Column width={3}>
          <h4>Testing Frameworks</h4>
          <List>
            <List.Item>
              <List.Content>Cypress</List.Content>
            </List.Item>
            <List.Item>
              <List.Content>RSpec</List.Content>
            </List.Item>
          </List>
        </Grid.Column>
        <Grid.Column width={3}>
          <h4>Tools</h4>
          <List>
            <List.Item>
              <List.Content>Git & Github</List.Content>
            </List.Item>
          </List>
        </Grid.Column>
      </Grid>
    </>
  );
};

export default AboutSkills;
