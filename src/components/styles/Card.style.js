import styled from "styled-components";

export const StyledCard = styled.div`
  position: relative;
  margin: 3rem 0 0 0;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  padding: 4rem;
  display: flex;
  align-items: center;
  gap: 2rem;
  flex-direction: ${({ variant }) => variant || ""};
  border-radius: 1.5rem;
  background: ${({ theme }) => theme.body};

  & > div {
    flex: 1;
    & > img {
      width: 80%;
      pointer-events:none;
      user-select:none;
    }
  }

  @media screen and (max-width: ${({ theme }) => theme.tablet}) {
    flex-direction: column;
  }
`;
