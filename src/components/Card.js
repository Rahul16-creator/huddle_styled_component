import React from "react";
import { StyledCard } from "./styles/Card.style";

const Card = ({ id, title, body, image }) => {
  return (
    <StyledCard variant={id % 2 === 0 && "row-reverse"}>
      <div>
        <h1>{title}</h1>
        <p>{body}</p>
      </div>
      <div>
        <img src={`/images/${image}`} alt={image.split(".")[0]} />
      </div>
    </StyledCard>
  );
};

export default Card;
