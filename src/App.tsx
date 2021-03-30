import React from "react";
import styled, { css } from "styled-components";
import Header from "./components/Header";
import { respondTo } from "./styles";

const Wrapper = styled.div`
  ${respondTo(
    "desktop",
    css`
    padding: 5rem;
    `
  )}
`;

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
