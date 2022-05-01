import { ActivableButton, Progress, ProgressBar } from "../common";
import { HearthIcon } from "../icons/HearthIcon";
import { MicIcon } from "../icons/MicIcon";
import { PicInPicIcon } from "../icons/PicInPicIcon";
import { QueueIcon } from "../icons/QueueIcon";
import { ComputerIcon } from "../icons/ComputerIcon";
import { PlayerController } from "../PlayerController";
import {
  Container,
  WrapperIcon,
  WrapperImage,
  WrapperInfo,
  WrapperRow,
} from "./styles";
import { SpeakerIcon } from "../icons/SpeakerIcon";
import Image from "next/image";

export const PlayerBar: React.FC = () => {
  return (
    <Container>
      <WrapperRow>
        <WrapperImage>
          <Image
            layout="fill"
            src="https://i.scdn.co/image/ab67616d00004851e1b41f261acaa01849b42991"
            alt="Capa do album"
          />
        </WrapperImage>
        <WrapperInfo>
          <h2>Silvertongue</h2>
          <p>Young the Giant</p>
        </WrapperInfo>
        <WrapperRow>
          <WrapperIcon>
            <HearthIcon />
          </WrapperIcon>
          <WrapperIcon>
            <PicInPicIcon />
          </WrapperIcon>
        </WrapperRow>
      </WrapperRow>
      <PlayerController />
      <WrapperRow style={{ justifySelf: "end", gap: "15px" }}>
        <ActivableButton>
          <MicIcon />
        </ActivableButton>
        <ActivableButton>
          <QueueIcon />
        </ActivableButton>
        <ActivableButton>
          <ComputerIcon />
        </ActivableButton>
        <ActivableButton>
          <SpeakerIcon />
        </ActivableButton>

        <ProgressBar style={{ width: "93px" }}>
          <Progress progress={50} />
        </ProgressBar>
      </WrapperRow>
    </Container>
  );
};
