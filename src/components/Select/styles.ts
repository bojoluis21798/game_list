import styled from "styled-components";

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
