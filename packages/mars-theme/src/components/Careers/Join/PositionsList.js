import React from "react";
import IconBlock from "../../constant/IconBlock";
import ArrowLink from "../../constant/ArrowLink";
import LoadMore from "../../constant/LoadMore";
import { connect, styled, css } from "frontity";
import { font, flex } from "../../base/functions";
import parse from "html-react-parser";

import calendar from "../../../assets/images/svg/dark-calendar.svg";
import marker from "../../../assets/images/svg/dark-map-marker.svg";
/*
const positions = [
  {
    id: 1,
    position: "EDI Officer",
    company: "Sino Logistics",
    category: "Customer Service",
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
    date: "06 Jan 2022",
    location: "Laem Chabang",
  },
  {
    id: 2,
    position: "Recruitment Specialist",
    company: "Sino Logistics",
    category: "Human Resources",
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
    date: "03 Jan 2022",
    location: "Bangkok",
  },
  {
    id: 3,
    position: "Class 1 Driver",
    company: "Inter Connections Logistics",
    category: "Operations",
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
    date: "01 Jan 2022",
    location: "Rayong",
  },
  {
    id: 4,
    position: "Class 2 Driver",
    company: "Inter Connections Logistics",
    category: "Operations",
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
    date: "01 Jan 2022",
    location: "Rayong",
  },
];*/

const PositionsList = ({ state, actions, post, jobs }) => {
  const { isAllPositionsShown } = state.theme;

  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
  ];

  const dateHandler = (date) => {
    const year = date.split('-')[0];
    const month = Number(date.split('-')[1]);
    const day = date.split('-')[2].substr(0, 2);
    return day + ' ' + months[month-1] + ' ' + year;
  }

  return (
    <List>
      {jobs.map((position, idx) => {
        console.log(position);
        if (!isAllPositionsShown && idx >= 3) {
          return null;
        }

        return (
          <Position key={`position-${idx}`}>
            <MainInfo>
              <PositionTitle>{position.acf.job_name}</PositionTitle>
              <Company>{position.acf.job_company}</Company>
              <Category>{position.acf.job_category}</Category>
            </MainInfo>
            <Description>
              <Text>
                <p>{position.acf.job_description ? parse(position.acf.job_description) : ''}</p>
              </Text>
            </Description>
            <Additional>
              <Top>
                <IconWrapper>
                  <IconBlock icon={calendar}>{dateHandler(position.date)}</IconBlock>
                </IconWrapper>
                <IconWrapper>
                  <IconBlock icon={marker}>
                    {position.acf.job_location}
                  </IconBlock>
                </IconWrapper>
              </Top>
              <LearnMore>
                <ArrowLink content="Learn More" link={position.link} />
              </LearnMore>
            </Additional>
          </Position>
        );
      })}
      {!isAllPositionsShown && (
        <div
          css={css`
            text-align: center;
            margin-top: 40px;
          `}
        >
          <LoadMore text={post.acf.join_team_load_more_text} onClick={() => actions.theme.handlePositionsShow()} />
        </div>
      )}
    </List>
  );
};

const IconWrapper = styled.div`
  text-align: right;
  @media screen and (max-width: 1400px) {
    margin-bottom: 8px;
  }
  @media screen and (max-width: 576px) {
    text-align: left;
    margin-bottom: 16px;

    &:last-of-type {
      margin-bottom: 48px;
    }
  }
`;

const Top = styled.div`
  display: grid;
  grid-template-columns: 45% 55%;
  @media screen and (max-width: 1400px) {
    grid-template-columns: 100%;
  }
`;

const LearnMore = styled.div`
  margin-top: auto;
  display: grid;
  justify-items: end;
  @media screen and (max-width: 576px) {
    justify-items: start;
  }
`;

const Category = styled.p`
  margin: 0;
  font-style: italic;
  font-weight: 300;
  ${font(16, 30)};
`;

const Company = styled.p`
  margin: 0;
  margin-bottom: 8px;
  ${font(18, 30)};
  font-weight: 500;
  color: var(--gray-menu);
`;

const PositionTitle = styled.h3`
  color: var(--gray-menu);
  margin: 0;
  margin-bottom: 24px;
  ${font(24, 32)};
  font-weight: 500;
  letter-spacing: -0.02em;
`;

const Text = styled.div`
  max-width: 560px;
  & p {
    color: var(--gray-menu);
    margin: 0;
    ${font(14, 24)};
    font-weight: 300;
  }
`;

const Description = styled.div`
  @media screen and (max-width: 991px) {
    display: none;
  }
`;

const Additional = styled.div`
  ${flex("column", "space-between")};
`;

const MainInfo = styled.div`
  @media screen and (max-width: 576px) {
    margin-bottom: 24px;
  }
`;

const Position = styled.li`
  color: var(--gray-menu);
  border-bottom: 1px solid var(--blue-600);
  padding: 32px 0;
  display: grid;
  grid-template-columns: 25.437% 45% 29.563%;
  &:first-of-type {
    border-top: 1px solid var(--blue-600);
  }
  @media screen and (max-width: 991px) {
    grid-template-columns: 50% 50%;
  }
  @media screen and (max-width: 576px) {
    grid-template-columns: 100%;
    padding: 40px 0;
  }
`;

const List = styled.ul`
  padding: 0;
  margin: 0;
`;

export default connect(PositionsList);
