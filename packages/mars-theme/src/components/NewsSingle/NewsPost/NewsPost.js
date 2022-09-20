import React, { useEffect } from "react";
import Title from "../../constant/Title";
import Container from "../../constant/Container";
import Link from "../../constant/Link";
import { styled, connect } from "frontity";
import { font, flex } from "../../base/functions";
import parse from "html-react-parser";

import corporation from "../../../assets/images/corporation-thanks.jpg";
import corporation2x from "../../../assets/images/corporation-thanks@2x.jpg";

import share from "../../../assets/images/svg/bi_share.svg";

import facebook from "../../../assets/images/svg/Facebook.svg";
import linkedin from "../../../assets/images/svg/LinkedIn.svg";
import message from "../../../assets/images/svg/Message.svg";
import twitter from "../../../assets/images/svg/Twitter.svg";

import { FacebookShareButton, TwitterShareButton } from "react-share";

/*const post = {
  id: 2,
  title:
    "Sino Logistics Corporation Thanks Customers & Partners with ‘Sino Golf Invitational 2021’",
  date: "11 Jan 2022",
  link: "/news-single/",
  image: corporation,
  image2x: corporation2x,
  text: [
    `Sino Logistics Corporation Public Company Limited organized an exclusive golf competition, ‘Sino Golf Invitational 2021’ at Amata Spring Country Club Golf Course in Chonburi on December 7th, 2021. The company hosted the event to express its gratitude toward its customers and partners for their support throughout 2021. This is the second year in a row the company has held this event.`,
    "To liven up the occasion, Thailand’s famous Pro-Golfers, Pro-Air – Ms. Saruttaya Ngam-Usawan, and Pro-Jack – Mr. Vorapol Mauthorn joined for the ‘Meet the Pro’ activity, which included a mini competition to raise funds for further development of Wat Tatuthumporn Temple in Nakhon Ratchasima province.",
    "Sino Logistics Corporation and R. K. INTERNATIONAL FREIGHT even awarded THB 100,000 for a Hole-in-One winner. Still, overall, the event was fun and joyful for all the 150 participants from customer and partner organizations, including shipping lines, airlines, trucking companies, and terminals, who spent quality time together.",
  ],
};*/

