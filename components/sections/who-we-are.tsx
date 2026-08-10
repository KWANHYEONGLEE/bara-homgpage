import { Section } from "@/components/layout/section";

const paragraphs = [
  "아이의 사회·정서 학습부터 부모의 성장까지, 바라스페이스는 기술과 전문가의 경험을 연결해 더 나은 성장의 방법을 만듭니다.",
  "누적 방문자 20만 명의 아동·청소년 상담 플랫폼 심바키즈, 전 세계 부모를 위한 AI 부모코칭, 취약계층 아이들의 성장을 지원하는 임팩트 사업을 통해 더 많은 아이와 부모에게 닿고 있습니다.",
  "한 아이의 오늘을 바꾸는 것이, 세상의 내일을 바꾸는 일이라고 믿습니다.",
];

export function WhoWeAre() {
  return (
    <Section>
      <div className="grid gap-8 md:grid-cols-[minmax(0,1fr)_minmax(0,2.2fr)] md:gap-16">
        <h2 className="text-xl font-bold sm:text-2xl">Who We Are</h2>

        <div className="max-w-2xl">
          <p className="text-base font-bold leading-[1.7] sm:text-lg">
            바라스페이스는
            <br />
            아이의 미래를 바꾸고, 부모의 성장을 돕는 기업입니다.
          </p>

          <div className="mt-7 space-y-5 text-[15px] leading-[1.8] text-muted-foreground">
            {paragraphs.map((text) => (
              <p key={text}>{text}</p>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
