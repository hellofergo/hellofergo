import React from "react";
import { Link } from "react-router-dom";

const NoMatch = () => (
  <>
    <h1>Ooops... looks like you've hit a dead end</h1>
    <Link to="/">Let's go home</Link>
  </>
);

export default NoMatch;

