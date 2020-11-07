import React from "react";
import { Divider, Header, Icon, Grid } from "semantic-ui-react";

const Background = () => {
  return (
    <div>
      <Divider horizontal>
        <Header as="h4">
          <Icon name="user" />
          Background
        </Header>
      </Divider>
      <Grid columns={1} textAlign="center">
        <Grid.Column width={10}>
          <p>
            I was born and raised in South Korea. After graduating from high
            school, I moved to Japan and studied Business and Economics at Kyoto
            University. I worked as a business consultant at a multinational IT
            firm in Japan for 2 years. Recently, I decided to make a career
            shift to be a software engineer. I'm currently learning web
            development at Craft Academy Bootcamp.
          </p>
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default Background;
