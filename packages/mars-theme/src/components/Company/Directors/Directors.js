import React from "react";
import DirectorsMain from "./DirectorsMain/DirectorsMain";
import DirectorsSliders from "./DirectorsSliders/DirectorsSliders";
import { connect, styled } from "frontity";

const Directors = ({post}) => {
  return (
    <DirectorsElement id="directors">
      <DirectorsMain post={post} />
      <DirectorsSliders post={post} />
    </DirectorsElement>
  );
};

const DirectorsElement = styled.div`
  & .section {
    padding-top: 192px;
    @media screen and (max-width: 991px) {
      padding-top: 128px;
    }
  }
`;

export default connect(Directors);
