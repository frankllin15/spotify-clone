import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { convertMsToHM, millisToMinutesAndSeconds } from "../../utils/format";
import { PlayButton } from "../common";
import { Header } from "../Header";
import { HearthFillIcon } from "../icons/HearthFill";
import { HearthIcon } from "../icons/HearthIcon";
import { OptionsIcon } from "../icons/OptionsIcon";
import { PlayIcon } from "../icons/PlayIcon";
import { TimerIcon } from "../icons/TimerIcon";
import { GridHeader } from "../Playlist/GridHeader";
import { StylelessButton } from "../Playlist/styles";
import {
  AlbumInfo,
  Container,
  ContainerRow,
  GridInfo,
  GridRow,
  GridTitle,
  TrackList,
  GridIndex,
  ImageWrapper,
} from "./styles";

type Props = {
  album: SpotifyApi.AlbumObjectFull;
};

export const AlbumComponent: React.FC<Props> = ({ album }) => {
  const totalDuration = album.tracks.items.reduce((acc, curr) => {
    const duration = curr.duration_ms;

    return acc + duration;
  }, 0);

  return (
    <>
      <Head>
        <title>Spotify {album && ` - ${album.name}`}</title>
      </Head>
      <Header>
        <h1>{album.name}</h1>
        <p> </p>
      </Header>
      <Container>
        <AlbumInfo theme={{ backgroundImage: album.images[0].url }}>
          <ImageWrapper>
            <Image src={album.images[0].url} layout="fill" alt={album.name} />
          </ImageWrapper>
          <div>
            <p>Álbum</p>

            <h1>{album.name}</h1>

            <p>
              {album.artists.map((artist) => (
                <Link key={artist.id} href={`/artist/${artist.id}`}>
                  <a>{artist.name}</a>
                </Link>
              ))}
              • {album.total_tracks} músicas, {convertMsToHM(totalDuration)}
            </p>
          </div>
        </AlbumInfo>
        <ContainerRow>
          <PlayButton
            theme={{
              size: "56",
              color: "white",
              fill: "var(--primary)",
              icon: {
                size: "24",
                fill: "var(--black)",
              },
            }}
          >
            <PlayIcon />
          </PlayButton>
          <HearthFillIcon
            style={{
              fill: "var(--primary )",
              width: "32px",
              height: "32px",
            }}
          />
          <OptionsIcon
            style={{
              fill: "var(--gray-light)",
            }}
          />
        </ContainerRow>
        <TrackList>
          <GridHeader>
            <GridIndex>#</GridIndex>
            <GridTitle>Título</GridTitle>
            <GridInfo>
              <TimerIcon />
            </GridInfo>
          </GridHeader>
          {album.tracks.items.map((track, index) => (
            <GridRow key={track.id}>
              <GridIndex>
                <PlayIcon />
                <p>{index + 1}</p>
              </GridIndex>
              <GridTitle>
                <div>
                  <h3>{track.name}</h3>
                  <p>
                    {track.artists.map((artists) => artists.name).join(", ")}
                  </p>
                </div>
              </GridTitle>
              <GridInfo>
                <StylelessButton>
                  <HearthIcon />
                </StylelessButton>
                <p>{millisToMinutesAndSeconds(track.duration_ms)}</p>
                <StylelessButton>
                  <OptionsIcon />
                </StylelessButton>
              </GridInfo>
            </GridRow>
          ))}
        </TrackList>
      </Container>
    </>
  );
};
