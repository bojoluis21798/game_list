import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
`;

export const RangeDisplay = styled.button`
  background-color: ${({ theme }) => theme.inputColor};
  color: ${({ theme }) => theme.textColor};
  width: 100%;
  padding: 0.5rem;
  text-align: left;
`;
