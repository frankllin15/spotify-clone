import styled, { css } from "styled-components";

export const Container = styled.a`
  display: flex;
  max-width: 240px;
  min-width: 155px;
  flex: 1;
  flex-direction: column;
  align-items: center;
  padding: 1rem 1rem 2rem;
  margin: 0px 0 40px;
  gap: 18px;
  border-radius: 8px;
  background: rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: background 0.2s ease-in-out;

  &:hover {
    background: rgba(0, 0, 0, 0.3);

    & button {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const ContainerRow = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: row;
  gap: 1rem;
  overflow-y: hidden;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 100%;
  align-self: flex-start;
  & > h2 {
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;

    white-space: nowrap;
    color: var(--white);
    font-size: 1rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
  }

  & > p {
    color: var(--gray-light);
    font-size: 0.875rem;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;

  ${({ theme }) =>
    theme.type === "artist"
      ? css`
          border-radius: 50%;
          img {
            border-radius: 50%;
          }
        `
      : css`
          & img {
            border-radius: 5px;
          }
        `};

  box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
`;

export const Label = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  width: 100%;
  gap: 1rem;
  margin-bottom: 1rem;

  & h3 {
    color: var(--white);
    font-size: 1.5rem;
    font-weight: 700;
  }
  & span {
    color: var(--gray-light);
    font-size: 0.875rem;
    font-weight: 700;
  }
  h3,
  span {
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const FloatingButton = styled.button`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  bottom: 10px;
  right: 10px;
  width: 48px;
  height: 48px;
  background: var(--primary);
  border-radius: 50%;
  box-shadow: 0 8px 8px rgb(0 0 0 / 30%);
  border: none;
  outline: none;
  cursor: pointer;
  opacity: 0;
  transform: translateY(10px);
  transition-property: opacity, transform;
  transition: 0.2s ease-in-out;
  z-index: 200;
  & > svg {
    width: 24px;
    height: 20px;
  }
  &:hover {
  }
`;
