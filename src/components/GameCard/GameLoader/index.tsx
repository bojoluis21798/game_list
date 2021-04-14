import React from "react";

import { Wrapper } from "./styles";

type GameLoaderProps = {
  className: string;
};

export default function GameLoader({
  className,
}: GameLoaderProps): JSX.Element {
  return (
    <Wrapper className={className}>
      <div className="game-image"></div>
      <div className="game-body">
        <h1 className="game-title"></h1>
        <h1 className="game-release"></h1>
        <p className="game-summary"></p>
      </div>
    </Wrapper>
  );
}
