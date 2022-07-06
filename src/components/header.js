import React from "react";
import { Button } from "./styles/Button.styled";
import { Container } from "./styles/container.styled";
import { Flex } from "./styles/Flex.styled";
import { Logo, Nav, StyledHeader,Image } from "./styles/Header.styled";

const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <Nav>
          <Logo src="/images/logo.svg" alt="Logo" />
          <Button>Try it for free</Button>
        </Nav>
        <Flex>
            <div>
                <h1>Build the community you fall will Love</h1>
                <p>when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                <Button bg="#ff0099" color="#fff">Get Started For Free</Button>
            </div>
            <Image src="/images/illustration-mockups.svg" alt="home_img" />
        </Flex>
      </Container>
    </StyledHeader>
  );
};

export default Header;
