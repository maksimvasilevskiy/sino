import React, { useEffect, useRef } from "react";
import Container from "../../constant/Container";
import Title from "../../constant/Title";
import { styled, connect } from "frontity";
import { font } from "../../base/functions";
import parse from "html-react-parser";
import { Panzoom as NativePanzoom } from "@fancyapps/ui/dist/panzoom.esm";

// import buisness from "../../../assets/images/buisness-scheme.svg";
// import organization from "../../../assets/images/organization-scheme.svg";

const Organization = ({ state, post }) => {
  const { isMobile } = state.theme;

  const organizationPanzoom = useRef(null);
  const businessPanzoom = useRef(null);

  useEffect(() => {
    const organizationInstance = new NativePanzoom(
      organizationPanzoom.current,
      {
        panOnlyZoomed: true,
      }
    );

    const businessInstance = new NativePanzoom(businessPanzoom.current, {
      panOnlyZoomed: true,
    });

    return () => {
      organizationInstance.destroy();
      businessInstance.destroy();
    };
  }, []);

  return (
    <Section id="business">
      <Container>
        <Title size="m" color="blue" marginBottom={isMobile ? 24 : 64}>
          {parse(post.acf.company_organization_and_business_structure_title)}
        </Title>
        <Block>
          <Title size="xs" color="blue" marginBottom={32}>
            {parse(post.acf.company_organization_title)}
          </Title>
          <Scheme
            ref={organizationPanzoom}
            className="panzoom organization-panzoom"
          >
            <img
              className="panzoom__content"
              src={post.acf.company_organization_image.url}
              alt="organization structure"
            />
          </Scheme>
        </Block>
        <Block>
          <Title size="xs" color="blue" marginBottom={32}>
            {parse(post.acf.company_business_title)}
          </Title>
          <Scheme ref={businessPanzoom} className="panzoom business-panzoom">
            <img
              className="panzoom__content"
              src={post.acf.company_business_image.url}
              alt="buisness structure"
            />
          </Scheme>
        </Block>
      </Container>
    </Section>
  );
};

const Scheme = styled.div`
  &.business-panzoom {
    & .panzoom__viewport {
      margin-left: 0;
    }
  }
  & img {
    max-width: 100%;
  }
`;

const Block = styled.div`
  margin-bottom: 64px;
  &:last-child {
    margin-bottom: 0;
  }
  @media screen and (max-width: 991px) {
    margin-bottom: 48px;
    &:last-child {
      margin-bottom: 0;
    }
    & h4 {
      ${font(24, 32)};
      letter-spacing: 0.04em;
      font-weight: 400;
      margin-bottom: 24px;
    }
  }
`;

const Section = styled.div`
  position: relative;
  padding-top: 336px;
  @media screen and (max-width: 991px) {
    padding-top: 128px;
  }
`;

export default connect(Organization);
