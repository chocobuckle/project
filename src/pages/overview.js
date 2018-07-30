import React from 'react';
import styled from 'styled-components';
import { ContentWrapper } from 'helpers/sharedStyles';
import DownloadInstructionsForUse from 'components/DownloadInstructionsForUse';
import OverviewAndInstructionsSharedSection from 'components/OverviewAndInstructionsSharedSection';
import IndicationsForUse from 'components/IndicationsForUse';
import InhalerAnimation from 'components/InhalerAnimation';

const OverviewWrapper = styled.div`
  line-height: 4.5vw;

  p,
  span,
  ul,
  li,
  b,
  sup,
  h1,
  h2 {
    font-family: Myriad Pro, sans-serif;
  }

  h1,
  h2 {
    color: #004899;
  }

  p,
  span {
    font-size: 3.9vw;
    margin-bottom: 2.25vw;
  }
`;

const H2 = styled.h2`
  font-size: 5.3vw;
  margin-bottom: 2vw;
`;

const AdditionalFeatures = styled.section`
  background: #f5f5f5;
`;

function Overview({ data, location }) {
  return (
    <OverviewWrapper>
      <OverviewAndInstructionsSharedSection
        headerFirstLine="AeroChamber Plus® Flow-Vu®:"
        headerSecondLine="Seeing Is The Difference"
        subHeaderText="<p style='margin-bottom: 0;'>
          <span style='color: #007fc8; font-weight: 600;'>AeroChamber Plus® Flow-Vu®</span> is an anti-static valved holding
          chamber designed with patients in mind. Patients can use an{' '}
          <span style='color: #007fc8; font-weight: 600;'>AeroChamber Plus® Flow-Vu®</span> to help improve medication
          delivery from a metered dose inhaler (MDI).
        </p>
        <p>
          Watch <span style='font-weight: 600;'>Seeing Is the Difference</span> for a behind-the-scenes look at
          how
          <span> AeroChamber Plus®</span> is designed, manufactured, and tested:
        </p>"
        macbook={data.macbook}
        bpaAndDishwasherSafe={data.bpaAndDishwasherSafe}
        pathname={location.pathname}
      />
      <InhalerAnimation animationClickyThing={data.animationClickyThing} inhalerAnimationImg={data.inhalerAnimationImg} />
      <AdditionalFeatures>
        <ContentWrapper>
          <H2>
            Additional features of <b>AeroChamber Plus® Flow-Vu®</b> VHC
          </H2>
          <p>
            <span>"EZ Flow" Exhalation Valve</span> - Directs exhaled medication
            away from the patient's face and eyes.<sup>5</sup>
          </p>
          <p>
            <span>Inhalation Valve</span> - Built-in, low-resistance, 1-way
            valve opens easily and prevents exhalation back into the chamber.
            <sup>5</sup>
          </p>
          <p>
            <span>Anti-static Chamber</span> - Improves the delivery of MDIs
            used with AeroChamber® due to medication not adhering to chamber
            walls.<sup>6</sup>
          </p>
          <span>
            Not made (or manufactured) with BPA (bisphenol A), phthalates,
            latex, lead, or PVC<sup>1,7</sup>
          </span>
        </ContentWrapper>
      </AdditionalFeatures>
      <DownloadInstructionsForUse
        style={{ borderBottom: '1px solid #000' }}
        download={data.download}
        bear={data.bear}
        smallMask={data.smallMask}
        largeMask={data.largeMask}
      />
      <IndicationsForUse />
    </OverviewWrapper>
  );
}

export const query = graphql`
  query OverviewQuery {
    bpaAndDishwasherSafe: imageSharp(
      id: { regex: "/shared/bpa_and_dishwasher_safe.png/" }
    ) {
      sizes(maxWidth: 749) {
        src
        srcSet
        srcWebp
        srcSetWebp
        sizes
        aspectRatio
      }
    }
    macbook: imageSharp(id: { regex: "/misc/macbook_small.png/" }) {
      sizes(maxWidth: 886) {
        src
        srcSet
        srcWebp
        srcSetWebp
        sizes
        aspectRatio
      }
    }
    inhalerAnimationImg: imageSharp(id: { regex: "/overview/inhaler_animation_img.png/" }) {
      sizes(maxWidth: 933) {
        src
        srcSet
        srcWebp
        srcSetWebp
        sizes
        aspectRatio
      }
    }
    animationClickyThing: imageSharp(id: { regex: "/overview/clicky_thing.png/" }) {
      sizes(maxWidth: 99) {
        src
        srcSet
        srcWebp
        srcSetWebp
        sizes
        aspectRatio
      }
    }
    bear: imageSharp(id: { regex: "/shared/bear.png/" }) {
      sizes(maxWidth: 1636) {
        src
        srcSet
        srcWebp
        srcSetWebp
        sizes
        aspectRatio
      }
    }
    smallMask: imageSharp(
      id: { regex: "/shared/small_mask_medium_mask.png/" }
    ) {
      sizes(maxWidth: 851) {
        src
        srcSet
        srcWebp
        srcSetWebp
        sizes
        aspectRatio
      }
    }
    largeMask: imageSharp(
      id: { regex: "/shared/large_mask_mouthpiece.png/" }
    ) {
      sizes(maxWidth: 851) {
        src
        srcSet
        srcWebp
        srcSetWebp
        sizes
        aspectRatio
      }
    }
    download: imageSharp(id: { regex: "/shared/download.png/" }) {
      sizes(maxWidth: 238) {
        src
        srcSet
        srcWebp
        srcSetWebp
        sizes
        aspectRatio
      }
    }
  }
`;

export default Overview;
