import { NextApiRequest, NextApiResponse } from "next";

export default function Login(req: NextApiRequest, res: NextApiResponse) {
  const scope =
    "playlist-read-collaborative user-read-recently-played playlist-read-private user-read-private user-library-read user-top-read user-follow-read user-read-playback-position";
  res.redirect(
    "https://accounts.spotify.com/authorize?" +
      new URLSearchParams({
        response_type: "code",
        client_id: process.env.CLIENT_ID || "",
        redirect_uri: process.env.REDIRECTURI || "",
        scope: scope,
      })
  );
}
