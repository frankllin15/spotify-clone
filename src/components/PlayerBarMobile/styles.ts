import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  grid-area: playerbar;
  width: 100%;
  height: 100%;
  background-color: red;
  padding-right: 1rem;
  background-color: var(--gray-dark);
`;

export const ContainerRow = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  /* height: 100%; */
  h2 {
    font-size: 1rem;
  }
  p {
    font-size: 0.875rem;
  }

  svg {
    fill: var(--white);
    width: 1.5rem;
    height: 1.5rem;
  }
`;

export const ImageWrapper = styled.div`
  height: 100%;
  width: 56px;
  position: relative;
`;
