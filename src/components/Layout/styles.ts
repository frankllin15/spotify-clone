import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: calc(100vh - 90px) 90px;
  min-height: 100vh;
  max-width: 100vw;
`;
