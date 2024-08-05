import styled from "styled-components";
import { device } from "styled/Breakpoint";

interface PropType {
  title: string;
  orangeTitle?: string;
  additional?: string;
}

function SectionTitle({ title, orangeTitle = "", additional = "" }: PropType) {
  return (
    <Title>
      {title}
      {"\n"}
      <OrangeText>{orangeTitle}</OrangeText>
      {"\n"}
      {additional}
    </Title>
  );
}

export default SectionTitle;

const Title = styled.h2`
  text-align: center;
  font-size: 48px;
  font-weight: 800;
  margin: 0;
  padding-top: 200px;

  @media ${device.md} {
    padding-top: 100px;
    white-space: break-spaces;
    font-size: 32px;
    line-height: 107.5%;
  }
`;
const OrangeText = styled.span`
  color: var(--Primary);
`;
