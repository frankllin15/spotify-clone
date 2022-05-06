import { getCookie } from "cookies-next";
import { GetServerSideProps, NextPage } from "next";
import { PlaylistComponent } from "../../components/Playlist";
import { getPlayList } from "../../lib/api";
import { Playlist } from "../../types";

export const getServerSideProps: GetServerSideProps = async ({
  query,
  req,
  res,
}) => {
  const token = getCookie("access_token", {
    req,
    res,
  }) as string;

  const { id } = query;

  if (typeof id !== "string") {
    return {
      props: {},
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  if (!token) {
    return {
      props: {},
      redirect: {
        destination: "/api/login",
        permanent: false,
      },
    };
  }

  const playlist = await getPlayList(token, id);

  if (playlist instanceof Error) {
    res.writeHead(302, { Location: "/" });
    return {
      props: {},
      redirect: {
        destination: "/",
        permanent: false,
        statusCode: 404,
      },
    };
  }
  return {
    props: {
      playlist,
    },
  };
};

type Props = {
  playlist: Playlist;
};

const PlaylistPage: NextPage<Props> = ({ playlist }) => {
  return <PlaylistComponent playlist={playlist} />;
};

export default PlaylistPage;
