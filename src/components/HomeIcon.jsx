import React from "react";
import { Button, Icon } from "semantic-ui-react";

const HomeIcon = () => {
  return (
    <div>
      <a href="mailto:nakyungin93@gmail.com">
        <Button animated="vertical" basic color="grey">
          <Button.Content hidden>
            <Icon name="mail" />
          </Button.Content>
          <Button.Content visible>Contact Me</Button.Content>
        </Button>
      </a>

      <a href="https://www.linkedin.com/in/kyungin-na-636b8b175/">
        <Button animated="vertical" basic color="grey">
          <Button.Content hidden>
            <Icon name="linkedin" />
          </Button.Content>
          <Button.Content visible>LinkedIn</Button.Content>
        </Button>
      </a>

      <a href="https://github.com/KyunginNa">
        <Button animated="vertical" basic color="grey">
          <Button.Content hidden>
            <Icon name="github" />
          </Button.Content>
          <Button.Content visible>Github</Button.Content>
        </Button>
      </a>
    </div>
  );
};

export default HomeIcon;
