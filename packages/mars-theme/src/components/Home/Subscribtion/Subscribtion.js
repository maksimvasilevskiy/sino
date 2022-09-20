import React, { useState } from "react";
import ImageSection from "../../constant/ImageSection";
import Title from "../../constant/Title";
import PrimaryButton from "../../constant/PrimaryButton";
import Input from "../../constant/Input";
import { validateEmail } from "../../functions/functions";
import { useFormik } from "formik";
import { styled, connect, css } from "frontity";

import image from "../../../assets/images/subscribtion-image.png";
import image2x from "../../../assets/images/subscribtion-image@2x.png";

const Subscribtion = ({ state, post }) => {
  const { isMobile } = state.theme;

  const [formValues, setFormValues] = useState({
    name: '',
    surname: '',
    email: '',
    subject: '',
    message: '',
  });

  const formik = useFormik({
    initialValues: { email: "" },
    validate: (values) => validateEmail(values),
    onSubmit: async (values) => {
      const formData = new FormData();
      formData.append('sl-name', 'formValues.name');
      formData.append('sl-surname', 'formValues.surname');
      formData.append('sl-email', 'formValues.email');
      formData.append('sl-subject', 'formValues.subject');
      formData.append('sl-resume', 'resumeFile');
      formData.append('sl-message', 'formValues.message');

      let res = await fetch("https://sino.ux-mind.pro/wp-content/themes/sino/send-email.php", {
        method: "POST",
        body: formData,
        headers: {
          'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvc2luby51eC1taW5kLnBybyIsImlhdCI6MTY2MjY0MzQwMCwibmJmIjoxNjYyNjQzNDAwLCJleHAiOjE2NjMyNDgyMDAsImRhdGEiOnsidXNlciI6eyJpZCI6IjEifX19.ssbhNGbGE4YMpb5vEFwheawrg1FeAa8A90urMqtPLLU',
        }
      });

      console.log(res);
      if (res.status === 200) {
        console.log("Success");
      } else {
        console.log("Some error occured");
      }
      //alert(JSON.stringify(values, null, 2));
    },
  });

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    let errorSubmit = false;
    if (!errorSubmit) {
      try {
        /*const data = {
          'name': formValues.name,
          'surname': formValues.surname,
          'email': formValues.email,
          'subject': formValues.subject,
          'resume': formValues.resume,
          'message': formValues.message,
        }
        console.log(JSON.stringify(data));*/
        const formData = new FormData();
        formData.append('sl-name', 'formValues.name');
        formData.append('sl-surname', 'formValues.surname');
        formData.append('sl-email', 'formValues.email');
        formData.append('sl-subject', 'formValues.subject');
        formData.append('sl-resume', 'resumeFile');
        formData.append('sl-message', 'formValues.message');

        let res = await fetch("https://snorelab.ux-mind.pro/wp-content/themes/snorelab/send-form.php", {
          method: "POST",
          body: formData,
        });

        console.log(res);
        if (res.status === 200) {
          setFormValues({
            name: '',
            surname: '',
            email: '',
            subject: '',
            message: '',
          });
          alert("Success");
        } else {
          alert("Some error occured");
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <ImageSection
      image={post.acf.home_news_image_1x.url}
      image2x={post.acf.home_news_image_2x.url}
      last={true}
    >
      <Title
        style={isMobile ? { order: "-2" } : {}}
        size="s"
        color="blue"
        marginBottom={isMobile ? 24 : 40}
      >
        {post.acf.home_news_title}
      </Title>
      <form
        css={
          isMobile &&
          css`
            margin-top: 32px;
            width: 100%;
          `
        }
        //onSubmit={formik.handleSubmit}
      >
        <InputWrapper>
          <Input
            maxWidth={isMobile ? "100%" : "426px"}
            type="email"
            name="email"
            placeholder={post.acf.home_news_input_placeholder}
            /*value={formik.values.email}
            onChange={formik.handleChange}*/
          />
        </InputWrapper>
        <PrimaryButton type="submit" content={post.acf.home_news_link_text} onClick={(evt) => handleFormSubmit(evt)} />
      </form>
    </ImageSection>
  );
};

const InputWrapper = styled.div`
  margin-bottom: 24px;
`;

export default connect(Subscribtion);
