import React from "react";
import { Image, Item, Icon, Label } from "semantic-ui-react";

const ProjectItem = ({ project }) => {
  let technologyLabel = project.technologies.map(technology => {
    return <Label key={`${project.id}-${technology}`} color="teal" size="medium">{technology}</Label>
  })

  return (
    <Item.Group>
      <Item>
        <Image src={project.image} style={{ height: 300 }} bordered />
          <Item.Content verticalAlign='middle'>
            <Item.Header>{project.name}</Item.Header>
            <Item.Description>{project.description}</Item.Description>
            <Item.Extra>
              {technologyLabel}
              <br />
              <div style={{ float: 'right' }}>
                {project.url &&
                  <a href={project.url} target="_blank" rel="noreferrer noopener">
                    <Icon name="external alternate" id={`urlIcon-${project.id}`} color="teal" size="large" />
                  </a>
                }
                <a href={project.github} target="_blank" rel="noreferrer noopener">
                  <Icon name="github" id={`gitIcon-${project.id}`} color="teal" size="large" />
                </a>
              </div>
            </Item.Extra>
          </Item.Content>
      </Item>
    </Item.Group>
  );
};

export default ProjectItem;
