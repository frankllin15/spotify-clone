import Head from "next/head";
import Image from "next/image";
import React, { ReactNode, useEffect, useState } from "react";
import { Playlist } from "../../types";
import { convertMsToHM, millisToMinutesAndSeconds } from "../../utils/format";
import { Header } from "../Header";
import { HearthFillIcon } from "../icons/HearthFill";
import { HearthIcon } from "../icons/HearthIcon";
import { OptionsIcon } from "../icons/OptionsIcon";
import { PlayIcon } from "../icons/PlayIcon";
import { TimerIcon } from "../icons/TimerIcon";
import { GridHeader } from "./GridHeader";
import {
  Container,
  GridAlbum,
  GridIndex,
  GridInfo,
  GridRow,
  GridTitle,
  ImageWrapper,
  PlayerButton,
  PlaylistInfo,
  RowContainer,
  StylelessButton,
  TrackImageWrapper,
  TrackList,
} from "./styles";

type Props = {
  playlist: Playlist;
};

export const PlaylistComponent: React.FC<Props> = ({ playlist }) => {
  const totalDuration = playlist.tracks.items.reduce((acc, curr) => {
    const duration = curr.track.duration_ms;

    return acc + duration;
  }, 0);

  return (
    <>
      <Header>{/* <h1>{playlist.name}</h1> */}</Header>
      <Container theme={{ primaryColor: playlist.primary_color }}>
        {/* <BackgroundDegrade /> */}
        <PlaylistInfo>
          <ImageWrapper>
            {playlist.images.length > 0 && (
              <Image
                width={playlist.images[0].width}
                height={playlist.images[0].height}
                layout="fill"
                src={playlist.images[0].url}
                alt={playlist.name}
              />
            )}
          </ImageWrapper>
          <div>
            <span>{playlist.type.toLocaleUpperCase()}</span>
            <h1>{playlist.name}</h1>
            <p>{playlist.description}</p>
            <span>
              {playlist.owner.display_name} • {playlist.followers.total} •{" "}
              {playlist.tracks.total} músicas,{" "}
              <time>{convertMsToHM(totalDuration)}</time>
            </span>
          </div>
        </PlaylistInfo>
        <RowContainer>
          <PlayerButton>
            <PlayIcon />
          </PlayerButton>
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
        </RowContainer>
        <TrackList>
          <GridHeader>
            <GridIndex>#</GridIndex>
            <GridTitle>Título</GridTitle>
            <GridAlbum>Album</GridAlbum>
            <GridInfo>
              <TimerIcon />
            </GridInfo>
          </GridHeader>
          {playlist.tracks.items.map(
            (item, index) =>
              item.track && (
                <GridRow key={item.track.id}>
                  <GridIndex>
                    <p>{index + 1}</p>
                    <PlayIcon />
                  </GridIndex>
                  <GridTitle>
                    <TrackImageWrapper>
                      <Image
                        src={item.track.album.images[0].url}
                        layout="fill"
                        alt={item.track.name}
                      />
                    </TrackImageWrapper>
                    <div>
                      <h3>{item.track.name}</h3>

                      <p>
                        {item.track.artists
                          .reduce((acum, curr) => {
                            acum.push(curr.name);
                            return acum;
                          }, [] as string[])
                          .join(", ")}
                      </p>
                    </div>
                  </GridTitle>
                  <GridAlbum>
                    <p>{item.track.album.name}</p>
                  </GridAlbum>
                  <GridInfo>
                    <StylelessButton>
                      <HearthIcon />
                    </StylelessButton>
                    <p>{millisToMinutesAndSeconds(item.track.duration_ms)}</p>
                    <StylelessButton>
                      <OptionsIcon />
                    </StylelessButton>
                  </GridInfo>
                </GridRow>
              )
          )}
        </TrackList>
      </Container>
    </>
  );
};
