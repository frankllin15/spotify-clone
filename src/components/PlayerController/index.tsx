import React, { useState } from "react";
import { ActivableButton, Progress, ProgressBar } from "../common";
import { NextIcon } from "../icons/NextIcon";
import { PauseIcon } from "../icons/PauseIcon";
import { PlayIcon } from "../icons/PlayIcon";
import { PreviousIcon } from "../icons/PreviousIcon";
import { RandomIcon } from "../icons/RandomIcon";
import { RepeatIcon } from "../icons/RepeatIcon";
import {
  Container,
  IconsGroup,
  PlayPauseButton,
  ProgressTime,
  Wrapper,
} from "./styles";

export const PlayerController = () => {
  const [state, setState] = useState({
    currentTime: 0,
    duration: 0,
    isPlaying: false,
    isRandom: false,
    isRepeat: false,
  });
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { name } = e.currentTarget;

    switch (name) {
      case "play":
        setState({ ...state, isPlaying: !state.isPlaying });
        break;
      case "random":
        setState({ ...state, isRandom: !state.isRandom });
        break;
      case "repeat":
        setState({ ...state, isRepeat: !state.isRepeat });
        break;
      default:
        break;
    }
  };
  return (
    <Container>
      <Wrapper style={{ gap: "24px" }}>
        <IconsGroup>
          <ActivableButton
            name="random"
            isActive={state.isRandom}
            onClick={handleClick}
          >
            <RandomIcon />
          </ActivableButton>
          <ActivableButton name="previous">
            <PreviousIcon />
          </ActivableButton>
        </IconsGroup>
        <PlayPauseButton name="play" onClick={handleClick}>
          {state.isPlaying ? <PauseIcon /> : <PlayIcon />}
        </PlayPauseButton>
        <IconsGroup>
          <ActivableButton>
            <NextIcon />
          </ActivableButton>
          <ActivableButton
            name="repeat"
            isActive={state.isRepeat}
            onClick={handleClick}
          >
            <RepeatIcon />
          </ActivableButton>
        </IconsGroup>
      </Wrapper>
      <Wrapper style={{ gap: "6px" }}>
        <ProgressTime>
          <span>00:00</span>
        </ProgressTime>
        <ProgressBar>
          <Progress progress={30} />
        </ProgressBar>
        <ProgressTime>
          <span>03:00</span>
        </ProgressTime>
      </Wrapper>
    </Container>
  );
};
