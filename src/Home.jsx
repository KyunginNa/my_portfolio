import React from "react";
import { Container, Item } from "semantic-ui-react";

const paragraph = `My name is Kyungin Na, a web developer based in Stockholm, Sweden. I'm
          currently studying at Craft Academy to start a career as a full stack
          web developer. On this website, you can find some brief information
          about me and the projects that I have worked on.`;

const Home = () => {
  return (
      <Container>
        <Item>
          <Item.Image size="small" src="./photo/grad.png" />
          <Item.Content>
            <Item.Header>Hi!😊</Item.Header>
            <Item.Description>{paragraph}</Item.Description>
          </Item.Content>
        </Item>
      </Container>
  );
};

export default Home;
