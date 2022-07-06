import styled from "styled-components";

export const FooterStyle = styled.footer`
  position: relative;
  background: ${({ theme }) => theme.footer};
  margin: 2rem 0 0 0;
  padding-top: 5rem;
  color: #fff;

  & > img {
    pointer-events: none;
    text-align: left;
  }
  & > div > div {
    padding: 10rem 0 6rem 0;
  }

  ul li {
    margin-bottom: 2.5rem;
    color: inherit;
    font-size: 1.7rem;
    text-transform: capitalize;
  }

  p {
    text-align: start;
    margin-bottom: 0;
    padding-bottom: 1rem;
  }

  @media (max-width: ${({ theme }) => theme.tablet}) {
    text-align: center;

    & > div > div {
      flex-direction: row;
      -webkit-flex-direction: row;
      padding: 7rem 0 5rem 0;

      ul li {
        font-size: 1.4rem;
        text-transform: capitalize;
      }
    }

    ul {
      padding: 0;
    }
    p {
      text-align: center;
    }
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    & > div > div {
      ul li {
        font-size: 1.2rem;
      }
    }

    p {
      font-size: 1.2rem;
    }
   img {
      width: 75%;
    }

  }
`;
