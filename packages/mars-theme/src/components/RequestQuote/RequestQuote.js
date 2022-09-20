import React, { useState, useEffect } from "react";
import AirDatepicker from "air-datepicker";
import localeEn from "air-datepicker/locale/en";
import Container from "../constant/Container";
import Hero from "../constant/HeroSection";
import PrimaryBtn from "../constant/PrimaryButton";
import Input from "../constant/Input";
import Select from "../constant/Select";
import SubmitModal from "../constant/SubmitModal";
import { styled, connect } from "frontity";
import { font } from "../base/functions";
import { processDate } from "../functions/functions";
import parse from "html-react-parser";

import { useFormik } from "formik";
import ReCAPTCHA from "react-google-recaptcha";

import calendar from "../../assets/images/svg/Calendar.svg";
import poster from "../../assets/images/quote-poster.png";

const modeValues = [
  "value 1",
  "value 2",
  "value 3",
  "value 4",
  "value 5",
  "value 6",
  "value 7",
  "value 8",
  "value 9",
  "value 10",
];

const RequestQuote = ({ state, post }) => {
  const { isMobile } = state.theme;

  const [isModeDropOpened, setIsModeDropOpened] = useState(false);
  const [isOriginDropOpened, setIsOriginDropOpened] = useState(false);
  const [isDestinationDropOpened, setIsDestinationDropOpened] = useState(false);

  const [isQuoteModalOpened, setIsQuoteModalOpened] = useState(false);
  const [isFormVerified, setIsFormVerified] = useState(false);

  const formik = useFormik({
    initialValues: {
      mode: "",
      companyName: "",
      origin: "",
      contactName: "",
      destination: "",
      contactPhone: "",
      productsReadyToExport: "",
      contactEmail: "",
      message: "",
    },
    onSubmit: (values) => {
      console.log(values);

      setIsQuoteModalOpened(true);
    },
  });

  useEffect(() => {
    new AirDatepicker("#products-datepicker", {
      locale: localeEn,
      firstDay: 1,
      daysShort: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      daysMin: ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
      dateFormat(date) {
        const dateString = processDate(date);

        return dateString;
      },
      onSelect({ date }) {
        const value = processDate(date);

        formik.setFieldValue("productsReadyToExport", value);
      },
    });
  }, []);

  const onCaptchaChange = (val) => {
    console.log("Captcha value: " + val);
    setIsFormVerified(true);
  };

  return (
    <PageWrapper>
      <Hero
        image={post.acf.request_top_banner_image.url}
        title={post.acf.request_top_banner_title}
      />
      <Section>
        <RequestContainer>
          <Note>
            <p>
              {post.acf.request_form_top_text
                ? parse(post.acf.request_form_top_text)
                : ""}
            </p>
          </Note>
          <Form onSubmit={formik.handleSubmit}>
            <Label>
              <span>{post.acf.request_form_mode_label}</span>
              <Select
                isOpened={isModeDropOpened}
                setIsOpened={setIsModeDropOpened}
                name="mode"
                value={formik.values.mode}
                placeholder={post.acf.request_form_mode_placeholder}
                options={modeValues}
                changeHandler={(value) => {
                  formik.setFieldValue("mode", value);
                }}
              />
            </Label>
            <Label mobileOrder={4}>
              <span>{post.acf.request_form_company_label}</span>
              <Input
                placeholder={post.acf.request_form_company_placeholder}
                name="companyName"
                onChange={formik.handleChange}
                value={formik.values.companyName}
              />
            </Label>
            <Label mobileOrder={1}>
              <span>{post.acf.request_form_origin_label}</span>
              <Select
                isOpened={isOriginDropOpened}
                setIsOpened={setIsOriginDropOpened}
                name="origin"
                value={formik.values.origin}
                placeholder={post.acf.request_form_origin_placeholder}
                options={modeValues}
                changeHandler={(value) => {
                  formik.setFieldValue("origin", value);
                }}
              />
            </Label>
            <Label mobileOrder={5}>
              <span>{post.acf.request_form_name_label}</span>
              <Input
                placeholder={post.acf.request_form_name_placeholder}
                name="contactName"
                onChange={formik.handleChange}
                value={formik.values.contactName}
              />
            </Label>
            <Label mobileOrder={2}>
              <span>{post.acf.request_form_destination_label}</span>
              <Select
                isOpened={isDestinationDropOpened}
                setIsOpened={setIsDestinationDropOpened}
                name="destination"
                value={formik.values.destination}
                placeholder={post.acf.request_form_destination_placeholder}
                options={modeValues}
                changeHandler={(value) => {
                  formik.setFieldValue("destination", value);
                }}
              />
            </Label>
            <Label mobileOrder={6}>
              <span>{post.acf.request_form_phone_label}</span>
              <Input
                placeholder={post.acf.request_form_phone_placeholder}
                type="tel"
                name="contactPhone"
                onChange={formik.handleChange}
                value={formik.values.contactPhone}
              />
            </Label>
            <Label mobileOrder={3}>
              <span>{post.acf.request_form_date_label}</span>
              <DatepickerWrapper>
                <Input
                  id="products-datepicker"
                  placeholder={post.acf.request_form_date_placeholder}
                  name="productsReadyToExport"
                  value={formik.values.productsReadyToExport}
                  onChange={formik.handleChange}
                />
                <Calendar>
                  <img width="24" height="24" src={calendar} alt="calendar" />
                </Calendar>
              </DatepickerWrapper>
            </Label>
            <Label mobileOrder={7}>
              <span>{post.acf.request_form_email_label}</span>
              <Input
                placeholder={post.acf.request_form_email_placeholder}
                type="email"
                name="contactEmail"
                onChange={formik.handleChange}
                value={formik.values.contactEmail}
              />
            </Label>
            <LargeLabel mobileOrder={8}>
              <span>{post.acf.request_form_message_label}</span>
              <Textarea
                placeholder={
                  isMobile
                    ? post.acf.request_form_message_placeholder_mobile
                    : post.acf.request_form_message_placeholder
                }
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
        </RequestContainer>
      </Section>
      <SubmitModal
        modalOpened={isQuoteModalOpened}
        setModalOpened={setIsQuoteModalOpened}
      >
        <ModalText>
          <p>Your request has been sent. We will contact you soon.</p>
        </ModalText>
        <CloseButtonWrapper>
          <CloseButton onClick={() => setIsQuoteModalOpened(false)}>
            Great
          </CloseButton>
        </CloseButtonWrapper>
      </SubmitModal>
    </PageWrapper>
  );
};

const RecaptchaWrapper = styled.div`
  @media screen and (max-width: 991px) {
    order: 8;
  } ;
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

const CloseButtonWrapper = styled.div`
  text-align: center;
`;

const Calendar = styled.div`
  position: absolute;
  top: 50%;
  right: 16px;
  transform: translateY(calc(-50% + 1px));
`;

const DatepickerWrapper = styled.div`
  position: relative;
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
  }
`;

const Note = styled.div`
  max-width: 791px;
  margin-bottom: 32px;
  & p {
    color: var(--black);
    margin: 0;
    ${font(24, 40)};
    font-weight: 400;
    letter-spacing: 0.04em;
  }
  @media screen and (max-width: 991px) {
    & p {
      ${font(18, 30)};
      letter-spacing: 0;
    }
  }
`;

const RequestContainer = styled(Container)`
  max-width: 1140px;
`;

const Section = styled.section`
  padding-top: 96px;
  padding-bottom: 192px;
  @media screen and (max-width: 991px) {
    padding-top: 56px;
    padding-bottom: 145px;
  }
`;

const PageWrapper = styled.div`
  & .hero-container {
    max-width: 1140px;
  }
`;

export default connect(RequestQuote);
