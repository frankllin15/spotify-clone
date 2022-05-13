import styled from "styled-components";

export const Container = styled.nav`
  grid-area: footernav;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: var(--gray-dark);
`;

export const StyledLink = styled.a<{ isActive?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${({ isActive }) => (isActive ? "var(--white)" : "var(--gray-light)")};
  font-size: 0.5rem;
  font-weight: bold;
  svg {
    fill: var(--white);
    width: 1.5rem;
  }
`;
