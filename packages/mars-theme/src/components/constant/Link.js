import { connect, useConnect } from "frontity";
import Link from "@frontity/components/link";

/**
 * The MarsLink component, which is a wrapper on top of the {@link Link}
 * component.
 *
 * @param props - It accepts the same props than the {@link Link} component.
 *
 * @example
 * ```js
 * <MarsLink link="/some-post">
 *   <div>Some Post</div>
 * </MarsLink>
 * ```
 *
 * @returns A {@link Link} component, which returns an HTML anchor element.
 */
const SinoLink = ({ children, ...props }) => {
  const { state, actions } = useConnect();

  /**
   * A handler that closes the mobile menu when a link is clicked.
   */
  const onClick = () => {
    if (state.theme.isMobileMenuOpened) {
      actions.theme.closeMobileMenu();
      const htmlElement = document.documentElement;
      console.log('remove("scroll-hidden")')
      htmlElement.classList.remove("scroll-hidden");
    }
  };

  return (
    <Link {...props} onClick={onClick}>
      {children}
    </Link>
  );
};

export default connect(SinoLink, { injectProps: false });
