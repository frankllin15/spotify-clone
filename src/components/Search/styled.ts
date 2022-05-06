import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 0 1rem;
  width: 100%;
  min-height: 100%;
  padding: 6rem 2rem;
`;

export const SearchInput = styled.input`
  margin-right: auto;
  min-width: 300px;
  max-width: 374px;
  width: 100%;
  height: 40px;
  border: none;
  border-radius: 24px;
  padding: 0 1rem;
  font-size: 1.2rem;
  font-weight: 500;
  background: var(--white);
  color: var(--gray-dark);
  outline: none;
  transition: all 0.2s ease-in-out;
  &:focus {
    border: 1px solid var(--primary);
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  }
  &::placeholder {
    color: var(--black-light);
    font-size: 0.875rem;
  }
`;
