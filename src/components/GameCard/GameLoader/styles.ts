import styled, { keyframes } from "styled-components";

const shiningAnim = keyframes`
  0% {
    opacity: 0.2;
  }

  50% {
    opacity: 0.05;
  }

  100% {
    opacity: 0.2;
  }
`;

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.cardColor};

  .game-image,
  .game-title,
  .game-release,
  .game-summary {
    height: 1.5rem;
    background-color: ${({ theme }) => theme.textColor};
    animation: ${shiningAnim} 2s ease infinite;
  }

  .game-image {
    height: 30vw;
  }

  .game-body {
    padding: 1rem;
  }

  .game-title {
    width: 50%;
    margin-bottom: 1rem;
  }

  .game-release {
    width: 40%;
    margin: 0;
    margin-bottom: 1rem;
  }

  .game-summary {
    width: 100%;
    height: 4rem;
  }
`;
