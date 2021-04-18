import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";

import Filter from "../../components/Filter";
import GameCard, { GameLoader } from "../../components/GameCard";
import { Wrapper } from "./styles";
import { FilterType, GameType, OrderBy } from "../../types";

type GameList = {
  loading: boolean;
  fail: boolean;
  data: GameType[];
};

export default function VideoGame(): JSX.Element {
  const [filter, setFilter] = useState<FilterType>({
    name: "",
    score: {
      min: 1,
      max: 10,
    },
    orderBy: OrderBy.RELEASE_DATE,
    ascending: true,
  });

  const [gameList, setGameList] = useState<GameList>({
    loading: true,
    fail: false,
    data: [],
  });

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          "https://public.connectnow.org.uk/applicant-test/"
        );
        setGameList({ loading: false, data, fail: false });
      } catch (e) {
        setGameList({ loading: false, data: [], fail: true });
      }
    })();
  }, []);

  const games = useMemo(
    () =>
      gameList.data.map((game) => (
        <GameCard className="game-card" key={game.id} game={game} />
      )),
    [gameList.data]
  );

  const loadingGames = useMemo(
    () => new Array(3).fill(<GameLoader className="game-card" />),
    []
  );

  return (
    <Wrapper>
      <Filter
        className="filter-card"
        filter={filter}
        onChange={(filter) => setFilter(filter)}
        onClear={() => setFilter(null)}
      />
      {gameList.loading ? loadingGames : games}
    </Wrapper>
  );
}
