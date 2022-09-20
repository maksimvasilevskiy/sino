import React from "react";
import { styled } from "frontity";

const SwiperButtons = ({
  prevClassName,
  nextClassName,
  spaceBetween,
  color,
}) => {
  return (
    <Wrapper>
      <SwiperButton
        margin={spaceBetween}
        className={prevClassName}
        type="left"
        color={color}
      />
      <SwiperButton
        margin={spaceBetween}
        className={nextClassName}
        type="right"
        color={color}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
`;

const SwiperButton = ({ type, margin, className, color }) => {
  return (
    <ArrowButton
      className={className}
      margin={margin}
      type={type}
      aria-label={type === "left" ? "previous slide" : "next slide"}
      color={color}
    >
      <svg
        width="8"
        height="16"
        viewBox="0 0 8 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.49848 7.97814L7.49726 7.99581L7.4973 8.01353C7.49759 8.16291 7.44557 8.30778 7.35012 8.42302C7.35 8.42316 7.34989 8.4233 7.34977 8.42344L1.63933 15.2675L1.63892 15.268C1.52987 15.3991 1.37304 15.4816 1.20285 15.4973C1.03266 15.513 0.863291 15.4604 0.732014 15.3515C0.600759 15.2425 0.518358 15.0861 0.502717 14.9166C0.487094 14.7474 0.539329 14.5788 0.648104 14.4478C0.648228 14.4477 0.648353 14.4475 0.648477 14.4474L5.76495 8.33344L6.02866 8.01832L5.77062 7.69855L0.836026 1.58354L0.83486 1.5821C0.781552 1.51654 0.74177 1.44114 0.71777 1.36023C0.693771 1.27933 0.68602 1.1945 0.694955 1.11061C0.703891 1.02672 0.72934 0.945399 0.769861 0.871319C0.810382 0.797237 0.865189 0.73184 0.931158 0.678911L0.941077 0.670953L0.950578 0.6625C1.0166 0.603772 1.09409 0.559261 1.1782 0.531791C1.26232 0.504321 1.35122 0.494492 1.43935 0.502932C1.52747 0.511372 1.61287 0.537893 1.69019 0.580809C1.76751 0.623725 1.83508 0.682104 1.8887 0.752255L1.88856 0.752357L1.89667 0.762412L7.39912 7.58933C7.47303 7.70488 7.50793 7.84116 7.49848 7.97814Z"
          fill={color === "white" ? "#FDFDFD" : "#4279B8"}
          stroke={color === "white" ? "#FDFDFD" : "#4279B8"}
        />
      </svg>
    </ArrowButton>
  );
};

const ArrowButton = styled.button`
  width: 44px;
  height: 44px;
  border: 2px solid
    ${({ color }) => (color === "white" ? "var(--white)" : "var(--blue-600)")};
  cursor: pointer;
  background: transparent;
  border-radius: 50%;
  display: grid;
  place-items: center;
  transform: ${({ type }) => (type === "left" ? "rotate(180deg)" : "none")};
  margin-right: ${({ type, margin }) =>
    type === "left" ? `${margin}px` : "0"};
  &:hover {
    border-color: var(--gray-menu);
    & svg path {
      fill: var(--gray-menu);
      stroke: var(--gray-menu);
    }
  }
  &:active {
    border-color: ${({ color }) =>
      color === "white" ? "var(--white)" : "var(--blue-600)"};
    & svg path {
      fill: ${({ color }) =>
        color === "white" ? "var(--white)" : "var(--blue-600)"};
      stroke: ${({ color }) =>
        color === "white" ? "var(--white)" : "var(--blue-600)"};
    }
  }
`;

export default SwiperButtons;
