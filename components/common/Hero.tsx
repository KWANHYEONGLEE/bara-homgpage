import { useInView } from "framer-motion";
import { useRef } from "react";
import styled from "styled-components";
import { device } from "styled/Breakpoint";
import ShowupComp from "./ShowupComp";

function Hero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <HeroWrapper ref={ref}>
      <HeroContentWrapper>
        <InfoWrapper>
          {/* <ShowupComp isInView={isInView} delay={0.3}>
            <Headline>{"우리 아이와 \n가족 모두가 함께 성장하는"}</Headline>
            <HeadlineMob>
              {"우리 아이와 가족 모두가\n 함께 성장하는"}
            </HeadlineMob>
          </ShowupComp> */}
          <ShowupComp isInView={isInView} delay={0.3}>
            <Title>{"심바를 만나면"}</Title>
          </ShowupComp>
          <ShowupComp isInView={isInView} delay={0.6}>
            <Title>{"육아에도"}</Title>
          </ShowupComp>
          <ShowupComp isInView={isInView} delay={1}>
            <Title>{"정답이 있다!"}</Title>
          </ShowupComp>
          {/* <ShowupComp isInView={isInView} delay={1.2}>
            <Subtitle>심바</Subtitle>
          </ShowupComp> */}
        </InfoWrapper>

        <ImgWrapper>
          <HeroImg src="/hero/banner-phone.svg" alt="" />
        </ImgWrapper>
      </HeroContentWrapper>
    </HeroWrapper>
  );
}

export default Hero;

const Headline = styled.h4`
  font-size: 40px;
  font-weight: 700;
  line-height: 54px;
  white-space: break-spaces;
  color: white;
  margin-bottom: 8px;
  @media ${device.lg} {
    font-size: 24px;
  }
  @media ${device.md} {
    display: none;
    font-size: 20px;
    line-height: 29.421px;
    text-align: center;
  }
`;

const HeadlineMob = styled(Headline)`
  display: none;
  @media ${device.md} {
    display: block;
  }
`;

const Title = styled.h3`
  font-size: 70px;
  font-weight: 700;
  line-height: 80px;
  white-space: break-spaces;
  color: white;
  @media ${device.lg} {
    font-size: 55px;
    line-height: 60.586px;
  }
  @media ${device.md} {
    font-size: 40px;
    line-height: 107.5%;
    letter-spacing: 0.01em;
  }
`;

const Subtitle = styled.h2`
  font-size: 86px;
  font-weight: 700;
  white-space: break-spaces;
  color: white;
  @media ${device.lg} {
    font-size: 64px;
  }
  @media ${device.md} {
    font-size: 48px;
  }
`;

const InfoWrapper = styled.div``;

const HeroImg = styled.img`
  position: absolute;
  width: "fit-content";
  right: -50px;
  top: 50px;
  filter: drop-shadow(0 20px 13px rgb(0 0 0 / 0.1))
    drop-shadow(0 8px 5px rgb(0 0 0 / 0.08));
  @media ${device.lg} {
    top: -200px;
  }
  @media ${device.md} {
    min-width: 254px;
    width: 100%;
    top: -20px;
    right: 5px;
  }
`;

const ImgWrapper = styled.div`
  position: relative;
`;

const HeroWrapper = styled.section`
  /* height: 100vh; */
  height: 908px;
  background-color: var(--Primary);
  overflow: hidden;
  display: flex;
  align-items: start;
  @media ${device.lg} {
    height: 640px;
  }
`;

const HeroContentWrapper = styled.div`
  display: flex;
  padding: 120px 60px 63px;
  justify-content: space-between;

  max-width: 1261px;
  width: 100%;
  margin: 0 auto;
  @media ${device.lg} {
    flex-direction: column;
    gap: 35px;
    padding: 53px 60px;
  }

  @media ${device.md} {
    padding: 53px 24px;
  }
`;
