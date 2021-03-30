import React from "react";
import { render } from "react-dom";
import { ThemeProvider } from "styled-components";
import App from "./App";
import { theme, GlobalStyle } from "./styles";

render(
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <App />
  </ThemeProvider>,
  document.getElementById("app")
);
