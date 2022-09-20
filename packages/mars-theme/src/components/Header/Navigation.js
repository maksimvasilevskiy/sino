import React from "react";
import { connect, styled } from "frontity";
import { flex, font } from "../base/functions";
import drop from "../../assets/images/svg/drop.svg";
import Link from "../constant/Link";

const Navigation = ({ state, actions }) => {

  let isThai = false;
  if (state.source.url === 'https://sino.ux-mind.pro/th') {
    isThai = true;
  }
  let navLinks = [];
  if (isThai) {
    navLinks = state.source.get(`/menu/thai-menu`).items;
  } else {
    navLinks = state.source.get(`/menu/main-menu`).items;
  }
  const { selectedMenuItem } = state.theme;

  const handleDropdownClick = (menuItem) => {
    if (!selectedMenuItem || selectedMenuItem.title !== menuItem.title) {
      actions.theme.setMenuItem(menuItem);
    } else {
      actions.theme.setMenuItem(null);
    }
  };

  const handleDropdownHover = (menuItem) => {
    if (!selectedMenuItem || selectedMenuItem.title !== menuItem.title) {
      actions.theme.setMenuItem(menuItem);
    }
  };

  return (
    <Nav className="navigation">
      <List>
        {navLinks &&
          navLinks.map((link) => {
            if (link.child_items) {
              return (
                <ListItem
                  key={link.title}
                  onMouseEnter={() => handleDropdownHover(link)}
                >
                  <NavLink link={link.url}>
                    <span>{link.title}</span>
                  </NavLink>
                  <Drop onClick={(evt) => handleDropdownClick(evt, link)}>
                    <img width="14" height="14" src={drop} alt="drop" />
                  </Drop>
                </ListItem>
              );
            }

            return (
              <ListItem key={link.title}>
                <NavLink link={link.url}>{link.title}</NavLink>
              </ListItem>
            );
          })}
      </List>
    </Nav>
  );
};

const Drop = styled.div`
  display: grid;
  place-items: center;
  padding: 2px 4px;
  cursor: pointer;
`;

const Nav = styled.nav`
  height: 100%;
  ${flex("row", "center")};

  @media screen and (max-width: 991px) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  ${font(18, 30)};
  font-weight: 400;
  & span {
    display: inline-block;
    margin-right: 4px;
  }
`;

const ListItem = styled.li`
  list-style: none;
  margin-right: 44px;
  ${flex("row", "center")};
  &:last-child {
    margin-right: 0;
  }
  &:hover {
    & button,
    & a {
      color: var(--blue-600);
    }
  }
  &:active {
    & button,
    & a {
      color: var(--gray-menu);
    }
  }
  @media screen and (max-width: 1400px) {
    margin-right: 24px;
  }
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  ${flex("row", "center")}
`;

export default connect(Navigation);
