import Link from "next/link";
import { styled } from "styled-components";
import { device } from "styled/Breakpoint";

const Recruit = () => {
  return (
    <RecruitWrapper>
      <RecruitTitle>전문가 모집</RecruitTitle>
      <RecruitDesc>
        국내 유일
        <br />
        아동·가족 심리 상담 플랫폼
        <br />
        심리 바이블, 심바
        <br />
        최고의 파트너를 모집합니다.
      </RecruitDesc>
      <ButtonWrapper>
        <Link href="https://forms.gle/Cht1c4DVKFcEA7s79" target="_blank">
          <Button $isfilled>프리랜서 파트너</Button>
        </Link>
        <Link href="https://forms.gle/tZVuLmdqgajq7ocXA" target="_blank">
          <Button>센터 및 기관 파트너</Button>
        </Link>
      </ButtonWrapper>
    </RecruitWrapper>
  );
};

export default Recruit;

const RecruitWrapper = styled.div`
  max-width: 1295px;
  width: 100%;
  margin: 0 auto;
  padding: 120px 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media ${device.md} {
    padding: 80px 16px;
  }
`;

const RecruitTitle = styled.div`
  font-size: 48px;
  line-height: 57.28px;
  font-weight: 800;
  @media ${device.md} {
    font-size: 32px;
    line-height: 38px;
  }
`;

const RecruitDesc = styled.div`
  margin: 80px 0px 48px 0px;
  font-size: 32px;
  font-weight: 600;
  line-height: 48px;
  text-align: center;
  color: var(--Primary);
  @media ${device.md} {
    font-size: 20px;
    line-height: 36px;
    margin: 24px 0 40px 0;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 16px;
  @media ${device.md} {
    flex-direction: column;
    gap: 8px;
  }
`;

const Button = styled.button<{ $isfilled?: boolean }>`
  font-size: 24px;
  line-height: 32px;
  font-weight: 600;
  border-radius: 8px;
  width: 320px;
  height: 80px;
  cursor: pointer;
  background-color: ${({ $isfilled }) =>
    $isfilled ? "var(--Primary)" : "#FFF6EB"};
  color: ${({ $isfilled }) => ($isfilled ? "#FFF" : "var(--Primary)")};
  border: 1px solid var(--Primary);
  @media ${device.md} {
    font-size: 20px;
    line-height: 32px;
    width: 312px;
    height: 60px;
  }
`;
