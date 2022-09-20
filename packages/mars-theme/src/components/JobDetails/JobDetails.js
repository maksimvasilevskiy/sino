import React from "react";
import Hero from "../constant/HeroSection";
import MediaContact from "./MediaContact/MediaContact";
import Info from "./Info/Info";
import { styled, connect } from "frontity";

import poster from "../../assets/images/job-details-poster.png";

const JobDetails = ({ state }) => {
  const options = state.source.get("acf-settings");
  const currentRoute = state.router.link;
  const data = state.source.get(state.router.link);
  const post = state.source[data.type][data.id];
  console.log('post');
  console.log(post);

  return (
    <PageWrapper>
      <Hero image={options.acf.jobs_top_banner_image.url} title={options.acf.jobs_top_banner_title} />
      <Info post={post} />
      <MediaContact options={options} />
    </PageWrapper>
  );
};

const PageWrapper = styled.div``;

export default connect(JobDetails);
