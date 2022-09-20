import React, { useState } from "react";
import Hero from "../constant/HeroSection";
import Container from "../constant/Container";
import P from "../constant/Paragraph";
import PrimaryBtn from "../constant/PrimaryButton";
import Input from "../constant/Input";
import CheckboxItem from "../constant/CheckboxItem";
import { font, flex } from "../base/functions";
import { styled, connect } from "frontity";
import parse from "html-react-parser";

import { useFormik } from "formik";

import poster from "../../assets/images/whistleblowing-poster.png";

const Whistleblowing = ({ state, post }) => {
  const [privacyAccepted, setPrivacyAccepted] = useState(false);

  const formik = useFormik({
    initialValues: { name: "", email: "", message: "", files: [] },
    onSubmit: (values) => console.log(values),
  });

  const handleFileChange = (evt) => {
    const files = formik.values.files;
    const newFile = evt.target.files[0];

    if (newFile) {
      const NewFileURL = URL.createObjectURL(newFile);

      const newFileExt = newFile.name.split(".").reverse()[0];

      const newFileType =
        newFileExt === "pdf" || newFileExt === "doc" || newFileExt === "docx"
          ? "document"
          : "image";

      files.push({
        file: newFile,
        url: NewFileURL,
        fileType: newFileType,
      });

      formik.setFieldValue("files", files);
      console.log(formik.values.files);
    }
  };

  return (
    <PageWrapper>
      <HeroWrapper>
        <Hero image={post.acf.whistleblowing_top_banner_image.url} title={post.acf.whistleblowing_top_banner_text}/>
      </HeroWrapper>
      <ContentWrapper>
        <Container>
          <Content>
            <Text>
              {post.acf.whistleblowing_content_text && post.acf.whistleblowing_content_text.map((p) => (
                <P key={p.whistleblowing_content_paragraph.slice(0, 11)}>
                  {parse(p.whistleblowing_content_paragraph)}
                </P>
              ))}
            </Text>
            <Subtext>
              <P>
                {post.acf.whistleblowing_form_title}
              </P>
            </Subtext>
            <Form onSubmit={formik.handleSubmit}>
              <Label>
                <span>{post.acf.whistleblowing_form_name_label}</span>
                <Input
                  name="name"
                  placeholder={post.acf.whistleblowing_form_name_placeholder}
                  onChange={formik.handleChange}
                  value={formik.values.name}
                />
              </Label>
              <Label>
                <span>{post.acf.whistleblowing_form_email_label}</span>
                <Input
                  type="email"
                  name="email"
                  placeholder={post.acf.whistleblowing_form_email_placeholder}
                  onChange={formik.handleChange}
                  value={formik.values.email}
                />
              </Label>
              <Label>
                <span>{post.acf.whistleblowing_form_message_label}</span>
                <Textarea
                  name="message"
                  placeholder={post.acf.whistleblowing_form_message_label}
                  onChange={formik.handleChange}
                  value={formik.values.message}
                  rows={4}
                />
              </Label>
              <Label>
                <FileInput
                  className="file-input"
                  type="file"
                  name="files"
                  accept="image/*, .doc, .docx, .pdf"
                  onChange={(evt) => handleFileChange(evt)}
                />
                <Attach>
                  <Plus />
                  <AttachText>
                    <AttachTitle>
                      {post.acf.whistleblowing_form_file_upload_title}
                    </AttachTitle>
                    <AttachInfo>
                      {post.acf.whistleblowing_form_file_upload_subtitle}
                    </AttachInfo>
                  </AttachText>
                </Attach>
              </Label>
              {formik.values.files[0] && (
                <Uploaded>
                  <Images>
                    {formik.values.files.map((file) => {
                      if (file.fileType !== "image") {
                        return null;
                      }

                      return <img src={file.url} key={file.url} alt="" />;
                    })}
                  </Images>
                  <Documents>
                    {formik.values.files.map((file) => {
                      if (file.fileType !== "document") {
                        return null;
                      }

                      return (
                        <DocumentItem key={file.url}>
                          {file.file.name}
                        </DocumentItem>
                      );
                    })}
                  </Documents>
                </Uploaded>
              )}
              <CheckboxLabel>
                <CheckboxItem
                  checked={privacyAccepted}
                  setChecked={() => setPrivacyAccepted((prev) => !prev)}
                >
                  {post.acf.whistleblowing_form_privacy_statement}
                </CheckboxItem>
              </CheckboxLabel>
              <SubmitWrapper>
                <PrimaryBtn disabled={!privacyAccepted} content={post.acf.whistleblowing_form_button_text} />
              </SubmitWrapper>
            </Form>
          </Content>
        </Container>
      </ContentWrapper>
    </PageWrapper>
  );
};

