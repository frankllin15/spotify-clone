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

    const { access_token, refresh_token, expires_in } = await json;

    const user = await fetch("https://api.spotify.com/v1/me", {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });
    setCookies("access_token", access_token || "", {
      res,
      req,
      maxAge: expires_in,
    });
    setCookies("refresh_token", refresh_token || "", {
      res,
      req,
      maxAge: expires_in,
    });
    setCookies("user", JSON.stringify(await user.json()), {
      res,
      req,
      maxAge: expires_in,
    });

    res.redirect(`${process.env.CLIENT_REDIRECTURI}`);
  } catch (e: any) {
    res.status(500).json({ error: e.message });
  }
};

export default CallbackRoute;
