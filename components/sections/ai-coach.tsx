import { Section } from "@/components/layout/section";
import {
  FeatureCards,
  type Feature,
} from "@/components/sections/feature-cards";
import { Media } from "@/components/sections/media-placeholder";
import { imageCrops } from "@/lib/media";
import { StepList, type Step } from "@/components/sections/step-list";

/** 이해 -> 방법 -> 지속. 순서가 곧 코칭이 진행되는 흐름이다. */
const steps: Step[] = [
  {
    title: "우리 아이를 더 정확하게 이해하고",
    body: "왜 이러는지 몰라 답답했던 아이의 행동과 감정. 간단한 대화를 통해 아이의 특성과 지금 필요한 도움을 함께 찾아갑니다.",
  },
  {
    title: "우리 아이에게 맞는 방법을 찾고",
    body: "뻔한 육아 조언 대신, 우리 아이에게 맞는 현실적인 방법을. 비슷한 아이들의 실제 사례와 전문가의 노하우를 바탕으로 맞춤 코칭을 제공합니다.",
  },
  {
    title: "고민이 생길 때마다 함께하고",
    body: "매번 검색하고 혼자 고민하지 않아도 되도록. 일상에서 새로운 고민이 생길 때마다 언제든 묻고, 아이의 변화에 맞춰 다음 방법을 찾아갑니다.",
  },
];

const features: Feature[] = [
  {
    title: "아이를 더 정확하게",
    body: (
      <span>
        행동과 감정 속 <br />
        우리 아이의 특성을 이해해요
      </span>
    ),
    image: "/images/business/business_4.png",
    alt: "소파에 앉아 휴대폰으로 아이의 성장 기록을 살펴보는 보호자",
  },
  {
    title: "방법은 더 구체적으로",
    body: (
      <span>
        뻔한 조언대신 <br />
        우리 아이에게 맞는 방법을 찾아요
      </span>
    ),
    image: "/images/business/business_5.png",
    alt: "거실에서 마주 앉아 눈을 맞추고 대화하는 엄마와 남자아이",
  },
  {
    title: "고민은 언제든 함께",
    body: (
      <span>
        아이의 변화에 맞춰 <br />
        다음 방법까지 함께 찾아가요
      </span>
    ),
    image: "/images/business/business_6.png",
    alt: "잠자리에 든 아이 곁에 앉아 다독이는 보호자",
  },
];

export function AiCoach() {
  return (
    <Section id="ai-coach" className="scroll-mt-20 sm:scroll-mt-24">
      <div className="text-center">
        <h2 className="t-heading">아이젤리</h2>
        <p className="t-lead mx-auto mt-4 max-w-5xl">
          아이의 오늘을 이해하고,
          <br /> 내일의 성장을 이끄는 AI 양육 코치
        </p>
      </div>

      {/* 원본에 여백이 포함돼 있어 홈과 같은 좌표로 잘라 낸다 */}
      <Media
        src="/images/solutions/solution_2.png"
        alt="AI 부모코칭 서비스 화면"
        {...imageCrops.solution2}
        className="mx-auto mt-12 max-w-3xl sm:mt-14"
      />

      <FeatureCards features={features} />

      {/* <div className="mx-auto mt-14 max-w-2xl sm:mt-16">
        <StepList steps={steps} />
      </div> */}
    </Section>
  );
}
