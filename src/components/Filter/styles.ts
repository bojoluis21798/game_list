import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: ${(props) => props.theme.cardColor};
  margin: 0.5rem;
  padding: 1rem;

  .filter-form {
    display: flex;
    flex-wrap: wrap;
  }

  .input-group {
    width: 100%;
    margin: 0.5rem 0;

    label {
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
