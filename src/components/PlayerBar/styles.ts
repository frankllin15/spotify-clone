import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr minmax(380px, 433px) 1fr;
  grid-column: 1 / span 2;
  width: 100%;
  height: 100%;
  background: var(--gray-dark);
  padding: 0px 16px;
`;

export const WrapperRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
`;
export const WrapperIcon = styled.div`
  margin-right: 16px;
  color: var(--gray-light);
  fill: var(--gray-light);
  :hover {
    color: var(--white);
    fill: var(--white);
  }
`;

export const WrapperImage = styled.div`
  position: relative;
  width: 56px;
  height: 56px;
  min-width: 56px;
  background: var(--gray-light);
`;

export const WrapperInfo = styled.div`
  display: flex;
  // width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0px 14px;
  height: 100%;
  h2 {
    font-size: 0.875rem;
    font-weight: 400;
  }
  p {
    font-size: 0.688rem;
    font-weight: 300;
  }
`;
