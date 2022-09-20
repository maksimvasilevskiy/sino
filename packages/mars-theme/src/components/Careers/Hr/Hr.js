import React from "react";
import Container from "../../constant/Container";
import IconBlock from "../../constant/IconBlock";
import TextLink from "../../constant/TextLink";
import { connect, styled, css } from "frontity";
import { font, flex } from "../../base/functions";

import hr from "../../../assets/images/alex-starnes-PK_t0Lrh7MM.png";
import hr2x from "../../../assets/images/alex-starnes-PK_t0Lrh7MM@2x.png";
import message from "../../../assets/images/svg/Message.svg";
import phone from "../../../assets/images/svg/Phone.svg";

const Hr = ({post}) => {
  return (
    <section
      css={css`
        padding-top: 144px;
        padding-bottom: 192px;
        @media screen and (max-width: 991px) {
          padding-top: 128px;
          padding-bottom: 144px;
        }
      `}
      className="section"
    >
      <Container>
        <Content>
          <ImageWrapper>
            <img src={post.acf.hr_image_1x.url} srcSet={`${post.acf.hr_image_1x.url} 1x, ${post.acf.hr_image_2x.url ? post.acf.hr_image_2x.url : post.acf.hr_image_1x.url} 2x`} alt="" />
          </ImageWrapper>
          <div
            css={css`
              ${flex("column")}
            `}
          >
            <ContactTitle>{post.acf.hr_title}:</ContactTitle>
            <IconBlock icon={message} marginBottom={8}>
              <TextLink link={`mailto:${post.acf.hr_mail}`}>
                {post.acf.hr_mail}
              </TextLink>
            </IconBlock>
            <IconBlock icon={phone} marginBottom={8}>
              <TextLink link={`tel:${post.acf.hr_phone}`}>{post.acf.hr_phone}</TextLink>
            </IconBlock>
            <Ext>
              <p>{post.acf.hr_ext}</p>
            </Ext>
          </div>
        </Content>
      </Container>
    </section>
  );
};

const Ext = styled.div`
  padding-left: 32px;
  & p {
    color: var(--black-900);
    ${font(18, 30)};
    margin: 0;
  }
`;

const ContactTitle = styled.h5`
  ${font(18, 30)};
  margin: 0;
  font-weight: 400;
  color: var(--gray-900);
  margin-bottom: 16px;
`;

const ImageWrapper = styled.div`
  width: 100%;
  & img {
    border-radius: 20px;
  }
  @media screen and (max-width: 768px) {
    & img {
      width: 100%;
    }
  }
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: 441px 1fr;
  grid-gap: 24px;
  @media screen and (max-width: 768px) {
    grid-template-columns: 100%;
  }
`;

export default connect(Hr);
