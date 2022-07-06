import React from "react";
import { Container } from "./styles/container.styled";
import { Flex } from "./styles/Flex.styled";
import { FooterStyle } from "./styles/Footer.styled";

const Footer = () => {
  return (
    <FooterStyle>
      <Container>
        <img src="./images/logo_white.svg" alt="" />
        <Flex>
          <ul>
            <li>Lorem ipsum dolor sit amet</li>
            <li>+98786899</li>
            <li>Good Ratings</li>
          </ul>
          <ul>
            <li>About Us</li>
            <li>What We Do</li>
            <li>FAQ</li>
          </ul>
          <ul>
            <li>Career</li>
            <li>Blog</li>
            <li>Contact Us</li>
          </ul>
        </Flex>

        <p>&copy; 2022 rahul krishnan reserved license</p>
      </Container>
    </FooterStyle>
  );
};

export default Footer;
