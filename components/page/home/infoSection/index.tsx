import styled from "styled-components";
import TopCard from "./TopCard";
import BottomCard from "./BottomCard";
import { device } from "styled/Breakpoint";
import { useRef } from "react";
import { useInView } from "framer-motion";
import ShowupComp from "components/common/ShowupComp";

function InfoSection() {
  const topCardsData = [
    {
      icon: "/info/clock.svg",
      text: "시간이 부족한가요?\n빠르고 즉각적인 코칭과 효과!",
    },
    {
      icon: "/info/sad.svg",
      text: "비밀보장이 걱정되나요?\n익명성과 안정성을 보장합니다!",
    },
    {
      icon: "/info/money.svg",
      text: "비용이 부담되나요?\n더 합리적인 가격으로 제공합니다!",
    },
  ];

  const bottomCardsData = [
    {
      img: "/info/card_img_1_1.png",
      head: "심바가 인증한 국내 최고의",
      title: "아동 · 가족 전문가",
      foot: "언제 어디서나 만나요",
    },
    {
      img: "/info/card_img_1.png",
      head: "우리가족 성장을 위한",
      title: "다양한 콘텐츠",
      foot: "작은 고민도, 깊은 고민도 함께해요",
    },
    {
      img: "/info/card_img_3.png",
      head: "떠도는 육아정보는 이제 그만",
      title: "1:1 맞춤 코칭",
      foot: "오직 우리 가족만을 위한 프로그램",
    },
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <InfoSectionWrapper>
      <PreCardTopInfo>
        <InfoText>
          {
            "언제 어디서나\n맞춤 양육 코칭"
            // "언제 어디서나\n국내 최고의\n아동가족 전문가와 함께"
            // \n우리 아이와\n가족을 위한 멘탈 코칭을\n받아보세요!"
          }
        </InfoText>
        <InfoTopCards ref={ref}>
          {topCardsData.map((data, index) => (
            <ShowupComp
              customStyle={{ width: "100%" }}
              isInView={isInView}
              delay={0.3 * (index + 1)}
              key={index + "##" + data.icon + "##" + index}
            >
              <TopCard
                tremor={index === 0}
                floating={index === 2}
                icon={data.icon}
                text={data.text}
                key={index + "##" + data.icon + "##" + index}
              />
            </ShowupComp>
          ))}
        </InfoTopCards>
      </PreCardTopInfo>
      <InfoCards>
        {bottomCardsData.map((data, index) => (
          <BottomCard
            key={index + "##" + data.img + "##" + index}
            img={data.img}
            head={data.head}
            title={data.title}
            foot={data.foot}
            reverse={index % 2 !== 0}
          />
        ))}
      </InfoCards>
    </InfoSectionWrapper>
  );
}

export default InfoSection;

const InfoText = styled.div`
  color: var(--black);
  display: flex;
  align-items: start;
  font-size: 62px;
  line-height: 100px;
  font-weight: 800;

  white-space: break-spaces;
  @media ${device.xl} {
  }
  @media ${device.lg} {
    padding-left: 12px;
    font-size: 48px;
    line-height: 98px;
  }
  @media ${device.md} {
    padding-left: 0px;
    font-size: 36px;
    line-height: 107.5%;
    justify-content: center;
    text-align: center;
  }
`;

const InfoCards = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 0 60px;
  align-items: center;
  @media ${device.md} {
    padding: 0 16px;
  }
`;

const InfoTopCards = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
  @media ${device.lg} {
    width: 50%;
  }
  @media ${device.md} {
    width: 100%;
  }
`;

const PreCardTopInfo = styled.div`
  display: flex;
  /* gap: 116px; */
  justify-content: space-between;
  padding: 200px 60px;
  max-width: 1296px;
  width: 100%;
  margin: 0 auto;
  @media ${device.xl} {
    padding: 120px 60px;
  }

  @media ${device.lg} {
    gap: 16px;
  }
  @media ${device.md} {
    gap: 40px;
    flex-direction: column;
    padding: 80px 16px;
  }
`;

const InfoSectionWrapper = styled.section``;
