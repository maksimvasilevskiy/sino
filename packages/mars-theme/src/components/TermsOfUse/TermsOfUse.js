import React from "react";
import Container from "../constant/Container";
import Title from "../constant/Title";
import TextBlock from "../PrivacyPolicy/TextBlock/TextBlock";
import { styled } from "frontity";
import { font } from "../base/functions";
import parse from "html-react-parser";

const TermsOfUse = ({post}) => {
  console.log(post);
  return (
    <PageWrapper>
      <Section>
        <Container>
          <Title size="xs" color="blue">
            {post.acf.terms_of_use_title ? parse(post.acf.terms_of_use_title) : ''}
          </Title>
          <Subtitle>
            {post.acf.terms_of_use_subtitle && post.acf.terms_of_use_subtitle.map((p) => (
              <p key={p.terms_of_use_subtitle_paragraph.slice(0, 11)}>{parse(p.terms_of_use_subtitle_paragraph)}</p>
            ))}
          </Subtitle>
          <Content>
            <TextBlock key={parse(post.acf.terms_of_use_disclaimer_title).slice(0, 11)} title={parse(post.acf.terms_of_use_disclaimer_title)}>
              {post.acf.terms_of_use_disclaimer_text.length > 0 ? post.acf.terms_of_use_disclaimer_text.map((p) => (
                <p key={p.terms_of_use_disclaimer_paragraph.slice(0, 11)}>{parse(p.terms_of_use_disclaimer_paragraph)}</p>
              )) : ''}
            </TextBlock>
            <TextBlock key={parse(post.acf.terms_of_use_copyrights_title).slice(0, 11)} title={parse(post.acf.terms_of_use_copyrights_title)}>
              {post.acf.terms_of_use_copyrights_text.length > 0 ? post.acf.terms_of_use_copyrights_text.map((p) => (
                <p key={p.terms_of_use_copyrights_paragraph.slice(0, 11)}>{parse(p.terms_of_use_copyrights_paragraph)}</p>
              )) : ''}
            </TextBlock>
            <TextBlock key={parse(post.acf.terms_of_use_right_to_access_title).slice(0, 11)} title={parse(post.acf.terms_of_use_right_to_access_title)}>
              {post.acf.terms_of_use_right_to_access_text.length > 0 ? post.acf.terms_of_use_right_to_access_text.map((p) => (
                <p key={p.terms_of_use_right_to_access_paragraph.slice(0, 11)}>{parse(p.terms_of_use_right_to_access_paragraph)}</p>
              )) : ''}
            </TextBlock>
            <TextBlock key={parse(post.acf.terms_of_use_other_website_title).slice(0, 11)} title={parse(post.acf.terms_of_use_other_website_title)}>
              {post.acf.terms_of_use_other_website_text.length > 0 ? post.acf.terms_of_use_other_website_text.map((p) => (
                <p key={p.terms_of_use_other_website_paragraph.slice(0, 11)}>{parse(p.terms_of_use_other_website_paragraph)}</p>
              )) : ''}
            </TextBlock>
            <TextBlock key={parse(post.acf.terms_of_use_enforcement_law_title).slice(0, 11)} title={parse(post.acf.terms_of_use_enforcement_law_title)}>
              {post.acf.terms_of_use_enforcement_law_text.length > 0 ? post.acf.terms_of_use_enforcement_law_text.map((p) => (
                <p key={p.terms_of_use_enforcement_law_paragraph.slice(0, 11)}>{parse(p.terms_of_use_enforcement_law_paragraph)}</p>
              )) : ''}
            </TextBlock>
          </Content>
        </Container>
      </Section>
    </PageWrapper>
  );
};

const Content = styled.div`
  margin-top: 40px;
  max-width: 1020px;
  @media screen and (max-width: 991px) {
    margin-top: 32px;
  }
`;

const Subtitle = styled.div`
  margin-top: 24px;
  & p {
    font-weight: 300;
    ${font(18, 30)};
    color: var(--black);
    margin: 0;
    margin-bottom: 6px;
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const Section = styled.section`
  padding-top: 96px;
  padding-bottom: 192px;
  @media screen and (max-width: 991px) {
    padding-top: 56px;
    padding-bottom: 145px;
  }
`;

const PageWrapper = styled.div``;

export default TermsOfUse;
