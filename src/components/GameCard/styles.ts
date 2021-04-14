import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.cardColor};

  .game-image {
    position: relative;
    background-color: #000;

    height: 40vw;
  }

  .game-body {
    padding: 1rem;
    max-height: 10rem;
  }

  .game-rating {
    position: absolute;
    right: 0.5rem;
    top: 0.5rem;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: ${({ theme }) => theme.accent};
    color: #fff;
    height: 2rem;
    width: 2rem;
    border-radius: 50%;
    font-size: 1.3rem;
  }

  .game-title {
    font-size: 1.5rem;
    margin-bottom: 0.2rem;
  }

  .game-release {
    color: ${({ theme }) => theme.textColor};
    margin: 0;
    margin-bottom: 1rem;
  }

  .game-summary {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
