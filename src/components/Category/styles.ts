import styled from "styled-components";

export const CategoryCardContent = styled.div`
  max-width: 229;
  min-width: 184px;
  max-height: 229;
  min-height: 184px;
  flex: 1;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.4);
  padding: 1rem;
  & h2 {
    font-size: 1rem;
    font-weight: bold;
    color: #fff;
  }
  background: url(${({ theme }) => theme.backgroundImage});
  background-position: right center;
  background-size: cover;
  border-radius: 5px;
`;

export const CategoryCardGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(184px, 1fr));

  /* flex-direction: row; */
  max-width: 100%;
  flex-wrap: wrap;
  gap: 1rem;
`;
