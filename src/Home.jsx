import React from "react";
import { Container, Item } from "semantic-ui-react";
import "./home.css";

const Home = () => {
  return (
    <Container id="welcome">
      <Item.Group>
        <Item>
          {/* <Item.Image size="medium" src="./photo/grad.png" /> */}
          <Item.Content verticalAlign="middle" text>
            <Item.Header as="a">
              <h1>Hi!😃</h1>
            </Item.Header>
            <Item.Description>
              <h2>
                My name is Kyungin Na, <br />a web developer based in Stockholm,
                Sweden.
              </h2>
              <p>
                I'm currently studying at Craft Academy to start a career as a
                full stack web developer.
              </p>
              <p>
                On this website, you can find some brief information about me
                and check the projects that I have worked on.
              </p>
            </Item.Description>
          </Item.Content>
        </Item>
      </Item.Group>
    </Container>
  );
};

export default Home;
