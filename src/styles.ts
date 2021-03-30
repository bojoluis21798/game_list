import { FlattenSimpleInterpolation } from "styled-components";
import { createGlobalStyle, DefaultTheme, css } from "styled-components";

export const theme: DefaultTheme = {
  headingFont: "500 1rem 'Montserrat', sans-serif",
  white: "#fff",
  accent: "#5692e8",
  textColor: "#c1d1e8",
  cardColor: "#0e1a2b",
  inputColor: "#182c47",
};

export const respondTo = (
  breakpoint: "tablet" | "desktop",
  content: FlattenSimpleInterpolation
) => css`
  @media only screen and (min-width: ${breakpoint === "tablet"
      ? "768px"
      : "1024px"}) {
    ${content}
  }
`;

export const GlobalStyle = createGlobalStyle`
  body {
    font: 500 12px 'Mulish', sans-serif;
    background-image: linear-gradient(#081221, #03080f);
    color: ${theme.textColor};
  }

  button {
    background-color: ${theme.accent};
    outline: none;
    border: 0;
    padding: 0.5rem;
  }

  input[type="text"] {
    border: 0;
    outline: none;
    padding: 0.5rem;
    color: ${theme.textColor};
    background-color: ${theme.inputColor};
  }

  h1, h2, h3, h4, h5, h6, button, label {
    font: ${theme.headingFont};
    color: ${theme.white};
  }
`;
