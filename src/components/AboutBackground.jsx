import React from "react";
import { Divider, Header, Icon, Grid } from "semantic-ui-react";

const AboutBackground = () => {
  return (
    <div id="about-back">
      <Divider horizontal>
        <Header as="h4">
          <Icon name="user" />
          Background
        </Header>
      </Divider>
      <Grid columns={1} textAlign="center">
        <Grid.Column width={12}>
          <p id="about-back-summary">
            I was born and raised in South Korea. After graduating from high
            school, I moved to Japan and majored in Business and Economics at
            Kyoto University. I worked as a business consultant at a
            multinational IT consulting firm in Japan for 2 years. Recently, I
            decided to make a career shift to be a software engineer. I'm
            currently learning web development at Craft Academy Bootcamp.
            <br />
            (More information can be found in
            <a href="https://kyungin-portfolio.netlify.app/cv"> my CV</a>!)
          </p>
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default AboutBackground;
