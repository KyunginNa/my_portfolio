import React, { Component } from "react";
import axios from "axios";
import { Header } from "semantic-ui-react";

class CvEducation extends Component {
  state = {
    education: [],
  };

  componentDidMount() {
    axios.get("./data/education.json").then((response) => {
      this.setState({ education: response.data });
    });
  }
  render() {
    const { education } = this.state;

    let educationList = education.map((education) => {
      return (
        <div id={`education-${education.id}`} key={education.id}>
          <h4 className="cv-edu-university">{education.university}</h4>
          <h5 className="cv-edu-details">
            {education.title} | {education.year}
          </h5>
        </div>
      );
    });

    return (
      <div>
        <Header as="h3" id="cv-education-header" color="blue">
          Education
        </Header>
        {educationList}
      </div>
    );
  }
}

export default CvEducation;
