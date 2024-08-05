import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { device } from "styled/Breakpoint";

interface PropType {
  icon: string;
  text: string;
  tremor?: boolean;
  floating?: boolean;
}

const shakeAnimation = keyframes`
  0% { transform: rotate(-5deg); }
  50% { transform: rotate(5deg); }
  100% { transform: rotate(-5deg); }
`;

const floatAnimation = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
`;

function TopCard({ icon, text, tremor = false, floating = false }: PropType) {
  const [tremorState, setTremorState] = useState(true);

  useEffect(() => {
    let timeOut: NodeJS.Timeout;
    if (timeOut) {
      clearTimeout(timeOut);
    }
    timeOut = setInterval(() => {
      setTremorState((prev) => !prev);
    }, 3000);
    return () => {
      clearTimeout(timeOut);
    };
  }, []);

  return (
    <TopCardWrapper>
      {tremor && (
        <TremorIcon
          src={icon}
          alt={icon}
          $isAnimation={tremor}
          $tremorState={tremorState}
        />
      )}
      {floating && (
        <FloatingIcon
          src={icon}
          alt={icon}
          $isAnimation={floating}
          $floating={floating}
        />
      )}
      {!tremor && !floating && <Icon src={icon} alt={icon} />}

      <Text>{text}</Text>
    </TopCardWrapper>
  );
}

export default TopCard;

const TopCardWrapper = styled.div`
  display: flex;
  gap: 32px;
  padding: 44px 0px 44px 32px;
  border-radius: 12px;
  box-shadow: 0px 0px 10px 0px rgba(140, 140, 140, 0.25);
  width: 501px;
  @media ${device.lg} {
    width: 100%;
    padding: 26.273px 0px 26.727px 20.485px;
  }
`;

const Icon = styled.img`
  width: 50px;
  object-fit: contain;
  @media ${device.lg} {
    width: 32px;
  }
`;

const TremorIcon = styled(Icon)<{
  $isAnimation?: boolean;
  $tremorState: boolean;
}>`
  animation: ${({ $isAnimation }) => $isAnimation && shakeAnimation} 0.1s linear
    infinite;
  animation-iteration-count: ${({ $tremorState }) =>
    $tremorState ? "infinite" : "1"};
`;

const FloatingIcon = styled(Icon)<{
  $isAnimation?: boolean;
  $floating: boolean;
}>`
  animation: ${({ $isAnimation }) => $isAnimation && floatAnimation} 4s ease-in
    infinite;
`;

const Text = styled.p`
  font-size: 24px;
  font-weight: 700;
  line-height: 36px;
  white-space: break-spaces;

  @media ${device.lg} {
    font-size: 16px;
    line-height: 23px;
  }
`;
