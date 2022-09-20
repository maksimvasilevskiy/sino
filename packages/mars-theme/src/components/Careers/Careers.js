import Hero from "../constant/HeroSection";
import Join from "./Join/Join";
import Hr from "./Hr/Hr";
import { connect, styled } from "frontity";

import HeroImage from "../../assets/images/johan-taljaard-csrScXTXdug-unsplash.png";

const Careers = ({ state, post }) => {
  const jobs = state.source.get(`/jobs/`).items;
  console.log("jobs");
  console.log(jobs);

  return (
    <PageWrapper>
      <Hero
        image={post.acf.careers_top_banner_background.url /*HeroImage*/}
        title={post.acf.careers_top_banner_title}
      />
      <Join jobs={jobs} post={post} />
      <Hr post={post} />
    </PageWrapper>
  );
};

const PageWrapper = styled.div`
  position: relative;
`;

export default connect(Careers);
