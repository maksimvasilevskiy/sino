import React from "react";
import Container from "../../constant/Container";
import Link from "../../constant/Link";
import { font, flex } from "../../base/functions";
import { styled, connect } from "frontity";
import parse from "html-react-parser";

/*const otherNews = [
  {
    id: 1,
    title:
      "How logistics moved from transporting Covid-19 vaccines to dealing with the aftermath of the economic state of affairs",
    link: "/news-single/",
    date: "31 Dec 2021",
  },
  {
    id: 2,
    title: "Sino Logistics Corporation Enters Second Decade with Rebranding",
    link: "/news-single/",
    date: "12 Oct 2021",
  },
];*/

const OtherNews = ({ state }) => {
  const otherNews = state.source.get(`/company-news/`).items.slice(0, 2);

  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug'
  ];

  const dateHandler = (date) => {
    const year = date.split('-')[0];
    const month = Number(date.split('-')[1]);
    const day = date.split('-')[2].substr(0, 2);
    return day + ' ' + months[month-1] + ' ' + year;
  }

  return (
    <Section>
      <Container>
        <Title>Other News</Title>
        <Content>
          {otherNews.map((post) => {
            return (
              <Post key={post.id}>
                <PostTitle>
                  <Link link={post.link}>{parse(post.title.rendered)}</Link>
                </PostTitle>
                <Date>{dateHandler(post.date)}</Date>
              </Post>
            );
          })}
        </Content>
      </Container>
    </Section>
  );
};

const Date = styled.p`
  ${font(18, 30)};
  margin: 0;
  color: var(--gray-900);
  margin-top: auto;
`;

const PostTitle = styled.h4`
  margin: 0;
  ${font(24, 32)};
  letter-spacing: 0.04em;
  font-weight: 400;
  margin-bottom: 28px;
  & a {
    display: flex;
    width: 100%;
  }
  @media screen and (max-width: 991px) {
    font-weight: 500;
    ${font(18, 30)};
    margin-bottom: 4px;
  }
`;

const Post = styled.div`
  max-width: 501px;
  box-sizing: content-box;
  position: relative;
  padding: 0 56px;
  ${flex("column")};
  &::after {
    position: absolute;
    content: "";
    height: 100%;
    width: 1px;
    background: var(--blue-600);
    right: 0;
    top: 0;
  }
  &:first-child {
    padding-left: 0;
  }
  &:last-child {
    padding-right: 0;
    &::after {
      content: none;
    }
  }
  @media screen and (max-width: 991px) {
    padding: 0;
    &::after {
      content: none;
    }
  }
`;

const Content = styled.div`
  ${flex("row", "stretch")};
  @media screen and (max-width: 1400px) {
    display: grid;
    grid-template-columns: 50% 50%;
  }
  @media screen and (max-width: 991px) {
    grid-template-columns: 100%;
    grid-gap: 24px;
  }
`;

const Title = styled.h5`
  ${font(24, 32)};
  margin: 0;
  font-weight: 400;
  color: var(--gray-900);
  margin-bottom: 32px;
  @media screen and (max-width: 991px) {
    margin-bottom: 24px;
  }
`;

const Section = styled.section`
  padding-top: 116px;
  @media screen and (max-width: 991px) {
    padding-top: 56px;
  }
`;

export default connect(OtherNews);
