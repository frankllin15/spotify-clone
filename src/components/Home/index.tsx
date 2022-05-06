import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import useMediaQuery from "../../hooks/MediaQueryHook";
import { Header } from "../Header";
import { DownIcon } from "../icons/DownIcon";
import { MediaCardGroup } from "../MediaCard";
import { Button, Container, WidgetUser, WidgetUserAvatar } from "./styles";
import { MediaCardSlim } from "../MediaCardSlim";
import { MediaCardSlimGroup } from "../MediaCardSlim/styles";
import { useAuth } from "../../context/Auth/AuthProvider";
import { Recommendation } from "../../types";

type Props = {
  userTopArtists: SpotifyApi.ArtistObjectFull[];
  recommendations?: Recommendation[];
  userTopTracks: SpotifyApi.TrackObjectFull[];
  recentilyPlayed: SpotifyApi.TrackObjectFull[];
  featuredPlaylists: SpotifyApi.PlaylistObjectFull[];
};

export const Home: React.FC<Props> = ({
  userTopArtists,
  userTopTracks,
  recentilyPlayed,
  featuredPlaylists,
}) => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const isTablet = useMediaQuery("(min-width: 768px) and (max-width: 1024px)");
  const { user } = useAuth()!;
  return (
    <Fragment>
      {/* <Main> */}
      <Header>
        <Button hidden={isTablet || isMobile}>Faça Upgrade</Button>
        <WidgetUser closed={isMobile}>
          <WidgetUserAvatar>
            <Image
              layout="fill"
              src={user?.images[0].url || "/images/avatar.webp"}
              alt={user?.display_name}
            />
          </WidgetUserAvatar>
          <span>{user?.display_name}</span>
          <DownIcon />
        </WidgetUser>
      </Header>

      <Container>
        <Head>
          <title>Spotify</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        {/* <iframe
            style={{ borderRadius: "12px" }}
            src="https://open.spotify.com/embed/track/0yzj6eBs5a6X6d3P5qaQ5J?utm_source=generator"
            width="100%"
            height="80"
            frameBorder="0"
            allowFullScreen={false}
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            contextMenu="true"
          ></iframe> */}
        {/* <MediaGroupLabel>
          <Title>Bem vindo ao Spotify clone</Title>
        </MediaGroupLabel> */}
        <MediaCardSlimGroup>
          {userTopTracks?.map((track, index) => (
            <MediaCardSlim key={track.id} item={track} />
          ))}
        </MediaCardSlimGroup>

        <MediaCardGroup items={userTopArtists} label="Seus artista favoritos" />

        <MediaCardGroup
          items={recentilyPlayed.map(({ album, ...track }) => ({
            images: album.images,
            ...track,
          }))}
          label="Tocadas recentimente"
        />

        <MediaCardGroup items={featuredPlaylists} label="Playlists bombando" />
      </Container>
    </Fragment>
  );
};