import React, { useMemo } from "react";
import { useLocation } from "react-router-dom";

import { Wrapper, HeaderItem } from "./styles";

type Route = {
  path: string;
  title: string;
  render: JSX.Element;
};

type HeaderProps = {
  routes: Route[];
};

export default function Header({ routes }: HeaderProps): JSX.Element {
  const location = useLocation();

  const headerItems = useMemo(() => {
    return routes.map(({ path, title }) => (
      <HeaderItem key={path} to={path}>
        {location.pathname === path && (
          <h1 className="shadow">{title.split(" ")[0]}</h1>
        )}
        <h1>{title}</h1>
      </HeaderItem>
    ));
  }, [routes, location.pathname]);

  return <Wrapper>{headerItems}</Wrapper>;
}
