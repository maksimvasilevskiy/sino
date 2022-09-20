import React, { useState, useEffect } from "react";
import { connect, styled, css } from "frontity";
import { flex, font } from "../base/functions";
import Button from "../constant/Button";
import Link from "../constant/Link";
import ModalInput from "../constant/ModalInput";
import RadioButton from "../constant/RadioButton";

const SearchBlock = ({ state, actions }) => {
  const [searchOpened, setSearchOpened] = useState(false);
  const [langOpened, setLangOpened] = useState(false);
  const [searchData, setSearchData] = useState([]);

  const jobsItems = state.source.get("/jobs/").items;
  const companyNews = state.source.get("/company-news/").items;
  const services = state.source.get("/services/").items;

  const { languages } = state.theme;

  // Set search items to state
  useEffect(() => {
    const searchData = [...jobsItems, ...companyNews, ...services];

    setSearchData(searchData);
  }, [jobsItems, companyNews, services]);

  // For closing modals
  useEffect(() => {
    document.addEventListener("click", (evt) => {
      handleSearchClose(evt, setSearchOpened);
      handleLangClose(evt, setLangOpened);

      actions.theme.handleSearchClear();
    });

    return () => {
      document.removeEventListener("click", (evt) => {
        handleSearchClose(evt, setSearchOpened);
        handleLangClose(evt, setLangOpened);

        actions.theme.handleSearchClear();
      });
    };
  }, []);

  return (
    <Wrapper>
      <div
        css={css`
          margin-right: 16px;
          position: relative;
        `}
        data-btn="search-btn"
      >
        <SearchButton
          className={searchOpened ? "active" : ""}
          onClick={() => setSearchOpened(true)}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.75 15.75L20.25 20.25"
              stroke="#4279B8"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10.125 17.25C14.06 17.25 17.25 14.06 17.25 10.125C17.25 6.18997 14.06 3 10.125 3C6.18997 3 3 6.18997 3 10.125C3 14.06 6.18997 17.25 10.125 17.25Z"
              stroke="#4279B8"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </SearchButton>
        {searchOpened && (
          <SearchModal data-modal="search-modal">
            <SearchModalWrapper>
              <ModalInput
                minWidth="325px"
                placeholder="Search Here"
                name="search"
                value={state.theme.searchValue}
                onChange={(evt) =>
                  actions.theme.handleSearchChange(evt.target.value)
                }
              />
              {searchData[0] && (
                <SearchDrop>
                  {searchData.map((item) => {
                    const currentValue = state.theme.searchValue.toLowerCase();
                    const title = item.title.rendered;

                    const isMatches = title
                      .toLowerCase()
                      .includes(currentValue);

                    if (isMatches) {
                      return (
                        <SearchItem key={item.id}>
                          <SearchLink link={item.link}>{title}</SearchLink>
                        </SearchItem>
                      );
                    }

                    return null;
                  })}
                </SearchDrop>
              )}
            </SearchModalWrapper>
          </SearchModal>
        )}
      </div>
      <div
        css={css`
          position: relative;
        `}
        data-btn="lang-btn"
      >
        <LangButton
          className={langOpened ? "active" : ""}
          onClick={() => setLangOpened(true)}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.7002 12.0001C6.70394 13.1084 6.84274 14.2121 7.11353 15.2868H11.4335V8.9668H7.05353C6.82307 9.96158 6.70456 10.979 6.7002 12.0001Z"
              fill="#4279B8"
            />
            <path
              d="M12.5664 8.9668V15.2868H16.8864C17.1684 14.2135 17.3184 13.1098 17.3331 12.0001C17.3309 10.9793 17.2146 9.96183 16.9864 8.9668H12.5664Z"
              fill="#4279B8"
            />
            <path
              d="M11.9997 1.33398C9.89001 1.33398 7.82772 1.95957 6.0736 3.13164C4.31947 4.30371 2.9523 5.96962 2.14496 7.91869C1.33763 9.86777 1.12639 12.0125 1.53797 14.0816C1.94955 16.1507 2.96545 18.0514 4.45721 19.5431C5.94897 21.0349 7.84959 22.0508 9.91872 22.4624C11.9878 22.8739 14.1326 22.6627 16.0816 21.8554C18.0307 21.048 19.6966 19.6809 20.8687 17.9267C22.0408 16.1726 22.6663 14.1103 22.6663 12.0007C22.6663 9.17167 21.5425 6.45857 19.5422 4.45818C17.5418 2.45779 14.8287 1.33398 11.9997 1.33398ZM20.1463 16.474H17.733C17.2767 17.9025 16.6021 19.2518 15.733 20.474C15.0917 20.7535 14.4207 20.9592 13.733 21.0873C14.9647 19.749 15.9126 18.1752 16.5197 16.4607H12.573V21.2273H11.4463V16.474H7.47968C8.08595 18.1909 9.03393 19.767 10.2663 21.1073C9.59278 20.9806 8.93541 20.7794 8.30635 20.5073C7.43423 19.2749 6.75947 17.9141 6.30635 16.474H3.85301C3.64004 16.0855 3.45512 15.6822 3.29968 15.2673H5.96635C5.71647 14.1962 5.58678 13.1005 5.57968 12.0007C5.58005 10.9811 5.6873 9.96447 5.89968 8.96732H3.17301C3.31321 8.55364 3.48252 8.15041 3.67968 7.76065H6.21968C6.69627 6.17335 7.43539 4.67709 8.40635 3.33398C9.02206 3.07886 9.66357 2.8911 10.3197 2.77398C8.99346 4.19735 7.99256 5.89205 7.38635 7.74065H11.4463V2.66732H12.573V7.76065H16.633C16.0279 5.91501 15.0293 4.22271 13.7063 2.80065C14.3614 2.90931 15.0029 3.08812 15.6197 3.33398C16.585 4.66738 17.3217 6.1521 17.7997 7.72732H20.313C20.5101 8.11709 20.6795 8.52032 20.8197 8.93398H18.113C18.33 9.94179 18.4395 10.9698 18.4397 12.0007C18.4363 13.107 18.3088 14.2094 18.0597 15.2873H20.7263C20.5614 15.6961 20.3676 16.0927 20.1463 16.474Z"
              fill="#4279B8"
            />
          </svg>
        </LangButton>
        {langOpened && (
          <LangModal data-modal="lang-modal">
            <LangModalWrapper>
              <h3
                css={css`
                  margin: 0;
                  margin-bottom: 16px;
                  font-weight: 400;
                  ${font(13, 15)};
                  letter-spacing: -0.02em;
                `}
              >
                Change language
              </h3>
              <div>
                {languages.map(([lang, value, url]) => (
                  <RadioButton
                    key={value}
                    name="language"
                    text={`${lang} - ${value}`}
                    value={value}
                    url={value === 'EN' ? state.router.link : state.router.link+'?frontity_name=sino-th'}
                  />
                ))}
              </div>
            </LangModalWrapper>
          </LangModal>
        )}
      </div>
    </Wrapper>
  );
};

