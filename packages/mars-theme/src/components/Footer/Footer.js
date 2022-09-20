import React from "react";
import Container from "../constant/Container";
import Logo from "../constant/Logo";
import Link from "../constant/Link";
import TextLink from "../constant/TextLink";
import Info from "./Info/Info";
import { flex, font } from "../base/functions";
import { styled, connect, css } from "frontity";

import youtube from "../../assets/images/svg/YouTube.svg";
import linkedin from "../../assets/images/svg/LinkedIn.svg";
import instagram from "../../assets/images/svg/Instagram.svg";
import line from "../../assets/images/svg/Line.svg";
import facebook from "../../assets/images/svg/Facebook.svg";

const social = [
  {
    icon: youtube,
    link: "https://www.youtube.com/channel/UC14VTzFVjwvinLmT6ESRdlg",
  },
  {
    icon: linkedin,
    link: "https://www.linkedin.com/company/sino-logistics-corporation-pcl/",
  },
  {
    icon: instagram,
    link: "https://www.instagram.com/sinologisticscorp/",
  },
  {
    icon: line,
    link: "https://page.line.me/?accountId=sinologistics",
  },
  {
    icon: facebook,
    link: "https://www.facebook.com/sinologisticscorporation",
  },
];

const Footer = ({ state }) => {
  const options = state.source.get("acf-settings");
  return (
    <Container>
      <FooterWrapper>
        <Content>
          <Info options={options} />
          <LogoBlock>
            <Logo />
            <Social>
              <p>{options.acf.footer_social_title}</p>
              <SocialIcons>
                {options.acf.footer_social_links.map((item) => {
                  return (
                    <SocialLink
                      target="_blank"
                      rel="noopener noreferrer"
                      link={item.footer_social_link}
                      key={item.footer_social_link}
                    >
                      <img
                        width="24"
                        height="24"
                        src={item.footer_social_icon.url}
                        alt="social icon"
                      />
                    </SocialLink>
                  );
                })}
              </SocialIcons>
            </Social>
          </LogoBlock>
        </Content>
        <BottomContent>
          <BottomElement>
            <div
              css={css`
                margin-right: 4px;
                ${flex()};
              `}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 1C4.13438 1 1 4.13438 1 8C1 11.8656 4.13438 15 8 15C11.8656 15 15 11.8656 15 8C15 4.13438 11.8656 1 8 1ZM8 13.8125C4.79063 13.8125 2.1875 11.2094 2.1875 8C2.1875 4.79063 4.79063 2.1875 8 2.1875C11.2094 2.1875 13.8125 4.79063 13.8125 8C13.8125 11.2094 11.2094 13.8125 8 13.8125ZM8.0875 5.48906C8.91562 5.48906 9.47812 6.01719 9.54062 6.79219C9.54531 6.85781 9.6 6.90781 9.66562 6.90781H10.5516C10.5922 6.90781 10.625 6.875 10.625 6.83437C10.625 5.47969 9.55625 4.53125 8.08281 4.53125C6.36562 4.53125 5.375 5.69062 5.375 7.60625V8.42344C5.375 10.325 6.36562 11.4688 8.08281 11.4688C9.55156 11.4688 10.625 10.55 10.625 9.25937C10.625 9.21875 10.5922 9.18594 10.5516 9.18594H9.66406C9.59844 9.18594 9.54531 9.23594 9.53906 9.3C9.47344 10.0203 8.9125 10.5156 8.08594 10.5156C7.06563 10.5156 6.49062 9.76719 6.49062 8.42813V7.60625C6.49219 6.24687 7.06875 5.48906 8.0875 5.48906Z"
                  fill="#1E1E1E"
                />
              </svg>
            </div>
            <span>{options.acf.footer_credits}</span>
          </BottomElement>
          <BottomElement>
            {options.acf.footer_menu.map((item, i) => {
              return (
                <>
                {(i > 0) ?
                <svg
                  width="2"
                  height="14"
                  viewBox="0 0 2 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  key={`${item.footer_menu_item_link}-icon`}
                >
                  <path
                    d="M0.388922 0.0379993H1.60692V13.59H0.388922V0.0379993Z"
                    fill="#1E1E1E"
                  />
                </svg> : ''}
                <TextLink key={item.footer_menu_item_link} link={item.footer_menu_item_link}>{item.footer_menu_item_text}</TextLink>
                </>
              );
            })}
          </BottomElement>
        </BottomContent>
      </FooterWrapper>
    </Container>
  );
};

const BottomElement = styled.div`
  margin-right: 40px;
  ${flex("row", "center")};
  & span,
  a {
    ${font(14, 30)};
  }
  & a:first-of-type {
    margin-right: 8px;
  }
  & a:last-child {
    margin-left: 8px;
  }
  &:last-child {
    margin-right: 0;
  }
  @media screen and (max-width: 768px) {
    margin: 0;
    &:first-of-type {
      margin-bottom: 0;
    }
    &:last-child {
      margin-bottom: 16px;
      order: -1;
    }
  }
`;

const BottomContent = styled.div`
  border-top: 1px solid var(--blue-600);
  padding-top: 16px;
  padding-bottom: 26px;
  ${flex("row", "center", "center")};
  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 24px 0;
  }
`;

const SocialLink = styled(Link)`
  display: flex;
  width: 24px;
  height: 24px;
  margin-right: 20px;
  &:last-child {
    margin-right: 0;
  }
`;

const SocialIcons = styled.div`
  ${flex("row", "center")};
  margin-top: 16px;
`;

const Social = styled.div`
  margin-top: 32px;
  & p {
    margin: 0;
    ${font(18, 30)};
  }
  @media screen and (max-width: 768px) {
    margin-top: 24px;
  }
`;

const LogoBlock = styled.div`
  justify-self: end;
  @media screen and (max-width: 768px) {
    order: -1;
    justify-self: start;
    margin-bottom: 56px;
  }
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  padding-bottom: 66px;
  @media screen and (max-width: 768px) {
    padding-bottom: 24px;
    grid-template-columns: 100%;
  }
`;

const FooterWrapper = styled.div`
  border-top: 1px solid var(--blue-600);
  padding-top: 56px;
  position: relative;
  @media screen and (max-width: 768px) {
    padding-top: 34px;
  }
`;

export default Footer;
