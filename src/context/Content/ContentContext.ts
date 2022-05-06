import React from "react";
import { Playlist } from "../../types";

type ContentContextProps = {
  playlists: Playlist[];
  setPlaylists: (playlists: Playlist[]) => void;
};

const ContentContext = React.createContext<ContentContextProps | null>({
  playlists: [{ name: "", id: "", uri: "", images: [{ url: "" }] }],
} as ContentContextProps);

export default ContentContext;
