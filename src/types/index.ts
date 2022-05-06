export type User = {
  display_name: string;
  external_urls: { spotify: string };
  followers: { href: string; total: number };
  href: string;
  id: string;
  images: Image[];
};
export type Session = {
  access_token: string | null;
  refresh_token: string | null;
};

type Image = {
  height: number;
  url: string;
  width: number;
};

export type Playlist = {
  collaborative: boolean;
  description: string;
  external_urls: {
    spotify: string;
  };
  href: string;
  id: string;
  images: Image[];
  name: string;
  owner: User;
  primary_color: string;
  public: boolean;
  snapshot_id: string;
  tracks: {
    href: string;
    total: number;
    items: {
      track: Track;
    }[];
  };
  followers: {
    href: string;
    total: number;
  };
  type: string;
  uri: string;
};

export type Artist = {
  external_urls: {
    spotify: string;
  };
  followers: {
    href: string;
    total: number;
  };
  genres: string[];
  href: string;
  id: string;
  images: [
    {
      url: string;
      height: number;
      width: number;
    }
  ];
  name: string;
  popularity: 0;
  type: string;
  uri: string;
};

export type Recommendation = {
  title: string;
  image: SpotifyApi.ImageObject;
  artists: SpotifyApi.ArtistObjectFull[];
};

export type GenericItem = {
  name: string;
  images: SpotifyApi.ImageObject[];
  type: string;
  id: string;
  release_date?: string;
  href: string;
};

type Album = {
  album_type: string;
  artists: Artist[];

  external_urls: {
    spotify: string;
  };
  href: string;
  id: string;
  images: Image[];
  name: string;
  release_date: string;
  release_date_precision: string;
  total_tracks: number;
  type: string;
  uri: string;
};

export type Track = {
  album: Album;
  artists: Artist[];
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_urls: {
    spotify: string;
  };
  href: string;
  id: string;
  is_local: boolean;
  name: string;
  popularity: number;
  preview_url: string;
  track_number: number;
  type: string;
  uri: string;
};
