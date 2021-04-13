import React, { useState } from "react";

import Header from "./components/Header";
import Filter from "./components/Filter";
import { Wrapper } from "./styles";
import { FilterType } from "./types";

export default function App(): JSX.Element {
  const [filter, setFilter] = useState<FilterType>(null);

  return (
    <Wrapper>
      <Header
        items={[{ name: "VIDEO GAMES", shadow: "VIDEO" }, { name: "CONTACT" }]}
      />
      <Filter
        filter={filter}
        onChange={(filter) => setFilter(filter)}
        onClear={() => setFilter(null)}
      />
    </Wrapper>
  );
}
