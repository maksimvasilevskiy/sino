import React, { useState, useEffect, useRef } from "react";
import Container from "../../constant/Container";
import Title from "../../constant/Title";
import SwiperButtons from "../../constant/SwiperButtons";
import { connect, styled } from "frontity";
import { flex, font } from "../../base/functions";

import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";
import { Navigation } from "swiper";

const timelineStages = [
  {
    id: 1,
    date: "May 6, 2010",
    content: "Established Corporate Head Office at Supalai Grand Tower",
  },
  {
    id: 2,
    date: "February 1, 2013",
    content:
      "Joined forces with WCA World – the world's largest and most powerful network of independent freight forwarders",
  },
  {
    id: 3,
    date: "February 15, 2013",
    content: "Established Inter Connections Logistics as a subsidiary company",
  },
  {
    id: 4,
    date: "December 31, 2015",
    content: "Achieved US$14.5 million in annual sales",
  },
  {
    id: 5,
    date: "May 1, 2017",
    content: "Expanded our office size by 300 sqm",
  },
];

const Timeline = ({ state, post }) => {
  const { isMobile } = state.theme;

  const [is1400, setIs1400] = useState(false);

  // console.log(is1400, isMobile);

  useEffect(() => {
    if (window.innerWidth >= 1400) {
      setIs1400(true);
    } else {
      setIs1400(false);
    }

    window.addEventListener("resize", () => {
      if (window.innerWidth >= 1400) {
        setIs1400(true);
      } else {
        setIs1400(false);
      }
    });

    return () => {
      window.removeEventListener("resize", () => {
        if (window.innerWidth >= 1400) {
          setIs1400(true);
        } else {
          setIs1400(false);
        }
      });
    };
  }, []);

  return (
    <TimelineSection>
      <TimelineContainer>
        <Title size="m" color="blue">
          {post.acf.company_timeline_title}
        </Title>
        <LineWrapper>
          {is1400 && (
            <svg
              width="933"
              height="16"
              viewBox="0 0 933 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="-8.06579e-08"
                y1="8"
                x2="917.083"
                y2="7.99991"
                stroke="#4279B8"
                strokeWidth="2"
              />
              <circle
                cx="925"
                cy="8"
                r="7"
                transform="rotate(-180 925 8)"
                stroke="#4279B8"
                strokeWidth="2"
              />
            </svg>
          )}
          {!is1400 && !isMobile && (
            <svg
              width="754"
              height="16"
              viewBox="0 0 754 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line y1="8" x2="738" y2="8" stroke="#4279B8" strokeWidth="2" />
              <circle
                cx="746"
                cy="8"
                r="7"
                transform="rotate(-180 746 8)"
                stroke="#4279B8"
                strokeWidth="2"
              />
            </svg>
          )}
          {isMobile && (
            <svg
              width="170"
              height="14"
              viewBox="0 0 170 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="1"
                y1="7"
                x2="160"
                y2="6.99999"
                stroke="#4279B8"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M169.998 7.01098C169.998 7.24422 169.917 7.47026 169.768 7.64986L164.77 13.6394C164.601 13.8432 164.357 13.9714 164.093 13.9958C163.828 14.0201 163.565 13.9386 163.361 13.7692C163.157 13.5997 163.029 13.3562 163.004 13.0923C162.98 12.8283 163.061 12.5655 163.231 12.3616L167.709 7.01098L163.391 1.66034C163.308 1.55823 163.246 1.44074 163.209 1.31463C163.171 1.18851 163.159 1.05625 163.173 0.925448C163.187 0.794649 163.227 0.667888 163.29 0.552453C163.353 0.437018 163.438 0.335185 163.541 0.252807C163.644 0.161387 163.764 0.0921497 163.895 0.0494318C164.026 0.00671382 164.164 -0.00856214 164.301 0.00455755C164.438 0.0176782 164.571 0.0589113 164.691 0.125678C164.812 0.192444 164.917 0.283305 165 0.392564L169.828 6.38208C169.953 6.56684 170.013 6.78827 169.998 7.01098Z"
                fill="#4279B8"
              />
            </svg>
          )}
        </LineWrapper>
        <SwiperNav>
          <SwiperButtons
            prevClassName={"prev-timeline-btn"}
            nextClassName={"next-timeline-btn"}
            spaceBetween={24}
          />
        </SwiperNav>
      </TimelineContainer>
      <SwiperContainer>
        <Swiper
          modules={[Navigation]}
          slidesPerView={"auto"}
          navigation={{
            prevEl: ".prev-timeline-btn",
            nextEl: ".next-timeline-btn",
          }}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {post.acf.company_timeline_items.map((stage, i) => {
            return (
              <SwiperSlide key={`stage-${i}`}>
                <Date>{stage.company_timeline_item_date}</Date>
                <Content>
                  <p>{stage.company_timeline_item_text}</p>
                </Content>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </SwiperContainer>
    </TimelineSection>
  );
};

const Content = styled.div`
  & p {
    margin: 0;
    ${font(16, 26)};
  }
`;

const Date = styled.h5`
  margin: 0;
  margin-bottom: 10px;
  ${font(24, 36)};
  letter-spacing: 0.04em;
  font-weight: 500;
  @media screen and (max-width: 991px) {
    ${font(18, 36)};
  }
`;

const SwiperContainer = styled.div`
  margin-top: 35px;
  padding-left: var(--container-padding-xl);
  position: relative;
  &::after {
    content: "";
    position: absolute;
    z-index: 1;
    width: 88px;
    height: 100%;
    right: -24px;
    top: 0;
    background: rgba(253, 253, 253, 0.8);
    filter: blur(13px);
  }
  & .swiper {
    max-width: 100%;
    &-slide {
      height: auto;
      box-sizing: content-box;
      max-width: 278px;
      padding-left: 48px;
      padding-right: 24px;
      position: relative;
      &::before {
        content: "";
        position: absolute;
        width: 1px;
        height: 78px;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        background: var(--blue-600);
      }
      &:first-of-type {
        padding-left: 0;
        &::before {
          content: none;
        }
      }
      &:last-of-type {
        padding-right: 0;
      }
    }
  }
  @media screen and (max-width: 1400px) {
    padding-left: var(--container-padding-lg);
  }
  @media screen and (max-width: 991px) {
    padding-left: var(--container-padding-md);
    & .swiper {
      &-slide {
        padding-right: 40px;
        max-width: 221px;
      }
    }
  }
  @media screen and (max-width: 768px) {
    padding-left: var(--container-padding-xs);
  }
  @media screen and (max-width: 576px) {
    padding-left: 24px;
    &::after {
      content: none;
    }
  }
`;

const SwiperNav = styled.div`
  ${flex()};
  margin-left: auto;
  margin-top: 20px;
  @media screen and (max-width: 991px) {
    display: none;
  }
`;

const LineWrapper = styled.div`
  margin-top: 35px;
  margin-left: 16px;
  width: 100%;
  height: 100%;
  max-width: calc(100% - 210px - 229px);
  & svg {
    width: inherit;
  }
  @media screen and (max-width: 991px) {
    max-width: none;
    text-align: left;
    margin-top: 13px;
    margin-left: 30px;
    & svg {
      width: auto;
    }
  }
  @media screen and (max-width: 576px) {
    max-width: calc(100% - 124px - 30px);
    & svg {
      max-width: 100%;
    }
  }
`;

const TimelineContainer = styled(Container)`
  ${flex("row")};
`;

const TimelineSection = styled.section`
  padding-top: 96px;
  overflow: hidden;
`;

export default connect(Timeline);
