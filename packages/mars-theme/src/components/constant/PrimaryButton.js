import React from "react";
import Link from "./Link";
import { styled } from "frontity";
import { flex, font } from "../base/functions";

const PrimaryButton = ({ onClick, content, type, link, disabled, style }) => {
  return type === "link" ? (
    <PrimaryLink
      style={style}
      link={link}
      disabled={disabled ? true : false}
      className="button"
    >
      <span>{content}</span>
      <div>
        <svg
          width="107"
          height="35"
          viewBox="0 0 107 35"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M92.3405 17.5108C92.3409 17.7051 92.2728 17.8935 92.148 18.0432L87.9623 23.0344C87.8202 23.2043 87.616 23.3112 87.3946 23.3314C87.1733 23.3517 86.9529 23.2838 86.7819 23.1426C86.611 23.0014 86.5034 22.7985 86.483 22.5785C86.4626 22.3585 86.531 22.1395 86.6731 21.9696L90.4235 17.5108L86.807 13.0519C86.7375 12.9668 86.6856 12.8689 86.6542 12.7638C86.6229 12.6587 86.6128 12.5485 86.6244 12.4395C86.6361 12.3305 86.6693 12.2249 86.7222 12.1287C86.7751 12.0325 86.8466 11.9476 86.9326 11.879C87.0187 11.8028 87.1197 11.7451 87.2292 11.7095C87.3388 11.6739 87.4545 11.6612 87.5693 11.6721C87.684 11.683 87.7953 11.7174 87.896 11.773C87.9968 11.8287 88.0849 11.9044 88.1548 11.9954L92.1982 16.9867C92.3033 17.1407 92.3534 17.3252 92.3405 17.5108V17.5108Z"
            fill="#FDFDFD"
          />
          <path
            d="M106 17.5C106 26.6079 98.5777 34 89.4111 34C80.2444 34 72.822 26.6079 72.822 17.5C72.822 8.39208 80.2444 1 89.4111 1C98.5777 1 106 8.39208 106 17.5Z"
            stroke="#FDFDFD"
            strokeWidth="2"
          />
          <line
            x1="8.78676e-08"
            y1="17.2295"
            x2="73.2877"
            y2="17.2295"
            stroke="#FDFDFD"
            strokeWidth="2"
          />
        </svg>
      </div>
    </PrimaryLink>
  ) : (
    <Button
      style={style}
      type={type || "button"}
      onClick={onClick}
      disabled={disabled ? true : false}
      className="button"
    >
      <span>{content}</span>
      <div>
        <svg
          width="107"
          height="35"
          viewBox="0 0 107 35"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M92.3405 17.5108C92.3409 17.7051 92.2728 17.8935 92.148 18.0432L87.9623 23.0344C87.8202 23.2043 87.616 23.3112 87.3946 23.3314C87.1733 23.3517 86.9529 23.2838 86.7819 23.1426C86.611 23.0014 86.5034 22.7985 86.483 22.5785C86.4626 22.3585 86.531 22.1395 86.6731 21.9696L90.4235 17.5108L86.807 13.0519C86.7375 12.9668 86.6856 12.8689 86.6542 12.7638C86.6229 12.6587 86.6128 12.5485 86.6244 12.4395C86.6361 12.3305 86.6693 12.2249 86.7222 12.1287C86.7751 12.0325 86.8466 11.9476 86.9326 11.879C87.0187 11.8028 87.1197 11.7451 87.2292 11.7095C87.3388 11.6739 87.4545 11.6612 87.5693 11.6721C87.684 11.683 87.7953 11.7174 87.896 11.773C87.9968 11.8287 88.0849 11.9044 88.1548 11.9954L92.1982 16.9867C92.3033 17.1407 92.3534 17.3252 92.3405 17.5108V17.5108Z"
            fill="#FDFDFD"
          />
          <path
            d="M106 17.5C106 26.6079 98.5777 34 89.4111 34C80.2444 34 72.822 26.6079 72.822 17.5C72.822 8.39208 80.2444 1 89.4111 1C98.5777 1 106 8.39208 106 17.5Z"
            stroke="#FDFDFD"
            strokeWidth="2"
          />
          <line
            x1="8.78676e-08"
            y1="17.2295"
            x2="73.2877"
            y2="17.2295"
            stroke="#FDFDFD"
            strokeWidth="2"
          />
        </svg>
      </div>
    </Button>
  );
};

const PrimaryLink = styled(Link)`
  border: none;
  border-radius: 8px;
  color: var(--white);
  background: var(--lightblue-250);
  ${flex("row", "center", "space-between")};
  width: 100%;
  max-width: 325px;
  padding: 17px 24px;
  & span {
    ${font(24, 30)};
    font-family: var(--font);
  }
  &:hover {
    background: var(--lightblue-300);
  }
  &:active {
    box-shadow: 0px 0px 20px 0px #0000001a inset;
  }
  ${({ disabled }) =>
    disabled &&
    `
		background: var(--lightblue-250);
    opacity: 0.5;
		pointer-events: none;
	`};
`;

const Button = styled.button`
  border: none;
  border-radius: 8px;
  color: var(--white);
  background: var(--lightblue-250);
  ${flex("row", "center", "space-between")};
  width: 100%;
  max-width: 325px;
  padding: 17px 24px;
  & span {
    ${font(24, 30)};
    font-family: var(--font);
  }
  &:hover {
    background: var(--lightblue-300);
  }
  &:active {
    box-shadow: 0px 0px 20px 0px #0000001a inset;
  }
  &:disabled {
    background: var(--lightblue-250);
    opacity: 0.5;
  }
`;

export default PrimaryButton;
