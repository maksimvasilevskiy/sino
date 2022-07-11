import React from "react";
import Title from "../../constant/Title";
import PrimaryButton from "../../constant/PrimaryButton";
import DecorativeLine from "../../constant/DecorativeLine";
import { font } from "../../base/functions";
import { styled, css, connect } from "frontity";

import containers from "../../../assets/images/noel-broda-sigzPF1sT7k-unsplash.jpg";
import containers2x from "../../../assets/images/noel-broda-sigzPF1sT7k-unsplash@2x.jpg";

const Quote = ({ state }) => {
  const { isMobile } = state.theme;

  return (
    <div className="section">
      <div
        css={css`
          position: relative;
        `}
      >
        <DecorativeLineWrapper>
          <DecorativeLine
            heightInPercent={18.45493562}
            rotation="bottom"
            color="white"
          />
        </DecorativeLineWrapper>
        <DecorativeLineWrapper>
          <DecorativeLine heightInPercent={18.16881259} color="white" />
        </DecorativeLineWrapper>
        <ImageContainer>
          <img
            src={containers}
            srcSet={`${containers} 1x, ${containers2x || containers} 2x`}
            alt=""
          />
        </ImageContainer>
        <Content>
          <Title size="m" color="white" marginBottom={isMobile ? 24 : 16}>
            Get a Quote
          </Title>
          <Subtitle maxWidth={791}>
            <p>
              Get in touch with one of our supply chain experts to who can
              provide you with the best international or domestic shipping
              rates.
            </p>
          </Subtitle>
          <PrimaryButton content="Request" type="link" link="/get-quote" />
        </Content>
      </div>
    </div>
  );
};

const Subtitle = styled.div`
  margin-bottom: 32px;
  ${({ maxWidth }) => (maxWidth ? `max-width: ${maxWidth}px` : "")};
  & p {
    margin: 0;
    ${font(24, 32)};
    color: var(--white);
    letter-spacing: 0.04em;
    font-weight: 400;
  }
  @media screen and (max-width: 991px) {
    & p {
      ${font(18, 30)};
      font-weight: 300;
      letter-spacing: 0;
    }
  }
`;

const DecorativeLineWrapper = styled.div`
  position: absolute;
  z-index: 2;
  height: 100%;
  &:first-of-type {
    top: 0;
    left: calc(var(--container-padding-xl) + 116px);
  }
  &:nth-of-type(2) {
    bottom: 0;
    right: calc(var(--container-padding-xl) + 252px);
    display: grid;
    align-items: end;
  }
  @media screen and (max-width: 1400px) {
    &:first-of-type {
      left: var(--container-padding-lg);
    }
    &:nth-of-type(2) {
      right: calc(var(--container-padding-lg) + 92px);
    }
  }
`;

const Content = styled.div`
  position: relative;
  z-index: 2;
  padding: 230px 0;
  padding-left: calc(var(--container-padding-xl) + 233px);
  @media screen and (max-width: 1400px) {
    padding: 230px var(--container-padding-lg);
  }
  @media screen and (max-width: 991px) {
    padding: 99px var(--container-padding-md);
  }
  @media screen and (max-width: 768px) {
    padding: 99px var(--container-padding-xs);
  }
  @media screen and (max-width: 576px) {
    padding: 99px 24px;
  }
`;

const ImageContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  @media screen and (max-width: 991px) {
    & img {
      object-position: -104px 50%;
    }
  }
`;

export default connect(Quote);
