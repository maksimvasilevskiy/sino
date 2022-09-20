import React from "react";
import Hero from "../constant/HeroSection";
import Help from "./Help/Help";
import Location from "./Location/Location";
import { connect, styled } from "frontity";
import parse from "html-react-parser";

import contact from "../../assets/images/johan-taljaard-contact-unsplash.png";

const Contact = ({post}) => {
  return (
    <ContactWrapper>
      <Hero title={post.acf.contact_top_banner_title ? parse(post.acf.contact_top_banner_title) : ''} image={post.acf.contact_top_banner_background.url} />
      <Help post={post} />
      <Location post={post} />
    </ContactWrapper>
  );
};

const ContactWrapper = styled.div``;

export default connect(Contact);
