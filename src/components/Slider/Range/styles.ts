import styled from "styled-components";
import { TransitionStatus } from "react-transition-group";

type RangeTrackProps = {
  transitionState: TransitionStatus;
};

export const RangeTrack = styled.div<RangeTrackProps>`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;

  .range-container {
    padding: 1rem;
    height: 100%;
    background-color: ${({ theme }) => theme.inputTransparent};

    transition: 0.3s ease transform;

    transform: translateY(-100%);

    ${({ transitionState }) => {
      switch (transitionState) {
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

  .line {
    background-color: ${({ theme }) => theme.textColor};
    height: 1px;
  }
`;

export const RangeThumb = styled.div`
  width: 1rem;
  height: 1rem;
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.textColor};
`;
