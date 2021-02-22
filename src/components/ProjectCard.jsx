import React from "react";
import { Card, Icon, Label } from "semantic-ui-react";

const ProjectCard = ({ project }) => {
  let technologyLabel = project.technologies.map(technology => {
    return <Label key={`${project.id}-${technology}`} color="teal" size="medium" style={{ marginTop: 5 }}>{technology}</Label>
  })

  return (
    <Card.Group>
      <Card
        color="teal"
        style={{
          width: 350,
          marginBottom: 40,
          textAlign: 'left',
          backgroundColor: 'rgba(255,255,255,0.8)'
        }}
      >
        <Card.Content style={{ height: 250 }}>
          <Card.Header style={{ color: '#00B5AD' }}><Icon name='folder open' />{project.name}</Card.Header>
          <Card.Description style={{ height: 130 }}>{project.description}</Card.Description>
          <Card.Meta style={{ marginTop: 10 }}>{technologyLabel}</Card.Meta>
        </Card.Content>
        <Card.Content extra textAlign="right">
          {project.url &&
            <a href={project.url} target="_blank" rel="noreferrer noopener">
              <Icon name="external alternate" id={`urlIcon-${project.id}`} color="teal" />
            </a>
          }
          <a href={project.github} target="_blank" rel="noreferrer noopener">
            <Icon name="github" id={`gitIcon-${project.id}`} color="teal" />
          </a>
        </Card.Content>
      </Card>
    </Card.Group>
  );
};

export default ProjectCard;
