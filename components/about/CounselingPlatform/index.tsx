import SectionTitle from "components/common/SectionTitle";
import styled from "styled-components";
import CounselingCard from "./CounselingCard";
import { device } from "styled/Breakpoint";

function CounselingPlatform() {
  // cardsData
  const cardsData = [
    {
      icon: "/about/location.svg",
      text: "지역적 한계 없는\n온라인 서비스",
    },
    {
      icon: "/about/clock.svg",
      text: "오전시간대\n프로그램개설",
    },
    {
      icon: "/about/pc.svg",
      text: "진단 및 상담기록을\n편리하게 보관 및 관리",
    },
    {
      icon: "/about/money.svg",
      text: "광고 및 홍보를 통한\n매출 증진",
    },
  ];

  return (
    <CounselingPlatformWrapper>
      <SectionTitle
        title="국내 유일 1:1"
        orangeTitle="아동, 가족 전문 심리상담"
        additional="플랫폼"
      />
      <CounselingPlatformCards>
        {cardsData.map((data, index) => (
          <CounselingCard
            key={index + "##" + data.icon + "##" + index}
            text={data.text}
            icon={data.icon}
          />
        ))}
      </CounselingPlatformCards>
    </CounselingPlatformWrapper>
  );
}

export default CounselingPlatform;

const CounselingPlatformWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 80px;

  @media ${device.md} {
    h2 {
      font-size: 32px;
      font-weight: 800;
      line-height: 44px;
    }
  }
`;

const CounselingPlatformCards = styled.div`
  max-width: 840px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  width: 100%;
  margin: auto;
  padding: 0px 16px;

  @media ${device.md} {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
`;
