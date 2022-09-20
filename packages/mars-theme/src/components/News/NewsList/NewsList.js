import React from "react";
import Container from "../../constant/Container";
import ImageSection from "../../constant/ImageSection";
import Title from "../../constant/Title";
import PrimaryBtn from "../../constant/PrimaryButton";
import LoadMore from "../../constant/LoadMore";
import { styled, connect, css } from "frontity";
import { font, flex } from "../../base/functions";
import parse from "html-react-parser";

import lcl from "../../../assets/images/LCL-02.jpg";
import lcl2x from "../../../assets/images/LCL-02@2x.jpg";
import corporation from "../../../assets/images/corporation-thanks.jpg";
import corporation2x from "../../../assets/images/corporation-thanks@2x.jpg";

/*const newsList = [
  {
    id: 1,
    title: "Digitization: bringing logistics to a top notch level",
    date: "12 Jan 2022",
    link: "/news-single/",
    image: lcl,
    image2x: lcl2x,
    text: [
      `Sino Logistics Corporation Public Company Limited organized an exclusive golf competition, ‘Sino Golf Invitational 2021’ at Amata Spring Country Club Golf Course in Chonburi on December 7th, 2021. The company hosted the event to express its gratitude toward its customers and partners for their support throughout 2021. This is the second year in a row the company has held this event.`,
      "To liven up the occasion, Thailand’s famous Pro-Golfers, Pro-Air – Ms. Saruttaya Ngam-Usawan, and Pro-Jack – Mr. Vorapol Mauthorn joined for the ‘Meet the Pro’ activity, which included a mini competition to raise funds for further development of Wat Tatuthumporn Temple in Nakhon Ratchasima province.",
      "Sino Logistics Corporation and R. K. INTERNATIONAL FREIGHT even awarded THB 100,000 for a Hole-in-One winner. Still, overall, the event was fun and joyful for all the 150 participants from customer and partner organizations, including shipping lines, airlines, trucking companies, and terminals, who spent quality time together.",
    ],
  },
  {
    id: 2,
    title:
      "Sino Logistics Corporation Thanks Customers & Partners with ‘Sino Golf Invitational 2021’",
    date: "11 Jan 2022",
    link: "/news-single/",
    image: corporation,
    image2x: corporation2x,
    text: [
      `Sino Logistics Corporation Public Company Limited organized an exclusive golf competition, ‘Sino Golf Invitational 2021’ at Amata Spring Country Club Golf Course in Chonburi on December 7th, 2021. The company hosted the event to express its gratitude toward its customers and partners for their support throughout 2021. This is the second year in a row the company has held this event.`,
      "To liven up the occasion, Thailand’s famous Pro-Golfers, Pro-Air – Ms. Saruttaya Ngam-Usawan, and Pro-Jack – Mr. Vorapol Mauthorn joined for the ‘Meet the Pro’ activity, which included a mini competition to raise funds for further development of Wat Tatuthumporn Temple in Nakhon Ratchasima province.",
      "Sino Logistics Corporation and R. K. INTERNATIONAL FREIGHT even awarded THB 100,000 for a Hole-in-One winner. Still, overall, the event was fun and joyful for all the 150 participants from customer and partner organizations, including shipping lines, airlines, trucking companies, and terminals, who spent quality time together.",
    ],
  },
  {
    id: 3,
    title:
      "How logistics moved from transporting Covid-19 vaccines to dealing with the aftermath of the economic state of affairs",
    date: "11 Jan 2022",
    link: "/news-single/",
    image: corporation,
    image2x: corporation2x,
    text: [
      `Sino Logistics Corporation Public Company Limited organized an exclusive golf competition, ‘Sino Golf Invitational 2021’ at Amata Spring Country Club Golf Course in Chonburi on December 7th, 2021. The company hosted the event to express its gratitude toward its customers and partners for their support throughout 2021. This is the second year in a row the company has held this event.`,
      "To liven up the occasion, Thailand’s famous Pro-Golfers, Pro-Air – Ms. Saruttaya Ngam-Usawan, and Pro-Jack – Mr. Vorapol Mauthorn joined for the ‘Meet the Pro’ activity, which included a mini competition to raise funds for further development of Wat Tatuthumporn Temple in Nakhon Ratchasima province.",
      "Sino Logistics Corporation and R. K. INTERNATIONAL FREIGHT even awarded THB 100,000 for a Hole-in-One winner. Still, overall, the event was fun and joyful for all the 150 participants from customer and partner organizations, including shipping lines, airlines, trucking companies, and terminals, who spent quality time together.",
    ],
  },
  {
    id: 4,
    title:
      "How logistics moved from transporting Covid-19 vaccines to dealing with the aftermath of the economic state of affairs",
    date: "11 Jan 2022",
    link: "/news-single/",
    image: corporation,
    image2x: corporation2x,
    text: [
      `Sino Logistics Corporation Public Company Limited organized an exclusive golf competition, ‘Sino Golf Invitational 2021’ at Amata Spring Country Club Golf Course in Chonburi on December 7th, 2021. The company hosted the event to express its gratitude toward its customers and partners for their support throughout 2021. This is the second year in a row the company has held this event.`,
      "To liven up the occasion, Thailand’s famous Pro-Golfers, Pro-Air – Ms. Saruttaya Ngam-Usawan, and Pro-Jack – Mr. Vorapol Mauthorn joined for the ‘Meet the Pro’ activity, which included a mini competition to raise funds for further development of Wat Tatuthumporn Temple in Nakhon Ratchasima province.",
      "Sino Logistics Corporation and R. K. INTERNATIONAL FREIGHT even awarded THB 100,000 for a Hole-in-One winner. Still, overall, the event was fun and joyful for all the 150 participants from customer and partner organizations, including shipping lines, airlines, trucking companies, and terminals, who spent quality time together.",
    ],
  },
];*/

