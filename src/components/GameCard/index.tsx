import React from "react";
import dayjs from "dayjs";

import GameLoader from "./GameLoader";
import { Wrapper } from "./styles";
import { GameType } from "../../types";

type GameCardProps = {
  game: GameType;
  className: string;
};

export default function GameCard({
  game,
  className,
}: GameCardProps): JSX.Element {
  const { first_release_date, name, rating, summary } = game;

  const roundedRating = Math.floor(rating / 10);

  return (
    <Wrapper className={className}>
      <div className="game-image">
        <span className="game-rating">{roundedRating}</span>
      </div>
      <div className="game-body">
        <h1 className="game-title">{name}</h1>
        <h1 className="game-release">
          Release Date: {dayjs(first_release_date).format("DD/MM/YYYY")}
        </h1>
        <p className="game-summary">{summary}</p>
      </div>
    </Wrapper>
  );
}

export { GameLoader };
