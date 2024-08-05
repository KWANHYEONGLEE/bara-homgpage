import ShowupComp from "components/common/ShowupComp";
import { useInView } from "framer-motion";
import { useRef } from "react";
import styled from "styled-components";
import { device } from "styled/Breakpoint";

interface PropType {
  img: string;
  head: string;
  title: string;
  foot: string;
  reverse: boolean;
}
function BottomCard({ img, head, title, foot, reverse }: PropType) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  return (
    <CardWrapper reverse={reverse} ref={ref}>
      <CardInfoText reverse={reverse}>
        <ShowupComp isInView={isInView} delay={0.3}>
          <Head>{head}</Head>
        </ShowupComp>
        <ShowupComp isInView={isInView} delay={0.6}>
          <Title>{title}</Title>
        </ShowupComp>
        <ShowupComp isInView={isInView} delay={0.9}>
          <Foot>{foot}</Foot>
        </ShowupComp>
      </CardInfoText>
      <CardImg reverse={reverse} src={img} />
    </CardWrapper>
  );
}

export default BottomCard;

const Head = styled.h3`
  color: var(--Primary);
  font-size: 24px;
  line-height: 32px;
  font-weight: 800;
  white-space: break-spaces;
  padding-bottom: 8px;
  @media ${device.lg} {
    font-size: 20px;
  }
  @media ${device.md} {
    font-size: 16px;
    line-height: 23px;
  }
`;

const Title = styled.h2`
  color: var(--black);
  font-size: 62px;
  line-height: 107.5%;
  font-weight: 800;
  white-space: break-spaces;
  padding-bottom: 32px;
  @media ${device.xl} {
    font-size: 42px;
  }
  @media ${device.lg} {
    font-size: 32px;
  }
  @media ${device.md} {
    font-size: 24px;
    line-height: 28px;
  }
`;

const Foot = styled.h3`
  color: var(--gray-3);
  font-size: 20px;
  font-weight: 500;
  line-height: 28px;
  white-space: break-spaces;
  @media ${device.md} {
    font-size: 14px;
    line-height: 20px;
  }
`;

const CardInfoText = styled.div<{ reverse: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: ${({ reverse }) => (reverse ? "0 80px 0 0" : "0 0 0 80px")};
  @media ${device.lg} {
    padding: ${({ reverse }) => (reverse ? "0 40px 0 0" : "0 0 0 40px")};
  }
  @media ${device.md} {
    padding: 24px;
  }
`;

const CardImg = styled.img<{ reverse: boolean }>`
  max-width: 576px;
  width: 50%;
  border-radius: ${({ reverse }) =>
    reverse ? "12px 0 0 12px" : "0 12px 12px 0"};
  @media ${device.md} {
    max-width: none;
    width: 100%;
    height: 240px;
    border-radius: 12px 12px 0 0;
  }

  object-fit: cover;
`;

const CardWrapper = styled.div<{ reverse: boolean }>`
  border-radius: 12px;
  box-shadow: 0px 0px 20px 0px rgba(140, 140, 140, 0.25);
  display: flex;
  flex-direction: ${({ reverse }) => (reverse ? "row-reverse" : "row")};
  text-align: ${({ reverse }) => (reverse ? "right" : "left")};
  justify-content: space-between;
  max-width: 1264px;
  height: 382px;
  width: 100%;

  @media ${device.md} {
    flex-direction: column-reverse;
    justify-content: center;
    text-align: left;
    height: none;
    width: 100%;
  }
`;
