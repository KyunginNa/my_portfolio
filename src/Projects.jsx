import React, { Component } from "react";
import { Container, Grid } from "semantic-ui-react";
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
      <Container>
        <h1 id="projects-header">My Projects</h1>
        <Grid>{projectsList}</Grid>
      </Container>
    );
  }
}

export default Projects;
