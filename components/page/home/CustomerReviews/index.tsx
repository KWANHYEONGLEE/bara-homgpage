import SectionTitle from "components/common/SectionTitle";
import React, { useRef } from "react";
import styled from "styled-components";
import ReviewCard from "./ReviewCard";
import { device } from "styled/Breakpoint";
import { useInView } from "framer-motion";
import ShowupComp from "components/common/ShowupComp";

function CustomerReviews() {
  // data
  const customerReviews = [
    {
      title: "경험 많고 실력 좋은 최고의 코치",
      review:
        "아이 등원시키고 집에서 내가 원하는 시간에 코칭받으니 정말 편했어요. 코치님께서 얼마나 경험이 많으신지 제 이야기만 듣고도, 아이의 영상만 보고도 척척 문제를 잘 짚어주시더라구요",
      name: "-박*희 님-",
    },
    {
      title: "심바와 함께하니 든든해요",
      review:
        "저는 요즘 아이와 트러블이 있을 때, 고민거리가 생겼을 때 코치님께 물어봐야겠다 생각하고 바로바로 핸드폰 메모장에 적어놔요. 얼마나 든든한지 몰라요!",
      name: "-이*주 님-",
    },
    {
      title: "문제를정확하게집어주니시원해요",
      review:
        "코치님께서 아이와 관련된 고민은 물론이고 내 행동에 잘했다 칭찬하고 격려하고 고칠점에 대해서도 일러주시니 막혔던 속이 확 뚫린 것처럼 마음이 한결 가벼워졌답니다!",
      name: "-김*이 님-",
    },
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <CustomerReviewPage>
      <CustomerReviewsWrapper>
        <SectionTitle title={"고객님들의\n생생한 후기"} />
        <CustomerReviewsCards ref={ref}>
          {customerReviews.map((review, index) => (
            <ShowupComp
              customStyle={{ width: "100%" }}
              isInView={isInView}
              delay={0.3 * (index + 1)}
              key={review.name + "##" + index + "##" + review.title}
            >
              <ReviewCard
                key={review.name + "##" + index + "##" + review.title}
                title={review.title}
                review={review.review}
                name={review.name}
              />
            </ShowupComp>
          ))}
        </CustomerReviewsCards>
      </CustomerReviewsWrapper>
    </CustomerReviewPage>
  );
}

export default CustomerReviews;

const CustomerReviewPage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 60px 200px;
  @media ${device.md} {
    padding: 0 16px 80px;
  }
`;

const CustomerReviewsWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 108px;
  align-items: center;
  justify-content: center;
  max-width: 1250px;

  @media ${device.md} {
    gap: 40px;
  }
`;

const CustomerReviewsCards = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 40px;
  @media ${device.xl} {
    gap: 24px;
  }
  @media ${device.lg} {
    flex-direction: column;
  }
`;
