import React from "react";

import Header from "./components/Header";
import { Wrapper } from "./styles";

const App = () => {
  return (
    <Wrapper>
      <Header
        items={[{ name: "VIDEO GAMES", shadow: "VIDEO" }, { name: "CONTACT" }]}
      />
    </Wrapper>
  );
};

export default App;
