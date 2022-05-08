import Image from "next/image";
import { Artist } from "../../types";
import { millisToMinutesAndSeconds } from "../../utils/format";
import { ContainerPadding, PlayButton, SubTitle } from "../common";
import { HearthIcon } from "../icons/HearthIcon";
import { OptionsIcon } from "../icons/OptionsIcon";
import { PlayIcon } from "../icons/PlayIcon";
import { MediaCardGroup } from "../MediaCard";
import {
  GridAlbum,
  GridIndex,
  GridInfo,
  GridRow,
  GridTitle,
  StylelessButton,
  TrackList,
} from "../Playlist/styles";
import {
  ArtistInfo,
  Container,
  ContainerRow,
  FollowButton,
  ImageWrapper,
} from "./styles";

type Props = {
  artist: Artist;
  topTracks: SpotifyApi.TrackObjectFull[] | null;
  albums: SpotifyApi.AlbumObjectFull[] | null;
};

export const ArtistComponent: React.FC<Props> = ({
  artist,
  topTracks,
  albums,
}) => {
  console.log("traks", topTracks);
  return (
    <Container>
      <ArtistInfo theme={{ backgroundImage: artist.images[0].url }}>
        <h1>{artist.name}</h1>
        <p>{artist.followers.total} seguidores</p>
      </ArtistInfo>
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
        <FollowButton>SEGUIR</FollowButton>
        <StylelessButton>
          <OptionsIcon style={{ fill: "var(--gray-light)" }} />
        </StylelessButton>
      </ContainerRow>
      <TrackList>
        <SubTitle>Populares</SubTitle>
        {topTracks &&
          topTracks.map((track, index) => (
            <GridRow key={track.id}>
              <GridIndex>
                <PlayIcon />
                <p>{index + 1}</p>
              </GridIndex>
              <GridTitle>
                <ImageWrapper>
                  <Image
                    alt={track.name}
                    src={track.album.images[0]?.url}
                    layout="fill"
                  />
                </ImageWrapper>
                <h3>{track.name}</h3>
              </GridTitle>
              {/* <GridAlbum>{track.track_number}</GridAlbum> */}
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
      <ContainerPadding>
        {albums && <MediaCardGroup items={albums} label="Discografia" />}
      </ContainerPadding>
    </Container>
  );
};
