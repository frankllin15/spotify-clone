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

export const PlaylistInfo = styled.div`
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
  span {
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

export const RowContainer = styled.div`
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
