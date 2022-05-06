/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: [
      "i.scdn.co",
      "api.thumbr.it",
      "dailymix-images.scdn.co",
      "platform-lookaside.fbsbx.com",
      "thisis-images.scdn.co",
      "mosaic.scdn.co",
      "images.scdn.co",
      "newjams-images.scdn.co",
      "seeded-session-images.scdn.co",
      "mixed-media-images.spotifycdn.com",
      "daily-mix.scdn.co",
      "lineup-images.scdn.co",
    ],
  },
};

module.exports = nextConfig;
