import React, { useState } from "react";
import Container from "../../../constant/Container";
import Title from "../../../constant/Title";
import Card from "../../../constant/Card";
import { connect, styled } from "frontity";
import { font } from "../../../base/functions";

import airFreight from "../../../../assets/images/air-freight-service.jpg";
import seaFreight from "../../../../assets/images/sea-freight-service.jpg";
import groundFreight from "../../../../assets/images/ground-freight-service.jpg";
import warehouse from "../../../../assets/images/warehousing-service.jpg";
import valueAdded from "../../../../assets/images/value-added-service.jpg";

import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";
import { Pagination } from "swiper";

const services = [
  {
    title: "Air Freight",
    img: airFreight,
    link: "/services/air-freight",
  },
  {
    title: "Ground Freight",
    img: groundFreight,
    link: "/services/ground-freight",
  },
  {
    title: "Warehousing & Distribution",
    img: warehouse,
    link: "/services/warehousing&distribution",
  },
  {
    title: "Value-Added Services",
    img: valueAdded,
    link: "/services/value-added",
  },
];

const Services = ({ state }) => {
  const { isMobile } = state.theme;

  const [swiper, setSwiper] = useState(null);

  return (
    <Section>
      <Container>
        <TitleWrapper>
          <Title size="xs" color="blue" marginBottom={16}>
            Discover our services
          </Title>
          <Subtitle>
            <p>
              We offer solutions that cover all major modes of transportation as
              well as contract logistics services.
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
            {services.map((service) => {
              return (
                <SwiperSlide key={service.title}>
                  <SwiperWrapper>
                    <Card
                      size="m"
                      image={service.img}
                      title={service.title}
                      link={service.link}
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
