import styled from "styled-components";
import { device } from "styled/Breakpoint";

interface PropType {
  text: string;
  icon: string;
}

function CounselingCard({ text, icon }: PropType) {
  return (
    <CounselingCardWrapper>
      <Icon src={icon} alt={icon} />
      <Text>{text}</Text>
    </CounselingCardWrapper>
  );
}

export default CounselingCard;

const CounselingCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;
  border-radius: 12px;
  background: #fff;
  box-shadow: 0px 0px 10px 0px rgba(140, 140, 140, 0.25);
  padding: 34px 21px;
  width: 100%;
`;

const Icon = styled.img`
  height: 48px;
  width: 48px;
  object-fit: contain;
`;

const Text = styled.div`
  text-align: center;
  font-size: 24px;
  font-weight: 700;
  line-height: 38px;
  white-space: break-spaces;

  @media ${device.md} {
    font-size: 20px;
    font-weight: 700;
    line-height: 32px;
  }
`;
