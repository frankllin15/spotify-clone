import styled from "styled-components";

export const Container = styled.aside`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 100%;
  background-color: var(--black);
  padding: 24px 0px 0;
`;

export const ListItems = styled.ul`
  padding: 0;
  list-style: none;
  margin: 0 24px 22px;
`;

export const Item = styled.li`
  width: 100%;
  padding: 8px 0;
  cursor: pointer;
`;
export const StyledLink = styled.a`
  text-decoration: none;
  display: flex;
  gap: 16px;
  align-items: center;
  font-weight: ${({ theme }) => (theme.fontWeight ? theme.fontWeight : "700")};
  font-size: ${({ theme }) => (theme.fontSize ? theme.fontSize : ".875rem")};
  
  transition: 0.3s ease-in-out;
  fill: ${(props) =>
    props.theme.isActive ? "var(--white)" : "var(--gray-light)"}};
    
  color: ${(props) =>
    props.theme.isActive ? "var(--white)" : "var(--gray-light)"};}
    
  :hover {
    fill: var(--white);
    color: var(--white);
    
     div {
      background-color: var(--white);
    }
  }
`;

export const ImageWrapper = styled.div`
  width: 131px;
  margin-left: 24px;
  margin-bottom: 22px;
`;

export const IconBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 3px;
  background: ${({ theme }) =>
    theme.background ? theme.background : "var(--gray-light)"};
`;

export const Scrollable = styled.div`
  overflow-y: scroll;
  height: 100%;
`;

export const HorizontalLine = styled.hr`
  width: 100%;
  height: 1px;
  background-color: #282828;
  margin: 0.8rem 0 0;
  border: none;
`;
