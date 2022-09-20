import React from "react";
import Title from "../../constant/Title";
import Paragraph from "../../constant/Paragraph";
import Card from "../../constant/Card";
import Container from "../../constant/Container";
import DecorativeLine from "../../constant/DecorativeLine";
import { styled, connect, css } from "frontity";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";

import airFreight from "../../../assets/images/air-freight-service.jpg";
import seaFreight from "../../../assets/images/sea-freight-service.jpg";
import groundFreight from "../../../assets/images/ground-freight-service.jpg";
import warehouse from "../../../assets/images/warehousing-service.jpg";
import valueAdded from "../../../assets/images/value-added-service.jpg";

import parse from "html-react-parser";

/*const services = [
  {
    title: "Air Freight",
    img: airFreight,
    link: "/services/air-freight",
  },
  {
    title: "Sea Freight",
    img: seaFreight,
    link: "/services/sea-freight",
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
];*/

const Services = ({ state, actions, post }) => {
  const { isMobile } = state.theme;

  const services = state.source.get(`/services/`).items;

  console.log(services);

  return (
    <section className="section">
      <DecorativeLineWrapper>
        <DecorativeLine
          heightInPercent={24.3769}
          color="blue"
          rotation="bottom"
        />
      </DecorativeLineWrapper>
      <Container>
        <Content>
          <Info>
            <Title color="blue" size="m" marginBottom={24}>
              {post.acf.home_services_title}
            </Title>
            <Paragraph maxWidth={isMobile ? "none" : "349px"}>
              {post.acf.home_services_text}
            </Paragraph>
          </Info>
          {!isMobile &&
            services.map((service) => (
              <Card
                image={service.fimg_url}
                title={service.title.rendered ? parse(service.title.rendered) : ''}
                link={service.link}
                key={service.title.rendered ? parse(service.title.rendered) : ''}
              />
            ))}
          {isMobile && (
            <Swiper
              spaceBetween={24}
              modules={[Pagination]}
              loop={true}
              pagination={{ clickable: true }}
              onSwiper={(swiper) => console.log(swiper)}
            >
              {services.map((service) => {
                return (
                  <SwiperSlide key={service.title.rendered ? service.title.rendered : ''}>
                    <SwiperWrapper>
                      <Card
                        image={service.fimg_url}
                        title={service.title.rendered ? parse(service.title.rendered) : ''}
                        link={service.link}
                      />
                    </SwiperWrapper>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          )}
        </Content>
      </Container>
    </section>
  );
};

const DecorativeLineWrapper = styled.div`
  position: absolute;
  top: 0;
  left: var(--container-padding-xl);
  height: 100%;
  @media screen and (max-width: 1400px) {
    left: var(--container-padding-lg);
  }
  /* @media screen and (max-width: 991px) {
    left: var(--container-padding-md);
  } */
`;

const SwiperWrapper = styled.div``;

const Info = styled.div`
  display: grid;
  align-content: center;
`;

const Content = styled.div`
  display: grid;
  grid-gap: 24px;
  grid-template-columns: 1fr 1fr 1fr;
  & .swiper {
    max-width: 100%;
    padding-bottom: 56px;
    position: relative;
    &-wrapper {
      border-radius: 20px;
    }
    & .swiper-pagination {
      bottom: 0;
      & .swiper-pagination-bullet {
        margin: 0;
        margin-right: 24px;
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

export default connect(Services);
