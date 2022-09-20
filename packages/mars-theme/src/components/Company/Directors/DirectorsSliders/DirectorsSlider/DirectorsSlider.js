import React, { useState } from "react";
import SwiperButtons from "../../../../constant/SwiperButtons";
import { styled, useConnect, connect } from "frontity";
import { font, flex } from "../../../../base/functions";
import parse from "html-react-parser";

import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";
import { Navigation } from "swiper";

const DirectorsSlider = ({
  marginBottom,
  title,
  slides,
  btnPrev,
  btnNext,
  isArrow,
  prefix
}) => {
  const { state } = useConnect();

  const { isMobile } = state.theme;

  const [swiperSlides, setSwiperSlides] = useState(null);

  return (
    <Wrapper mb={marginBottom}>
      {title && (
        <TitleWrapper>
          <h3>{title}</h3>
          {!isMobile && swiperSlides > 6 && (
            <SwiperButtons
              prevClassName={btnPrev}
              nextClassName={btnNext}
              spaceBetween={24}
            />
          )}
          {isMobile && isArrow && (
            <Arrow>
              <svg
                width="57"
                height="14"
                viewBox="0 0 57 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line
                  x1="1"
                  y1="7"
                  x2="47"
                  y2="7"
                  stroke="#4279B8"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M56.9976 7.01098C56.9981 7.24422 56.9168 7.47026 56.7678 7.64986L51.7703 13.6394C51.6007 13.8432 51.3569 13.9714 51.0926 13.9958C50.8283 14.0201 50.5652 13.9386 50.3611 13.7692C50.157 13.5997 50.0286 13.3562 50.0042 13.0923C49.9799 12.8283 50.0615 12.5655 50.2311 12.3616L54.7088 7.01098L50.391 1.66034C50.308 1.55823 50.246 1.44074 50.2086 1.31463C50.1712 1.18851 50.1591 1.05625 50.173 0.925448C50.187 0.794649 50.2267 0.667888 50.2898 0.552453C50.3529 0.437018 50.4383 0.335185 50.541 0.252807C50.6437 0.161387 50.7643 0.0921497 50.8951 0.0494318C51.0259 0.00671382 51.1641 -0.00856214 51.3011 0.00455755C51.4381 0.0176782 51.5709 0.0589113 51.6912 0.125678C51.8115 0.192444 51.9167 0.283305 52.0002 0.392564L56.8277 6.38208C56.9532 6.56684 57.013 6.78827 56.9976 7.01098Z"
                  fill="#4279B8"
                />
              </svg>
            </Arrow>
          )}
        </TitleWrapper>
      )}
      <Swiper
        modules={[Navigation]}
        slidesPerView={"auto"}
        spaceBetween={16}
        onSwiper={(swiper) => setSwiperSlides(swiper.slides.length)}
        navigation={
          btnPrev && btnNext
            ? { prevEl: `.${btnPrev}`, nextEl: `.${btnNext}` }
            : false
        }
      >
        {slides.map((slide, index) => {
          return (
            <SwiperSlide key={`slide-${prefix}-${index}`}>
              <img
                src={slide[`${prefix}_photo`].url}
                srcSet={`${slide[`${prefix}_photo`].url} 1x, ${
                  slide[`${prefix}_photo`].url ? slide[`${prefix}_photo`].url : slide[`${prefix}_photo`].url
                } 2x`}
                width="233"
                height="274"
                alt=""
              />
              <Info>
                <Name>{slide[`${prefix}_name`]}</Name>
                <Position>{slide[`${prefix}_post`]}</Position>
              </Info>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Wrapper>
  );
};

const Arrow = styled.div`
  transform: tranlateY(2px);
`;

const Name = styled.p`
  font-weight: 300;
  ${font(14, 22)};
  letter-spacing: -0.04em;
  color: var(--white);
  margin: 0;
`;

const Position = styled.p`
  color: var(--gray-900);
  ${font(14, 16)};
  font-weight: 300;
  letter-spacing: -0.04em;
  margin: 0;
`;

const Info = styled.div`
  position: absolute;
  min-height: 72px;
  width: 100%;
  bottom: 0;
  left: 0;
  padding: 6px 16px;
  padding-bottom: 12px;
  background: rgba(30, 30, 30, 0.7);
`;

const TitleWrapper = styled.div`
  margin: 0;
  margin-bottom: 24px;
  ${flex("row", "center", "space-between")};
  padding-right: var(--container-padding-xl);
  & h3 {
    ${font(24, 32)};
    font-weight: 400;
    letter-spacing: 0.04em;
    color: var(--blue-600);
    margin: 0;
  }
  @media screen and (max-width: 1400px) {
    padding-right: var(--container-padding-lg);
  }
  @media screen and (max-width: 991px) {
    padding-right: var(--container-padding-md);
  }
  @media screen and (max-width: 768px) {
    padding-right: var(--container-padding-xs);
  }
  @media screen and (max-width: 576px) {
    padding-right: 24px;
  }
`;

const Wrapper = styled.div`
  margin-bottom: ${({ mb }) => (mb ? `${mb}px` : "0")};
  & div.swiper-slide {
    max-width: 233px;
    border-radius: 20px;
    overflow: hidden;
    position: relative;
  }
`;

export default connect(DirectorsSlider, { injectProps: false });
