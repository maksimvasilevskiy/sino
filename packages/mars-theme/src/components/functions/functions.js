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

export function validateEmail(values) {
  const errors = {};

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  return errors;
}
