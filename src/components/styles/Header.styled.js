import styled from "styled-components";

export const StyledHeader = styled.header`
  background: ${(props) => props.theme.header};
  padding: 40px 0px;

  @media (max-width: 991px) {
    padding: 40px 3rem;
  }

  @media (max-width: 850px) {
    & > div > div > div > h1 {
      font-size: 2.5rem;
    }

    & > div > div > div > p {
      font-size: 1.3rem;
    }
  }

  @media (max-width: 500px) {
    & > div > div > div {
      margin-bottom: 3.5rem;
    }
  }
`;

export const Nav = styled.nav`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 4rem;

  @media (max-width: 550px) {
    flex-direction: column;
    justify-content: center;
    margin-bottom: 2rem;

    & > img {
      margin-bottom: 2.4rem;
    }
  }
`;

export const Logo = styled.img`
  pointer-events: none;
  user-select: none;
`;

export const Image = styled.img`
  width: 375px;
  margin-left: 3rem;
  pointer-events: none;
  user-select: none;
`;
