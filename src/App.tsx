import React from "react";
import { Switch, Route } from "react-router-dom";

import VideoGames from "./pages/VideoGames";
import Contact from "./pages/Contact";

import Header from "./components/Header";
import { Wrapper } from "./styles";

const routes = [
  { path: "/", title: "VIDEO GAMES", render: <VideoGames /> },
  { path: "/contact", title: "CONTACT", render: <Contact /> },
];

export default function App(): JSX.Element {
  return (
    <Wrapper>
      <Header routes={routes} />
      <Switch>
        {routes.map(({ path, render }) => (
          <Route key={path} path={path} render={() => render} exact />
        ))}
      </Switch>
    </Wrapper>
  );
}
