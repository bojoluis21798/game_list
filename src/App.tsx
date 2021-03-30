import React from "react";
import styled from "styled-components";
import Header from "./components/Header";

const Wrapper = styled.div`
  padding: 5rem;
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
