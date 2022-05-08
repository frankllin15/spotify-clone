import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContent } from "../../context/Content/ContentProvider";
import { HearthIcon } from "../icons/HearthIcon";
import { HomeFillIcon, HomeIcon } from "../icons/HomeIcon";
import { LibraryFillIcon, LibraryIcon } from "../icons/LibraryIcon";
import { PlusIcon } from "../icons/PlusIcon";
import { SearchFillIcon, SearchIcon } from "../icons/SearchIcon";
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
  const { playlists } = useContent()!;
  const router = useRouter();
  const { pathname } = router;

  console.log(router.pathname);
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
              <StyledLink theme={{ isActive: pathname === "/" }}>
                {pathname === "/" ? (
                  <HomeFillIcon />
                ) : (
                  <HomeIcon fill="var(--gray-light)" />
                )}
                <span>Inicio</span>
              </StyledLink>
            </Link>
          </Item>
          <Item>
            <Link href="/search" passHref>
              <StyledLink theme={{ isActive: pathname === "/search" }}>
                {pathname === "/search" ? <SearchFillIcon /> : <SearchIcon />}
                <span>Buscar</span>
              </StyledLink>
            </Link>
          </Item>
          <Item>
            <Link href="/collections" passHref>
              <StyledLink theme={{ isActive: pathname === "/collections" }}>
                {pathname === "/collections" ? (
                  <LibraryFillIcon fill="#fff" />
                ) : (
                  <LibraryIcon />
                )}

                <span>Sua biblioteca</span>
              </StyledLink>
            </Link>
          </Item>
        </ListItems>
      </nav>
      <ListItems>
        <Item>
          <Link href="/" passHref>
            <StyledLink theme={{ isActive: true }}>
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
          {playlists &&
            playlists.map((playlist) => (
              <Item key={playlist.id}>
                <Link href={`/playlist/${playlist.id}`} passHref>
                  <StyledLink theme={{ isActivate: true, fontWeight: "400" }}>
                    <p>{playlist.name}</p>
                  </StyledLink>
                </Link>
              </Item>
            ))}
        </ListItems>
      </Scrollable>
    </Container>
  );
};
