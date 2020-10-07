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
      <footer>
        <h2>What is hellofergo.com?</h2>
          <p className="bold">Need an easy and proven sourdough recipe? How about something plant based? Or maybe you’re looking for air fryer recipes to test out your new kitchen gadget? We got you.</p>
<p>hellofergo.com serves up delicious hand-picked recipes from around the world. Be it quick and simple week night meals to weekend tasty treats, we have you covered. Each recipe has been tried and tested by a non-chef at home, so you rest assured it doesn’t take a masterchef contestant or a tonne of fancy equipment to pull off some incredible meals.</p>
      </footer>
    </Router>
  );
}

export default App;
