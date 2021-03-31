import styled from "styled-components";
import { TransitionStatus } from "react-transition-group";

export const Wrapper = styled.div`
  position: relative;

  display: flex;
  align-items: center;

  width: 100%;
  background-color: ${(props) => props.theme.inputColor};

  h2 {
    color: ${(props) => props.theme.textColor};
    margin: 0;
  }

  .select-button {
    text-align: left;
    padding: 0.5rem;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0);

    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .drop-icon {
    color: ${(props) => props.theme.white};
    right: 0.5rem;
    top: 0.3rem;
    width: 1rem;
    height: auto;
  }
`;

type DropdownProps = {
  state: TransitionStatus;
};

export const Dropdown = styled.div<DropdownProps>`
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
      background-color: ${(props) => props.theme.accent};
    }
  }

  .drop-menu {
    background-color: ${(props) => props.theme.inputTransparent};
    overflow: hidden;
    transition: 0.3s ease;

    ${(props) => {
      switch (props.state) {
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
