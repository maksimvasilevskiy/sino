import React, { useEffect } from "react";
import Hero from "../constant/HeroSection";
import NewsList from "./NewsList/NewsList";
import MediaContact from "./MediaContact/MediaContact";
import { styled, connect } from "frontity";

import news from "../../assets/images/news-poster.png";

const News = ({ state, actions, post }) => {
  console.log('news!!!!!')
  useEffect(() => {
    const currentPath = state.router.link;
    if (currentPath.includes("#news-media")) {
      executeScroll("news-media");
    }
    if (currentPath.includes("#press-release")) {
      executeScroll("press-release");
    }
  }, [state.router.link]);
  const options = state.source.get("acf-settings");
  const executeScroll = (slug) => document.getElementById(slug).scrollIntoView();
  console.log('options page');
  console.log(options);
  return (
    <NewsWrapper>
      <Hero title={options.acf.news_top_banner_title} image={options.acf.news_top_banner_image.url} />
      <NewsList post={post} />
      <MediaContact post={options} />
    </NewsWrapper>
  );
};

const NewsWrapper = styled.div``;

export default connect(News);
