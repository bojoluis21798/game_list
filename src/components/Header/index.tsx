import React from "react";
import { Wrapper, HeaderItem } from "./styles";

type Item = {
  name: string;
  shadow?: string;
};

type HeaderProps = {
  items: Item[];
};

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
