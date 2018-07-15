import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { ContentWrapper } from '../helpers/sharedStyles';

const IndexWrapper = styled.div`
  line-height: 4.5vw;

  p,
  span,
  ul,
  li,
  button,
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

  span {
    color: #007fc8;
  }
`;

const H2 = styled.h2`
  font-size: 5.3vw;
  margin-bottom: 2vw;
  span {
    font-size: 5.3vw;
  }
`;

const Macbook = ContentWrapper.extend`
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 2.12%,
    rgba(255, 255, 255, 0.04) 3.83%,
    rgba(255, 255, 255, 1) 49.44%
  );
`;

const VideoButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const VideoButton = styled.button`
  background: linear-gradient(
    90deg,
    rgba(0, 72, 153, 1) 15.05%,
    rgba(0, 127, 200, 1) 100%
  );
  color: #fff;
  cursor: pointer;
  font-size: 4vw;
  margin: 0 1.5vw;
  padding: 2vw 1.75vw;
`;

const TorsoImgsWrapper = styled.div``;

const BubblesAndBanner = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const WhiteBanner = styled.div`
  background: rgb(255, 255, 255, 0.5);
  left: 0;
  position: absolute;
  right: 0;
`;

const WhiteBannerChildImgFlexWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-evenly;
  margin: 0 auto;
  padding: 0.5em 0;
  width: 60vw;
`;

const InhalerTipsWrapper = ContentWrapper.extend``;

const bubblesImgStyle = {};
const macbookImgStyle = {};
const whiteBannerChildImgStyle = {
  maxWidth: '135px',
  width: '10vw'
};
const inhalingRedImgStyle = {};
const inhalingWithLogoImgStyle = {};
const homeInstructions1ImgStyle = {};
const homeInstructions2ImgStyle = {};
const homeInstructions3ImgStyle = {};

const IndexPage = ({ data }) => {
  const {
    macbook,
    inhalingRed,
    inhalingWithLogo,
    homeInstructions1,
    homeInstructions2,
    homeInstructions3,
    bubblesBG,
    dishwasherSafe,
    bpaFree,
    replace12Months
  } = data;
  return (
    <IndexWrapper>
      <Macbook>
        <Img sizes={macbook.sizes} style={{ ...macbookImgStyle }} />
        <VideoButtonWrapper>
          <VideoButton>VIDEO 1</VideoButton>
          <VideoButton>VIDEO 2</VideoButton>
          <VideoButton>VIDEO 3</VideoButton>
        </VideoButtonWrapper>
      </Macbook>
      <InhalerTipsWrapper>
        <H2>
          People who use a valved holding chamber with their inhaler have better
          control.<sup>1</sup>
        </H2>
        <TorsoImgsWrapper>
          <Img sizes={inhalingRed.sizes} style={{ ...inhalingRedImgStyle }} />
          <Img
            sizes={inhalingWithLogo.sizes}
            style={{ ...inhalingWithLogoImgStyle }}
          />
        </TorsoImgsWrapper>
        {/* <Img
          sizes={homeInstructions1.sizes}
          style={{ ...homeInstructions1ImgStyle }}
        />
        <Img
          sizes={homeInstructions2.sizes}
          style={{ ...homeInstructions2ImgStyle }}
        />
        <Img
          sizes={homeInstructions3.sizes}
          style={{ ...homeInstructions3ImgStyle }}
        /> */}
      </InhalerTipsWrapper>
      <BubblesAndBanner>
        <Img sizes={bubblesBG.sizes} style={{ ...bubblesImgStyle }} />
        <WhiteBanner>
          <WhiteBannerChildImgFlexWrapper>
            <Img
              sizes={dishwasherSafe.sizes}
              style={{ ...whiteBannerChildImgStyle }}
            />
            <Img
              sizes={replace12Months.sizes}
              style={{ ...whiteBannerChildImgStyle }}
            />
            <Img
              sizes={bpaFree.sizes}
              style={{ ...whiteBannerChildImgStyle }}
            />
          </WhiteBannerChildImgFlexWrapper>
        </WhiteBanner>
      </BubblesAndBanner>
    </IndexWrapper>
  );
};

export const query = graphql`
  query IndexQuery {
    inhalingRed: imageSharp(id: { regex: "/home/inhaling_red.png/" }) {
      sizes(maxWidth: 350) {
        src
        srcSet
        srcWebp
        srcSetWebp
        sizes
        aspectRatio
      }
    }
    inhalingWithLogo: imageSharp(
      id: { regex: "/home/inhaling_with_logo.png/" }
    ) {
      sizes(maxWidth: 350) {
        src
        srcSet
        srcWebp
        srcSetWebp
        sizes
        aspectRatio
      }
    }
    homeInstructions1: imageSharp(
      id: { regex: "/home/home_instructions_1.png/" }
    ) {
      sizes(maxWidth: 117) {
        src
        srcSet
        srcWebp
        srcSetWebp
        sizes
        aspectRatio
      }
    }
    homeInstructions2: imageSharp(
      id: { regex: "/home/home_instructions_2.png/" }
    ) {
      sizes(maxWidth: 178) {
        src
        srcSet
        srcWebp
        srcSetWebp
        sizes
        aspectRatio
      }
    }
    homeInstructions3: imageSharp(
      id: { regex: "/home/home_instructions_3.png/" }
    ) {
      sizes(maxWidth: 206) {
        src
        srcSet
        srcWebp
        srcSetWebp
        sizes
        aspectRatio
      }
    }
    macbook: imageSharp(id: { regex: "/shared/macbook_large.png/" }) {
      sizes(maxWidth: 960) {
        src
        srcSet
        srcWebp
        srcSetWebp
        sizes
        aspectRatio
      }
    }
    bubblesBG: imageSharp(id: { regex: "/home/bubbles_crop_bg.png/" }) {
      sizes(maxWidth: 960) {
        src
        srcSet
        srcWebp
        srcSetWebp
        sizes
        aspectRatio
      }
    }
    dishwasherSafe: imageSharp(id: { regex: "/home/dishwasher_safe.png/" }) {
      sizes(maxWidth: 135) {
        src
        srcSet
        srcWebp
        srcSetWebp
        sizes
        aspectRatio
      }
    }
    replace12Months: imageSharp(id: { regex: "/home/replace_12_months.png/" }) {
      sizes(maxWidth: 135) {
        src
        srcSet
        srcWebp
        srcSetWebp
        sizes
        aspectRatio
      }
    }
    bpaFree: imageSharp(id: { regex: "/home/bpa_free.png/" }) {
      sizes(maxWidth: 135) {
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

export default IndexPage;
