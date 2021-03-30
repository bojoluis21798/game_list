import styled, { css } from "styled-components";

import respondTo from "../../utils/respondTo";

export const Wrapper = styled.div`
  margin: 3rem 1rem;
  display: flex;
  flex-direction: column;

  ${respondTo(
    "desktop",
    css`
      flex-direction: row;
    `
  )}
`;

export const HeaderItem = styled.div`
  position: relative;

  h1 {
    margin: 0.5rem;
    font-size: 2rem;
  }

  .shadow {
    ${respondTo(
      "desktop",
      css`
        display: initial;
      `
    )}

    display: none;
    margin: 0;
    position: absolute;
    font-size: 4rem;
    bottom: 0.8rem;
    left: -1.7rem;
    color: ${(props) => props.theme.inputColor};
    font-weight: 600;
    z-index: -1;
  }
`;
