import React from "react";
import Container from "../../constant/Container";
import Title from "../../constant/Title";
import ImageSection from "../../constant/ImageSection";
import { connect, styled } from "frontity";
import { font } from "../../base/functions";
import parse from "html-react-parser";

import buisnessEthics from "../../../assets/images/business-ethics-02.jpg";
import buisnessEthics2x from "../../../assets/images/business-ethics-02@2x.jpg";

/*const responsibilityList = [
  {
    id: 1,
    image: buisnessEthics,
    image2x: buisnessEthics2x,
    title: "Business Ethics",
    paragraphs: [
      "As an international logistics company, we firmly believe in upholding the highest ethical and moral standards in all facets of our business, and we place great importance on integrity and transparency.",
      "Centering everything we do around professionalism, efficiency, and equality, makes us a reliable logistics service provider, allowing us to offer our customers, staff, and stakeholders peace of mind.",
    ],
  },
  {
    id: 2,
    image: buisnessEthics,
    image2x: buisnessEthics2x,
    title: "Corporate Governance",
    paragraphs: [
      "At Sino Logistics Corporation, we consider all operations, from compensation and risk management to employee treatment and reporting unfair practices, as well as the company’s impact on the climate as interconnected elements that come together to bring about success and prosperity for our customers, employees, and investors. ",
      "Our efforts are built upon a solid corporate foundation that enables us to deliver our customers the best services whilst allowing our staff and stakeholders to engage in an open dialogue that promotes creativity and innovation.",
    ],
  },
  {
    id: 3,
    image: buisnessEthics,
    image2x: buisnessEthics2x,
    title: "Sustainability",
    paragraphs: [
      "At Sino Logistics Corporation, sustainable growth is at the core of our business ethos, and we are committed to ensuring that all our services and operations are safe, responsible, and follow the core values laid out in corporate vision as well as those of the Paris Agreement and the UN Framework Convention on Climate Change. ",
      "However, we define sustainability not only as a promise to optimize our supply chains and lower our carbon footprint but also as a mindset to work methodically to enhance the positive impact our business has on people, society and the environment.",
    ],
  },
  {
    id: 4,
    image: buisnessEthics,
    image2x: buisnessEthics2x,
    title: "Community Engagement",
    paragraphs: [
      "We firmly believe that Corporate Social Responsibility (CSR) acts as a critical component to the long-term prosperity of our business, as it allows us to engage with and support the people in our surrounding neighborhoods on a personal level.",
      "Whether it be protecting our environment and the oceans, supporting education initiatives, promoting health and safety, or providing relief in times of natural disasters or emergencies, we always strive to make a positive difference through our community engagement projects.",
    ],
  },
  {
    id: 5,
    image: buisnessEthics,
    image2x: buisnessEthics2x,
    title: "People",
    paragraphs: [
      "We understand the importance of a highly skilled and diverse workforce to ensure the continued success of business, and we also know that job satisfaction plays a key role in making this a reality. ",
      "Accordingly, we strive for equity and inclusion for all our staff and regularly review our business, employment, and human rights practices and policies to eliminate inequities and biases.",
    ],
  },
];*/

const Responsibility = ({ state, post }) => {
  const responsibilityList = post.acf.company_responsibility_items;
  return (
    <Section>
      <Container>
        <TitleWrapper>
          <Title size="m" color="blue">
            {parse(post.acf.company_responsibility_title)}
          </Title>
        </TitleWrapper>
        <Wrapper>
          {responsibilityList.map((item, idx) => (
            <ImageSection
              title={item.company_responsibility_item_title}
              image={item.company_responsibility_item_image_1x.url}
              image2x={item.company_responsibility_item_image_2x.url}
              imagePosition={idx % 2 ? "right" : "left"}
              isCorporate={true}
              key={`responsibility-${idx}`}
              id={item.company_responsibility_item_slug}
            >
              <Title size="xs" color="blue" marginBottom={24}>
                {item.company_responsibility_item_title}
              </Title>
              <Content>
                {item.company_responsibility_item_text.map((paragraph) => (
                  <p key={paragraph.company_responsibility_item_paragraph}>
                    {parse(paragraph.company_responsibility_item_paragraph)}
                  </p>
                ))}
              </Content>
            </ImageSection>
          ))}
        </Wrapper>
      </Container>
    </Section>
  );
};

const Content = styled.div`
  & p {
    margin: 0;
    ${font(18, 30)};
    font-weight: 300;
    margin-bottom: 8px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  @media screen and (max-width: 991px) {
    order: 1;
    margin-top: 24px;
  }
`;

const Wrapper = styled.div`
  @media screen and (max-width: 991px) {
    & h4 {
      order: -1;
      ${font(24, 32)};
      letter-spacing: 0.04em;
      font-weight: 400;
      margin-bottom: 8px;
    }
  }
`;

const TitleWrapper = styled.div`
  margin-bottom: 64px;
  @media screen and (max-width: 991px) {
    margin-bottom: 48px;
  }
`;

const Section = styled.section`
  padding-top: 298px;
  padding-bottom: 192px;
  & .section {
    padding-top: 144px;
    &:first-of-type {
      padding-top: 0;
    }
  }
  @media screen and (max-width: 991px) {
    padding-top: 128px;
    padding-bottom: 145px;
    & .section {
      padding-top: 48px;
      &:first-child {
        padding-top: 0;
      }
    }
  }
`;

export default connect(Responsibility);
