import React from "react";
import { Container, Grid } from "semantic-ui-react";
import CvHeader from "./CvHeader";
import CvSummary from "./CvSummary";
import CvExperience from "./CvExperience";
import CvEducation from "./CvEducation";
import CVSkills from "./CvSkills";
import CvContact from "./CvContact";

const Cv = () => {
  return (
    <Container>
      <CvHeader />
      <CvSummary />
      <Grid>
        <Grid.Row columns={2}>
          <Grid.Column width={10}>
            <CvExperience />
            <CvEducation />
          </Grid.Column>
          <Grid.Column width={5}>
            <CVSkills />
            <CvContact />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
};

export default Cv;
