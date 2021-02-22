import React from "react";
import { Image, List, Grid } from "semantic-ui-react";

const AboutBasicInfo = () => {
  return (
    <Grid columns={2} centered data-cy="about-basic">
      <Grid.Row centered verticalAlign="middle">
        <Grid.Column width={2}>
          <Image src="photo/grad.png" circular bordered />
        </Grid.Column>
        <Grid.Column width={7}>
          <h2 data-cy="about-header">Kyungin Na</h2>
          <List>
            <List.Item icon="marker" content="Stockholm, Sweden" />
            <List.Item
              icon="mail"
              content={
                <a href="mailto:nakyungin93@gmail.com" className="link">
                  nakyungin93@gmail.com
                  </a>
              }
            />
          </List>
          <p>
            I enjoy learning new things and challenging myself. Creating my own things and solving problems keep me motivated,
            which explains why I fell in love with programming. I aim to be a
            programmer who never lose a business perspective.
          </p>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default AboutBasicInfo;
