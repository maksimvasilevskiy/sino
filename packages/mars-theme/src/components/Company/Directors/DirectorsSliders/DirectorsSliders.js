import React from "react";
import SwiperButtons from "../../../constant/SwiperButtons";
import DirectorsSlider from "./DirectorsSlider/DirectorsSlider";
import Title from "../../../constant/Title";
import { styled, connect, css } from "frontity";
import { font, flex } from "../../../base/functions";
import parse from "html-react-parser";

import { boardSlides, executiveSlides, auditSlides } from "./slides";

const DirectorsSliders = ({ state, actions, post }) => {
  const { isMobile, isAllDirectorsShown } = state.theme;
  const boardSlides = post.acf.company_board_of_directors_content;
  const executiveSlides = post.acf.company_executive_committee_content;
  const auditSlides = post.acf.company_audit_committee_content;
  const riskSlides = post.acf.company_risk_management_committee_content;
  const nominationSlides = post.acf.company_nomination_and_remuneration_committee_content;
  const executivesAndManagementSlides = post.acf.company_executives_and_management_team_content;

  return (
    <Wrapper>
      <SlidersContainer>
        <SliderRow>
          <SliderTop>
            <Title size="xs" color="blue">
              {parse(post.acf.company_board_of_directors_title_1)}
            </Title>
            {!isMobile && (
              <SwiperButtons
                prevClassName={"directors-prev"}
                nextClassName={"directores-next"}
                spaceBetween={24}
              />
            )}
            {isMobile && (
              <Arrow>
                <svg
                  width="57"
                  height="14"
                  viewBox="0 0 57 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line
                    x1="1"
                    y1="7"
                    x2="47"
                    y2="7"
                    stroke="#4279B8"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M56.9976 7.01098C56.9981 7.24422 56.9168 7.47026 56.7678 7.64986L51.7703 13.6394C51.6007 13.8432 51.3569 13.9714 51.0926 13.9958C50.8283 14.0201 50.5652 13.9386 50.3611 13.7692C50.157 13.5997 50.0286 13.3562 50.0042 13.0923C49.9799 12.8283 50.0615 12.5655 50.2311 12.3616L54.7088 7.01098L50.391 1.66034C50.308 1.55823 50.246 1.44074 50.2086 1.31463C50.1712 1.18851 50.1591 1.05625 50.173 0.925448C50.187 0.794649 50.2267 0.667888 50.2898 0.552453C50.3529 0.437018 50.4383 0.335185 50.541 0.252807C50.6437 0.161387 50.7643 0.0921497 50.8951 0.0494318C51.0259 0.00671382 51.1641 -0.00856214 51.3011 0.00455755C51.4381 0.0176782 51.5709 0.0589113 51.6912 0.125678C51.8115 0.192444 51.9167 0.283305 52.0002 0.392564L56.8277 6.38208C56.9532 6.56684 57.013 6.78827 56.9976 7.01098Z"
                    fill="#4279B8"
                  />
                </svg>
              </Arrow>
            )}
          </SliderTop>
          <DirectorsSlider
            slides={boardSlides}
            btnPrev={"directors-prev"}
            btnNext={"directores-next"}
            prefix={'board_of_directors'}
          />
        </SliderRow>
        <SliderRow>
          <SliderTop>
            <Title size="xs" color="blue">
              {parse(post.acf.company_sub_committee_title)}
            </Title>
            {isMobile && (
              <Arrow>
                <svg
                  width="57"
                  height="14"
                  viewBox="0 0 57 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line
                    x1="1"
                    y1="7"
                    x2="47"
                    y2="7"
                    stroke="#4279B8"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M56.9976 7.01098C56.9981 7.24422 56.9168 7.47026 56.7678 7.64986L51.7703 13.6394C51.6007 13.8432 51.3569 13.9714 51.0926 13.9958C50.8283 14.0201 50.5652 13.9386 50.3611 13.7692C50.157 13.5997 50.0286 13.3562 50.0042 13.0923C49.9799 12.8283 50.0615 12.5655 50.2311 12.3616L54.7088 7.01098L50.391 1.66034C50.308 1.55823 50.246 1.44074 50.2086 1.31463C50.1712 1.18851 50.1591 1.05625 50.173 0.925448C50.187 0.794649 50.2267 0.667888 50.2898 0.552453C50.3529 0.437018 50.4383 0.335185 50.541 0.252807C50.6437 0.161387 50.7643 0.0921497 50.8951 0.0494318C51.0259 0.00671382 51.1641 -0.00856214 51.3011 0.00455755C51.4381 0.0176782 51.5709 0.0589113 51.6912 0.125678C51.8115 0.192444 51.9167 0.283305 52.0002 0.392564L56.8277 6.38208C56.9532 6.56684 57.013 6.78827 56.9976 7.01098Z"
                    fill="#4279B8"
                  />
                </svg>
              </Arrow>
            )}
          </SliderTop>
          <div
            css={css`
              @media screen and (max-width: 991px) {
                & h3 {
                  ${font(18, 30)};
                  letter-spacing: 0;
                  font-weight: 300;
                }
              }
            `}
          >
            <DirectorsSlider
              slides={executiveSlides}
              btnPrev={"executive-prev"}
              btnNext={"executive-next"}
              prefix={'executive_committee'}
              title={parse(post.acf.company_executive_committee_title)}
            />
          </div>
        </SliderRow>
        <LoadWrapper>
          <LoadMore onClick={() => actions.theme.toggleDirectors()}>
            <span>{post.acf.company_load_more_button ? parse(post.acf.company_load_more_button) : ''}</span>
            <div
              css={
                isAllDirectorsShown &&
                css`
                  transform: rotate(180deg);
                `
              }
            >
              <svg
                width="11"
                height="6"
                viewBox="0 0 11 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.49137 5.99797C5.30811 5.99836 5.13051 5.92865 4.98939 5.80093L0.283345 1.51743C0.12317 1.37202 0.022441 1.16306 0.00331894 0.936524C-0.0158031 0.70999 0.0482477 0.484437 0.181381 0.309484C0.314514 0.134532 0.505824 0.0245113 0.713224 0.00362514C0.920625 -0.017261 1.12713 0.0526984 1.2873 0.198113L5.49137 4.03613L9.69544 0.335186C9.77567 0.264023 9.86799 0.210881 9.96708 0.178813C10.0662 0.146745 10.1701 0.136385 10.2729 0.148326C10.3756 0.160268 10.4752 0.194276 10.5659 0.248397C10.6566 0.302518 10.7366 0.375685 10.8014 0.463691C10.8732 0.551778 10.9276 0.655118 10.9612 0.767238C10.9947 0.879357 11.0067 0.997839 10.9964 1.11526C10.9861 1.23268 10.9537 1.34652 10.9013 1.44962C10.8488 1.55273 10.7774 1.6429 10.6916 1.71447L5.98551 5.85233C5.84034 5.95986 5.66636 6.01114 5.49137 5.99797Z"
                  fill="#4279B8"
                />
              </svg>
            </div>
          </LoadMore>
        </LoadWrapper>
        {isAllDirectorsShown && (
          <HiddenSlides>
            <SliderRow data-row="low-margin">
              <DirectorsSlider
                slides={auditSlides}
                btnPrev={"audit-prev"}
                btnNext={"audit-next"}
                prefix={'audit_committee'}
                title={parse(post.acf.company_audit_committee_title)}
                isArrow={true}
              />
            </SliderRow>
            <SliderRow data-row="low-margin">
              <DirectorsSlider
                slides={riskSlides}
                btnPrev={"risk-management-prev"}
                btnNext={"risk-management-next"}
                prefix={'risk_management_committee'}
                title={parse(post.acf.company_risk_management_committee_title)}
                isArrow={true}
              />
            </SliderRow>
            <SliderRow>
              <DirectorsSlider
                slides={nominationSlides}
                btnPrev={"nomination-remuneration-prev"}
                btnNext={"nomination-remuneration-next"}
                prefix={'nomination_and_remuneration_committee'}
                title={parse(post.acf.company_nomination_and_remuneration_committee_title)}
                isArrow={true}
              />
            </SliderRow>
            <SliderRow>
              <SliderTop>
                <Title size="xs" color="blue">
                  {parse(post.acf.company_executives_and_management_team_title)}
                </Title>
                {!isMobile && (
                  <SwiperButtons
                    prevClassName={"executives-management-prev"}
                    nextClassName={"executives-management-next"}
                    spaceBetween={24}
                  />
                )}
                {isMobile && (
                  <Arrow>
                    <svg
                      width="57"
                      height="14"
                      viewBox="0 0 57 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <line
                        x1="1"
                        y1="7"
                        x2="47"
                        y2="7"
                        stroke="#4279B8"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                      <path
                        d="M56.9976 7.01098C56.9981 7.24422 56.9168 7.47026 56.7678 7.64986L51.7703 13.6394C51.6007 13.8432 51.3569 13.9714 51.0926 13.9958C50.8283 14.0201 50.5652 13.9386 50.3611 13.7692C50.157 13.5997 50.0286 13.3562 50.0042 13.0923C49.9799 12.8283 50.0615 12.5655 50.2311 12.3616L54.7088 7.01098L50.391 1.66034C50.308 1.55823 50.246 1.44074 50.2086 1.31463C50.1712 1.18851 50.1591 1.05625 50.173 0.925448C50.187 0.794649 50.2267 0.667888 50.2898 0.552453C50.3529 0.437018 50.4383 0.335185 50.541 0.252807C50.6437 0.161387 50.7643 0.0921497 50.8951 0.0494318C51.0259 0.00671382 51.1641 -0.00856214 51.3011 0.00455755C51.4381 0.0176782 51.5709 0.0589113 51.6912 0.125678C51.8115 0.192444 51.9167 0.283305 52.0002 0.392564L56.8277 6.38208C56.9532 6.56684 57.013 6.78827 56.9976 7.01098Z"
                        fill="#4279B8"
                      />
                    </svg>
                  </Arrow>
                )}
              </SliderTop>
              <DirectorsSlider
                slides={executivesAndManagementSlides}
                btnPrev={"executives-management-prev"}
                btnNext={"executives-management-next"}
                prefix={'executives_and_management_team'}
              />
            </SliderRow>
          </HiddenSlides>
        )}
      </SlidersContainer>
    </Wrapper>
  );
};

