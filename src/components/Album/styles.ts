import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  position: relative;
  /* background: var(--black-base); */
  padding: 2rem 0;
  background: linear-gradient(
    180deg,
    ${({ theme }) =>
        theme.primaryColor ? theme.primaryColor : "rgba(23, 45, 65, 0.5)"}
      10vh,
    var(--black-base) 70vh
  );
`;

export const AlbumInfo = styled.div`
  padding: 0 2rem 24px 2rem;
  height: 278px;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  gap: 1.5rem;

  h1 {
    font-size: 3rem;
    font-weight: 700;
    color: #fff;
    margin-bottom: 0.8rem;
  }
  span,
  a {
    font-size: 0.875rem;
    font-weight: 500;
    color: #fff;
  }
  p {
    color: var(--gray-light);
    margin-bottom: 0.3rem;
  }
  time {
    color: var(--gray-light);
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 192px;
  height: 192px;
  min-width: 192px;
`;

export const ContainerRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 104px;
  padding: 2rem;
  gap: 2rem;
`;

export const PlayerButton = styled.button`
  background: var(--primary);
  width: 56px;
  height: 56px;
  border-radius: 50%;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  :hover {
    transform: scale(1.03);
  }
  svg {
    width: 24px;
    height: 24px;
  }
`;
export const IconWrapper = styled.div`
  svg {
    width: 24px;
    height: 24px;
    fill: var(--primary);

    & > path {
      fill: var(--primary);
    }
  }
`;

export const TrackList = styled.div`
  padding: 0 2rem;
  width: 100%;

  /* background: rgba(0, 0, 0, 0.3); */
`;

export const GridIndex = styled.div`
  grid-area: index;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    display: none;
    fill: var(--white);
    color: var(--white);
    width: 16px;
    height: 16px;
  }
  p {
    color: var(--gray-light);
  }
`;

export const GridTitle = styled.div`
  grid-area: title;
  display: flex;
  align-items: center;
  flex-direction: colum;
  justify-content: flex-start;
  gap: 1rem;

  div {
    max-width: calc(100% - 40px);
  }
  h3 {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 1rem;
    font-weight: 500;
    color: var(--white);
    margin-bottom: 0.3rem;
  }
  p {
    font-size: 0.875rem;
    color: var(--gray-light);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;
export const GridInfo = styled.div`
  grid-area: info;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  p {
    color: var(--gray-light);
    font-size: 1rem;
    display: block;
  }
  button {
    opacity: 0;
  }
  :hover {
  }
  svg {
    width: 16px;
    height: 16px;
    fill: var(--gray-light);
  }
`;

export const GridRow = styled.div`
  padding: 0 1rem;
  display: grid;
  width: 100%;
  height: 56px;
  grid-template-columns: 1rem minmax(197px, 2fr) minmax(97px, 1fr) 110px;
  cursor: default;
  grid-template-areas: "index title album info";
  gap: 2rem;
  margin-bottom: 0.5;
  border-radius: 5px;
  :hover {
    background: rgba(0, 0, 0, 0.3);
  }

  :hover {
    ${GridIndex} {
      svg {
        display: block;
      }
      p {
        display: none;
      }
    }
    ${GridInfo} {
      button {
        opacity: 1;
      }
    }
  }
`;
