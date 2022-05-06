import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100%;
  gap: 1.5rem;
  background: linear-gradient(
    180deg,
    rgb(225, 225, 225, 0.7) 1vh,
    var(--black-base) 100vh
  );
`;
export const ArtistInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  width: 100%;
  height: 340px;
  padding-bottom: 1.5rem;
  gap: 1rem;
  background-image: url(${({ theme }) => theme.backgroundImage});
  background-image: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.1),
      rgba(0, 0, 0, 0.9)
    ),
    url(${({ theme }) => theme.backgroundImage});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-color: rgba(0, 0, 0, 0.9);
  padding: 0 2rem 1rem 2rem;

  h1 {
    font-size: 4rem;
  }
  p {
    font-size: 1rem;
  }
`;

export const ContainerRow = styled.div`
  padding: 0 2rem;

  display: flex;
  flex-direction: row;

  width: 100%;
  align-items: center;

  gap: 2rem;
`;

export const ImageWrapper = styled.div`
  width: 40px;
  height: 40px;
  position: relative;
`;

export const FollowButton = styled.button`
  min-width: 83px;
  max-width: max-content;
  padding: 7px 15px;
  border-radius: 5px;
  border: solid 1px rgba(255, 255, 255, 0.3);
  background-color: rgba(0, 0, 0, 0.1);
  color: var(--white);
  font-size: 0.75rem;
  font-weight: 700;
  font-family: "Rubik", sans-serif;
  letter-spacing: 1px;
  :hover {
    border-color: white;
  }
`;
