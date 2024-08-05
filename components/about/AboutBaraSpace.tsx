import styled from "styled-components";
import { device } from "styled/Breakpoint";

function AboutBaraSpace() {
  const steps = [
    {
      head: "2022년 10월",
      mainText: "K-ICT Startup mentoring center",
    },
    {
      head: "2023년 06월",
      mainText: "경기과학진흥원 창업지원 사업 선정",
    },
    {
      head: "2022년 6월",
      mainText: "창업진흥원 예비창업지원 사업 선정",
    },
    {
      head: "2022년 12월",
      mainText: "베타 서비스",
    },
    {
      head: "2023년 03월",
      mainText: "중소벤처기업진흥공단 청년창업지원 사업 선정",
    },
    {
      head: "2023년 7월",
      mainText: "정식 버전 오픈 예정",
    },
  ];
  return (
    <AboutBaraSpaceWrapper>
      <Info>
        <Title>
          바라스페이스 <span>소개</span>
        </Title>
        <Para>
          {
            "바라스페이스는 패밀리 멘탈헬스 케어 플랫폼 [심바]를 \n운영하고 있습니다. \n우리는 언제 어 디서나 편안하게 자녀와 가족을 위한 \n심리 상담 및 코칭을 받을 수 있는 서비스를 제공합니다.\n국내 최고의 검증된 전문 코치들과 함께 하며,\n육아와 가정의 현실에 맞는 다양한 문제들을\n해결하기 위해 노력하고 있습니다."
          }
        </Para>
      </Info>
      <Steps>
        {steps.map((step, index) => (
          <Step key={index + "##" + step.head + "##" + index}>
            <BallLine>
              <BgBall start={index === 0 ? true : false}>
                <Ball />
              </BgBall>
              <Line done={index === steps.length - 1 ? true : false} />
            </BallLine>
            <Text>
              <Head>{step.head}</Head>
              <MainText>{step.mainText}</MainText>
            </Text>
          </Step>
        ))}
      </Steps>
    </AboutBaraSpaceWrapper>
  );
}

export default AboutBaraSpace;

const AboutBaraSpaceWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 180px;
  padding-top: 157px;
  background: linear-gradient(0deg, #f6f3f0 0%, rgba(255, 255, 255, 0) 100%);
  margin-top: 200px;
  padding: 0px 16px;

  @media ${device.md} {
    flex-direction: column;
    padding-top: 80px;
    margin-top: 0px;
    gap: 80px;
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 0px 24px;
`;

const Title = styled.div`
  color: var(--Primary);
  font-size: 48px;
  font-weight: 700;

  span {
    color: var(--black);
  }

  @media ${device.md} {
    font-size: 32px;
    line-height: 44px;
  }
`;

const Para = styled.div`
  color: var(--black);
  font-size: 20px;
  font-weight: 500;
  line-height: 40px;
  white-space: break-spaces;

  @media ${device.md} {
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 32px;
  }
`;

const Steps = styled.div``;

const Step = styled.div`
  display: flex;
  gap: 16px;
`;

const BallLine = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BgBall = styled.div<{ start: boolean }>`
  position: relative;
  z-index: 1;
  background-color: ${({ start }) =>
    start ? "rgba(249, 155, 32, 0.4)" : "transparent"};
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Ball = styled.div`
  width: 24px;
  height: 24px;
  background-color: var(--Primary);
  border-radius: 50%;
`;

const Line = styled.div<{ done: boolean }>`
  width: 2px;
  height: 80px;
  margin-top: -18px;
  margin-bottom: ${({ done }) => (done ? "0px" : "-18px")};
  background-color: #d7d8de;
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Head = styled.div`
  color: var(--gray-2);
  font-size: 16px;
  font-weight: 700;

  @media ${device.md} {
    font-size: 14px;
  }
`;

const MainText = styled.div`
  color: var(--black-1);
  font-size: 20px;
  font-weight: 700;

  @media ${device.md} {
    font-size: 16px;
  }
`;
