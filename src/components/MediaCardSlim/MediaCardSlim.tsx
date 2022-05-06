import Image from "next/image";
import { GenericItem, Track } from "../../types";
import { PlayIcon } from "../icons/PlayIcon";
import { Container, FloatingButton, ImageWrapper } from "./styles";

type Props = {
  item: SpotifyApi.TrackObjectFull;
};
export const MediaCardSlim: React.FC<Props> = ({ item }) => {
  return (
    <Container>
      <ImageWrapper>
        <Image src={item.album.images[0].url} alt={item.name} layout="fill" />
      </ImageWrapper>
      <h3>{item.name}</h3>
      <FloatingButton>
        <PlayIcon />
      </FloatingButton>
    </Container>
  );
};
