import React from "react";

import Header from "./components/Header";
import { Wrapper } from "./styles";

export default function App() {
  return (
    <Wrapper>
      <Header
        items={[{ name: "VIDEO GAMES", shadow: "VIDEO" }, { name: "CONTACT" }]}
      />
    </Wrapper>
  );
}
