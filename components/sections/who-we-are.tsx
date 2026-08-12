import { Section } from "@/components/layout/section";

const paragraphs = [
  "아이의 사회·정서 학습부터 부모의 성장까지, 바라스페이스는 기술과 전문가의 경험을 연결해 더 나은 성장의 방법을 만듭니다.",
  "누적 방문자 20만 명의 아동·청소년 상담 플랫폼 심바키즈, 전 세계 부모를 위한 AI 부모코칭, 취약계층 아이들의 성장을 지원하는 임팩트 사업을 통해 더 많은 아이와 부모에게 닿고 있습니다. 한 아이의 오늘을 바꾸는 것이, 세상의 내일을 바꾸는 일이라고 믿습니다.",
];

export function WhoWeAre() {
  return (
    <Section tone="muted" bordered={false}>
      <div className="grid gap-6 md:grid-cols-[minmax(0,1fr)_minmax(0,2.4fr)] md:gap-16">
        <h2 className="t-label md:pt-2">Who We Are</h2>

        <div>
          <p className="t-lead max-w-2xl">바라스페이스는</p>
          <p className="t-lead max-w-2xl">
            아이의 미래를 바꾸고, 부모의 성장을 돕는 기업입니다.
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
    </Section>
  );
}
