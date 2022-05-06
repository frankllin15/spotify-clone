import styled from "styled-components";

export const Container = styled.div`
  bottom: 0;
  display: grid;
  grid-template-columns: 300px calc(100vw - 300px);
  grid-template-rows: calc(100vh - 90px) 90px;
  min-height: 100vh;
  max-width: 100vw;
  height: 100vh;
  width: 100%;
`;

export const Main = styled.main`
  /* background: rgba(0, 0, 0, 0.5); */
  /* margin: 0px 0 90px; */
  /* width: 100%; */
  /* min-height: 100%; */
  padding: 0;
  overflow-y: scroll;
`;
