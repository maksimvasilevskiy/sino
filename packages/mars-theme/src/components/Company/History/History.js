import React from "react";
import Container from "../../constant/Container";
import Title from "../../constant/Title";
import { connect, styled } from "frontity";
import { font } from "../../base/functions";

const History = ({post}) => {
  return (
    <HistoryWrapper id="company-history">
      <Container>
        <Title size="m" color="blue" marginBottom={24}>
          {post.acf.company_history_title}
        </Title>
        <Content>
          <TextColumn>
            {post.acf.company_history_left_text.map((paragraph, i) => {
              return <p key={'company_history_paragraph_left_' + i}>{paragraph.company_history_left_text_paragraph}</p>;
            })}
          </TextColumn>
          <TextColumn>
            {post.acf.company_history_right_text.map((paragraph, i) => {
              return <p key={'company_history_paragraph_right_' + i}>{paragraph.company_history_right_text_paragraph}</p>;
            })}
          </TextColumn>
        </Content>
      </Container>
    </HistoryWrapper>
  );
};

const TextColumn = styled.div`
  & p {
    ${font(18, 30)}
    font-weight: 300;
    margin: 0;
    margin-bottom: 8px;
    &:last-of-type {
      margin-bottom: 0;
    }
  }
  @media screen and (max-width: 991px) {
    margin-bottom: 8px;
    &:last-of-type {
      margin-bottom: 0;
    }
  }
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: calc(50% - 12px) calc(50% - 12px);
  grid-gap: 24px;
  @media screen and (max-width: 991px) {
    grid-gap: 0;
    grid-template-columns: 100%;
  }
`;

const HistoryWrapper = styled.section`
  padding-top: 152px;
  @media screen and (max-width: 991px) {
    padding-top: 32px;
  }
`;

export default connect(History);
