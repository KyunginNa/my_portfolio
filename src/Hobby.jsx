import React from "react";
import { Divider, Header, Icon, Grid } from "semantic-ui-react";

const Hobby = () => {
  return (
    <div>
      <Divider horizontal style={{ marginBottom: "2em" }}>
        <Header as="h4">
          <Icon name="heart" />
          Hobby
        </Header>
      </Divider>

      <Grid columns={3} relaxed textAlign="center">
        <Grid.Column>
          <Icon name="leaf" size="big" color="grey"></Icon>
          <p className="hobby">Yoga</p>
        </Grid.Column>
        <Grid.Column>
          <Icon name="home" size="big" color="grey" />
          <p className="hobby">Interior Design Magazines</p>
        </Grid.Column>
        <Grid.Column>
          <Icon name="tv" size="big" color="grey" />
          <p className="hobby">Watch Friends</p>
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default Hobby;
