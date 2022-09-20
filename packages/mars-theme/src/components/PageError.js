import { styled, connect } from "frontity";
import { font } from "./base/functions";

import img404 from "../assets/images/404.jpg";
import mobile404 from "../assets/images/mobile404.jpg";
import mobile404_2x from "../assets/images/mobile404@2x.jpg";

const description = (
  <>
    Don&apos;t panic! Seems like you encountered an error. If this persists,
    <a href="https://community.frontity.org"> let us know </a> or try refreshing
    your browser.
  </>
);

// The 404 page component
const Page404 = ({ state }) => {
  const data = state.source.get(state.router.link);

  const title = "Oops! Something went wrong";

  console.log(data);

  if (data.is404) {
    return (
      <Wrapper404>
        <ImageWrapper>
          <img
            src={state.theme.isMobile ? mobile404 : img404}
            srcSet={
              state.theme.isMobile
                ? `${mobile404} 1x, ${mobile404_2x} 2x`
                : `${img404} 1x, ${img404} 2x`
            }
            alt="404"
          />
        </ImageWrapper>
        <Description404>
          <Title404>404</Title404>
          <Subtitle404>
            <p>Ooops!</p>
            <p>Page not found</p>
          </Subtitle404>
        </Description404>
      </Wrapper404>
    );
  }

  return (
    <Container>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Container>
  );
};

export default connect(Page404);

const Subtitle404 = styled.div`
  transform: translateY(-23px);
  & p {
    text-align: center;
    ${font(64, 72)};
    color: var(--white);
    font-weight: 500;
    margin: 0;
  }
  @media screen and (max-width: 991px) {
    transform: none;
    & p {
      ${font(34, 42)};
      letter-spacing: -0.02em;
    }
  }
`;

const Title404 = styled.h1`
  margin: 0;
  ${font(256, 294)};
  color: var(--white);
  font-weight: 500;
  margin: 0;
  text-align: center;
  @media screen and (max-width: 991px) {
    ${font(128, 147)};
  }
`;

const Description404 = styled.div`
  padding: 104px 0;
  position: relative;
  z-index: 1;
  @media screen and (max-width: 991px) {
    padding-top: 76px;
    padding-bottom: 322px;
  }
`;

const ImageWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  & img {
    width: inherit;
    height: inherit;
    object-fit: cover;
  }
`;

const Wrapper404 = styled.div`
  position: relative;
`;

const Container = styled.div`
  width: 800px;
  margin: 0 auto;
  padding: 24px;
  text-align: center;
`;

const Title = styled.h1`
  margin: 0;
  margin-top: 24px;
  margin-bottom: 8px;
  color: rgba(12, 17, 43);
  font-size: 4em;
`;

const Description = styled.div`
  line-height: 1.6em;
  color: rgba(12, 17, 43, 0.8);
  margin: 24px 0;
`;
