import { Section } from "@/components/layout/section";
import { ImageSlot } from "@/components/sections/image-slot";
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

export function AiCoach() {
  return (
    <Section>
      <div className="text-center">
        <h2 className="t-label">AI 부모코칭</h2>
        <p className="t-lead mx-auto mt-4 max-w-2xl">
          아이의 오늘을 이해하고, 내일의 성장을 이끄는 AI 코치
        </p>
      </div>

      <ImageSlot
        label="AI 부모코칭 서비스 화면 (Closer Every Day, Stronger Together.)"
        className="mx-auto mt-12 aspect-4/3 w-full max-w-3xl sm:mt-14"
      />

      <div className="mx-auto mt-14 max-w-2xl sm:mt-16">
        <StepList steps={steps} />
      </div>
    </Section>
  );
}
