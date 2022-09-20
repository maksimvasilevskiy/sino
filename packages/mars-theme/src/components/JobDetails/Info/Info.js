import React, { useState } from "react";
import Container from "../../constant/Container";
import Position from "./Position/Position";
import TextBlock from "../../PrivacyPolicy/TextBlock/TextBlock";
import PrimaryBtn from "../../constant/PrimaryButton";
import ApplyForm from "./ApplyForm/ApplyForm";
import SubmitModal from "../../constant/SubmitModal";
import { font } from "../../base/functions";
import { styled } from "frontity";
import parse from "html-react-parser";

import company from "../../../assets/images/company-image.jpg";
import company2x from "../../../assets/images/company-image@2x.jpg";

const responsibilities = [
  "To handle Export-Import shipment.",
  "Prepare Import-Export declaration.",
  "Check accuracy of documents.",
  "Provide other reports to CS team.",
  "Service Delivery (Both Quality and Timeliness).",
  "Have knowledge of the import and export process.",
];

const requirements = [
  "Male / Female age 22-30 years.",
  "Good command on computer skills.",
  "Good Microsoft office, Excel, and Word.",
  "Good command on writes, read English.",
  "Ability to work as a team.",
  "Ability to work under pressure.",
  "Good cooperation and coordination with others on duty and work as teamwork.",
  "Ability to deliver urgently & completed the job on time as per schedule and commitment.",
  "Required experience and qualifications: Minimum 1-year experience in Customs data entry/Customs Clearance/Certificate of origin/License/Permit is an advantage.",
];

const Info = ({ post }) => {
  const [applyFormOpened, setApplyFormOpened] = useState(false);
  const [submitModalOpened, setSubmitModalOpened] = useState(false);
  const responsibilities = post.acf.job_responsibilities_items;
  const requirements = post.acf.job_looking_for_items;

  return (
    <Section>
      <Container>
        <Position post={post} />
        <InfoBlock>
          <Content>
            <TextBlock marginBottom={28} title={post.acf.job_responsibilities_title ? parse(post.acf.job_responsibilities_title) : ''}>
              <List>
                {responsibilities && responsibilities.map((item) => (
                  <ListItem key={item.job_responsibilities_item.slice(0, 11)}>
                    {item.job_responsibilities_item ? parse(item.job_responsibilities_item) : ''}
                  </ListItem>
                ))}
              </List>
            </TextBlock>
            <TextBlock marginBottom={28} title={post.acf.job_looking_for_title ? parse(post.acf.job_looking_for_title) : ''}>
              <List>
                {requirements && requirements.map((item) => (
                  <ListItem key={item.job_looking_for_item.slice(0, 11)}>
                    {item.job_looking_for_item ? parse(item.job_looking_for_item) : ''}
                  </ListItem>
                ))}
              </List>
            </TextBlock>
            <TextBlock marginBottom={28} title={post.acf.job_apply_title ? parse(post.acf.job_apply_title) : ''}>
              <Text>
                <p>
                  {post.acf.job_apply_text ? parse(post.acf.job_apply_text) : ''}
                </p>
              </Text>
              <ButtonWrapper>
                <PrimaryBtn
                  content={post.acf.job_apply_button_text ? parse(post.acf.job_apply_button_text) : ''}
                  onClick={() => setApplyFormOpened(true)}
                />
              </ButtonWrapper>
            </TextBlock>
          </Content>
          <ImageWrapper>
            <img
              src={post.acf.job_image_1x.url}
              srcSet={post.acf.job_image_2x ? `${post.acf.job_image_1x.url} 1x, ${post.acf.job_image_2x.url} 2x` : `${post.acf.job_image_1x.url} 1x, ${post.acf.job_image_1x.url} 2x`}
              alt="company"
            />
          </ImageWrapper>
        </InfoBlock>
      </Container>
      <ApplyWrapper>
        <ApplyForm
          modalOpened={applyFormOpened}
          setModalOpened={setApplyFormOpened}
          setSubmitModalOpened={setSubmitModalOpened}
        />
      </ApplyWrapper>
      <SubmitModal
        modalOpened={submitModalOpened}
        setModalOpened={setSubmitModalOpened}
      >
        <ModalText>
          <p>You have successfully submitted your resume</p>
        </ModalText>
        <CloseButtonWrapper>
          <CloseButton onClick={() => setSubmitModalOpened(false)}>
            Great
          </CloseButton>
        </CloseButtonWrapper>
      </SubmitModal>
    </Section>
  );
};

