import React from "react";
import Container from "../../constant/Container";
import Title from "../../constant/Title";
import HelpForm from "./HelpForm/HelpForm";
import PrimaryBtn from "../../constant/PrimaryButton";
import { font } from "../../base/functions";
import { styled, connect } from "frontity";
import parse from "html-react-parser";

import contact from "../../../assets/images/Contact-us-02.png";
import contact2x from "../../../assets/images/Contact-us-02@2x.png";

const Help = ({ state, post }) => {
  const { isMobile } = state.theme;

  return (
    <Section>
      <Container>
        <Wrapper>
          <Content>
            <Title size="xs" color="blue" marginBottom={isMobile ? 16 : 32}>
              {post.acf.contact_help_title ? parse(post.acf.contact_help_title) : ''}
            </Title>
            <Note>
              <p>
                {post.acf.contact_help_text ? parse(post.acf.contact_help_text) : ''}
              </p>
            </Note>
            <HelpForm post={post} />
            <Quote>
              <p>
                {post.acf.contact_quote_text ? parse(post.acf.contact_quote_text) : ''}
              </p>
              <PrimaryBtn
                type="link"
                link={post.acf.contact_quote_button_link}
                content={post.acf.contact_quote_button_text ? parse(post.acf.contact_quote_button_text) : ''}
              />
            </Quote>
          </Content>
          <ImageBlock>
            <img
              src={post.acf.contact_help_image_1x.url}
              srcSet={`${post.acf.contact_help_image_1x.url} 1x, ${post.acf.contact_help_image_2x.url ? post.acf.contact_help_image_2x.url : post.acf.contact_help_image_1x.url} 2x`}
              alt=""
            />
          </ImageBlock>
        </Wrapper>
      </Container>
    </Section>
  );
};

const Quote = styled.div`
  & p {
    margin: 0;
    ${font(18, 30)};
    margin-bottom: 16px;
  }
  @media screen and (max-width: 991px) {
    & p {
      margin-bottom: 24px;
    }
  }
`;

const Note = styled.div`
  margin-bottom: 35px;
  & p {
    ${font(18, 30)};
    margin: 0;
  }
  @media screen and (max-width: 991px) {
    margin-bottom: 32px;
  }
`;

const Content = styled.div``;

const ImageBlock = styled.div`
  text-align: right;
  & img {
    border-radius: 20px;
    max-width: 558px;
  }
  @media screen and (max-width: 1440px) {
    & img {
      max-width: 100%;
    }
  }
  @media screen and (max-width: 991px) {
    display: none;
  }
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: calc(50% - 12px) calc(50% - 12px);
  grid-gap: 24px;
  align-items: center;
  @media screen and (max-width: 991px) {
    grid-template-columns: 100%;
  }
`;

const Section = styled.section`
  padding-top: 96px;
  @media screen and (max-width: 991px) {
    padding-top: 56px;
  }
`;

export default connect(Help);
