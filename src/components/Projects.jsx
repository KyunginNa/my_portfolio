import React, { Component } from "react";
import { Grid, Menu } from "semantic-ui-react";
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
      <>
        <Menu vertical style={{ backgroundColor: 'rgba(255,255,255,0.8)' }}>
          <Menu.Item>
            <Menu.Header>Web Applications</Menu.Header>
            <Menu.Menu>
              <Menu.Item
                name='kitty news web'
              />
              <Menu.Item
                name='K-Food'
              />
              <Menu.Item
                name='Rock Paper Scissors'
              />
              <Menu.Item
                name='Trumpster'
              />
              <Menu.Item
                name='Cooper Test'
              />
            </Menu.Menu>
          </Menu.Item>
          <Menu.Item>
            <Menu.Header>Mobile Applications</Menu.Header>
            <Menu.Menu>
              <Menu.Item
                name='tuneshare'
              />
              <Menu.Item
                name='kitty news mobile'
              />
            </Menu.Menu>
          </Menu.Item>
        </Menu>
        <div style={{ margin: 30 }}>
          <h1 data-cy="projects-header" style={{ textAlign: 'center', marginBottom: "1.5em" }}>My Projects</h1>
          <Grid centered>{projectsList}</Grid>
        </div>
      </>
    );
  }
}

export default Projects;
