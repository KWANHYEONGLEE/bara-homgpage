import { styled } from "styled-components";
import { device } from "styled/Breakpoint";

const Banner = () => {
  return (
    <BannerWrapper>
      <BannerText>
        출산율은 줄어들어도 육아 고민은 결코 줄어들지 않습니다. 밀레니얼 세대의
        부모들은 넘치는 육아 정보의 홍수 속에 살고 있지만, 여전히 다양한 육아
        고민과 문제를 갖고 살아가고 있습니다. 세상에 똑같은 아이는 없습니다.
        그래서 여기저기 떠도는 보통의 육아 정보를 넘어, 우리 자녀와 그리고
        부부의 삶에 변화를 줄 수 있는 맞는 1:1 퍼스널 코칭이 필요합니다. 아이를
        보다 잘 키우고 가족의 행복을 놓치고 싶지 않은 현명한 부모들을 위해,
        [심바]는 지금까지 세상에 없던 온라인 아동 • 가족 상담 서비스를 제공하며,
        뿐만 아니라 멘탈 헬스케어의 대중화 및 인식 변화에 앞장서고 있습니다.
      </BannerText>
    </BannerWrapper>
  );
};

export default Banner;

const BannerWrapper = styled.div`
  background-image: url("/partner-banner.png");
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 108px 16px;
  @media ${device.md} {
    padding: 60px 16px;
  }
`;

const BannerText = styled.div`
  text-align: center;
  color: white;
  font-size: 24px;
  font-weight: 400;
  line-height: 48px;
  max-width: 1420px;
  width: 100%;
  word-break: keep-all;
  @media ${device.md} {
    max-width: none;
    font-size: 16px;
    line-height: 32px;
  }
`;
