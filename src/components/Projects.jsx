import React, { Component, createRef } from "react";
import { Ref, Grid, Menu, Sticky, Rail, Segment, Item } from "semantic-ui-react";
import axios from "axios";
import ProjectItem from "./ProjectItem";

class Projects extends Component {
  state = {
    projects: [],
  };

  componentDidMount() {
    axios.get("./data/projects.json").then((response) => {
      this.setState({ projects: response.data });
    });
  }

  contextRef = createRef()

  render() {
    let projectsList = this.state.projects.map((project) => {
      return (
        <div id={`project-${project.id}`} key={project.id}>
          <ProjectItem project={project} />
        </div>
      );
    });
    return (
      <Grid style={{ marginTop: 5, marginLeft: 15 }}>
        <Grid.Column width={4} style={{ marginTop: 10 }}>
          <Ref innerRef={this.contextRef}>
            <Rail style={{ maxWidth: '200px' }}>
              <Sticky context={this.contextRef}>
                <Menu vertical style={{ backgroundColor: 'rgba(255,255,255,0.8)' }}>
                  <Menu.Item>
                    Web Applications
                    <Menu.Menu>
                      <Menu.Item
                        name='kitty news web'
                      >
                        Kitty News Web
                        </Menu.Item>
                      <Menu.Item
                        name='slow food'
                      >
                        Slow Food
                      </Menu.Item>
                      <Menu.Item
                        name='rock paper scissors'
                      >
                        Rock Paper Scissors
                      </Menu.Item>
                      <Menu.Item
                        name='trumpster'
                      >
                        Trumpster
                      </Menu.Item>
                      <Menu.Item
                        name='cooper test'
                      >
                        Cooper Test
                      </Menu.Item>
                    </Menu.Menu>
                  </Menu.Item>
                  <Menu.Item>
                    Mobile Applications
                    <Menu.Menu>
                      <Menu.Item
                        name='tuneshare'
                      >
                        TuneShare
                      </Menu.Item>
                      <Menu.Item
                        name='kitty news mobile'
                      >
                        Kitty News Mobile
                      </Menu.Item>
                    </Menu.Menu>
                  </Menu.Item>
                </Menu>
              </Sticky>
            </Rail>
          </Ref>
        </Grid.Column>
        <Grid.Column width={13} style={{ marginLeft: -120, marginTop: -4 }}>

          {/* <div style={{ margin: 30 }}>
              <h1 data-cy="projects-header" style={{ textAlign: 'center', marginBottom: "1.5em" }}>My Projects</h1>
              <Grid centered>{projectsList}</Grid>
            </div> */}
          <Segment raised style={{ height: 600, backgroundColor: 'rgba(255,255,255,0.8)' }}>
            {projectsList}
          </Segment>
        </Grid.Column>
      </Grid >
    );
  }
}

export default Projects;
