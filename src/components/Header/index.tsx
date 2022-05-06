import React from "react";
import { ArrowLeftIcon } from "../icons/ArrowLeftIcon";
import { ArrowReightIcon } from "../icons/ArrowReightIcon";
import { Button, ButtonGroup, HeaderBar } from "./styles";

type Props = {
  children: React.ReactNode;
};

export const Header: React.FC<Props> = ({ children }) => {
  return (
    <HeaderBar>
      <ButtonGroup>
        <Button>
          <ArrowLeftIcon />
        </Button>
        <Button>
          <ArrowReightIcon />
        </Button>
      </ButtonGroup>
      {children}
    </HeaderBar>
  );
};
