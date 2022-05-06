import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 64px;
  padding-right: 1rem;
  background: rgba(0, 0, 0, 0.5);
  gap: 1.5rem;
  border-radius: 5px;
  overflow: hidden;
  cursor: pointer;
  h3 {
    color: var(--white);
    font-size: 1rem;
    font-weight: 500;
    margin-right: auto;
    max-width: fit-content;
    word-break: break-word;
  }
  transition: background 0.2s ease-in-out;
  :hover {
    background: rgba(0, 0, 0, 0.2);
    & button {
      opacity: 1;
    }
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 64px;
  height: 64px;
  min-width: 64px;
`;

export const FloatingButton = styled.button`
  width: 48px;
  height: 48px;
  min-width: 48px;
  border: none;
  outline: none;
  opacity: 0;
  border-radius: 50%;
  background: var(--primary);
  box-shadow: 0 8px 8px rgb(0 0 0 / 30%);
  transition: opacity 0.2s ease-in-out;

  & > svg {
    width: 24px;
    height: 20px;
  }
  :hover {
    transform: scale(1.05);
  }
`;

export const MediaCardSlimGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 0.75rem 1.5rem;
  overflow-y: hidden;
  margin: 18px 0 40px;
`;
