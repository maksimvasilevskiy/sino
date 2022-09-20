import React, { useState, useEffect } from "react";
import { styled, connect } from "frontity";
import Link from "../constant/Link";
import { font } from "../base/functions";
import Container from "../constant/Container";
import Input from "../constant/Input";
import MenuNavigation from "./MenuNavigation";
import Language from "./Language";

const MobileMenu = ({ state, actions }) => {
  const [searchData, setSearchData] = useState([]);

  const { searchValue, isMobileMenuOpened } = state.theme;

  const jobsItems = state.source.get("/jobs/").items;
  const companyNews = state.source.get("/company-news/").items;
  const services = state.source.get("/services/").items;

  // Set search items to state
  useEffect(() => {
    const searchData = [...jobsItems, ...companyNews, ...services];

    setSearchData(searchData);
  }, [jobsItems, companyNews, services]);

  return (
    <Menu className={isMobileMenuOpened ? "opened" : ""}>
      <MenuContainer>
        <SearchWrapper>
          <Input
            placeholder="Search Here"
            maxWidth="100%"
            value={searchValue}
            onChange={(evt) =>
              actions.theme.handleSearchChange(evt.target.value)
            }
          />
          {searchData[0] && (
            <SearchDrop>
              {searchData.map((item) => {
                const currentValue = state.theme.searchValue.toLowerCase();
                const title = item.title.rendered;

                const isMatches = title.toLowerCase().includes(currentValue);

                if (currentValue !== "" && isMatches) {
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
        </SearchWrapper>
        <MenuNavigation />
        <Language />
      </MenuContainer>
    </Menu>
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
  position: relative;
  width: 100%;
  background: var(--white);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  padding: 10px 0 8px;
  overflow-y: auto;
  max-height: 300px;
  z-index: 50;
`;

const SearchWrapper = styled.div`
  position: relative;
`;

const MenuContainer = styled(Container)`
  border-bottom: 1px solid var(--blue-600);
  padding-bottom: 96px;

  @media screen and (max-width: 576px) {
    padding: 0;
    padding-bottom: 96px;
  }
`;

const Menu = styled.div`
  position: fixed;
  box-sizing: border-box;
  top: 72px;
  left: 0;
  background: var(--white);
  width: 100vw;
  height: calc(100vh - 72px);
  display: none;
  overflow-x: hidden;
  overflow-y: auto;
  transform: translateX(100%);
  transition: transform 0.3s;
  padding: 24px 0;
  padding-bottom: 40px;
  z-index: 10;
  &.opened {
    transform: none;
  }

  @media screen and (max-width: 991px) {
    display: block;
  }

  @media screen and (max-width: 576px) {
    padding: 24px;
    padding-bottom: 40px;
  }
`;

export default connect(MobileMenu);
