import styled from "styled-components";

export const HeaderBar = styled.header`
  position: fixed;
  display: flex;
  right: 0;
  width: 100%;
  max-width: calc(100% - 300px);
  justify-content: space-between;
  align-items: center;
  padding: 0 32px;
  gap: 2rem;
  height: 64px;
  background: rgba(0, 0, 0, 0.5);
  z-index: 100;
`;
export const Button = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.3);
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: none;
  outline: none;
  cursor: pointer;
  fill: #fff;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  flex-wrap: nowrap;
`;
