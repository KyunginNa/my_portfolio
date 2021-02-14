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
      <Grid columns={1} textAlign="left" centered>
        <Grid.Column width={12}>
          <p id="about-back-summary">
            I was born and raised in South Korea. After graduating from high
            school, I moved to Japan to study Business and Economics at
            Kyoto University. I worked as a business analyst at a
            multinational IT consulting firm in Japan for 2 years. In Febuaray 2021, I completed web development bootcamp at Craft Academy, Sweden to make a career change.
            <br />
            <Icon name='search' />
              More information can be found in my
            <a href="../data/resume.pdf" target="_blank" rel="noreferrer noopener" > resume</a>!
          </p>
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default AboutBackground;
