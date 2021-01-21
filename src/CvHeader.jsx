import React from "react";
import { Container, Divider } from "semantic-ui-react";

const CvHeader = () => {
  return (
    <div id="cv-header">
      <Container>
        <h1 style={{ marginBottom: "-0.5em" }}>Kyungin Na</h1>
        <h3>Craft Academy Student | IT Consultant with 2+ Years Experience </h3>
      </Container>
      <Divider clearing />
    </div>
  );
};

export default CvHeader;
