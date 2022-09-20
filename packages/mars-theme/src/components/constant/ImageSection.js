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
  isCorporate,
  id
}) => {
  const { state } = useConnect();

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
      id={id}
    >
      <div
        css={css`
          position: relative;
        `}
      >
        <ImageSectionContainer isCorporate={isCorporate}>
          <ContentWrapper>
            <ImageWrapper
              position={imagePosition}
              hideImageInMobile={hideImageInMobile}
              isCorporate={isCorporate}
            >
              <img
                src={image}
                srcSet={`${image} 1x, ${image2x ? image2x : image} 2x`}
                alt=""
              />
            </ImageWrapper>
            {!isMobile && (
              <ChildrenWrapper isCorporate={isCorporate}>
                {children}
              </ChildrenWrapper>
            )}
            {isMobile && <>{children}</>}
          </ContentWrapper>
        </ImageSectionContainer>
      </div>
    </div>
  );
};

const ChildrenWrapper = styled.div`
  max-width: ${({ isCorporate }) =>
    isCorporate
      ? `calc(100% - (((674 / 1372) * 100%) + 64px))`
      : `calc(100% - (((790 / 1372) * 100%) + 64px))`};
  @media screen and (max-width: 1440px) {
    ${({ isCorporate }) => isCorporate && `max-width: calc(50% - 32px)`};
  }
  @media screen and (max-width: 991px) {
    max-width: 100%;
  }
`;

const ImageWrapper = styled.div`
  order: ${({ position }) => (position === "right" ? "1" : "0")};
  max-width: calc((790 / 1372) * 100%);
  & img {
    width: 100%;
    max-width: 674px;
    height: auto;
    border-radius: 20px;
  }
  @media screen and (max-width: 1440px) {
    ${({ isCorporate }) => isCorporate && `max-width: calc(50% - 32px)`};
  }
  @media screen and (max-width: 991px) {
    ${({ hideImageInMobile }) => (hideImageInMobile ? "display: none;" : "")};
    max-width: 100%;
  }
`;

const ImageSectionContainer = styled(Container)`
  @media screen and (max-width: 576px) {
    ${({ isCorporate }) => isCorporate && "padding: 0;"}
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
