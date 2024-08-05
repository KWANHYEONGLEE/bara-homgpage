import styled from "styled-components";

//Style libraries
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//components
import SectionTitle from "components/common/SectionTitle";
import Slider from "react-slick";
import ProgramCard from "./ProgramCard";
import { device } from "styled/Breakpoint";
import { useRef } from "react";
import { useInView } from "framer-motion";
import ShowupComp from "components/common/ShowupComp";

function Program() {
  //Slider config
  const carouselSettings = {
    dots: false,
    infinite: true,
    centerMood: false,
    slidesToScroll: 1,
    initialSlide: 0,
    variableWidth: true,
    adaptiveHeight: true,
  };

  // data for cards
  const cardData = [
    {
      img: "/program/card_1.png",
      head: "말하기 스킬로 우리반 인싸되자",
      title: "사회성 키우는 화용언어",
      foot: "카테고리: 언어/소통-의사소통 및 화용언어",
      primaryBadgeText: "다회차(8회)",
      primaryBadgeColor: "blue",
      secondaryBadgeText: "부모와 아이",
      secondaryBadgeColor: "black",
    },
    {
      img: "/program/card_2.png",
      head: "주의력 훈련법과 학습 집중력까지 한 번에",
      title: "산만한 아이 집중력 키우기",
      foot: "카테고리: 정서/행동-주의집중력",
      primaryBadgeText: "다회차(4회)",
      primaryBadgeColor: "blue",
      secondaryBadgeText: "부모",
      secondaryBadgeColor: "black",
    },
    {
      img: "/program/card_3.png",
      head: "전문가가 진단하는 우리아이 마음상태",
      title: "우리아이 진짜 속마음",
      foot: "카테고리: 정서/행동-감정표현 \n 대상: 부모",
      primaryBadgeText: "원데이",
      primaryBadgeColor: "Primary",
      secondaryBadgeText: "부모",
      secondaryBadgeColor: "black",
    },
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <ProgramSectionWrapper>
      <SectionTitle title="프로그램" />
      <CardsWrapperMob>
        {/* <Slider className="slider-testimonial" {...carouselSettings}> */}
        {cardData.map((data, index) => (
          <ProgramCard
            key={index + "##" + data.img + "##" + data.head + "##" + index}
            img={data.img}
            head={data.head}
            title={data.title}
            foot={data.foot}
            primaryBadgeText={data.primaryBadgeText}
            primaryBadgeColor={data.primaryBadgeColor}
            secondaryBadgeText={data.secondaryBadgeText}
            secondaryBadgeColor={data.secondaryBadgeColor}
          />
        ))}
        {/* </Slider> */}
      </CardsWrapperMob>
      <CardsWrapper ref={ref}>
        {cardData.map((data, index) => (
          <ShowupComp
            isInView={isInView}
            delay={0.3 * (index + 1)}
            key={index + "##" + data.img + "##" + data.head + "##" + index}
          >
            <ProgramCard
              key={index + "##" + data.img + "##" + data.head + "##" + index}
              img={data.img}
              head={data.head}
              title={data.title}
              foot={data.foot}
              primaryBadgeText={data.primaryBadgeText}
              primaryBadgeColor={data.primaryBadgeColor}
              secondaryBadgeText={data.secondaryBadgeText}
              secondaryBadgeColor={data.secondaryBadgeColor}
            />
          </ShowupComp>
        ))}
      </CardsWrapper>
    </ProgramSectionWrapper>
  );
}

export default Program;

const ProgramSectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 64px;

  @media ${device.md} {
    gap: 40px;
  }
`;

const CardsWrapperMob = styled.div`
  display: none;

  @media ${device.lg} {
    /* overflow: hidden;
    display: initial; */
    display: flex;
    flex-direction: column;
  }
`;

const CardsWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 24px;
  padding: 0 60px;
  @media ${device.xl} {
    gap: 12px;
  }
  @media ${device.lg} {
    display: none;
  }
`;
