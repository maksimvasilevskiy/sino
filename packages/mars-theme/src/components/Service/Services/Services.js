import React, { useState, useEffect } from "react";
import Container from "../../constant/Container";
import Title from "../../constant/Title";
import Card from "../../constant/Card";
import { connect, styled } from "frontity";
import { font } from "../../base/functions";
import parse from "html-react-parser";

import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";
import { Pagination } from "swiper";

const Services = ({ state, post }) => {
  useEffect(() => {
    const currentPath = state.router.link;
    if (currentPath.includes("#fcl")) {
      executeScroll("fcl");
    }
    if (currentPath.includes("#lcl")) {
      executeScroll("lcl");
    }
    if (currentPath.includes("#iso")) {
      executeScroll("iso");
    }
    if (currentPath.includes("#logistics")) {
      executeScroll("logistics");
    }
    if (currentPath.includes("#brokerage")) {
      executeScroll("brokerage");
    }
    if (currentPath.includes("#insurance")) {
      executeScroll("insurance");
    }
  }, [state.router.link]);
  const executeScroll = (slug) => document.getElementById(slug).scrollIntoView();

  const { isMobile } = state.theme;

  const [swiper, setSwiper] = useState(null);
  const _services = state.source.get(`/services/`).items;
  const currentServices = [];
  post.acf.other_services_items.map((item) => {
    const currentService = _services.find((obj) => {
      return item.other_services_item === obj.id;
    });
    currentServices.push(currentService);
  });

  return (
    <Section>
      <Container>
        <TitleWrapper>
          <Title size="xs" color="blue" marginBottom={16}>
            {parse(post.acf.other_services_title)}
          </Title>
          <Subtitle>
            <p>
              {parse(post.acf.other_services_subtitle)}
            </p>
          </Subtitle>
        </TitleWrapper>
        <Content>
          <Swiper
            spaceBetween={24}
            modules={[Pagination]}
            slidesPerView={1}
            pagination={{ clickable: true }}
            onSwiper={(swiper) => setSwiper(swiper)}
            breakpoints={{
              1400: {
                slidesPerView: 4,
                // swiper && swiper.slides.length < 4 ? swiper.slides.length : 4,
              },
              991: {
                slidesPerView: 3,
                // swiper && swiper.slides.length < 3 ? swiper.slides.length : 3,
              },
              768: {
                slidesPerView: 2,
                // swiper && swiper.slides.length < 2 ? swiper.slides.length : 2,
              },
            }}
          >
            {currentServices && currentServices.map((service, i) => {
              return (
                <SwiperSlide key={`service-${i}`}>
                  <SwiperWrapper>
                    <Card
                      size="m"
                      image={service.fimg_url ? service.fimg_url : ''}
                      title={service.title.rendered ? parse(service.title.rendered) : ''}
                      link={service.link ? service.link : ''}
                    />
                  </SwiperWrapper>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </Content>
      </Container>
    </Section>
  );
};

const SwiperWrapper = styled.div``;

const Content = styled.div`
  display: grid;
  & .card-title {
    ${font(24, 32)};
    font-weight: 500;
    letter-spacing: -0.02em;
  }
  & svg {
    max-width: 110px;
  }
  & .swiper {
    width: 100%;
    padding-bottom: 56px;
    position: relative;
    border-radius: 20px;
    &-wrapper {
      border-radius: 20px;
    }
    & .swiper-pagination {
      bottom: 0;
      & .swiper-pagination-bullet {
        margin: 0;
        margin-right: 32px;
        width: 16px;
        height: 16px;
        background: transparent;
        border: 2px solid var(--blue-600);
        border-radius: 50%;
        position: relative;
        opacity: 1;
        &-active::before {
          content: "";
          position: absolute;
          border-radius: 50%;
          width: 6px;
          height: 6px;
          background: var(--blue-600);
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
        }
        &:last-child {
          margin-right: 0;
        }
      }
    }
    & a {
      max-width: none;
    }
  }
  @media screen and (max-width: 991px) {
    grid-template-columns: 100%;
  }
`;

const Subtitle = styled.div`
  text-align: center;
  & p {
    margin: 0;
    ${font(18, 30)};
    font-weight: 300;
  }
  @media screen and (max-width: 768px) {
    text-align: left;
  }
`;

const TitleWrapper = styled.div`
  text-align: center;
  margin-bottom: 48px;
  & h4 {
    text-transform: uppercase;
  }
  @media screen and (max-width: 768px) {
    text-align: left;
  }
`;

const Section = styled.section`
  padding-top: 192px;
  padding-bottom: 136px;
  @media screen and (max-width: 991px) {
    padding-top: 128px;
    padding-bottom: 145px;
  }
`;

export default connect(Services);
