import React from "react";
import Container from "../constant/Container";
import Title from "../constant/Title";
import TextBlock from "./TextBlock/TextBlock";
import { styled } from "frontity";
import { font } from "../base/functions";
import parse from "html-react-parser";

const PrivacyPolicy = ({post}) => {
  return (
    <PageWrapper>
      <Section>
        <Container>
          <Title size="xs" color="blue">
            {parse(post.acf.privacy_policy_title)}
          </Title>
          <Content>
            <TextBlock title={parse(post.acf.privacy_policy_block_1_title)}>
              {post.acf.privacy_policy_block_1_text.map((p) => (
                <p key={p.privacy_policy_block_1_paragraph.slice(0, 11)}>{parse(p.privacy_policy_block_1_paragraph)}</p>
              ))}
            </TextBlock>
            <TextBlock title={parse(post.acf.privacy_policy_block_2_title)}>
              {post.acf.privacy_policy_block_2_text.map((p) => (
                <p key={p.privacy_policy_block_2_paragraph.slice(0, 11)}>{parse(p.privacy_policy_block_2_paragraph)}</p>
              ))}
              {post.acf.privacy_policy_block_2_list ?
              <List>
                {post.acf.privacy_policy_block_2_list.map((p) => (
                  <ListItem key={p.privacy_policy_block_2_list_item.slice(0, 11)}>
                    {parse(p.privacy_policy_block_2_list_item)}
                  </ListItem>
                ))}
              </List>
              : ''}
            </TextBlock>
            <TextBlock title={parse(post.acf.privacy_policy_block_3_title)}>
              {post.acf.privacy_policy_block_3_text.map((p) => (
                <p key={p.privacy_policy_block_3_paragraph.slice(0, 11)}>{parse(p.privacy_policy_block_3_paragraph)}</p>
              ))}
            </TextBlock>
            <TextBlock title={parse(post.acf.privacy_policy_block_4_title)}>
              {post.acf.privacy_policy_block_4_text.map((p) => (
                <p key={p.privacy_policy_block_4_paragraph.slice(0, 11)}>{parse(p.privacy_policy_block_4_paragraph)}</p>
              ))}
            </TextBlock>
          </Content>
        </Container>
      </Section>
    </PageWrapper>
  );
};

const ListItem = styled.li`
  padding-left: 24px;
  position: relative;
  font-weight: 300;
  ${font(18, 30)};
  color: var(--black);
  margin: 0;
  margin-bottom: 8px;
  &:last-child {
    margin-bottom: 0;
  }
  &::before {
    position: absolute;
    content: "";
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: var(--black);
    left: 10px;
    top: 14px;
  }
  @media screen and (max-width: 991px) {
    margin-bottom: 0;
  }
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  padding-left: 36px;
  margin-top: 16px;
  @media screen and (max-width: 991px) {
    padding-left: 0;
    margin-top: 8px;
  }
`;

const Content = styled.div`
  margin-top: 40px;
  max-width: 1020px;
  @media screen and (max-width: 991px) {
    margin-top: 32px;
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

export default PrivacyPolicy;
