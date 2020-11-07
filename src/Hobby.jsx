import React from "react";
import { Item } from "semantic-ui-react";

const Hobby = () => {
  return (
    <Item>
      <Item.Content verticalAlign="middle">
        <Item.Header>Hobby</Item.Header>
        <Item.Description>
          <p>
            Yoga <br />
            Check Interior design inspiration on magazines or Pinterest
            <br />
            Watch videos and photos of cute dogs on youtube or instagram
            <br />
            Watch Friends
          </p>
        </Item.Description>
      </Item.Content>
    </Item>
  );
};

export default Hobby;
