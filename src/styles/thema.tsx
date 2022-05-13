import { ReactNode } from "react";
import { CSSProperties } from "styled-components";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./globals";
const theme = {
  mobile: {
    maxWidth: "767px",
  },
  tablet: {
    maxWidth: "997px",
  },
  breakpoints: {
    mobile: "(max-width: 767px)",
    tablet: "(min-width: 768px) and (max-width: 997px)",
  },
};

export const GlobalStyleProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    {children}
  </ThemeProvider>
);
