import React from "react";
import Hero from "../constant/HeroSection";
import Advantages from "./Advantages/Advantages";
import Contact from "./Contact/Contact";
import Services from "./Services/Services";
import { styled, connect } from "frontity";

const Service = ({ state }) => {
  const currentRoute = state.router.link;
  const data = state.source.get(state.router.link);
  const post = state.source[data.type][data.id];
  console.log('service post');
  console.log(post);

  return (
    <ServiceWrapper>
      <Hero title={post.title.rendered} image={post.acf.service_top_banner_background.url} />
      <Advantages post={post} />
      <Contact post={post} />
      <Services post={post} />
    </ServiceWrapper>
  );
};

const ServiceWrapper = styled.div``;

export default connect(Service);
