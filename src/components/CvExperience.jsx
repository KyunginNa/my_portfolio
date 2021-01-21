import React, { Component } from "react";
import axios from "axios";
import { List, Icon, Header } from "semantic-ui-react";

class CvExperience extends Component {
  state = {
    experience: [],
  };

  componentDidMount() {
    axios.get("./data/experience.json").then((response) => {
      this.setState({ experience: response.data });
    });
  }
  render() {
    const { experience } = this.state;

    let experienceList = experience.map((experience) => {
      return (
        <div id={`experience-${experience.id}`} key={experience.id}>
          <h4 className="cv-exp-title">{experience.title}</h4>
          <h5>
            {experience.company} | {experience.year}
          </h5>
          <List id="cv-exp-responsibility-list">
            <Header as="h5" color="blue">
              Key Responsibilities
            </Header>
            <List.Item>
              <Icon name="caret right" color="blue" />
              <List.Content>{experience.role1}</List.Content>
            </List.Item>
            <List.Item>
              <Icon name="caret right" color="blue" />
              <List.Content>{experience.role2}</List.Content>
            </List.Item>
            <List.Item>
              <Icon name="caret right" color="blue" />
              <List.Content>{experience.role3}</List.Content>
            </List.Item>
            <List.Item>
              <Icon name="caret right" color="blue" />
              <List.Content>{experience.role4}</List.Content>
            </List.Item>
          </List>
          <List id="cv-exp-achievement-list">
            <Header as="h5" color="blue">
              Key Achievements
            </Header>
            <List.Item>
              <Icon name="caret right" color="blue" />
              <List.Content>{experience.achievement1}</List.Content>
            </List.Item>
            <List.Item>
              <Icon name="caret right" color="blue" />
              <List.Content>{experience.achievement2}</List.Content>
            </List.Item>
          </List>
        </div>
      );
    });
    return (
      <div>
        <Header as="h3" id="cv-experience-header" color="blue">
          Experience
        </Header>
        {experienceList}
      </div>
    );
  }
}

export default CvExperience;