const HeroWrapper = styled.div`
  @media screen and (max-width: 991px) {
    & h1 {
      ${font(32, 40)};
      letter-spacing: -0.02em;
    }
  }
`;

const DocumentItem = styled.div`
  box-sizing: border-box;
  min-width: 209px;
  padding: 5px 8px;
  ${font(18, 30)};
  font-weight: 300;
  outline: 1px solid var(--success);
  border-radius: 8px;
`;

const Images = styled.div`
  ${flex()};
  flex-wrap: wrap;
  gap: 8px;
  & img {
    height: 100px;
    width: auto;
    outline: 1px solid var(--success);
    border-radius: 8px;
  }
`;

const Documents = styled.div`
  ${flex()};
  flex-wrap: wrap;
  gap: 8px;
`;

const Uploaded = styled.div`
  padding-top: 16px;
  display: grid;
  grid-gap: 24px;
`;

const FileInput = styled.input``;

const CheckboxLabel = styled.div``;

const Plus = styled.div`
  flex-shrink: 0;
  width: 28px;
  height: 28px;
  background: var(--gray-900);
  border-radius: 50%;
  margin-right: 22px;
  position: relative;
  &::before,
  &::after {
    content: "";
    position: absolute;
    z-index: 1;
    width: 18px;
    height: 2px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background: var(--white);
    border-radius: 2px;
  }
  &::after {
    transform: translate(-50%, -50%) rotate(90deg);
  }
  @media screen and (max-width: 991px) {
    margin: 0 auto;
    margin-bottom: 8px;
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

const AttachInfo = styled.span`
  padding-top: 8px;
`;

const AttachTitle = styled(P)``;

const AttachText = styled.div`
  & p {
    ${font(18, 24)};
    color: var(--gray-900);
    margin-bottom: 8px;
  }
  & span {
    ${font(12, 20)};
    color: var(--gray-900);
    margin: 0;
    padding: 0;
  }
  @media screen and (max-width: 991px) {
    & p {
      text-align: center;
    }
    & span {
      text-align: center;
    }
  }
`;

const Attach = styled.div`
  border: none;
  border-radius: 8px;
  border: 1px dashed var(--blue-600);
  padding: 38px 88px;
  ${flex("row", "center")};
  cursor: pointer;
  @media screen and (max-width: 991px) {
    display: grid;
    padding: 24px 16px 32px;
    justify-content: center;
  }
`;

const SubmitWrapper = styled.div`
  padding-top: 8px;
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

const Form = styled.form`
  display: grid;
  grid-row-gap: 24px;
  max-width: 674px;
  & .file-input {
    display: none;
  }
  @media screen and (max-width: 991px) {
    grid-row-gap: 16px;
  }
`;

const Subtext = styled.div`
  max-width: 1024px;
  margin-bottom: 40px;
`;

const Text = styled.div`
  max-width: 1024px;
  margin-bottom: 24px;
  && p {
    color: var(--black);
    ${font(18, 30)};
    font-weight: 300;
  }
  @media screen and (max-width: 991px) {
    margin-bottom: 32px;
  }
`;

const Content = styled.section`
  padding: 96px 0 192px;
  @media screen and (max-width: 991px) {
    padding: 56px 0 145px;
  }
`;

const ContentWrapper = styled.section``;

const PageWrapper = styled.div``;

export default connect(Whistleblowing);
