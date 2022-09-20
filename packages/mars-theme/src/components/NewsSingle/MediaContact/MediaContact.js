import React from "react";
import Container from "../../constant/Container";
import TextLink from "../../constant/TextLink";
import IconBlock from "../../constant/IconBlock";
import { styled } from "frontity";
import { font } from "../../base/functions";
import parse from "html-react-parser";

import contact from "../../../assets/images/media-contact.png";
import contact2x from "../../../assets/images/media-contact@2x.png";
import message from "../../../assets/images/svg/Message.svg";

const MediaContact = ({post}) => {
  return (
    <Section>
      <Container>
        <MediaTitle>
        {post.acf.news_media_title ?
          parse(post.acf.news_media_title) : ''}
        </MediaTitle>
        <Note>
          <p>
          {post.acf.news_media_text ?
            parse(post.acf.news_media_text) : ''}
          </p>
        </Note>
        <Content>
          <ImageWrapper>
            <img
              src={post.acf.news_media_image_1x.url}
              srcSet={`${post.acf.news_media_image_1x.url} 1x, ${post.acf.news_media_image_2x.url} 2x`}
              width="128"
              height="128"
              alt="media contact"
            />
          </ImageWrapper>
          <Info>
            <Name>{post.acf.news_media_name ?
              parse(post.acf.news_media_name) : ''}</Name>
            <Position>{post.acf.news_media_post ?
              parse(post.acf.news_media_post) : ''}</Position>
            <IconBlock icon={message}>
              <TextLink link={`mailto:${post.acf.news_media_mail}`}>
                {post.acf.news_media_mail}
              </TextLink>
            </IconBlock>
          </Info>
        </Content>
      </Container>
    </Section>
  );
};

const Position = styled.p`
  ${font(16, 24)}
  margin: 0;
  margin-bottom: 16px;
  color: var(--black);
  opacity: 0.5;
`;

const Name = styled.p`
  ${font(20, 30)}
  margin: 0;
`;

const Info = styled.div``;

const ImageWrapper = styled.div`
  overflow: hidden;
  border-radius: 50%;
  max-width: 128px;
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: 128px 1fr;
  grid-column-gap: 32px;
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-row-gap: 16px;
  }
`;

const Note = styled.div`
  margin-bottom: 24px;
  & p {
    margin: 0;
    ${font(18, 30)};
  }
`;

const MediaTitle = styled.h5`
  margin: 0;
  margin-bottom: 48px;
  color: var(--blue-600);
  font-weight: 400;
  ${font(32, 40)};
  letter-spacing: -0.02em;
  @media screen and (max-width: 991px) {
    margin-bottom: 32px;
  }
`;

const Section = styled.section`
  padding-top: 144px;
  padding-bottom: 192px;
  @media screen and (max-width: 991px) {
    padding-top: 128px;
    padding-bottom: 144px;
  }
`;

export default MediaContact;
