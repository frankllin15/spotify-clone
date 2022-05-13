import Image from "next/image";
import { ComputerIcon } from "../icons/ComputerIcon";
import { HearthIcon } from "../icons/HearthIcon";
import { PlayIcon } from "../icons/PlayIcon";
import { QueueIcon } from "../icons/QueueIcon";
import { Container, ContainerRow, ImageWrapper } from "./styles";

type Props = {};

export const PlayerBarMobile = (props: Props) => {
  return (
    <Container>
      <ContainerRow>
        <ImageWrapper>
          <Image
            src="https://i.scdn.co/image/ab67616d00004851f5e7b2e5adaa87430a3eccff"
            alt="Música atual"
            layout="responsive"
            width={64}
            height={64}
          />
        </ImageWrapper>
        <div>
          <h2>Title</h2>
          <p>Artist</p>
        </div>
      </ContainerRow>
      <ContainerRow>
        <ComputerIcon />
        <HearthIcon />
        <PlayIcon />
      </ContainerRow>
    </Container>
  );
};
