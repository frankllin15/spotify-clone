import { NextApiResponse } from "next";
import { NextApiRequest } from "next";
import { setCookies } from "cookies-next";

const encodeFormData = (data: any) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

export const CallbackRoute = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const { query } = req;
  const code = query?.code as string;

  const body = {
    grant_type: "authorization_code",
    code: code,
    redirect_uri: process.env.REDIRECTURI || "",
    client_id: process.env.CLIENT_ID || "",
    client_secret: process.env.CLIENT_SECRET,
  };

  try {
    const json = (
      await fetch("https://accounts.spotify.com/api/token", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Accept: "application/json",
        },

        body: encodeFormData(body),
      })
    ).json();

    // expires_in is in seconds
    const { access_token, refresh_token, expires_in } = await json;

    const user = await fetch("https://api.spotify.com/v1/me", {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });
    console.log("expires_in", expires_in);
    setCookies("access_token", access_token || "", {
      res,
      req,
      maxAge: expires_in,
    });
    // convert milliseconds to seconds and add to current time
    setCookies(
      "token_expires_in",
      new Date(Date.now() + expires_in * 1000).getTime() || "",
      {
        res,
        req,
        maxAge: expires_in,
      }
    );
    setCookies("user", JSON.stringify(await user.json()), {
      res,
      req,
      maxAge: expires_in,
    });

    res.redirect(`${process.env.CLIENT_REDIRECTURI}`);
  } catch (e: any) {
    const params = new URLSearchParams(e);
    res.redirect(`/error?${params}`);
    res.status(500).json(e);
  }
};

export default CallbackRoute;
