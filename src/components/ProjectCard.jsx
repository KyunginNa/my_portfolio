import React from "react";
import { Card, Image, Icon } from "semantic-ui-react";

const ProjectCard = ({ project }) => {
  return (
    <Card.Group>
      <Card
        color="grey"
        style={{
          borderStyle: "thin",
          borderColor: "lightgrey",
          borderRadius: "5px",
          boxShadow: "0 0 3px 2px grey",
          width: 400
        }}
      >
        <Image src={project.image} style={{ height: 300 }} />
        <Card.Content style={{ height: 180 }}>
          <Card.Header>{project.name}</Card.Header>
          <Card.Meta>{project.technologies}</Card.Meta>
          <Card.Description>{project.description}</Card.Description>
        </Card.Content>
        <Card.Content extra textAlign="right">
          {project.url &&
            <a href={project.url} target="_blank">
              <Icon name="external alternate" id={`urlIcon-${project.id}`} />
            </a>
          }
          <a href={project.github} target="_blank">
            <Icon name="github" id={`gitIcon-${project.id}`} />
          </a>
        </Card.Content>
      </Card>
    </Card.Group>
  );
};

export default ProjectCard;
