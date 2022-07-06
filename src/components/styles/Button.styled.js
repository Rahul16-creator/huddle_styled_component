import styled from "styled-components";

export const Button = styled.button`
  position: relative;
  border-radius: 50px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  padding: 1.5rem 3rem;
  cursor: pointer;
  font-size: 1.6rem;
  font-weight: 700;
  border: none;
  font-family: inherit;
  outline: none;
  background: ${({ bg }) => bg || "#fff"};
  color:${({color})=>color || '#333'};
  transition:0.5s;

  &:hover {
      transform:scale(0.98);
      opacity: 0.9;
  }
`;
