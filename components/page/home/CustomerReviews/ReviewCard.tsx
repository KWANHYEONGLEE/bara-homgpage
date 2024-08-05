import styled from "styled-components";
import { device } from "styled/Breakpoint";

interface PropType {
  title: string;
  review: string;
  name: string;
}

function ReviewCard({ title, review, name }: PropType) {
  return (
    <ReviewCardWrapper>
      <Title>{title}</Title>
      <Review>{review}</Review>
      <Name>{name}</Name>
    </ReviewCardWrapper>
  );
}

export default ReviewCard;

const ReviewCardWrapper = styled.div`
  padding: 42px 32px;
  box-shadow: 0px 0px 20px 0px rgba(129, 129, 129, 0.25);
  border-radius: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const Title = styled.div`
  color: var(--Primary);
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  line-height: 36px;
  text-align: center;
  @media ${device.lg} {
    font-size: 18px;
  }
  @media ${device.md} {
    font-size: 16px;
    line-height: 24px;
  }
`;

const Review = styled.p`
  color: var(--black);
  text-align: center;
  font-size: 22px;
  line-height: 36px;
  text-align: center;
  @media ${device.lg} {
    font-size: 18px;
  }
  @media ${device.md} {
    font-size: 16px;
    line-height: 24px;
  }
`;

const Name = styled.div`
  color: var(--black);
  font-size: 20px;
  font-weight: 500;
  line-height: 32px;
  text-align: center;
  @media ${device.lg} {
    font-size: 18px;
  }
  @media ${device.md} {
    font-size: 16px;
    line-height: 24px;
  }
`;