const CloseButton = styled.button`
  border: none;
  margin-left: auto;
  ${font(24, 30)};
  color: var(--white);
  padding: 0.83333em 1.25em;
  background: var(--lightblue-250);
  border-radius: 8px;
  width: 100%;
  max-width: 325px;
  cursor: pointer;
  &:hover {
    background: var(--lightblue-300);
  }
  &:active {
    box-shadow: inset 0px 0px 20px rgba(0, 0, 0, 0.1);
  }
  @media screen and (max-width: 991px) {
    color: var(--gray-menu);
    background: var(--white);
    filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.1));
    &:hover {
      color: var(--gray-menu);
      background: var(--white);
      filter: drop-shadow(0px 0px 15px rgba(0, 0, 0, 0.15));
    }
    &:active {
      color: var(--gray-menu);
      background: var(--white);
      box-shadow: 0px 0px 10px 0px #0000001a inset;
      filter: none;
    }
  }
`;

const ModalText = styled.div`
  margin-bottom: 40px;
  text-align: center;
  & p {
    ${font(24, 30)};
    margin: 0 auto;
    max-width: 308px;
    color: #000;
  }
  @media screen and (max-width: 991px) {
    margin-bottom: 24px;
    & p {
      ${font(16, 30)};
      max-width: 220px;
      color: var(--gray-menu);
    }
  }
`;

const CloseButtonWrapper = styled.div`
  text-align: center;
`;

const ApplyWrapper = styled.div`
  & h2 {
    text-align: center;
    @media screen and (max-width: 991px) {
      text-align: left;
      ${font(24, 32)};
      margin-bottom: 32px;
    }
  }
  @media screen and (max-width: 991px) {
    & .submit-modal {
      max-height: calc(100vh - 72px);
      border-radius: 0;
      width: 100vw;
      max-width: 100vw;
      transform: none;
      left: 0;
      bottom: 0;
      top: auto;
      &__wrapper {
        padding: 40px 24px;
      }
    }
    & button[data-close="mobile"] {
      display: none;
    }
  }
`;

const ButtonWrapper = styled.div`
  padding-top: 16px;
`;

const Text = styled.div`
  & p {
    margin: 0;
    ${font(18, 30)};
    font-weight: 300;
    margin-bottom: 8px;
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const ListItem = styled.li`
  position: relative;
  padding-left: 16px;
  margin-bottom: 8px;
  ${font(18, 30)};
  font-weight: 300;
  &:last-child {
    margin-bottom: 0;
  }
  &::before {
    position: absolute;
    content: "";
    left: 0;
    top: 10px;
    width: 4px;
    height: 4px;
    border: 2px solid var(--black);
    border-radius: 50%;
  }
`;

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  padding-left: 24px;
  @media screen and (max-width: 991px) {
    padding: 0;
  }
`;

const Content = styled.div`
  max-width: 558px;
  & div[data-element="wrapper"] {
    margin-bottom: 48px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  @media screen and (max-width: 991px) {
    & h5 {
      font-weight: 400;
    }
  }
`;

const ImageWrapper = styled.div`
  & img {
    max-width: 100%;
  }
  @media screen and (max-width: 991px) {
    display: none;
  }
`;

const InfoBlock = styled.div`
  padding-top: 96px;
  padding-bottom: 31px;
  border-bottom: 1px solid var(--blue-600);
  display: grid;
  grid-template-columns: calc(50% - 12px) calc(50% - 12px);
  grid-gap: 24px;
  @media screen and (max-width: 991px) {
    padding-top: 56px;
    padding-bottom: 0;
    border: none;
    grid-template-columns: 100%;
    grid-gap: 0;
  }
`;

const Section = styled.section`
  padding-top: 72px;
  @media screen and (max-width: 991px) {
    padding-top: 56px;
  }
`;

export default Info;
