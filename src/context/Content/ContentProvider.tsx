import { getCookie } from "cookies-next";
import React, { ReactNode, useEffect, useState } from "react";
import { getUserPlaylists } from "../../lib/api";
import { Playlist } from "../../types";
import ContentContext from "./ContentContext";

const ContentProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [playlists, setPlaylists] = useState<Playlist[]>([]);

  const access_token = getCookie("access_token") as string;

  useEffect(() => {
    getUserPlaylists(access_token).then((playlists) => {
      setPlaylists(playlists);
    });
  }, [access_token]);

  return (
    <ContentContext.Provider value={{ playlists, setPlaylists }}>
      {children}
    </ContentContext.Provider>
  );
};

export const useContent = () => {
  const context = React.useContext(ContentContext);
  if (context === undefined) {
    throw new Error("useContent must be used within a ContentProvider");
  }
  return context;
};

export default ContentProvider;
