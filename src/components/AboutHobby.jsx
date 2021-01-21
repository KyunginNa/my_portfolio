import React from "react";
import { Divider, Header, Icon, Grid } from "semantic-ui-react";

const AboutHobby = () => {
  return (
    <div id="about-hobby">
      <Divider horizontal>
        <Header as="h4">
          <Icon name="heart" />
          Hobby
        </Header>
      </Divider>

      <Grid columns={3} relaxed textAlign="center">
        <Grid.Column id="about-hobby-yoga">
          <Icon name="leaf" size="big" color="grey"></Icon>
          <p className="hobby">Yoga</p>
        </Grid.Column>
        <Grid.Column id="about-hobby-magazine">
          <Icon name="home" size="big" color="grey" />
          <p className="hobby">Interior Design Magazines</p>
        </Grid.Column>
        <Grid.Column id="about-hobby-friends">
          <Icon name="tv" size="big" color="grey" />
          <p className="hobby">Watch Friends</p>
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default AboutHobby;
