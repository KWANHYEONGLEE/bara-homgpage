import SectionTitle from "components/common/SectionTitle";
import styled from "styled-components";
import { device } from "styled/Breakpoint";

function Recruitment() {
  return (
    <RecruitmentWrapper>
      <SectionTitle title="전문가 모집" />
      <Info>
        <InfoPara>
          {
            "국내 유일 아동 . 가족 심리 상담 플랫폼심리 바이블,\n심바에서 파트너를 모집합니다."
          }
        </InfoPara>
        <ButtonsWrapper>
          <Button>프리랜서 파트너</Button>
          <ButtonSecondary>센터 및 기관 파트너</ButtonSecondary>
        </ButtonsWrapper>
      </Info>
    </RecruitmentWrapper>
  );
}

export default Recruitment;

const RecruitmentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 24px;
  gap: 80px;
`;

const InfoPara = styled.p`
  color: var(--Primary);
  text-align: center;
  font-size: 32px;
  font-weight: 700;
  line-height: 48px;
  white-space: break-spaces;

  @media ${device.md} {
    font-size: 20px;
    font-weight: 800;
    line-height: 36px;
  }
`;

const ButtonsWrapper = styled.div`
  display: flex;
  gap: 16px;

  @media ${device.md} {
    flex-direction: column;
    width: 100%;
  }
`;

const Button = styled.button`
  color: #fff;
  text-align: center;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 32px;
  border-radius: 8px;
  background: var(--Primary);
  border: none;
  outline: none;
  padding: 24px 84px;

  @media ${device.md} {
    padding: 14px 0px;
    width: 100%;
    font-size: 20px;
    line-height: 32px;
  }
`;

const ButtonSecondary = styled(Button)`
  padding: 24px 68px;
  border: 1px solid var(--Primary);
  background: #fff6eb;
  color: var(--Primary);

  @media ${device.md} {
    padding: 14px 0px;
    width: 100%;
  }
`;

const Info = styled(RecruitmentWrapper)`
  gap: 48px;
`;
