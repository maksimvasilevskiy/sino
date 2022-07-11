import React from "react";
import Container from "./Container";
import { styled, connect, useConnect, css } from "frontity";
import { flex } from "../base/functions";

const ImageSection = ({
  last,
  hideImageInMobile,
  image,
  image2x,
  imagePosition,
  children,
}) => {
  const { state, actions } = useConnect();

  const { isMobile } = state.theme;

  return (
    <div
      css={
        last &&
        css`
          padding-bottom: 192px;
          @media screen and (max-width: 991px) {
            padding-bottom: 144px;
          }
        `
      }
      className="section"
    >
      <div
        css={css`
          position: relative;
        `}
      >
        <Container>
          <ContentWrapper>
            <ImageWrapper
              position={imagePosition}
              hideImageInMobile={hideImageInMobile}
            >
              <img
                src={image}
                srcSet={`${image} 1x, ${image2x ? image2x : image} 2x`}
                alt=""
              />
            </ImageWrapper>
            {!isMobile && <ChildrenWrapper>{children}</ChildrenWrapper>}
            {isMobile && <>{children}</>}
          </ContentWrapper>
        </Container>
      </div>
    </div>
  );
};

const ChildrenWrapper = styled.div`
  max-width: calc(100% - (((790 / 1372) * 100%) + 64px));
  @media screen and (max-width: 991px) {
    max-width: 100%;
  }
`;

const ImageWrapper = styled.div`
  order: ${({ position }) => (position === "right" ? "1" : "0")};
  max-width: calc((790 / 1372) * 100%);
  & img {
    width: 100%;
    height: auto;
    border-radius: 20px;
  }
  @media screen and (max-width: 991px) {
    ${({ hideImageInMobile }) => (hideImageInMobile ? "display: none;" : "")};
    max-width: 100%;
  }
`;

const ContentWrapper = styled.div`
  ${flex("row", "center", "space-between")};
  @media screen and (max-width: 991px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export default connect(ImageSection, { injectProps: false });
