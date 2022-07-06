import React from "react";
import { data as CardContents } from "../utils/content";
import Card from "./Card";
import { Container } from "./styles/container.styled";

const Content = () => {
  return (
    <Container>
      {CardContents.map(({ id, title, body, image }) => {
        return (
          <Card key={id} id={id} title={title} body={body} image={image} />
        );
      })}
    </Container>
  );
};

export default Content;
