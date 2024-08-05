import styled from "styled-components";
import { device } from "styled/Breakpoint";

const History = () => {
  const data = [
    {
      date: "2021년 10월",
      text: "K-ICT Startup mentoring center",
    },
    {
      date: "2022년 06월",
      text: "경기과학진흥원 창업지원 사업 선정",
    },
    {
      date: "2022년 6월",
      text: "창업진흥원 예비창업지원 사업 선정",
    },
    {
      date: "2022년 12월",
      text: "베타 서비스",
    },
    {
      date: "2023년 03월",
      text: "중소벤처기업진흥공단 청년창업지원 사업 선정",
    },
    {
      date: "2023년 8월",
      text: "정식 버전 오픈 예정",
    },
  ];
  return (
    <HistoryWrapper>
      <ContentsWrapper>
        <HistoryTextWrapper>
          <HistoryTitle>
            <Highlight>바라스페이스</Highlight> 소개
          </HistoryTitle>
          <HistoryDesc>
            바라스페이스는 패밀리 멘탈헬스 케어 플랫폼 [심바]를 운영하고
            있습니다. 우리는 언제 어디서나 편안하게 자녀와 가족을 위한 심리 상담
            및 코칭을 받을 수 있는 서비스를 제공합니다. 국내 최고의 검증된 전문
            코치들과 함께 하며, 육아와 가정의 현실에 맞는 다양한 문제들을
            해결하기 위해 노력하고 있습니다.
          </HistoryDesc>
        </HistoryTextWrapper>
        <HistoryWrapperChild>
          {data.map((data, index) => (
            <HistoryMileStone key={data.date + "##" + index}>
              <BallWrapper>
                <OuterBall $active={index === 0}>
                  <InnerBall />
                </OuterBall>
                <Line />
              </BallWrapper>
              <TextWrapper>
                <Date>{data.date}</Date>
                <Text>{data.text}</Text>
              </TextWrapper>
            </HistoryMileStone>
          ))}
        </HistoryWrapperChild>
      </ContentsWrapper>
    </HistoryWrapper>
  );
};
export default History;

const HistoryWrapperChild = styled.div`
  display: flex;
  flex-direction: column;
`;

const HistoryMileStone = styled.div`
  display: flex;
  gap: 34px;
`;

const BallWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const OuterBall = styled.div<{ $active: boolean }>`
  position: relative;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ $active }) =>
    $active ? "rgba(249, 155, 32, 0.4)" : "none"};
`;

const InnerBall = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: var(--Primary);
`;

const Line = styled.div`
  width: 2px;
  height: 80px;
  background: #d7d8de;
  margin: -18px 0;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Date = styled.div`
  color: var(--gray-2);
  font-size: 16px;
  font-weight: 700;
  @media ${device.md} {
    font-size: 14px;
  }
`;

const Text = styled.div`
  color: #212228;
  font-size: 20px;
  font-weight: 700;
  @media ${device.md} {
    font-size: 16px;
  }
`;

const HistoryWrapper = styled.div`
  background: linear-gradient(0deg, #f6f3f0 0%, rgba(255, 255, 255, 0) 100%);
  overflow: hidden;
`;
const ContentsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 210px;
  padding: 250px 16px 17px 16px;
  margin: 0 auto;

  @media ${device.xl} {
    gap: 80px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 80px 16px 0px 16px;
  }
`;

const HistoryTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const HistoryTitle = styled.div`
  font-size: 48px;
  line-height: 57px;
  font-weight: 700;
  white-space: break-spaces;
  @media ${device.md} {
    font-size: 32px;
    line-height: 44px;
  }
`;

const Highlight = styled.span`
  color: var(--Primary);
`;

const HistoryDesc = styled.p`
  font-size: 20px;
  line-height: 40px;
  font-weight: 500;
  max-width: 506px;
  height: 320px;
  width: 100%;
  white-space: break-spaces;
  word-break: keep-all;
  @media ${device.md} {
    height: fit-content;
    font-size: 16px;
    line-height: 32px;
  }
`;
