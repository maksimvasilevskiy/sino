import React, { useState } from "react";
import Input from "../../../constant/Input";
import PrimaryBtn from "../../../constant/PrimaryButton";
import SubmitModal from "../../../constant/SubmitModal";
import { styled, connect, useConnect } from "frontity";
import { font } from "../../../base/functions";

import { useFormik } from "formik";
import ReCAPTCHA from "react-google-recaptcha";

const HelpForm = ({ post }) => {
  const [modalOpened, setModalOpened] = useState(false);
  const [isFormVerified, setIsFormVerified] = useState(false);

  const { state } = useConnect();

  const formik = useFormik({
    initialValues: {
      contactName: "",
      companyName: "",
      contactPhone: "",
      country: "",
      contactEmail: "",
      natureOfEnquiry: "",
      message: "",
    },
    onSubmit: (values) => {
      setModalOpened(true);

      console.log(values);
    },
  });

  const onCaptchaChange = (val) => {
    console.log("Captcha value: " + val);
    setIsFormVerified(true);
  };

  return (
    <>
      <SubmitModal modalOpened={modalOpened} setModalOpened={setModalOpened}>
        <ModalText>
          <p>Your request has been sent. We will contact you soon.</p>
        </ModalText>
        <CloseButtonWrapper>
          <CloseButton onClick={() => setModalOpened(false)}>Great</CloseButton>
        </CloseButtonWrapper>
      </SubmitModal>
      <Form onSubmit={formik.handleSubmit}>
        <Wrapper>
          <Label>
            <span>{post.acf.contact_help_label_name}</span>
            <Input
              placeholder={post.acf.contact_help_placeholder_name}
              name="contactName"
              onChange={formik.handleChange}
              value={formik.values.contactName}
            />
          </Label>
          <Label>
            <span>{post.acf.contact_help_label_company_name}</span>
            <Input
              placeholder={post.acf.contact_help_placeholder_company_name}
              name="companyName"
              onChange={formik.handleChange}
              value={formik.values.companyName}
            />
          </Label>
          <Label>
            <span>{post.acf.contact_help_label_phone}</span>
            <Input
              type="tel"
              placeholder={post.acf.contact_help_placeholder_phone}
              name="contactPhone"
              onChange={formik.handleChange}
              value={formik.values.contactPhone}
            />
          </Label>
          <Label>
            <span>{post.acf.contact_help_label_country}</span>
            <Input
              placeholder={post.acf.contact_help_placeholder_country}
              name="country"
              onChange={formik.handleChange}
              value={formik.values.country}
            />
          </Label>
          <Label>
            <span>{post.acf.contact_help_label_email}</span>
            <Input
              type="email"
              placeholder={post.acf.contact_help_placeholder_email}
              name="contactEmail"
              onChange={formik.handleChange}
              value={formik.values.contactEmail}
            />
          </Label>
          <Label>
            <span>{post.acf.contact_help_label_nature}</span>
            <Input
              placeholder={post.acf.contact_help_placeholder_nature}
              name="natureOfEnquiry"
              onChange={formik.handleChange}
              value={formik.values.natureOfEnquiry}
            />
          </Label>
          <LargeLabel>
            <span>{post.acf.contact_help_label_message}</span>
            <Textarea
              placeholder={post.acf.contact_help_placeholder_message}
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
              content={post.acf.contact_help_button_text}
            />
          </SubmitWrapper>
        </Wrapper>
      </Form>
    </>
  );
};

const RecaptchaWrapper = styled.div``;

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
  }
  @media screen and (max-width: 991px) {
    margin-bottom: 24px;
    & p {
      ${font(16, 30)};
      max-width: 220px;
    }
  }
`;

const CloseButtonWrapper = styled.div`
  text-align: center;
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

const SubmitWrapper = styled.div`
  margin-top: 32px;
  grid-column: 1 / 3;
  & button {
    cursor: pointer;
  }
  @media screen and (max-width: 991px) {
    margin-top: 16px;
  }
  @media screen and (max-width: 768px) {
    grid-column: 1 / 2;
  }
`;

const Label = styled.label`
  display: block;
  & span {
    display: inline-block;
    ${font(16, 24)};
    margin-bottom: 8px;
  }
`;

const LargeLabel = styled(Label)`
  grid-column: 1 / 3;
  @media screen and (max-width: 768px) {
    grid-column: 1 / 2;
  }
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: calc(50% - 12px) calc(50% - 12px);
  grid-row-gap: 16px;
  grid-column-gap: 24px;
  @media screen and (max-width: 768px) {
    grid-template-columns: 100%;
  }
`;

const Form = styled.form`
  margin-bottom: 91px;
  @media screen and (max-width: 991px) {
    margin-bottom: 64px;
  }
`;

export default connect(HelpForm);
