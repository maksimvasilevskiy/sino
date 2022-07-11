import React from "react";
import { styled, connect, css } from "frontity";
import DecorativeLine from "../../constant/DecorativeLine";
import Title from "../../constant/Title";
import Link from "../../constant/Link";
import Button from "../../constant/Button";
import drop from "../../../assets/images/svg/drop-white.svg";
import { font, flex } from "../../base/functions";

const HeroDrop = ({ state, actions }) => {
  const { selectedMenuItem } = state.theme;

  const handleLinkClick = () => {};

  if (!selectedMenuItem || !selectedMenuItem.text) {
    return null;
  }

  return (
    <Drop>
      <DecorativeLineWrapper>
        <DecorativeLine
          heightInPercent={88.9175}
          color="white"
          rotation="bottom"
        />
      </DecorativeLineWrapper>
      <DropWrapper>
        <Title size="s" color="white" marginBottom={32}>
          {selectedMenuItem.title}
        </Title>
        <List>
          {selectedMenuItem.dropdown.map((link) => {
            if (link.isDropdown) {
              return (
                <ListItem key={link.text}>
                  <NavButton
                    onClick={() => actions.theme.handleNavDropdown(link.text)}
                  >
                    <span>{link.text}</span>
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
                        ${flex("column")};
                      `}
                    >
                      {link.dropdown &&
                        link.dropdown.map((item) => {
                          if (item.isDropdown) {
                            return (
                              <ListItem
                                css={css`
                                  ${font(18, 30)}
                                `}
                                key={item.text}
                              >
                                <NavButton
                                  css={css`
                                    ${font(18, 30)}
                                  `}
                                  onClick={() =>
                                    actions.theme.handleNavDropdown(item.text)
                                  }
                                >
                                  <span>{item.text}</span>
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
                                      /* TODO: Configure correct padding */
                                      ${flex("column")}
                                    `}
                                  >
                                    {item.dropdown &&
                                      item.dropdown.map((link) => {
                                        return (
                                          <ListItem
                                            key={link.text}
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
                                              link={link.route}
                                              onClick={handleLinkClick}
                                            >
                                              {link.text}
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
                            <ListItem key={item.text}>
                              <NavLink
                                css={css`
                                  ${font(18, 30)}
                                `}
                                link={item.route}
                                onClick={handleLinkClick}
                              >
                                {item.text}
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
              <ListItem key={link.text}>
                <NavLink onClick={handleLinkClick} link={link.route}>
                  {link.text}
                </NavLink>
              </ListItem>
            );
          })}
        </List>
      </DropWrapper>
    </Drop>
  );
};

const DecorativeLineWrapper = styled.div`
  position: absolute;
  top: 0;
  left: var(--container-padding-xl);
  height: 100%;
  @media screen and (max-width: 1400px) {
    left: var(--container-padding-lg);
  }
`;

const DropWrapper = styled.div`
  overflow-x: hidden;
  overflow-y: auto;
  padding-top: 48px;
  padding-bottom: 62px;
  padding-right: 40px;
  padding-left: calc(((100vw - 1372px) / 2) + 112px);
  position: relative;
  height: inherit;
  @media screen and (max-width: 1400px) {
    padding-left: calc(var(--container-padding-lg) + 112px);
  }
  @media screen and (max-width: 991px) {
    display: none;
  }
`;

const Drop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 3;
  min-width: calc(50% + 12px);
  height: 100%;
  background: rgba(57, 76, 98, 0.2);
  backdrop-filter: blur(25px);
  @media screen and (max-width: 991px) {
    display: none;
  }
  & ul {
    padding: 0;
  }
`;

const Dropdown = styled.div`
  margin-top: 16px;
  padding-bottom: 8px;
  display: ${({ isOpened }) => (isOpened ? "block" : "none")};
`;

const NavLink = styled(Link)`
  ${font(24, 32)};
  font-weight: 400;
  color: var(--white);
  &:hover {
    opacity: 0.8;
  }
  &:active {
    opacity: 0.6;
  }
`;

const NavButton = styled(Button)`
  ${flex("row", "center")};
  ${font(24, 32)};
  font-weight: 400;
  background: transparent;
  color: var(--white);
  & span {
    display: inline-block;
    margin-right: 8px;
  }
  & img {
    transform: translateY(2px);
  }
  &:hover {
    opacity: 0.8;
  }
  &:active {
    opacity: 0.6;
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

export default connect(HeroDrop);
