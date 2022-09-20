import React from "react";
import Title from "../../constant/Title";
import Container from "../../constant/Container";
import PositionsList from "./PositionsList";
import { styled, connect } from "frontity";
import { font } from "../../base/functions";

const JoinElement = ({ state, post, jobs }) => {
  const { isMobile } = state.theme;

  return (
    <Join>
      <Container>
        <Text>
          <Title
            size="xs"
            color="blue"
            maxWidth={698}
            marginBottom={isMobile ? 16 : 24}
          >
            {post.acf.join_team_title}
          </Title>
          <Subtitle>
            <p>
              {post.acf.join_team_text}
            </p>
          </Subtitle>
        </Text>
        <PositionsList jobs={jobs} post={post} />
      </Container>
    </Join>
  );
};

const Subtitle = styled.div`
  max-width: 907px;
  & p {
    margin: 0;
    ${font(24, 32)};
    letter-spacing: -0.02em;
    font-weight: 300;
  }
  @media screen and (max-width: 991px) {
    & p {
      ${font(18, 30)};
    }
  }
`;

const Text = styled.div`
  margin-bottom: 69px;
`;

const Join = styled.div`
  padding-top: 96px;
  @media screen and (max-width: 991px) {
    padding-top: 56px;
  }
`;

export default connect(JoinElement);
