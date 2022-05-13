import useMediaQuery from "../../hooks/MediaQueryHook";
import { AsideNav } from "../AsideNav";
import { FooterNavMobile } from "../FooterNavMobile";
import { Header } from "../Header";
import { PlayerBar } from "../PlayerBar";
import { PlayerBarMobile } from "../PlayerBarMobile";
import { Container, Main } from "./styles";
import {} from "./styles";

type Props = {
  children: React.ReactNode;
};

export const Layout: React.FC<Props> = ({ children }) => {
  const isTablet = useMediaQuery("(max-width: 997px)");

  return (
    <Container>
      <Main>{children}</Main>
      {isTablet ? (
        <>
          <PlayerBarMobile />
          <FooterNavMobile />
        </>
      ) : (
        <>
          <AsideNav />
          <PlayerBar />
        </>
      )}
    </Container>
  );
};
