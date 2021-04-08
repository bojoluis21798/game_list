import styled from "styled-components";
import { TransitionStatus } from "react-transition-group";

type WrapperProps = {
  transitionState: TransitionStatus;
};

export const Wrapper = styled.button<WrapperProps>`
  padding: 0;
  background-color: rgba(0, 0, 0, 0);
  overflow: hidden;
  position: absolute;
  top: 2.5rem;
  right: 0;

  width: 90%;

  button {
    text-align: left;
    background-color: rgba(0, 0, 0, 0);
    width: 100%;
    display: block;
    padding: 1rem;

    &:hover {
      background-color: ${({ theme }) => theme.accent};
    }
  }

  .drop-menu {
    background-color: ${({ theme }) => theme.inputTransparent};
    overflow: hidden;
    transition: 0.3s ease;

    ${({ transitionState }) => {
      switch (transitionState) {
        case "entering":
          return `
            transform: translateY(-100%);
          `;
        case "entered":
          return `
            transform: translateY(0%);
          `;
        case "exiting":
          return `
            transform: translateY(-100%);
          `;
      }
    }};
  }
`;
