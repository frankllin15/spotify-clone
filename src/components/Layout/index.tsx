import { Aside } from "../Aside";
import { Header } from "../Header";
import { PlayerBar } from "../PlayerBar";
import { Container, Main } from "./styles";
import {} from "./styles";

type Props = {
  children: React.ReactNode;
};

export const Layout: React.FC<Props> = ({ children }) => {
  return (
    <Container>
      <Aside />
      <Main>{children}</Main>
      <PlayerBar />
    </Container>
  );
};
