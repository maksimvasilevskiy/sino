import React from "react";
import { connect, styled, css } from "frontity";
import { flex, font } from "../base/functions";
import Button from "../constant/Button";
import drop from "../../assets/images/svg/drop.svg";
import Link from "../constant/Link";

const Navigation = ({ state, actions }) => {
  const navLinks = state.source.get(`/menu/main-menu/`).items;//state.theme.menu;
  //console.log(navLinks);

  const handleLinkClick = () => {
    actions.theme.closeMobileMenu();
  };

  return (
    <Nav className="navigation">
      <List>
        {navLinks &&
          navLinks.map((link) => {
            console.log(link);
            if (link.child_items) {
              return (
                <ListItem key={link.title}>
                  <NavButton
                    onClick={() => actions.theme.handleNavDropdown(link.title)}
                  >
                    <span>{link.title}</span>
                    <img
                      style={
                        link.isDropdownOpened
                          ? { transform: "rotate(180deg)" }
                          : { transform: "none" }
                      }
                      width="14"
                      height="14"
                      src={drop}
                      alt="drop"
                    />
                  </NavButton>
                  <Dropdown isOpened={link.isDropdownOpened}>
                    <ul
                      css={css`
                        padding-left: 24px;
                        ${flex("column")};
                      `}
                    >
                      {link.child_items &&
                        link.child_items.map((item) => {
                          if (item.child_items) {
                            return (
                              <ListItem
                                css={css`
                                  ${font(18, 30)}
                                `}
                                key={item.title}
                              >
                                <NavButton
                                  css={css`
                                    ${font(18, 30)}
                                  `}
                                  onClick={() =>
                                    actions.theme.handleNavDropdown(item.title)
                                  }
                                >
                                  <span>{item.title}</span>
                                  <img
                                    style={
                                      item.isDropdownOpened
                                        ? { transform: "rotate(180deg)" }
                                        : { transform: "none" }
                                    }
                                    width="14"
                                    height="14"
                                    src={drop}
                                    alt="drop"
                                  />
                                </NavButton>
                                <Dropdown isOpened={item.isDropdownOpened}>
                                  <ul
                                    css={css`
                                      padding-left: 40px;
                                      ${flex("column")}
                                    `}
                                  >
                                    {item.child_items &&
                                      item.child_items.map((link) => {
                                        return (
                                          <ListItem
                                            key={link.title}
                                            css={css`
                                              margin-bottom: 4px;
                                              &:last-child {
                                                margin-bottom: 0;
                                              }
                                            `}
                                          >
                                            <NavLink
                                              css={css`
                                                ${font(16, 40)};
                                                font-weight: 300;
                                                letter-spacing: 0.04em;
                                              `}
                                              link={link.url}
                                              onClick={handleLinkClick}
                                            >
                                              {link.title}
                                            </NavLink>
                                          </ListItem>
                                        );
                                      })}
                                  </ul>
                                </Dropdown>
                              </ListItem>
                            );
                          }

                          return (
                            <ListItem key={item.title}>
                              <NavLink
                                css={css`
                                  ${font(18, 30)}
                                `}
                                link={item.url}
                                onClick={handleLinkClick}
                              >
                                {item.title}
                              </NavLink>
                            </ListItem>
                          );
                        })}
                    </ul>
                  </Dropdown>
                </ListItem>
              );
            }

            return (
              <ListItem key={link.title}>
                <NavLink onClick={handleLinkClick} link={link.url}>
                  {link.title}
                </NavLink>
              </ListItem>
            );
          })}
      </List>
    </Nav>
  );
};

const Dropdown = styled.div`
  margin-top: 16px;
  padding-bottom: 8px;
  display: ${({ isOpened }) => (isOpened ? "block" : "none")};
`;

const Nav = styled.nav`
  height: 100%;
  margin-top: 37px;
  margin-bottom: 72px;
`;

const NavLink = styled(Link)`
  ${font(24, 32)};
  font-weight: 400;
  &:hover {
    color: var(--blue-600);
  }
  &:active {
    color: var(--gray-menu);
  }
`;

const NavButton = styled(Button)`
  ${flex("row", "center")};
  ${font(24, 32)};
  font-weight: 400;
  & span {
    display: inline-block;
    margin-right: 8px;
  }
  & img {
    transform: translateY(2px);
  }
  &:hover {
    color: var(--blue-600);
  }
  &:active {
    color: var(--gray-menu);
  }
`;

const ListItem = styled.li`
  list-style: none;
  margin-bottom: 24px;
  display: inline-block;
  &:last-child {
    margin-bottom: 0;
  }
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  ${flex("column")};
`;

export default connect(Navigation);
