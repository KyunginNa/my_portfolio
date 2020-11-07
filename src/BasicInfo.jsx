import React from "react";
import { Item } from "semantic-ui-react";

const BasicInfo = () => {
  return (
    <Item>
      <Item.Image size="small" src="photo/grad.png" />
      <Item.Content verticalAlign="middle">
        <Item.Description>
          <p>
            I'm a web developer living in Stockholm, Sweden. I'm currently
            studying at Craft Academy to be a 'great' full stack web developer.
          </p>
          <p>
            I have a passion in creating things and solving problems in logical
            ways, which explains why I love programming.
          </p>
          <p>
            I aim to be a programmer who communicates well with teammates, and
            also with clients.
          </p>
        </Item.Description>
      </Item.Content>
    </Item>
  );
};

export default BasicInfo;
