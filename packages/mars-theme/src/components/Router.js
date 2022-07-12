import React from "react";
import { connect } from "frontity";
import Home from "./Home/Home";
import Careers from "./Careers/Careers";
import Contact from "./Contact/Contact";
import Investor from "./Investor/Investor";
import PageError from "./PageError";

const Router = ({ state }) => {
  const currentRoute = state.router.link;
  const data = state.source.get(state.router.link);
  const post = state.source[data.type][data.id];
  console.log('post');
  console.log(post);

  switch(currentRoute) {
    case '/':
      return <Home />;
    case '/careers/':
      return <Careers />;
    case '/contact/':
      return <Contact />;
    case '/investor/':
      return <Investor />;
    default:
      return <PageError />;
  }
};

export default connect(Router);
