import React from "react";
import styled, { css } from "styled-components";
import { respondToDesktop } from "../styles";

type Item = {
  name: string;
  shadow?: string;
};

const Wrapper = styled.div`
  margin: 3rem 1rem;
  display: flex;
  flex-direction: column;

  ${respondToDesktop(css`
    flex-direction: row;
  `)}
`;

const HeaderItem = styled.h1`
  margin: 0.5rem;
  position: relative;
  font-size: 2rem;

  .shadow {
    ${respondToDesktop(css`
      display: initial;
    `)}

    display: none;
    margin: 0;
    position: absolute;
    font-size: 4rem;
    bottom: 0.8rem;
    left: -1.7rem;
    color: #182c47;
    font-weight: 600;
    z-index: -1;
  }
`;

const Header = ({ items }: { items: Item[] }) => (
  <Wrapper>
    {items.map((item) => (
      <HeaderItem>
        {item.shadow && <h1 className="shadow">{item.shadow}</h1>}
        {item.name}
      </HeaderItem>
    ))}
  </Wrapper>
);

export default Header;
