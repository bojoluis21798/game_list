import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: ${(props) => props.theme.cardColor};
  padding: 1rem;

  .filter-title {
    font-size: 1.5rem;
    margin: 0.5rem 0;
  }

  .filter-form {
    display: flex;
    flex-wrap: wrap;
  }

  .input-group {
    width: 100%;
    margin: 0.5rem 0;

    label {
      font-size: 0.85rem;
      display: block;
      margin: 0.5rem 0;
    }

    input {
      width: 100%;
    }

    .clear_button {
      width: 100%;
    }
  }

  .order-by-group {
    display: flex;
  }
`;
