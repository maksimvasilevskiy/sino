import { styled, connect, css } from "frontity";
import Container from "../constant/Container";
import Input from "../constant/Input";
import MenuNavigation from "./MenuNavigation";
import Language from "./Language";

const MobileMenu = ({ state, actions }) => {
  const { searchValue, isMobileMenuOpened } = state.theme;

  return (
    <Menu className={isMobileMenuOpened ? "opened" : ""}>
      <MenuContainer>
        <Input
          placeholder="Search Here"
          minWidth="100%"
          value={searchValue}
          onChange={(evt) => actions.theme.handleSearchChange(evt.target.value)}
        />
        <MenuNavigation />
        <Language />
      </MenuContainer>
    </Menu>
  );
};

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
  bottom: 0;
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
