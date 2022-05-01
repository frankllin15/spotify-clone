import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 0 20px;
  width: 100%;
  height: 100%;
`;

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const IconsGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
`;

export const PlayPauseButton = styled.button`
  width: 33px;
  height: 33px;
  border-radius: 50%;
  border: none;
  background-color: var(--white);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  :hover {
    background-color: var(--gray-light);
  }
  & > svg {
    pointer-events: none;
  }
`;

export const ProgressTime = styled.div`
  font-size: 0.688rem;
  color: var(--gray-light);
  text-align: center;
`;
