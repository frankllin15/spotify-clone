import Image from "next/image";
import Link from "next/link";
import { HearthIcon } from "../icons/HearthIcon";
import { HomeIcon } from "../icons/HomeIcon";
import { LibraryIcon } from "../icons/LibraryIcon";
import { PlusIcon } from "../icons/PlusIcon";
import { SearchIcon } from "../icons/SearchIcon";
import {
  Container,
  HorizontalLine,
  IconBox,
  ImageWrapper,
  Item,
  ListItems,
  Scrollable,
  StyledLink,
} from "./styles";

export const Aside: React.FC = () => {
  return (
    <Container>
      <ImageWrapper>
        <Image
          src="/images/logo-name-white.png"
          width={2362}
          height={708}
          alt="Spotify logo"
        />
      </ImageWrapper>
      <nav>
        <ListItems>
          <Item>
            <Link href="/" passHref>
              <StyledLink theme={{ isActive: true }}>
                <HomeIcon />
                <span>Inicio</span>
              </StyledLink>
            </Link>
          </Item>
          <Item>
            <Link href="/" passHref>
              <StyledLink theme={{ isActivate: true }}>
                <SearchIcon />
                <span>Buscar</span>
              </StyledLink>
            </Link>
          </Item>
          <Item>
            <Link href="/" passHref>
              <StyledLink theme={{ isActivate: true }}>
                <LibraryIcon />
                <span>Sua biblioteca</span>
              </StyledLink>
            </Link>
          </Item>
        </ListItems>
      </nav>
      <ListItems>
        <Item>
          <Link href="/" passHref>
            <StyledLink theme={{ isActivate: true }}>
              <IconBox>
                <PlusIcon />
              </IconBox>
              <span>Cirar playlist</span>
            </StyledLink>
          </Link>
        </Item>
        <Item>
          <Link href="/" passHref>
            <StyledLink theme={{ isActivate: true }}>
              <IconBox
                theme={{
                  background: "linear-gradient(135deg,#450af5,#c4efd9)",
                }}
              >
                <HearthIcon />
              </IconBox>
              <span>Músicas Curtidas</span>
            </StyledLink>
          </Link>
        </Item>
        <HorizontalLine />
      </ListItems>
      <Scrollable>
        <ListItems>
          <Item>
            <Link href="/" passHref>
              <StyledLink theme={{ isActivate: true, fontWeight: "400" }}>
                <span>Minha Playlist</span>
              </StyledLink>
            </Link>
          </Item>
          <Item>
            <Link href="/" passHref>
              <StyledLink theme={{ isActivate: true, fontWeight: "400" }}>
                <span>Indie Stage</span>
              </StyledLink>
            </Link>
          </Item>
          <Item>
            <Link href="/" passHref>
              <StyledLink theme={{ isActivate: true, fontWeight: "400" }}>
                <span>Hooked on a Feeling</span>
              </StyledLink>
            </Link>
          </Item>
          <Item>
            <Link href="/" passHref>
              <StyledLink theme={{ isActivate: true, fontWeight: "400" }}>
                <span>Projeto Sola - Discografia</span>
              </StyledLink>
            </Link>
          </Item>
          <Item>
            <Link href="/" passHref>
              <StyledLink theme={{ isActivate: true, fontWeight: "400" }}>
                <span>Lofi Fuits Music</span>
              </StyledLink>
            </Link>
          </Item>
          <Item>
            <Link href="/" passHref>
              <StyledLink theme={{ isActivate: true, fontWeight: "400" }}>
                <span>Brasil anos 90</span>
              </StyledLink>
            </Link>
          </Item>
          <Item>
            <Link href="/" passHref>
              <StyledLink theme={{ isActivate: true, fontWeight: "400" }}>
                <span>This is Tom Jobim</span>
              </StyledLink>
            </Link>
          </Item>
        </ListItems>
      </Scrollable>
    </Container>
  );
};
