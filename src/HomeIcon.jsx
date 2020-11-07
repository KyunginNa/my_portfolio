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

      {/*             
      <Icon.Group size="big">
         <a href="https://www.linkedin.com/in/kyungin-na-636b8b175/">
          <Icon name="linkedin" color="black" style={{ paddingRight: "5px" }} />
        </a>
        <a href="https://github.com/KyunginNa">
          <Icon name="github" color="black" style={{ paddingRight: "5px" }} />
        </a> 
      </Icon.Group>  */}
    </div>
  );
};

export default HomeIcon;
