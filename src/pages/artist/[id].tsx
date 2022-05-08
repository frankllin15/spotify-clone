import { getCookie } from "cookies-next";
import { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import { ArtistComponent } from "../../components/Artitst";
import { getArtist, getArtistAlbums, getArtistTopTracks } from "../../lib/api";
import { Artist, Track } from "../../types";

export const getServerSideProps: GetServerSideProps = async ({
  req,
  res,
  query,
}) => {
  const token = getCookie("access_token", {
    req,
    res,
  }) as string;

  const { id } = query as { id: string };

  if (!token) {
    return {
      props: {},
      redirect: {
        destination: "/api/login",
        permanent: false,
      },
    };
  }

  const artist = await getArtist(token, id);
  const topTracks = await getArtistTopTracks(token, id);
  const albums = await getArtistAlbums(token, id);

  const uniqueAlbums = albums?.filter(
    (album, index, self) =>
      self.findIndex((t) => t.name === album.name) === index
  );

  return {
    props: {
      artist,
      topTracks,
      albums: uniqueAlbums,
    },
  };
};

type Props = {
  artist: Artist | null;
  topTracks: SpotifyApi.TrackObjectFull[] | null;
  albums: SpotifyApi.AlbumObjectFull[] | null;
};

const ArtistPage: NextPage<Props> = ({ artist, topTracks, albums }) => {
  return (
    <div>
      <Head>
        <title>Spotify {artist && ` - ${artist.name}`}</title>
      </Head>
      {artist ? (
        <ArtistComponent
          albums={albums}
          topTracks={topTracks}
          artist={artist}
        />
      ) : (
        <p>Artist not found</p>
      )}
    </div>
  );
};

export default ArtistPage;
