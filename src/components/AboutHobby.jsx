import React from "react";
import { Divider, Header, Icon, Grid } from "semantic-ui-react";

const AboutHobby = () => {
  return (
    <>
      <Divider horizontal>
        <Header as="h4" color="teal">
          <Icon name="heart" color="teal" />
          Hobby
        </Header>
      </Divider>

      <Grid textAlign="center">
        <Grid.Column width={3}>
          <Icon name="leaf" size="big" color="teal"></Icon>
          <p className="hobby">Yoga</p>
        </Grid.Column>
        <Grid.Column width={3}>
          <Icon name="home" size="big" color="teal" />
          <p className="hobby">Interior Design Magazines</p>
        </Grid.Column>
        <Grid.Column width={3}>
          <Icon name="tv" size="big" color="teal" />
          <p className="hobby">Watch Friends</p>
        </Grid.Column>
      </Grid>
    </>
  );
};

export default AboutHobby;
