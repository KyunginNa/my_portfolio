import React from "react";
import { Image, List, Grid } from "semantic-ui-react";

const AboutBasicInfo = () => {
  return (
    <div>
      <Grid id="about-basic" style={{ marginTop: "-1.5em" }}>
        <Grid.Row centered verticalAlign="middle">
          <Grid.Column width={3}>
            <Image src="photo/grad.png" size="medium" circular bordered />
          </Grid.Column>
          <Grid.Column width={10}>
            <h2 data-cy="about-header">Kyungin Na</h2>
            <List>
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
              I enjoy learning new things and challenging myself. Creating my own things and solving problems keep me motivated, 
              which explains why I fell in love with programming. I aim to be a
              programmer who never lose a business perspective.
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default AboutBasicInfo;
