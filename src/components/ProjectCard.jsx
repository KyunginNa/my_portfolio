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
        }}
      >
        <Image src={project.image} wrapped ui={false} />
        <Card.Content style={{ height: "170px" }}>
          <Card.Header>{project.name}</Card.Header>
          <Card.Meta>{project.technologies}</Card.Meta>
          <Card.Description>{project.description}</Card.Description>
        </Card.Content>
        <Card.Content extra textAlign="right">
          <a href={project.url}>
            <Icon name="external alternate" id={`urlIcon-${project.id}`} />
          </a>
          <a href={project.github}>
            <Icon name="github" id={`gitIcon-${project.id}`} />
          </a>
        </Card.Content>
      </Card>
    </Card.Group>
  );
};

export default ProjectCard;
