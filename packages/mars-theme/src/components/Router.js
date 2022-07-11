import React from "react";
import { connect } from "frontity";
import Home from "./Home/Home";

const Router = ({ state }) => {
  const currentRoute = state.router.link;

  return <>{currentRoute === "/" && <Home />}</>;
};

export default connect(Router);
