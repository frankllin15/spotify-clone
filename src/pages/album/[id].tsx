import { getCookie } from "cookies-next";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { AlbumComponent } from "../../components/Album";
import { getAlbum } from "../../lib/api";

export const getServerSideProps: GetServerSideProps = async ({
  req,
  res,
  query,
}) => {
  const token = getCookie("access_token", {
    req,
    res,
  }) as string;
  const { id } = query;

  if (typeof id != "string") {
    return {
      props: {},
      redirect: {
        destination: "/",
      },
    };
  }

  const album = await getAlbum(token, id);

  return {
    props: {
      album,
    },
  };
};
type Props = {
  album: SpotifyApi.AlbumObjectFull;
};

export default function AlbumPage({ album }: Props) {
  return (
    <>{album ? <AlbumComponent album={album} /> : <div>Algo deu errado</div>}</>
  );
}