const HiddenSlides = styled.div`
  padding-top: 56px;
`;

const LoadMore = styled.button`
  ${flex("row", "center")};
  background: transparent;
  border: none;
  margin: 0 auto;
  cursor: pointer;
  & span {
    ${font(24, 32)};
    color: var(--blue-600);
  }
  & div {
    margin-left: 8px;
  }
`;

const LoadWrapper = styled.div`
  padding-right: var(--container-padding-xl);
  @media screen and (max-width: 1400px) {
    padding-right: var(--container-padding-lg);
  }
  @media screen and (max-width: 991px) {
    padding-right: var(--container-padding-md);
  }
  @media screen and (max-width: 768px) {
    padding-right: var(--container-padding-xs);
  }
  @media screen and (max-width: 576px) {
    padding-right: 24px;
  }
`;

const Arrow = styled.div`
  transform: tranlateY(2px);
`;

const SliderTop = styled.div`
  ${flex("row", "center", "space-between")};
  padding-right: var(--container-padding-xl);
  margin-bottom: 24px;
  @media screen and (max-width: 1400px) {
    padding-right: var(--container-padding-lg);
  }
  @media screen and (max-width: 991px) {
    padding-right: var(--container-padding-md);
  }
  @media screen and (max-width: 768px) {
    padding-right: var(--container-padding-xs);
  }
  @media screen and (max-width: 576px) {
    padding-right: 24px;
  }
`;

const SliderRow = styled.div`
  margin-bottom: 56px;
  &:last-of-type {
    margin-bottom: 0;
  }
  &[data-row="low-margin"] {
    margin-bottom: 32px;
    &:last-of-type {
      margin-bottom: 0;
    }
  }
  @media screen and (max-width: 991px) {
    & h4 {
      font-weight: 400;
      letter-spacing: 0.04em;
      ${font(24, 32)};
    }
  }
`;

const SlidersContainer = styled.div`
  padding-left: var(--container-padding-xl);
  @media screen and (max-width: 1400px) {
    padding-left: var(--container-padding-lg);
  }
  @media screen and (max-width: 991px) {
    padding-left: var(--container-padding-md);
  }
  @media screen and (max-width: 768px) {
    padding-left: var(--container-padding-xs);
  }
  @media screen and (max-width: 576px) {
    padding-left: 24px;
  }
`;

// const TitleWrapper = styled.div``;

const Wrapper = styled.div`
  padding-top: 128px;
  @media screen and (max-width: 991px) {
    padding-top: 48px;
  }
`;

export default connect(DirectorsSliders);