const NewsList = ({ state, actions, post }) => {
  const { isAllNewsShown, isMobile } = state.theme;

  const news = state.source.get(`/company-news/`).items;

  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug'
  ]

  const dateHandler = (date) => {
    const year = date.split('-')[0];
    const month = Number(date.split('-')[1]);
    const day = date.split('-')[2].substr(0, 2);
    return day + ' ' + months[month-1] + ' ' + year;
  }
  console.log('news');
  console.log(news);

  return (
    <Section>
      <Container>
        <ListTitle>{post.acf.media_news_title ? parse(post.acf.media_news_title) : ''}</ListTitle>
        <List id="press-release">
          {news && news.map((newsItem, idx) => {
            if (!isAllNewsShown && idx > 2) {
              return null;
            }

            return (
              <Item key={newsItem.id}>
                <ImageSection
                  imagePosition={idx % 2 ? "left" : "right"}
                  image={newsItem.acf.news_item_thumbnail_1x ? newsItem.acf.news_item_thumbnail_1x.url : ''}
                  image2x={newsItem.acf.news_item_thumbnail_2x ? newsItem.acf.news_item_thumbnail_2x.url : ''}
                  isCorporate={true}
                >
                  <Content>
                    <Title size="xs" color="black" marginBottom={8}>
                      {parse(newsItem.title.rendered)}
                    </Title>
                    <Date>{dateHandler(newsItem.date)}</Date>
                    <BtnWrapper>
                      <PrimaryBtn
                        type="link"
                        link={newsItem.link}
                        content={post.acf.latest_news_link_text}
                      />
                    </BtnWrapper>
                  </Content>
                </ImageSection>
              </Item>
            );
          })}
          {!isMobile && !isAllNewsShown && (
            <LoadMoreWrapper>
              {!isMobile && (
                <LoadMore text={post.acf.latest_news_load_more_button_text ?
                  parse(post.acf.latest_news_load_more_button_text) : ''} onClick={() => actions.theme.handleNewsShow()} />
              )}
            </LoadMoreWrapper>
          )}
          {isMobile && (
            <LoadMoreWrapper>
              <LoadMoreCustom onClick={() => actions.theme.handleNewsToggle()}>
                <span>
                  {post.acf.latest_news_load_more_button_text ?
                    parse(post.acf.latest_news_load_more_button_text) : ''}
                </span>
                <div
                  css={
                    isAllNewsShown &&
                    css`
                      transform: rotate(180deg);
                    `
                  }
                >
                  <svg
                    width="11"
                    height="6"
                    viewBox="0 0 11 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.49137 5.99797C5.30811 5.99836 5.13051 5.92865 4.98939 5.80093L0.283345 1.51743C0.12317 1.37202 0.022441 1.16306 0.00331894 0.936524C-0.0158031 0.70999 0.0482477 0.484437 0.181381 0.309484C0.314514 0.134532 0.505824 0.0245113 0.713224 0.00362514C0.920625 -0.017261 1.12713 0.0526984 1.2873 0.198113L5.49137 4.03613L9.69544 0.335186C9.77567 0.264023 9.86799 0.210881 9.96708 0.178813C10.0662 0.146745 10.1701 0.136385 10.2729 0.148326C10.3756 0.160268 10.4752 0.194276 10.5659 0.248397C10.6566 0.302518 10.7366 0.375685 10.8014 0.463691C10.8732 0.551778 10.9276 0.655118 10.9612 0.767238C10.9947 0.879357 11.0067 0.997839 10.9964 1.11526C10.9861 1.23268 10.9537 1.34652 10.9013 1.44962C10.8488 1.55273 10.7774 1.6429 10.6916 1.71447L5.98551 5.85233C5.84034 5.95986 5.66636 6.01114 5.49137 5.99797Z"
                      fill="#4279B8"
                    />
                  </svg>
                </div>
              </LoadMoreCustom>
            </LoadMoreWrapper>
          )}
        </List>
      </Container>
    </Section>
  );
};

