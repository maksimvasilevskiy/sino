export function setSwiperCssBundle() {
  if (document) {
    const link = document.createElement("link");

    link.rel = "stylesheet";
    link.href = "https://unpkg.com/swiper@8/swiper-bundle.min.css";
    link.async = true;

    const head = document.querySelector("head");

    head.append(link);
  }
}

export function setFancyAppCssBundle() {
  if (document) {
    const link = document.createElement("link");

    link.rel = "stylesheet";
    link.href =
      "https://cdn.jsdelivr.net/npm/@fancyapps/ui@4.0/dist/panzoom.css";
    link.async = true;

    const head = document.querySelector("head");

    head.append(link);
  }
}

export function setSimplebarBundle() {
  if (document) {
    const link = document.createElement("link");

    link.rel = "stylesheet";
    link.href = "https://unpkg.com/simplebar@latest/dist/simplebar.css";
    link.async = true;

    const head = document.querySelector("head");

    head.append(link);
  }
}

export function setDatepickerBundle() {
  if (document) {
    const link = document.createElement("link");

    link.rel = "stylesheet";
    link.href =
      "https://cdn.jsdelivr.net/npm/air-datepicker@3.2.0/air-datepicker.css";
    link.async = true;

    const head = document.querySelector("head");

    head.append(link);
  }
}

export function validateEmail(values) {
  const errors = {};

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  return errors;
}

// For converting date to correct string
export function processDate(date) {
  const year = `${date.getFullYear()}`;
  const month =
    `${date.getMonth()}`.length === 1
      ? `0${date.getMonth()}`
      : `${date.getMonth()}`;
  const day =
    `${date.getDate()}`.length === 1
      ? `0${date.getDate()}`
      : `${date.getDate()}`;

  return `${year}-${month}-${day}`;
}
