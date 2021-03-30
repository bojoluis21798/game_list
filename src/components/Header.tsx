import React from "react";
import styled, { css } from "styled-components";
import { respondTo } from "../styles";

type Item = {
  name: string;
  shadow?: string;
};

type HeaderProps = {
  items: Item[];
};

const Wrapper = styled.div`
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

const HeaderItem = styled.div`
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

const Header = ({ items }: HeaderProps) => (
  <Wrapper>
    {items.map((item, index) => (
      <HeaderItem key={item.name + index}>
        {item.shadow && <h1 className="shadow">{item.shadow}</h1>}
        <h1>{item.name}</h1>
      </HeaderItem>
    ))}
  </Wrapper>
);

export default Header;
