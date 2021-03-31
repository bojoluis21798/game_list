import React, { useState } from "react";

import Header from "./components/Header";
import Filter from "./components/Filter";
import { Wrapper } from "./styles";
import { FilterType, OrderBy } from "./types";

const initialFilter: FilterType = {
  name: "",
  score: {
    min: 1,
    max: 10,
  },
  orderBy: OrderBy.RELEASE_DATE,
  ascending: true,
};

export default function App() {
  const [filter, setFilter] = useState<FilterType>(initialFilter);

  return (
    <Wrapper>
      <Header
        items={[{ name: "VIDEO GAMES", shadow: "VIDEO" }, { name: "CONTACT" }]}
      />
      <Filter
        filter={filter}
        onChange={(filter) => setFilter(filter)}
        onClear={() => setFilter(initialFilter)}
      />
    </Wrapper>
  );
}
