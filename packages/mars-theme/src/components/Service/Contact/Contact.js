import React from "react";
import Container from "../../constant/Container";
import Title from "../../constant/Title";
import PrimaryBtn from "../../constant/PrimaryButton";
import DecorativeLine from "../../constant/DecorativeLine";
import { flex } from "../../base/functions";
import { styled, connect } from "frontity";
import parse from "html-react-parser";

const Contact = ({ state, post }) => {
  const { isMobile } = state.theme;

  return (
    <Section>
      <BgWrapper>
        <BgImage src={post.acf.service_contact_background.url} alt="">
          <source srcSet={post.acf.service_contact_background.url} media="(min-width: 576px)" />
          <img src={post.acf.service_contact_background_mobile.url} alt="" />
        </BgImage>
        <DarkLayer />
      </BgWrapper>
      <ContactContainer>
        <LineWrapper>
          <DecorativeLine
            heightInPercent={13.135068}
            rotation="bottom"
            color="white"
          />
        </LineWrapper>
        <Content>
          <TitleWrapper>
            <Title size="xs" color="white" marginBottom={isMobile ? 32 : 48}>
              {parse(post.acf.service_contact_title)}
            </Title>
          </TitleWrapper>
          <ButtonsWrapper>
            <PrimaryBtn
              type="link"
              link={post.acf.service_contact_button_1_link}
              maxWidth={"325px"}
              content={parse(post.acf.service_contact_button_1_text)}
            />
            <PrimaryBtn
              type="link"
              link={post.acf.service_contact_button_2_link}
              maxWidth={"325px"}
              content={parse(post.acf.service_contact_button_2_text)}
            />
          </ButtonsWrapper>
        </Content>
      </ContactContainer>
    </Section>
  );
};

const TitleWrapper = styled.div`
  @media screen and (max-width: 576px) {
    max-width: 208px;
  }
`;

const LineWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
`;

const ButtonsWrapper = styled.div`
  ${flex()};
  gap: 24px;
  @media screen and (max-width: 991px) {
    flex-direction: column;
  }
`;

const BgImage = styled.picture`
  width: 100%;
  height: 100%;
  & img {
    object-fit: cover;
    width: inherit;
    height: inherit;
  }
  @media screen and (max-width: 991px) {
    & img {
      object-position: 75% 50%;
    }
  }
`;

const DarkLayer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #13131366;
`;

const BgWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-position: right bottom;
`;

const Content = styled.div`
  padding-top: 366px;
  padding-bottom: 281px;
  @media screen and (max-width: 991px) {
    padding: 117px 0;
  }
`;

const ContactContainer = styled(Container)`
  position: relative;
`;

const Section = styled.section`
  margin-top: 192px;
  overflow: hidden;
  position: relative;
  @media screen and (max-width: 991px) {
    margin-top: 128px;
  }
`;

export default connect(Contact);