const NewsPost = ({ state, actions, post }) => {
  const { isMobile, shareModalOpened } = state.theme;

  useEffect(() => {
    document.addEventListener("click", (evt) =>
      actions.theme.handleShareModalClose(evt.target)
    );

    return document.removeEventListener("click", (evt) =>
      actions.theme.handleShareModalClose(evt.target)
    );
  }, []);

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

  // TODO: Add "Done" modal after sharing

  return (
    <Section>
      <Container>
        <PostContainer>
          <Title size="m" color="black" marginBottom={isMobile ? 16 : 54}>
            {post.title.rendered ?
              parse(post.title.rendered) : ''}
          </Title>
          <AdditionalBlock>
            <Date>{dateHandler(post.date)}</Date>
            <ShareWrapper>
              <ShareModal
                className={`share-modal ${
                  shareModalOpened && "share-modal_opened"
                }`}
              >
                <ShareLink link={"https://www.facebook.com/share.php?u=www.sinologistics.co.th/" + state.router.link} target="_blank">
                  <img width="16" height="16" src={facebook} alt="" />
                  <span>Facebook</span>
                </ShareLink>
                <ShareLink link={"https://www.linkedin.com/shareArticle?mini=true&url=www.sinologistics.co.th/" + state.router.link} target="_blank">
                  <img width="16" height="16" src={linkedin} alt="" />
                  <span>Linkedin</span>
                </ShareLink>
                <ShareLink link="/email/">
                  <img width="16" height="16" src={message} alt="" />
                  <span>Email</span>
                </ShareLink>
                <ShareLink link={"https://twitter.com/intent/tweet?url=www.sinologistics.co.th/" + state.router.link} target="_blank">
                  <img width="16" height="16" src={twitter} alt="" />
                  <span>Twitter</span>
                </ShareLink>
              </ShareModal>
              <ShareBtn
                className="share-btn"
                onClick={() => actions.theme.handleShareModalOpen()}
              >
                <span>Share</span>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.2504 1.50047C19.6537 1.50047 19.0814 1.73752 18.6594 2.15948C18.2374 2.58144 18.0004 3.15373 18.0004 3.75047C18.0004 4.34721 18.2374 4.9195 18.6594 5.34146C19.0814 5.76342 19.6537 6.00047 20.2504 6.00047C20.8471 6.00047 21.4194 5.76342 21.8414 5.34146C22.2633 4.9195 22.5004 4.34721 22.5004 3.75047C22.5004 3.15373 22.2633 2.58144 21.8414 2.15948C21.4194 1.73752 20.8471 1.50047 20.2504 1.50047ZM16.5004 3.75047C16.5003 2.87062 16.8096 2.01874 17.3741 1.34389C17.9386 0.669031 18.7225 0.214166 19.5885 0.0588767C20.4546 -0.0964129 21.3476 0.0577611 22.1115 0.494425C22.8753 0.931088 23.4613 1.62243 23.7669 2.44751C24.0725 3.27258 24.0783 4.17884 23.7832 5.00773C23.4881 5.83662 22.9109 6.53535 22.1527 6.98169C21.3945 7.42802 20.5034 7.59352 19.6355 7.44925C18.7675 7.30497 17.978 6.8601 17.4049 6.19247L7.3279 10.8725C7.55956 11.6066 7.55956 12.3943 7.3279 13.1285L17.4049 17.8085C18.0107 17.104 18.8564 16.6494 19.7782 16.5329C20.7 16.4165 21.6322 16.6463 22.3942 17.178C23.1561 17.7097 23.6936 18.5053 23.9024 19.4107C24.1112 20.316 23.9764 21.2667 23.5243 22.0783C23.0721 22.89 22.3347 23.5049 21.455 23.8039C20.5753 24.1029 19.6159 24.0646 18.7628 23.6966C17.9097 23.3285 17.2236 22.6569 16.8375 21.8118C16.4513 20.9667 16.3927 20.0083 16.6729 19.1225L6.5959 14.4425C6.09705 15.0238 5.43212 15.4385 4.69057 15.6306C3.94901 15.8227 3.1664 15.7832 2.448 15.5172C1.72961 15.2512 1.10991 14.7716 0.672259 14.1429C0.234606 13.5142 0 12.7665 0 12.0005C0 11.2344 0.234606 10.4868 0.672259 9.85804C1.10991 9.22932 1.72961 8.74972 2.448 8.48375C3.1664 8.21778 3.94901 8.1782 4.69057 8.37034C5.43212 8.56248 6.09705 8.97711 6.5959 9.55847L16.6729 4.87847C16.5582 4.51347 16.5 4.13307 16.5004 3.75047ZM3.7504 9.75047C3.15366 9.75047 2.58136 9.98752 2.15941 10.4095C1.73745 10.8314 1.5004 11.4037 1.5004 12.0005C1.5004 12.5972 1.73745 13.1695 2.15941 13.5915C2.58136 14.0134 3.15366 14.2505 3.7504 14.2505C4.34714 14.2505 4.91943 14.0134 5.34139 13.5915C5.76335 13.1695 6.0004 12.5972 6.0004 12.0005C6.0004 11.4037 5.76335 10.8314 5.34139 10.4095C4.91943 9.98752 4.34714 9.75047 3.7504 9.75047ZM20.2504 18.0005C19.6537 18.0005 19.0814 18.2375 18.6594 18.6595C18.2374 19.0814 18.0004 19.6537 18.0004 20.2505C18.0004 20.8472 18.2374 21.4195 18.6594 21.8415C19.0814 22.2634 19.6537 22.5005 20.2504 22.5005C20.8471 22.5005 21.4194 22.2634 21.8414 21.8415C22.2633 21.4195 22.5004 20.8472 22.5004 20.2505C22.5004 19.6537 22.2633 19.0814 21.8414 18.6595C21.4194 18.2375 20.8471 18.0005 20.2504 18.0005Z"
                    fill="#4279B8"
                  />
                </svg>
              </ShareBtn>
            </ShareWrapper>
          </AdditionalBlock>
          {post.content.rendered ?
            parse(post.content.rendered) : ''}
          {/*<ImageWrapper>
            <img
              src={post.acf.news_item_image_1x.url}
              srcSet={`${post.acf.news_item_image_1x.url} 1x, ${
                post.acf.news_item_image_2x.url ? post.acf.news_item_image_2x.url : post.acf.news_item_image_1x.url
              } 2x`}
              alt=""
            />
          </ImageWrapper>
          <Article>
            {post.acf.news_item_text.map((p) => (
              <p key={p.news_item_paragraph.slice(0, 11)}>{parse(p.news_item_paragraph)}</p>
            ))}
          </Article>*/}
        </PostContainer>
      </Container>
    </Section>
  );
};

