import React from "react";
import Link from "./Link";
import { flex, font } from "../base/functions";
import { styled } from "frontity";

const Arrow = ({ link, content, disabled }) => {
  return (
    <ArrowLink link={link} disabled={disabled}>
      <span>{content}</span>
      <svg
        width="59"
        height="28"
        viewBox="0 0 59 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M47.0819 14.0086C47.0822 14.1641 47.0268 14.3148 46.9254 14.4345L43.522 18.4276C43.4065 18.5635 43.2405 18.6489 43.0605 18.6652C42.8805 18.6814 42.7013 18.627 42.5623 18.5141C42.4233 18.4011 42.3359 18.2388 42.3193 18.0628C42.3027 17.8868 42.3583 17.7116 42.4738 17.5757L45.5232 14.0086L42.5827 10.4415C42.5262 10.3735 42.484 10.2951 42.4585 10.2111C42.433 10.127 42.4248 10.0388 42.4343 9.9516C42.4437 9.8644 42.4708 9.77989 42.5138 9.70294C42.5568 9.62598 42.6149 9.55809 42.6848 9.50317C42.7548 9.44223 42.8369 9.39607 42.926 9.36759C43.0151 9.33911 43.1092 9.32893 43.2025 9.33767C43.2958 9.34642 43.3862 9.37391 43.4682 9.41842C43.5501 9.46293 43.6217 9.52351 43.6786 9.59634L46.9662 13.5894C47.0516 13.7125 47.0924 13.8601 47.0819 14.0086Z"
          fill="#394C62"
        />
        <path
          d="M58.0011 14C58.0011 21.1597 52.0661 27 44.6998 27C37.3335 27 31.3984 21.1597 31.3984 14C31.3984 6.84027 37.3335 1 44.6998 1C52.0661 1 58.0011 6.84027 58.0011 14Z"
          stroke="#394C62"
          strokeWidth="2"
        />
        <line
          x1="-8.88523e-08"
          y1="13.7588"
          x2="32"
          y2="13.7588"
          stroke="#394C62"
          strokeWidth="2"
        />
      </svg>
    </ArrowLink>
  );
};

const ArrowLink = styled(Link)`
  ${flex("row", "center")};
  & span {
    display: inline-block;
    ${font(18, 30)};
    color: var(--gray-menu);
    margin-right: 24px;
  }
  &:hover {
    & span {
      color: var(--blue-600);
    }
    & svg path:last-of-type,
    & svg line {
      stroke: var(--blue-600);
    }
    & svg path:first-of-type {
      fill: var(--blue-600);
    }
  }
  &:active {
    & span {
      color: var(--gray-menu);
    }
    & svg path:last-of-type,
    & svg line {
      stroke: var(--gray-menu);
    }
    & svg path:first-of-type {
      fill: var(--gray-menu);
    }
  }
  ${({ disabled }) =>
    disabled &&
    `
		& {
			opacity: .5;
			pointer-events: none;
			& span {
      	color: var(--gray-menu);
    	}
    	& svg path:last-of-type,
    	& svg line {
      	stroke: var(--gray-menu);
    	}
   	 	& svg path:first-of-type {
      	fill: var(--gray-menu);
    	}
		}
	`}
`;

export default Arrow;
