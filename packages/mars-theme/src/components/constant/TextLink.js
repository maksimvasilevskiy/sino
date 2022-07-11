import Link from "./Link";
import { styled } from "frontity";

const TextLink = styled(Link)`
  &:hover {
    color: var(--blue-600);
    text-decoration: underline;
  }
  &:active {
    color: var(--gray-menu);
  }
`;

export default TextLink;
