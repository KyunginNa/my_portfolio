import React from "react";
import { Image, List, Grid } from "semantic-ui-react";

const BasicInfo = () => {
  return (
    <div>
      <Grid id="about-basic" style={{ marginTop: "-1.5em" }}>
        <Grid.Row centered verticalAlign="middle">
          <Grid.Column width={3}>
            <Image src="photo/grad.png" size="medium" circular bordered />
          </Grid.Column>
          <Grid.Column width={10}>
            <h2 id="about-header">Kyungin Na</h2>
            <List>
              <List.Item icon="users" content="Craft Academy" />
              <List.Item icon="marker" content="Stockholm, Sweden" />
              <List.Item
                icon="mail"
                content={
                  <a href="mailto:nakyungin93@gmail.com">
                    nakyungin93@gmail.com
                  </a>
                }
              />
            </List>
            <p id="about-basic-passion">
              I have a passion in creating things and solving problems in
              logical ways, which explains why I fell in love with programming.
              I aim to be a programmer who makes applications in user-friendly
              ways.
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default BasicInfo;
