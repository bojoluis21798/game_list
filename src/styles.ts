import styled, {
  createGlobalStyle,
  DefaultTheme,
  css,
} from "styled-components";

import respondTo from "./utils/respondTo";

export const Wrapper = styled.div`
  ${respondTo(
    "desktop",
    css`
      padding: 5rem;
    `
  )}
`;

export const theme: DefaultTheme = {
  headingFont: "500 1rem 'Montserrat', sans-serif",
  white: "#fff",
  accent: "#5692e8",
  textColor: "#c1d1e8",
  cardColor: "#0e1a2b",
  inputColor: "#182c47",
  inputTransparent: "rgba(24, 44, 71, 0.8)",
};

export const GlobalStyle = createGlobalStyle`
  body {
    font: 500 12px 'Mulish', sans-serif;
    background-image: linear-gradient(#081221, #03080f);
    color: ${theme.textColor};
  }

  button, input[type="text"] {
    border: 1px solid rgba(255,255,255,0);
    transition: 0.2s ease border-color;

    &:focus {
      border-color: rgba(255,255,255,0.3);
    }
  }

  button {
    background-color: ${theme.accent};
    outline: none;
    padding: 0.5rem;
  }

  input[type="text"] {
    outline: none;
    padding: 0.5rem;
    color: ${theme.textColor};
    font: ${theme.headingFont};
    background-color: ${theme.inputColor};
  }

  h1, h2, h3, h4, h5, h6, button, label {
    font: ${theme.headingFont};
    color: ${theme.white};
  }
`;
