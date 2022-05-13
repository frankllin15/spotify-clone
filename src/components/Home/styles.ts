import styled, { css } from "styled-components";

type WidgetUserProps = {
  closed?: boolean;
};

export const Container = styled.div`
  padding: 6rem 2rem;

  @media ${({ theme }) => theme.breakpoints.mobile} {
    padding: 2rem 0.5rem;
  }
`;

export const WidgetUser = styled.button<WidgetUserProps>`
  outline: none;
  border: none;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  gap: 8px;
  height: 32px;
  border-radius: 23px 23px 23px 23px;
  background: rgba(0, 0, 0, 0.3);
  cursor: pointer;
  padding: 2px 8px 2px 2px;
  & > span {
    color: var(--white);
    font-size: 0.875rem;
    font-weight: 700;
  }
  white-space: nowrap;
  :hover {
    background-color: #282828;
  }
  ${({ closed }) =>
    closed &&
    css`
      margin-left: auto;
      padding: 2px;
      & > span,
      svg {
        display: none;
      }
    `}
`;

export const WidgetUserAvatar = styled.div`
  position: relative;
  width: 28px;
  min-width: 28px;
  height: 28px;
  border-radius: 50%;
  overflow: hidden;
`;

export const Button = styled.button`
  outline: none;
  border: solid 1px var(--gray-light);
  display: flex;
  flex-grow: 0;
  align-items: center;
  background: transparent;
  color: var(--white);
  border-radius: 44px 44px 44px 44px;
  height: 32px;
  padding: 7px 1rem;
  font-size: 0.8rem;
  font-family: "Rubik", sans-serif;
  font-weight: 700;
  margin-left: auto;
  :hover {
    transform: scale(1.04);
    border-color: solid 4px var(--white);
    background: black;
  }
  ${({ hidden }) => hidden && "display: none;"}
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: var(--white);
`;