const LoadMoreCustom = styled.button`
  ${flex("row", "center")};
  background: transparent;
  border: none;
  margin: 0 auto;
  cursor: pointer;
  & span {
    ${font(24, 32)};
    color: var(--blue-600);
  }
  & div {
    margin-left: 8px;
  }
`;

const LoadMoreWrapper = styled.div`
  text-align: center;
  margin-top: 96px;
  & button {
    cursor: pointer;
  }
  @media screen and (max-width: 991px) {
    margin-top: 80px;
    & button {
    }
  }
`;

const BtnWrapper = styled.div``;

const Date = styled.div`
  display: block;
  ${font(18, 30)};
  color: var(--gray-900);
  margin-bottom: 48px;
  @media screen and (max-width: 991px) {
    margin-bottom: 32px;
  }
`;

const Content = styled.div`
  max-width: 558px;
  @media screen and (max-width: 991px) {
    max-width: 100%;
    margin-top: 24px;
    order: 1;
    & h4 {
      ${font(24, 32)};
    }
  }
`;

const Item = styled.li`
  margin-bottom: 144px;
  &:last-of-type {
    margin-bottom: 0;
  }
  @media screen and (max-width: 991px) {
    margin-bottom: 64px;
    &:last-of-type {
      margin-bottom: 0;
    }
  }
`;

const List = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
`;

const ListTitle = styled.h5`
  margin: 0;
  margin-bottom: 48px;
  color: var(--blue-600);
  font-weight: 400;
  ${font(32, 40)};
  letter-spacing: -0.02em;
  @media screen and (max-width: 991px) {
    font-weight: 500;
    margin-bottom: 32px;
  }
`;

const Section = styled.section`
  padding-top: 96px;
  @media screen and (max-width: 991px) {
    padding-top: 56px;
  }
`;

export default connect(NewsList);
