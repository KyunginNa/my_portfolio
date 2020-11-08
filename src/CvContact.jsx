import React from "react";
import { Header, List, Icon } from "semantic-ui-react";

const CvContact = () => {
  return (
    <div>
      <Header id="cv-contact-header" as="h3" color="blue">
        Contact
      </Header>
      <List id="cv-contact-list" style={{ marginBottom: "1em" }}>
        <List.Item>
          <Icon name="mail" color="blue" />
          <List.Content>nakyungin93@gmail.com</List.Content>
        </List.Item>
        <List.Item>
          <List.Icon name="phone" color="blue" />
          <List.Content>(To be updated)</List.Content>
        </List.Item>
        <List.Item>
          <List.Icon name="window maximize outline" color="blue" />
          <List.Content>
            <a href="https://kyungin-portfolio.netlify.app/">
              https://kyungin-portfolio.netlify.app/
            </a>
          </List.Content>
        </List.Item>
        <List.Item>
          <List.Icon name="home" color="blue" />
          <List.Content>
            Lgh 1004, Erik Dahlbergsgatan 39, <br />
            115 32 Stockholm, Sweden
          </List.Content>
        </List.Item>
      </List>
    </div>
  );
};

export default CvContact;
