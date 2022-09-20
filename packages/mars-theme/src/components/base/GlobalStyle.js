import { css } from "frontity";
import { font } from "./functions";

import Ubuntu_Light_woff2 from "../../assets/fonts/Ubuntu-Light.woff2";
import Ubuntu_Light_woff from "../../assets/fonts/Ubuntu-Light.woff";
import Ubuntu_Regular_woff2 from "../../assets/fonts/Ubuntu-Regular.woff2";
import Ubuntu_Regular_woff from "../../assets/fonts/Ubuntu-Regular.woff";
import Ubuntu_Medium_woff2 from "../../assets/fonts/Ubuntu-Medium.woff2";
import Ubuntu_Medium_woff from "../../assets/fonts/Ubuntu-Medium.woff";
import Ubuntu_Bold_woff2 from "../../assets/fonts/Ubuntu-Bold.woff2";
import Ubuntu_Bold_woff from "../../assets/fonts/Ubuntu-Bold.woff";
import Barlow_woff2 from "../../assets/fonts/Barlow-Medium.woff2";
import Barlow_woff from "../../assets/fonts/Barlow-Medium.woff";

export const globalstyles = css`
  :root {
    /* Vars */
    --font: "Ubuntu", Arial, sans-serif;
    --logo-font: "Barlow", Arial, sans-serif;

    /* Colors */
    --white: #fdfdfd;
    --black: #1e1e1e;

    --gray-menu: #394c62;
    --gray-900: #9f9f9f;

    --error: #eb5757;
    --success: #6fcf97;
    --lightblue-250: #4fd1f9;
    --lightblue-300: #2db9e4;
    --blue-600: #4279b8;

    --container-padding-xl: calc((100vw - 1372px) / 2);
    --container-padding-lg: calc((100vw - 950px) / 2);
    --container-padding-md: calc((100vw - 730px) / 2);
    --container-padding-xs: calc((100vw - 528px) / 2);
  }

  @font-face {
    font-family: "Ubuntu";
    src: url("${Ubuntu_Light_woff2}") format("woff2"),
      url("${Ubuntu_Light_woff}") format("woff");
    font-weight: 300;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "Ubuntu";
    src: url("${Ubuntu_Regular_woff2}") format("woff2"),
      url("${Ubuntu_Regular_woff}") format("woff");
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "Ubuntu";
    src: url("${Ubuntu_Medium_woff2}") format("woff2"),
      url("${Ubuntu_Medium_woff}") format("woff");
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "Ubuntu";
    src: url("${Ubuntu_Bold_woff2}") format("woff2"),
      url("${Ubuntu_Bold_woff}") format("woff");
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "Barlow";
    src: url("${Barlow_woff2}") format("woff2"),
      url("${Barlow_woff}") format("woff");
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }

  * {
    box-sizing: border-box;
  }
  html {
    font-size: 10px;
    &.scroll-hidden body {
      overflow: hidden;
    }
  }
  body {
    overflow: overlay;
    margin: 0;
    font-family: var(--font);
    background: var(--white);
  }
  a {
    text-decoration: none;
    color: var(--black);
  }

  /* Datepicker styles */
  div.air-datepicker {
    background: var(--white);
    z-index: 2;
    width: 100vw;
    height: 100vh;
    max-width: 325px;
    max-height: 320px;
    box-sizing: border-box;
    padding: 12px 28px;
    box-shadow: 0px 0px 8px rgba(49, 49, 49, 0.05);
    border-radius: 8px;
    border: none;
    .air-datepicker-nav {
      padding: 4px 0 10px;
    }
    & .air-datepicker--pointer {
      display: none;
    }
    &-nav--title,
    &-nav--title i {
      ${font(14, 16)};
      font-weight: 500;
      letter-spacing: 0.01em;
      color: var(--black);
    }
    &-nav--action[data-action="prev"] {
      transform: translateX(-6px);
    }
    &-nav--action[data-action="next"] {
      transform: translateX(6px);
    }
    &--content {
      padding: 0;
      padding-top: 20px;
    }
    &-body--day-names {
      margin: 0;
      margin-bottom: 20px;
      grid-template-columns: repeat(7, 32px);
      grid-column-gap: 8px;
    }
    &-body--day-name {
      color: var(--gray-900);
      ${font(10, 11)};
      font-weight: 500;
      letter-spacing: -0.01em;
    }
    &-body--cells {
      grid-row-gap: 16px;
      grid-column-gap: 18px;
      grid-template-rows: repeat(5, 24px);
      grid-template-columns: repeat(7, 24px);
    }
    &-cell,
    &-cell.-current- {
      color: var(--black);
      font-weight: 500;
      ${font(14, 16)};
    }
    &-cell.-selected-,
    &-cell.-selected-.-focus- {
      border-radius: 50%;
      background: var(--blue-600);
    }
    @media screen and (max-width: 373px) {
      div.air-datepicker {
        max-width: calc(100vw - 48px);
      }
    }
  }
`;
