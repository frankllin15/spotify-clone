/* eslint-disable react-hooks/exhaustive-deps */
import { getCookie } from "cookies-next";
import type { GetServerSideProps, NextPage } from "next";
import { useEffect } from "react";

import { Home } from "../components/Home";
import {
  getFeaturedPlaylist,
  getRecentilyPlayedTracks,
  getRecommendations,
  getUserTopItems,
} from "../lib/api";
import { Recommendation } from "../types";

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const token = getCookie("access_token", {
    req,
    res,
  }) as string;

  const userTopArtists =
    await getUserTopItems<SpotifyApi.UsersTopArtistsResponse>(
      token,
      "artists",
      5
    );
  const [userTopTracks, recentilyPlayed, featuredPlaylists] = await Promise.all(
    [
      getUserTopItems(token, "tracks", 6),
      getRecentilyPlayedTracks(token, 5),
      getFeaturedPlaylist(token, 5),
    ]
  );

  const message = "Boas vindas ao Spotify Clone";

  return {
    props: {
      userTopArtists,
      userTopTracks,
      recentilyPlayed,
      featuredPlaylists,
    },
  };
};

type Props = {
  userTopArtists: SpotifyApi.ArtistObjectFull[];
  recommendations?: Recommendation[];
  userTopTracks: SpotifyApi.TrackObjectFull[];
  recentilyPlayed: SpotifyApi.TrackObjectFull[];
  featuredPlaylists: SpotifyApi.PlaylistObjectFull[];
};

const HomePage: NextPage<Props> = ({
  userTopArtists,
  userTopTracks,
  recentilyPlayed,
  featuredPlaylists,
}) => {
  return (
    <Home
      userTopArtists={userTopArtists}
      userTopTracks={userTopTracks}
      recentilyPlayed={recentilyPlayed}
      featuredPlaylists={featuredPlaylists}
    />
  );
};

export default HomePage;
