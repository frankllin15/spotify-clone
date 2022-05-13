import Link from "next/link";
import { useRouter } from "next/router";
import { HomeIcon } from "../icons/HomeIcon";
import { LibraryIcon } from "../icons/LibraryIcon";
import { SearchIcon } from "../icons/SearchIcon";
import { Container, StyledLink } from "./styles";

export const FooterNavMobile: React.FC = () => {
  const router = useRouter();
  const { pathname } = router;
  return (
    <Container>
      <Link href="/" passHref>
        <StyledLink isActive={true}>
          <HomeIcon />
          <span>Inicio</span>
        </StyledLink>
      </Link>
      <Link href="/search" passHref>
        <StyledLink>
          <SearchIcon />
          <span>Busca</span>
        </StyledLink>
      </Link>
      <Link href="/" passHref>
        <StyledLink>
          <LibraryIcon />
          <span>Biblioteca</span>
        </StyledLink>
      </Link>
    </Container>
  );
};
