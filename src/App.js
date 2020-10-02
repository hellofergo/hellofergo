import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "./App.scss";

import Home from "./pages/home";
import Create from "./pages/create";
import Post from "./pages/post";
import NoMatch from "./pages/no-match";

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">
          <h1>hellofergo</h1>
          <img src="hellofergo-logo.svg" alt="hellofergo.com logo" width="170" height="60" className="logo"></img>
        </Link>
      </nav>
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/create" component={Create} />
          <Route path="/404" component={NoMatch} />
          <Route path="/:slug" component={Post} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
