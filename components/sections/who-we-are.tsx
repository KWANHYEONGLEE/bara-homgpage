import { Section } from "@/components/layout/section";

/**
 * 세 문단은 개인 -> 규모 -> 신념 순으로 범위가 넓어지고,
 * 마지막 문장이 회사의 결론이다. 그래서 앞의 둘만 본문 단에 두고
 * 마지막은 단을 빠져나와 크게 선다.
 */
const paragraphs = [
  "아이의 사회·정서 학습부터 부모의 성장까지, 바라스페이스는 기술과 전문가의 경험을 연결해 더 나은 성장의 방법을 만듭니다.",
  "누적 방문자 20만 명의 아동·청소년 상담 플랫폼 심바키즈, 전 세계 부모를 위한 AI 부모코칭, 취약계층 아이들의 성장을 지원하는 임팩트 사업을 통해 더 많은 아이와 부모에게 닿고 있습니다.",
];

const thesis = "한 아이의 오늘을 바꾸는 것이,\n세상의 내일을 바꾸는 일이라고 믿습니다.";

export function WhoWeAre() {
  return (
    <Section>
      <div className="grid gap-6 md:grid-cols-[minmax(0,1fr)_minmax(0,2.4fr)] md:gap-16">
        <h2 className="t-label md:pt-2">Who We Are</h2>

        <div>
          <p className="t-lead max-w-2xl">
            바라스페이스는 아이의 미래를 바꾸고, 부모의 성장을 돕는 기업입니다.
          </p>

          <div className="measure mt-8 space-y-6">
            {paragraphs.map((text) => (
              <p key={text} className="t-body">
                {text}
              </p>
            ))}
          </div>
        </div>
      </div>

      <p className="t-thesis mt-16 whitespace-pre-line border-t border-border pt-10 sm:mt-20 sm:pt-12">
        <span
          aria-hidden
          className="mb-6 block h-0.5 w-10 bg-primary"
        />
        {thesis}
      </p>
    </Section>
  );
}
