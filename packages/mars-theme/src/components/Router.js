import React from "react";
import { connect } from "frontity";
import Home from "./Home/Home";
import Company from "./Company/Company";
import Careers from "./Careers/Careers";
import Contact from "./Contact/Contact";
import Investor from "./Investor/Investor";
import News from "./News/News";
import NewsSingle from "./NewsSingle/NewsSingle";
import PrivacyPolicy from "./PrivacyPolicy/PrivacyPolicy";
import TermsOfUse from "./TermsOfUse/TermsOfUse";
import RequestQuote from "./RequestQuote/RequestQuote";
import JobDetails from "./JobDetails/JobDetails";
import Whistleblowing from "./Whistleblowing/Whistleblowing";
import PageError from "./PageError";

const Router = ({ state }) => {
  let currentRoute = state.router.link;
  if (currentRoute.substring(0,3) === '/th') {
    currentRoute = currentRoute.substring(1);
    currentRoute = currentRoute.substring(currentRoute.indexOf("/"));
  }
  console.log('currentRoute');
  console.log(currentRoute);
  const data = state.source.get(currentRoute);
  const post = state.source[data.type][data.id];

  console.log("post");
  console.log(post);

  switch (currentRoute) {
    case "/":
      return <Home post={post} />;
    case "/careers/":
      return <Careers post={post} />;
    case "/contact/":
      return <Contact post={post} />;
    case "/investor/":
      return <Investor post={post} />;
    case "/company/":
      return <Company post={post} />;
    case "/company/#company-history":
      return <Company post={post} />;
    case "/company/#vision-and-mission":
      return <Company post={post} />;
    case "/company/#directors":
      return <Company post={post} />;
    case "/company/#business":
      return <Company post={post} />;
    case "/company/#business-ethics":
      return <Company post={post} />;
    case "/company/#corporate-governance":
      return <Company post={post} />;
    case "/company/#sustainability":
      return <Company post={post} />;
    case "/company/#community":
      return <Company post={post} />;
    case "/company/#people":
      return <Company post={post} />;
    case "/news/":
      return <News post={post} />;
    case "/news/#news-media":
      return <News post={post} />;
    case "/news/#press-release":
      return <News post={post} />;
    case "/news-single/":
      return <NewsSingle post={post} />;
    case "/privacy-policy/":
      return <PrivacyPolicy post={post} />;
    case "/terms-of-use/":
      return <TermsOfUse post={post} />;
    case "/request/":
      return <RequestQuote post={post} />;
    case "/job-details/":
      return <JobDetails post={post} />;
    case "/whistleblowing-form/":
      return <Whistleblowing post={post} />;
    case "/test/":
      return <Test post={post} />;
    case "/th/":
      return <Home post={post} />;
    case "/th/careers/":
      return <Careers post={post} />;
    case "/th/contact/":
      return <Contact post={post} />;
    case "/th/investor/":
      return <Investor post={post} />;
    case "/th/company/":
      return <Company post={post} />;
    case "/th/company/#company-history":
      return <Company post={post} />;
    case "/th/company/#vision-and-mission":
      return <Company post={post} />;
    case "/th/company/#directors":
      return <Company post={post} />;
    case "/th/company/#business":
      return <Company post={post} />;
    case "/th/company/#business-ethics":
      return <Company post={post} />;
    case "/th/company/#corporate-governance":
      return <Company post={post} />;
    case "/th/company/#sustainability":
      return <Company post={post} />;
    case "/th/company/#community":
      return <Company post={post} />;
    case "/th/company/#people":
      return <Company post={post} />;
    case "/th/media-news/":
      return <News post={post} />;
    case "/th/media-news/":
      return <News post={post} />;
    case "/th/news/#news-media":
      return <News post={post} />;
    case "/th/news/#press-release":
      return <News post={post} />;
    case "/th/news-single/":
      return <NewsSingle post={post} />;
    case "/th/privacy-policy/":
      return <PrivacyPolicy post={post} />;
    case "/th/terms-of-use/":
      return <TermsOfUse post={post} />;
    case "/th/request/":
      return <RequestQuote post={post} />;
    case "/th/job-details/":
      return <JobDetails post={post} />;
    case "/th/whistleblowing-form/":
      return <Whistleblowing post={post} />;
    default:
      return <PageError />;
  }
};

export default connect(Router);
