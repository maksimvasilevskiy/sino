import React from "react";
import { font } from "../base/functions";
import { connect, styled, css } from "frontity";

const Paragraph = ({ color, maxWidth, marginBottom, children, key }) => {
  return (
    <Wrapper
      maxWidth={maxWidth}
      className="paragraph-wrapper"
      mb={marginBottom}
      color={color}
      key={key}
    >
      <p>{children}</p>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  ${({ maxWidth }) => (maxWidth ? `max-width: ${maxWidth}` : "")}
  ${({ mb }) => (mb ? `margin-bottom: ${mb}` : "")};
  & p {
    margin: 0;
    ${font(18, 30)};
    color: ${({ color }) =>
      color === "white" ? "var(--white)" : "var(--black)"};
    font-weight: 400;
  }
`;

export default connect(Paragraph, { injectProps: false });
