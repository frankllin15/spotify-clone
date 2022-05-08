import axios from "axios";
import { resourceLimits } from "worker_threads";
import { Playlist } from "../types";

type Seeds = {
  seed_artists?: string;
  seed_tracks?: string;
  seed_genres?: string;
};

const client = axios.create({
  baseURL: "https://api.spotify.com/v1",
});

type MessageError = {
  message: string;
};

export const getUserPlaylists = async (token: string): Promise<Playlist[]> => {
  try {
    const playlists = await client.get("/me/playlists", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        limit: 50,
      },
    });
    return playlists.data?.items;
  } catch (error: any) {
    console.error(error);
    return [];
  }
};

export const getPlayList = async (
  token: string,
  playlistId: string
): Promise<Playlist | Error> => {
  try {
    const playlist = await client.get(`/playlists/${playlistId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return playlist.data;
  } catch (error: any) {
    return error;
  }
};

export async function getUserTopItems<T>(
  token: string,
  type: "artists" | "tracks",
  limit?: number
): Promise<T[]> {
  try {
    const topItems = await client.get(`/me/top/${type}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        limit,
      },
    });
    return topItems.data.items;
  } catch (error: any) {
    console.error(error.message);
    return [];
  }
}

export const getRecommendations = async (
  token: string,
  seeds: Seeds,
  limit = 5
): Promise<SpotifyApi.TrackObjectFull[]> => {
  try {
    const recommendations = await client.get("/recommendations", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        limit,
        ...seeds,
        country: "BR",
        locale: "pt_BR",
      },
    });

    return recommendations.data?.tracks;
  } catch (error: any) {
    console.error(error.message);
    return [];
  }
};

export const getRecentilyPlayedTracks = async (
  token: string,
  limit?: number
): Promise<SpotifyApi.TrackObjectFull[]> => {
  try {
    const recentlyPlayedTracks = await client.get(
      "/me/player/recently-played",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: {
          limit,
        },
      }
    );

    return recentlyPlayedTracks.data.items?.map((item: any) => item.track);
  } catch (error: any) {
    console.error(error.message);
    return [];
  }
};

export const getArtist = async (
  token: string,
  artistId: string
): Promise<any> => {
  try {
    const artist = await client.get(`/artists/${artistId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return artist.data;
  } catch (error: any) {
    console.error(error.message);
    return null;
  }
};

export const getArtistTopTracks = async (
  token: string,
  artistId: string
): Promise<any> => {
  try {
    const artistTopTracks = await client.get(
      `/artists/${artistId}/top-tracks`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: {
          country: "BR",
        },
      }
    );

    return artistTopTracks.data?.tracks;
  } catch (error: any) {
    console.error(error.message);
    return null;
  }
};

export const getArtistAlbums = async (
  token: string,
  artistId: string
): Promise<SpotifyApi.AlbumObjectSimplified[] | null> => {
  try {
    const artistAlbums = await client.get<SpotifyApi.ArtistsAlbumsResponse>(
      `/artists/${artistId}/albums`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: {
          limit: 10,
        },
      }
    );

    return artistAlbums.data?.items;
  } catch (error: any) {
    console.error(error.message);
    return null;
  }
};

export const getFeaturedPlaylist = async (token: string, limit = 5) => {
  try {
    const featuredPlaylist = await client.get("/browse/featured-playlists", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        country: "BR",
        locale: "pt_BR",
      },
    });

    return featuredPlaylist.data?.playlists?.items;
  } catch (error: any) {
    console.error(error.message);
    return [];
  }
};

export async function searchMedia(token: string, q: string) {
  try {
    const result = await client.get<SpotifyApi.SearchResponse>("/search", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        q,
        type: "track,artist,album,playlist",
        limit: 10,
      },
    });
    return result.data;
  } catch (error: any) {
    console.error(error.message);
    return null;
  }
}

export async function getCategories(token: string) {
  try {
    const result = await client.get("/browse/categories", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        country: "BR",
        locale: "pt_BR",
      },
    });
    console.log(result.data);
    return result.data.categories;
  } catch (error: any) {
    console.error(error.message);
    return [];
  }
}

export const getAlbum = async (token: string, albumId: string) => {
  try {
    const album = await client.get(`/albums/${albumId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return album.data;
  } catch (error: any) {
    console.log(error.message);
    return null;
  }
};