const SearchLink = styled(Link)`
  display: block;
  padding: 6px 16px;
  width: 100%;
`;

const SearchItem = styled.li`
  ${font(16, 24)};
  letter-spacing: -0.02em;
`;

const SearchDrop = styled.ul`
  margin: 0;
  list-style: none;
  position: absolute;
  width: 100%;
  top: calc(100% - 6px);
  background: var(--white);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  padding: 10px 0 8px;
  overflow-y: auto;
  max-height: 300px;
`;

const LangButton = styled(Button)`
  &.active path {
    fill: var(--gray-900);
  }
`;

const LangModal = styled.div`
  position: absolute;
  top: calc(100% + 52px);
  right: -16px;
  width: 100vw;
  max-width: 209px;
`;

const LangModalWrapper = styled.div`
  position: relative;
  padding: 16px;
  padding-bottom: 24px;
  background: var(--white);
  border-radius: 8px;
  &::before {
    content: "";
    position: absolute;
    width: 12px;
    height: 12px;
    top: -6px;
    right: 20px;
    background: var(--white);
    transform: rotate(45deg);
  }
`;

const SearchButton = styled(Button)`
  &.active path {
    stroke: var(--gray-900);
  }
`;

const SearchModal = styled.div`
  position: absolute;
  top: calc(100% + 52px);
  right: -40px;
`;

const SearchModalWrapper = styled.div`
  position: relative;
  background: var(--white);
  border-radius: 8px;
  &::before {
    content: "";
    position: absolute;
    width: 12px;
    height: 12px;
    top: -6px;
    right: 50px;
    background: var(--white);
    transform: rotate(45deg);
  }
`;

const Wrapper = styled.div`
  ${flex("row", "center", "flex-end")};

  @media screen and (max-width: 991px) {
    display: none;
  }
`;

export default connect(SearchBlock);

// Functions ===================

function handleSearchClose(e, setSearchOpened) {
  const target = e.target;

  if (
    target.closest('div[data-modal="search-modal"]') ||
    target.closest('div[data-btn="search-btn"]')
  ) {
    return;
  }

  setSearchOpened(false);
}

function handleLangClose(e, setLangOpened) {
  const target = e.target;

  if (
    target.closest('div[data-modal="lang-modal"]') ||
    target.closest('div[data-btn="lang-btn"]')
  ) {
    return;
  }

  setLangOpened(false);
}
