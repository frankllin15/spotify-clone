import { useState } from "react";
import { MediaCardGroup } from "../MediaCard";
import { Container } from "./styled";

type Props = {
  results: SpotifyApi.SearchResponse;
};

export const SearchComponent: React.FC<Props> = (props) => {
  const { albums, artists, playlists } = props.results;

  return (
    <>
      <MediaCardGroup label="Artistas" items={artists?.items || []} />
      <MediaCardGroup label="Albuns" items={albums?.items || []} />
      <MediaCardGroup label="Playlists" items={playlists?.items || []} />
    </>
  );
};
