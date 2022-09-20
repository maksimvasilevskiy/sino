import React from "react";
import IconBlock from "../../constant/IconBlock";
import TextLink from "../../constant/TextLink";
import { styled } from "frontity";
import { font, flex } from "../../base/functions";
import parse from "html-react-parser";

import marker from "../../../assets/images/svg/Map-marker.svg";
import message from "../../../assets/images/svg/Message_fill.svg";
import phone from "../../../assets/images/svg/Phone_fill.svg";

const Info = ({ options }) => {
  return (
    <InfoWrapper>
      <h4>{options.acf.footer_title}</h4>
      <IconBlock icon={options.acf.footer_locations_icon.url}>
        {options.acf.footer_locations ? parse(options.acf.footer_locations) : ''}
      </IconBlock>
      <IconBlock icon={options.acf.footer_mail_icon.url}>
        <TextLink
          target="_blank"
          rel="noopener noreferrer"
          link={`mailto:${options.acf.footer_mail}`}
        >
          {options.acf.footer_mail}
        </TextLink>
      </IconBlock>
      <IconBlock icon={options.acf.footer_phone_icon.url}>
        <TextLink
          target="_blank"
          rel="noopener noreferrer"
          link={`tel:${options.acf.footer_phone}`}
        >
          {options.acf.footer_phone}
        </TextLink>
      </IconBlock>
    </InfoWrapper>
  );
};

const InfoWrapper = styled.div`
  ${flex("column")};
  & h4 {
    margin: 0;
    ${font(18, 30)};
    font-weight: 500;
    margin-bottom: 16px;
  }
`;

export default Info;
