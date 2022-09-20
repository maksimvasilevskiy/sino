import React, { useEffect } from "react";
import { Global, connect, styled, Head } from "frontity";
import Switch from "@frontity/components/switch";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Loading from "./Loading";
import PageError from "./PageError";
import {
  setSwiperCssBundle,
  setFancyAppCssBundle,
  setSimplebarBundle,
  setDatepickerBundle,
} from "./functions/functions";
import Router from "./Router";
import Service from "./Service/Service";
import NewsSingle from "./NewsSingle/NewsSingle";
import JobDetails from "./JobDetails/JobDetails";

import { globalstyles } from "./base/globalStyle";

import ScrollToTop from "react-scroll-to-top";
import ReactGA from 'react-ga';

/**
 * Theme is the root React component of our theme. The one we will export
 * in roots.
 *
 * @param props - The props injected by Frontity's {@link connect} HOC.
 *
 * @returns The top-level react component representing the theme.
 */

const Theme = ({ state, actions }) => {
  useEffect(() => {
    actions.theme.setMenuItem(null);
  }, [state.router.link]);

  let link = state.router.link;
  if (link.substring(0,3) === '/th') {
    link = link.substring(1);
    link = link.substring(link.indexOf("/"));
  }
  // Get information about the current URL.
  const data = state.source.get(link);

  console.log("data");
  console.log(data);

  // TODO: When production, replace delete this useEffect
  // and uncomment the <link /> element inside <Head> (below)
  useEffect(() => {
    setSwiperCssBundle();
    setFancyAppCssBundle();
    setSimplebarBundle();
    setDatepickerBundle();
    actions.theme.handleSwiperStylesLoaded();
  }, []);

  useEffect(() => {
    ReactGA.initialize('UA-238908133-1');
    ReactGA.pageview(window.location.pathname);
  }, []);

  return (
    <>
      {/* Add some metatags to the <head> of the HTML. */}
      <Head>
        {/* <meta name="description" content={state.frontity.description} /> */}
        {/* Air Datepicker */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/air-datepicker@3.2.0/air-datepicker.css"
        />
        {/* Scrollbar CDN */}
        <link
          rel="stylesheet"
          href="https://unpkg.com/simplebar@latest/dist/simplebar.css"
        />
        {/* Swiper CDN */}
        <link
          rel="stylesheet"
          href="https://unpkg.com/swiper@8/swiper-bundle.min.css"
        />
        {/* FancyApp CDN */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@fancyapps/ui@4.0/dist/panzoom.css"
        />
        <html lang="en" />
        <title>Sino Logistics Corporation</title>
      </Head>

      {/* Add some global styles for the whole site, like body or a's.
      Not classes here because we use CSS-in-JS. Only global HTML tags. */}
      <Global styles={globalstyles} />

      {/* Add the header of the site. */}
      <HeadContainer>
        <Header/>
      </HeadContainer>

      <ScrollWrapper>
        <ScrollToTop
          className="scroll"
          smooth
          top={1500}
          component={
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.9781 12.5015L15.9958 12.5027L16.0135 12.5027C16.1629 12.5024 16.3078 12.5544 16.423 12.6499C16.4232 12.65 16.4233 12.6501 16.4234 12.6502L23.2675 18.3607L23.268 18.3611C23.3991 18.4701 23.4816 18.627 23.4973 18.7972C23.513 18.9673 23.4604 19.1367 23.3515 19.268C23.2425 19.3992 23.0861 19.4816 22.9166 19.4973C22.7474 19.5129 22.5788 19.4607 22.4478 19.3519C22.4477 19.3518 22.4475 19.3516 22.4474 19.3515L16.3334 14.235L16.0183 13.9713L15.6986 14.2294L9.58354 19.164L9.5821 19.1651C9.51654 19.2184 9.44114 19.2582 9.36023 19.2822C9.27933 19.3062 9.1945 19.314 9.11061 19.305C9.02672 19.2961 8.9454 19.2707 8.87132 19.2301C8.79724 19.1896 8.73184 19.1348 8.67891 19.0688L8.67095 19.0589L8.6625 19.0494C8.60377 18.9834 8.55926 18.9059 8.53179 18.8218C8.50432 18.7377 8.49449 18.6488 8.50293 18.5607C8.51137 18.4725 8.53789 18.3871 8.58081 18.3098C8.62372 18.2325 8.6821 18.1649 8.75226 18.1113L8.75236 18.1114L8.76241 18.1033L15.5893 12.6009C15.7049 12.527 15.8412 12.4921 15.9781 12.5015Z"
                fill="#4279B8"
                stroke="#4279B8"
              />
              <circle
                cx="16"
                cy="16"
                r="15"
                transform="rotate(-90 16 16)"
                stroke="#4279B8"
                strokeWidth="2"
              />
            </svg>
          }
        />
      </ScrollWrapper>

      {/* Add the main section. It renders a different component depending
      on the type of URL we are in. */}
      <Main>
        <Switch>
          <Loading when={data.isFetching} />
          <Router when={data.isPage} />
          <Service when={data.isPostType && data.isServices} />
          <NewsSingle when={data.isPostType && data.isCompanyNews} />
          <JobDetails when={data.isPostType && data.isJobs} />
          <PageError when={data.isError} />
        </Switch>
      </Main>

      {/* Add the footer of the site */}
      <FooterContainer>
        <Footer state={state} />
      </FooterContainer>
    </>
  );
};

export default connect(Theme);

const ScrollWrapper = styled.div`
  & .scroll {
    position: fixed;
    padding: 0;
    border-radius: 50%;
    box-shadow: none;
    z-index: 50;
    width: 32px;
    height: 32px;
    bottom: 64px;
    right: var(--container-padding-xl);
    @media screen and (max-width: 1400px) {
      right: var(--container-padding-lg);
    }
    @media screen and (max-width: 991px) {
      right: var(--container-padding-md);
    }
    @media screen and (max-width: 768px) {
      right: var(--container-padding-xs);
    }
    @media screen and (max-width: 576px) {
      right: 24px;
    }
  }
`;

const FooterContainer = styled.footer`
  position: relative;
  bottom: 0;
  left: 0;
`;

const HeadContainer = styled.header`
  background: var(--white);
`;

const Main = styled.div``;
