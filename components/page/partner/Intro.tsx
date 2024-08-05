import { styled } from "styled-components";
import { device } from "styled/Breakpoint";

const Intro = () => {
  return (
    <IntroWrapper>
      <IntroTitle>
        국내 유일 <Highlight>1:1 아동, 가족 전문 </Highlight> 심리상담 플랫폼
      </IntroTitle>
      <IntroTemplate>
        <TempItem>
          <Img src="/icons/map-pin.svg" alt="pin" />
          <Desc>
            지역적 한계 없는
            <br /> 온라인 서비스
          </Desc>
        </TempItem>
        <TempItem>
          <Img src="/icons/clock.svg" alt="pin" />
          <Desc>
            오전 시간대
            <br /> 프로그램 개설
          </Desc>
        </TempItem>
        <TempItem>
          <Img src="/icons/airplay.svg" alt="pin" />
          <Desc>
            진단 및 상담기록을
            <br /> 편안하게 보관 및 관리
          </Desc>
        </TempItem>
        <TempItem>
          <Img src="/icons/dollar-sign.svg" alt="pin" />
          <Desc>
            광고 및 홍보를 통한
            <br /> 매출 증진
          </Desc>
        </TempItem>
      </IntroTemplate>
    </IntroWrapper>
  );
};
export default Intro;

const IntroWrapper = styled.div`
  max-width: 1295px;
  width: 100%;
  margin: 0 auto;
  padding: 80px 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media ${device.md} {
    padding: 0px 16px 40px 16px;
  }
`;

const IntroTitle = styled.div`
  font-size: 48px;
  line-height: 57px;
  font-weight: 600;
  display: flex;
  gap: 16px;
  text-align: center;
  @media ${device.lg} {
    flex-direction: column;
    gap: 4px;
    font-size: 32px;
    line-height: 44px;
    font-weight: 700;
  }
`;

const Highlight = styled.div`
  color: var(--Primary);
  letter-spacing: -0.05em;
`;

const IntroTemplate = styled.div`
  margin-top: 60px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 24px;
  @media ${device.lg} {
    margin-top: 40px;
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(4, 1fr);
    gap: 16px;
  }
`;

const TempItem = styled.div`
  display: flex;
  width: 400px;
  height: 232px;
  border-radius: 12px;
  background-color: white;
  box-shadow: 0px 0px 10px 0px rgba(140, 140, 140, 0.25);
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 40px;
  @media ${device.md} {
    gap: 24px;
    width: 328px;
    height: 184px;
  }
`;

const Img = styled.img`
  width: 48px;
  height: 48px;
`;

const Desc = styled.div`
  font-size: 24px;
  line-height: 38px;
  font-weight: 600;
  text-align: center;
  @media ${device.md} {
    font-size: 20px;
    line-height: 32px;
  }
`;
