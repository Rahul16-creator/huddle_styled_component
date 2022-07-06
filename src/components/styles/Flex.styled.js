import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
  align-items: center;

  & > div,
  & > ul {
    flex: 1;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 40px 0 20px 0;
    }
  }
`;
