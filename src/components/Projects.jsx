import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import axios from "axios";
import ProjectCard from "./ProjectCard";

class Projects extends Component {
  state = {
    projects: [],
  };

  componentDidMount() {
    axios.get("./data/projects.json").then((response) => {
      this.setState({ projects: response.data });
    });
  }

  render() {
    let projectsList = this.state.projects.map((project) => {
      return (
        <div id={`project-${project.id}`} key={project.id}>
          <ProjectCard project={project} />
        </div>
      );
    });
    return (
      <div style={{ margin: 30 }}>
        <h1 data-cy="projects-header" style={{ textAlign: 'center', marginBottom: "1.5em" }}>My Projects</h1>
        <Grid centered>{projectsList}</Grid>
      </div>
    );
  }
}

export default Projects;
