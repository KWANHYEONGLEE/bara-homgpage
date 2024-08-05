import styled from "styled-components";
import { device } from "styled/Breakpoint";

interface PropType {
  img: string;
  head: string;
  title: string;
  foot: string;
  primaryBadgeText: string;
  primaryBadgeColor: string;
  secondaryBadgeText: string;
  secondaryBadgeColor: string;
}

function ProgramCard({
  img,
  head,
  title,
  foot,
  primaryBadgeText,
  primaryBadgeColor,
  secondaryBadgeText,
  secondaryBadgeColor,
}: PropType) {
  return (
    <ProgramCardWrapper>
      <Img src={img} alt={img} />
      <ProgramInfo>
        <Head>{head}</Head>
        <Title>{title}</Title>
        <Foot>{foot}</Foot>
        <BadgesWrapper>
          <Badge color={primaryBadgeColor}>{primaryBadgeText}</Badge>
          <Badge color={secondaryBadgeColor}>{secondaryBadgeText}</Badge>
        </BadgesWrapper>
      </ProgramInfo>
    </ProgramCardWrapper>
  );
}

export default ProgramCard;

const ProgramCardWrapper = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  box-shadow: 0px 0px 20px 0px rgba(140, 140, 140, 0.25);
  height: 516px;
  margin: 16px 0;
  @media ${device.lg} {
    height: 400px;
    margin: 16px 60px;
    box-shadow: 0px 0px 10.951456069946289px 0px rgba(140, 140, 140, 0.25);
  }
  @media ${device.md} {
    margin: 16px;
  }
`;

const Img = styled.img`
  max-width: 404px;
  max-height: 327px;
  width: 100%;
  height: 100%;

  @media ${device.lg} {
    max-height: 240px;
    max-width: none;
    /* max-width: 220px; */
  }
  object-fit: cover;
`;

const ProgramInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
`;

const Head = styled.h3`
  color: var(--Primary);
  font-size: 14px;
  font-weight: 700;
  line-height: 24px;
  padding-bottom: 4px;

  @media ${device.lg} {
    /* font-size: 13px;
    line-height: 17px; */
    font-size: 16px;
    line-height: 23px;
    padding-bottom: 8px;
    letter-spacing: -0.03em;
  }
`;

const Title = styled.h2`
  color: var(--black);
  font-size: 20px;
  font-weight: 700;
  line-height: 24px;
  padding-bottom: 12px;

  @media ${device.lg} {
    /* font-size: 16px;
    line-height: 13.142px; */
    font-size: 24px;
    line-height: 28px;
    padding-bottom: 8px;
  }
`;

const Foot = styled.h3`
  color: var(--gray-3);
  font-size: 14px;
  font-weight: 500;
  line-height: 24px;
  padding-bottom: 8px;
  white-space: break-spaces;

  @media ${device.lg} {
    white-space: normal;
    font-size: 14px;
    line-height: 20px;
  }
`;

const BadgesWrapper = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

const Badge = styled.span<{ color: string }>`
  color: var(--${({ color }) => color});
  border-radius: 2px;
  border: 1px solid var(--${({ color }) => color});
  text-align: center;
  font-size: 12px;
  font-weight: 500;
  padding: 3px 4px;
`;
