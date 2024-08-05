import ShowupComp from "components/common/ShowupComp";
import { useInView } from "framer-motion";
import { useRouter } from "next/router";
import { useRef } from "react";
import styled from "styled-components";
import { device } from "styled/Breakpoint";

function Solutions() {
  const router = useRouter();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  return (
    <SolutionWrapper>
      <TitleMob>
        <ShowupComp isInView={isInView} delay={0.3}>
          <Para>육아는 더 이상</Para>
        </ShowupComp>
        <ShowupComp isInView={isInView} delay={0.5}>
          <Para>고립된 도전이 아닙니다.</Para>
        </ShowupComp>
        <ShowupComp isInView={isInView} delay={0.9}>
          <Para>아이들이 더 잘 자라도록,</Para>
        </ShowupComp>
        <ShowupComp isInView={isInView} delay={1.0}>
          <Para>부모님들이 그 역할을</Para>
        </ShowupComp>
        <ShowupComp isInView={isInView} delay={1.2}>
          <Para>더 잘 할 수 있도록</Para>
        </ShowupComp>
        <ShowupComp isInView={isInView} delay={1.5}>
          <Para>심바가 함께합니다.</Para>
        </ShowupComp>
      </TitleMob>
      <Title>
        <ShowupComp isInView={isInView} delay={0.3}>
          <Para>육아는 더 이상 고립된 도전이 아닙니다.</Para>
        </ShowupComp>
        <ShowupComp isInView={isInView} delay={0.6}>
          <Para>아이들이 더 잘 자라도록,</Para>
        </ShowupComp>
        <ShowupComp isInView={isInView} delay={0.9}>
          <Para>부모님들이 그 역할을 더 잘 할 수 있도록</Para>
        </ShowupComp>
        <ShowupComp isInView={isInView} delay={1.2}>
          <Para>심바가 함께합니다.</Para>
        </ShowupComp>
      </Title>
      {/* <ShowupComp isInView={isInView} delay={1.2}>
        <Points>
          <Point />
          <Point />
          <Point />
        </Points>
      </ShowupComp> */}

      <LogoWrapper ref={ref}>
        {/* <Img src="/logo-white.svg" alt="Simba" /> */}
      </LogoWrapper>

      <ShowupComp
        isInView={isInView}
        delay={1.5}
        customStyle={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Button onClick={() => router.push("/partner")}>
          전문가 모집 안내
        </Button>
      </ShowupComp>
    </SolutionWrapper>
  );
}

export default Solutions;

const SolutionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 120px 24px;
  align-items: center;
  background-color: var(--Primary);

  @media ${device.md} {
    gap: 32px;
    padding: 80px 24px;
  }
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  @media ${device.md} {
    display: none;
  }
`;

const TitleMob = styled.div`
  display: none;
  flex-direction: column;
  gap: 10px;
  @media ${device.md} {
    display: flex;
  }
`;

const Para = styled.p`
  text-align: center;
  font-size: 40px;
  font-weight: 700;
  color: #fff;

  @media ${device.md} {
    font-size: 20px;
    line-height: 34px;
  }
`;

const Points = styled(Title)`
  display: flex;
  gap: 40px;

  @media ${device.md} {
    gap: 32px;
  }
`;

const Point = styled.span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: #fff;

  @media ${device.md} {
    width: 4px;
    height: 4px;
  }
`;

const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 370px;
  height: 10px;
  object-fit: contain;

  @media ${device.md} {
    width: 113px;
    height: 58px;
  }
`;

const Img = styled.img`
  @media ${device.md} {
    width: 76px;
    height: fit-content;
  }
`;

const Button = styled.div`
  padding: 24px 0;
  background-color: #fff;
  color: var(--Primary);
  text-align: center;
  font-size: 24px;
  border-radius: 8px;
  font-weight: 600;
  line-height: 32px;
  max-width: 320px;
  width: 100%;
  cursor: pointer;
  @media ${device.md} {
    padding: 14px 0px;
    max-width: 312px;

    font-size: 20px;
    font-weight: 700;
    line-height: 32px;
  }
`;