const ShareLink = styled(Link)`
  color: var(--blue-600);
  ${flex("row", "center", "flex-start", "nowrap")};
  display: inline-block;
  margin-bottom: 8px;
  &:last-child {
    margin-bottom: 0;
  }
  &:hover {
    & span {
      text-decoration: underline;
      color: var(--gray-menu);
    }
  }
  &:active {
    & span {
      color: var(--blue-600);
    }
  }
  & span {
    display: inline-block;
    margin-left: 8px;
    ${font(18, 30)};
  }
`;

const ShareModal = styled.div`
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 24px;
  min-width: 209px;
  box-sizing: border-box;
  background: var(--white);
  ${flex("column")};
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s;
  &.share-modal_opened {
    pointer-events: auto;
    opacity: 1;
  }
`;

const ShareWrapper = styled.div`
  position: relative;
`;

const Article = styled.div`
  & p {
    ${font(18, 30)};
    margin: 0;
    margin-bottom: 8px;
    font-weight: 300;
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const ImageWrapper = styled.div`
  margin-bottom: 48px;
  & img {
    border-radius: 20px;
    width: 100%;
  }
  @media screen and (max-width: 991px) {
    margin-bottom: 24px;
  }
`;

const ShareBtn = styled.button`
  background: transparent;
  border: none;
  ${flex("row", "center")};
  cursor: pointer;
  & span {
    display: inline-block;
    ${font(18, 30)};
    margin-right: 8px;
    color: var(--blue-600);
  }
  &:hover {
    & span {
      color: var(--gray-menu);
    }
    & svg path {
      fill: var(--gray-menu);
    }
  }
  &:active {
    & span {
      color: var(--gray-900);
    }
    & svg path {
      fill: var(--gray-900);
    }
  }
`;

const Date = styled.p`
  ${font(18, 30)};
  margin: 0;
  color: var(--gray-900);
`;

const AdditionalBlock = styled.div`
  ${flex("row", "center", "space-between")}
  margin-bottom: 16px;
  @media screen and (max-width: 991px) {
    margin-bottom: 32px;
  }
`;

const PostContainer = styled.div`
  max-width: 1023px;
  p {
    font-size: 1.8rem;
    line-height: calc(30/18);
    margin: 0;
    margin-bottom: 8px;
    font-weight: 300;
  }
  img {
    height: auto;
    max-width: 100%;
  }
  .aligncenter {
    clear: both;
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 1.5em;
  }
  .alignright {
    float: right;
    margin-left: 1.5em;
    margin-bottom: 1.5em;
  }
  .alignleft {
    float: left;
    margin-right: 1.5em;
    margin-bottom: 1.5em;
  }
  @media screen and (max-width: 991px) {
    & h2 {
      ${font(24, 32)};
    }
    .alignright {
      float: none;
      margin-left: 0;
      margin-bottom: 0;
    }
    .alignleft {
      float: none;
      margin-right: 0;
      margin-bottom: 0;
    }
    img {
      display: block;
    }
  }
`;

const Section = styled.section`
  padding-top: 96px;
  @media screen and (max-width: 991px) {
    padding-top: 56px;
  }
`;

export default connect(NewsPost);
