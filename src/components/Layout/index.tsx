import { Aside } from "../Aside";
import { PlayerBar } from "../PlayerBar";
import { Container } from "./styles";

type Props = {
  children: React.ReactNode;
};

export const Layout: React.FC<Props> = ({ children }) => {
  return (
    <Container>
      <Aside />
      <main>{children}</main>
      <PlayerBar />
    </Container>
  );
};
