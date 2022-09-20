import React from "react";
import Hero from "../constant/HeroSection";
import Container from "../constant/Container";
import Title from "../constant/Title";
import { connect, styled } from "frontity";
import { font } from "../base/functions";
import parse from "html-react-parser";

import investor from "../../assets/images/johan-taljaard-investor-unsplash.png";

const Investor = ({ state, post }) => {
  const { isMobile } = state.theme;

  return (
    <InvestorWrapper>
      <Hero title={post.acf.investor_top_banner_title} image={post.acf.investor_top_banner_background.url} />
      <Content>
        <Container>
          <Title size="xs" color="blue" marginBottom={isMobile ? 16 : 40}>
            {post.acf.investor_content_title ? parse(post.acf.investor_content_title) : ''}
          </Title>
          <Text>
            {post.acf.investor_content_text.map((p) => (
              <p key={p.investor_content_paragraph.slice(0, 11)}>{parse(p.investor_content_paragraph)}</p>
            ))}
          </Text>
        </Container>
      </Content>
    </InvestorWrapper>
  );
};

const Text = styled.div`
  max-width: 993px;
  & p {
    margin: 0;
    ${font(18, 30)};
    font-weight: 300;
    margin-bottom: 8px;
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const Content = styled.div`
  padding-top: 96px;
  padding-bottom: 192px;
  @media screen and (max-width: 991px) {
    padding-top: 56px;
    padding-bottom: 144px;
  }
`;

const InvestorWrapper = styled.div``;

export default connect(Investor);
