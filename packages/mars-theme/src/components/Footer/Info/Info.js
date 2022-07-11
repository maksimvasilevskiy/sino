import React from "react";
import IconBlock from "./IconBlock";
import TextLink from "../../constant/TextLink";
import { styled } from "frontity";
import { font } from "../../base/functions";

import marker from "../../../assets/images/svg/Map-marker.svg";
import message from "../../../assets/images/svg/Message_fill.svg";
import phone from "../../../assets/images/svg/Phone_fill.svg";

const Info = () => {
  return (
    <InfoWrapper>
      <h4>Corporate Head Office</h4>
      <IconBlock icon={marker}>
        1011 Supalai Grand Tower, <br />
        7th Floor, Unit No. 05, Rama 3 Road, <br />
        Chongnonsee, Yannawa, <br />
        Bangkok, 10120, Thailand
      </IconBlock>
      <IconBlock icon={message}>
        <TextLink
          target="_blank"
          rel="noopener noreferrer"
          link={"mailto:info@sinologistics.co.th"}
        >
          info@sinologistics.co.th
        </TextLink>
      </IconBlock>
      <IconBlock icon={phone}>
        <TextLink
          target="_blank"
          rel="noopener noreferrer"
          link={"tel:+6626870477"}
        >
          +6626870477
        </TextLink>
      </IconBlock>
    </InfoWrapper>
  );
};

const InfoWrapper = styled.div`
  & h4 {
    margin: 0;
    ${font(18, 30)};
    font-weight: 500;
    margin-bottom: 16px;
  }
`;

export default Info;
