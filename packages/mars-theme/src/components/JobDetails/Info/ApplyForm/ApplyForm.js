import React, { useState } from "react";
import SubmitModal from "../../../constant/SubmitModal";
import Title from "../../../constant/Title";
import Input from "../../../constant/Input";
import PrimaryBtn from "../../../constant/PrimaryButton";
import Logo from "../../../constant/Logo";
import { font, flex } from "../../../base/functions";
import { styled, connect, useConnect } from "frontity";

import { useFormik } from "formik";
import ReCAPTCHA from "react-google-recaptcha";

const ApplyForm = ({ modalOpened, setModalOpened, setSubmitModalOpened }) => {
  const { state } = useConnect();

  const [isFormVerified, setIsFormVerified] = useState(false);

  const formik = useFormik({
    initialValues: {
      contactName: "",
      contactPhone: "",
      contactEmail: "",
      message: "",
    },
    onSubmit: (values) => {
      console.log(values);
      setModalOpened(false);
      setSubmitModalOpened(true);
    },
  });

  const onCaptchaChange = (val) => {
    console.log("Captcha value: " + val);
    setIsFormVerified(true);
  };

  return (
    <>
      {state.theme.isMobile && modalOpened && (
        <MobileHeader>
          <Logo />
          <CloseMobile aria-label="close" onClick={() => setModalOpened(false)}>
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M30 10L10 30"
                stroke="#4279B8"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M10 10L30 30"
                stroke="#4279B8"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </CloseMobile>
        </MobileHeader>
      )}
      <SubmitModal
        maxWidth={1140}
        modalOpened={modalOpened}
        setModalOpened={setModalOpened}
      >
        <Title size="m" color="blue" marginBottom={48}>
          Submit Your Resume
        </Title>
        <Form onSubmit={formik.handleSubmit}>
          <Label>
            <span>Contact Name</span>
            <Input
              placeholder="ex. Jack Nilson"
              name="contactName"
              onChange={formik.handleChange}
              value={formik.values.contactName}
            />
          </Label>
          <Label>
            <span>Contact Email</span>
            <Input
              type="email"
              placeholder="ex. info@ux-mind.pro"
              name="contactEmail"
              onChange={formik.handleChange}
              value={formik.values.contactEmail}
            />
          </Label>
          <Label>
            <span>Contact Phone</span>
            <Input
              type="tel"
              placeholder="ex. +1 562-985-4111"
              name="contactPhone"
              onChange={formik.handleChange}
              value={formik.values.contactPhone}
            />
          </Label>
          <LargeBlock>
            <FileWrapper>
              <FileLabel htmlFor="upload-photo">Upload your resume</FileLabel>
              <span>Accepted file types: PDF</span>
            </FileWrapper>
            <FileInput
              type="file"
              name="photo"
              id="upload-photo"
              accept="application/pdf"
            />
          </LargeBlock>
          <LargeLabel>
            <span>Your Message</span>
            <Textarea
              placeholder="Type here"
              name="message"
              onChange={formik.handleChange}
              value={formik.values.message}
            />
          </LargeLabel>
          <RecaptchaWrapper>
            <ReCAPTCHA
              sitekey={state.theme.recaptchaKey}
              onChange={onCaptchaChange}
            />
          </RecaptchaWrapper>
          <SubmitWrapper>
            <PrimaryBtn
              disabled={!isFormVerified}
              type="submit"
              content="Submit"
            />
          </SubmitWrapper>
        </Form>
      </SubmitModal>
    </>
  );
};

const RecaptchaWrapper = styled.div``;

const CloseMobile = styled.button`
  width: 40px;
  height: 40px;
  display: grid;
  place-items: center;
  border: none;
  background: transparent;
  padding: 0;
  cursor: pointer;
`;

const MobileHeader = styled.div`
  position: fixed;
  z-index: 35;
  height: 72px;
  width: 100vw;
  top: 0;
  left: 0;
  background: var(--white);
  padding: 16px 24px;
  ${flex("row", "center", "space-between")};
`;

const FileInput = styled.input`
  display: none;
`;

const FileLabel = styled.label`
  display: inline-block;
  margin-right: 16px;
  position: relative;
  color: var(--black);
  ${font(16, 24)};
  cursor: pointer;
  /* TODO: Change gray to black */
  &::before {
    content: "";
    position: absolute;
    bottom: 2px;
    left: 0;
    width: 100%;
    height: 1px;
    background: var(--black);
  }
  &:hover {
    color: var(--gray-900);
    &::before {
      background: var(--gray-900);
    }
  }
  &:active {
    color: var(--black);
    &::before {
      background: var(--black);
    }
  }
`;

const FileWrapper = styled.div`
  ${flex("row", "flex-end")};
  & span {
    color: var(--gray-900);
    ${font(12, 20)};
  }
`;

const SubmitWrapper = styled.div`
  margin-top: 32px;
  grid-column: 1 / 3;
  text-align: center;
  order: 20;
  & button {
    margin: 0 auto;
    cursor: pointer;
  }
  @media screen and (max-width: 991px) {
    margin-top: 16px;
  }
  @media screen and (max-width: 768px) {
    grid-column: 1 / 2;
  }
`;

const Textarea = styled.textarea`
  width: auto;
  resize: none;
  font-family: var(--font);
  box-sizing: border-box;
  ${font(18, 24)}
  color: var(--black);
  outline: none;
  width: 100%;
  max-width: ${({ maxWidth }) => (maxWidth ? `${maxWidth}` : "auto")};
  border-radius: 8px;
  border: 1px solid var(--blue-600);
  padding: 0.38889em 0.83333em;
  background: var(--white);
  position: relative;
  min-height: 129px;
  &::placeholder {
    color: var(--gray-900);
  }
`;

const Label = styled.label`
  display: block;
  & span {
    display: inline-block;
    ${font(16, 24)};
    margin-bottom: 8px;
  }
  @media screen and (max-width: 768px) {
    order: ${({ mobileOrder }) => (mobileOrder ? mobileOrder : "0")};
  }
`;

const LargeBlock = styled.div`
  grid-column: 1 / 3;
  @media screen and (max-width: 768px) {
    grid-column: 1 / 2;
    order: 1;
    margin-bottom: 40px;
  }
`;

const LargeLabel = styled(Label)`
  grid-column: 1 / 3;
  @media screen and (max-width: 768px) {
    grid-column: 1 / 2;
  }
  @media screen and (max-width: 768px) {
    order: ${({ mobileOrder }) => (mobileOrder ? mobileOrder : "0")};
  }
`;

const Form = styled.form`
  display: grid;
  grid-template-columns: calc(50% - 12px) calc(50% - 12px);
  grid-gap: 24px;
  @media screen and (max-width: 768px) {
    grid-template-columns: 100%;
    grid-gap: 16px;
    padding-bottom: 104px;
    border-bottom: 1px solid var(--blue-600);
  }
`;

export default connect(ApplyForm);
