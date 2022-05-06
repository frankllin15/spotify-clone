import React, { ReactNode, useEffect, useState } from "react";
import styled from "styled-components";
import { GridAlbum, Separator } from "./styles";

export const GridHeader: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [stuck, setStuck] = useState(false);
  const ref = React.createRef<HTMLDivElement>();

  const styles = {
    backgroundColor: "var(--black-base)",
    width: "calc(100% + 4rem)",
    marginRight: "50%",
    transform: "translateX(-2rem)",
    padding: "0 3rem",
    borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
    zIndex: 200,
  };

  const inlineStyles = {
    ...(stuck ? styles : {}),
  } as React.CSSProperties;

  useEffect(() => {
    const cachedRef = ref.current as HTMLElement;
    const observer = new IntersectionObserver(
      ([e]) => setStuck(e.intersectionRatio < 1),
      {
        threshold: [1],
        rootMargin: "-65px 0px 0px 0px",
      }
    );
    observer.observe(cachedRef);
    return () => observer.unobserve(cachedRef);
  }, [ref]);

  return (
    <StyledGridHeader style={stuck ? styles : {}} ref={ref}>
      {children}
    </StyledGridHeader>
  );
};

const StyledGridHeader = styled.div`
  position: sticky;
  top: 64px;
  display: grid;
  grid-template-columns: 1rem minmax(212px, 2fr) minmax(97px, 1fr) 110px;
  grid-template-areas: "index title album info";
  width: 100%;
  height: 36px;
  padding: 0 1rem;
  gap: 2rem;
  margin-bottom: 0.5;

  /* color: var(--gray-light); */
  @media (max-width: 820px) {
    grid-template-columns: 1rem minmax(212px, 1fr) 110px;
    grid-template-areas: "index title info";
    ${GridAlbum} {
      display: none;
    }
  }
`;
