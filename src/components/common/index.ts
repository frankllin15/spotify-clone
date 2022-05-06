import styled from "styled-components";

type WrapperIconProps = {
  isActive?: boolean;
};

export const ActivableButton = styled.button<WrapperIconProps>`
  position: relative;
  background: transparent;
  border: none;
  fill: var(--gray-light);
  transition: fill 0.2s ease-in-out;
  :hover {
    fill: var(--white);
  }
  ${({ isActive }) =>
    isActive &&
    `
    fill: var(--primary);
    :after {
      position: absolute;
      content: "";
      display: block;
      width: 4px;
      height: 4px;
      border-radius: 50%;
      background: var(--primary);
      margin: 0 8px;
    }
    `}
  & > svg {
    pointer-events: none;
  }
`;

export const ProgressBar = styled.div`
  width: 100%;
  height: 4px;
  background-color: var(--gray-light);
  border-radius: 2px;
  position: relative;
  overflow: hidden;
`;

type ProgressBarProps = {
  progress: number;
};

export const Progress = styled.div<ProgressBarProps>`
  transition: width 0.2s ease-in-out;
  width: ${(props) => props.progress || 0}%;
  height: 4px;
  background-color: var(--primary);
  border-radius: 2px;
  position: absolute;
  top: 0;
  left: 0;
`;

export const PlayButton = styled.button`
  width: ${({ theme }) => theme.size}px;
  height: ${({ theme }) => theme.size}px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.fill};
  border: none;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  svg {
    width: ${({ theme }) => theme.icon.size || 16}px;
    height: ${({ theme }) => theme.icon.size || 16}px;
    fill: ${({ theme }) => theme.icon.fill || "var(--white)"};
    color: ${({ theme }) => theme.icon.fill || "var(--white)"};
  }
  :hover {
    transform: scale(1.05);
  }
`;

export const SubTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 500;
  color: var(--white);
  margin-bottom: 1rem;
`;

export const ContainerPadding = styled.div`
  padding: 0 2rem;
`;
