import { Section } from "@/components/layout/section";

const paragraphs = [
  "아이의 사회·정서 학습부터 부모의 성장까지, 바라스페이스는 기술과 전문가의 경험을 연결해 더 나은 성장의 방법을 만듭니다.",
  "누적 방문자 20만 명의 아동·청소년 상담 플랫폼 심바키즈, 전 세계 부모를 위한 AI 부모코칭, 취약계층 아이들의 성장을 지원하는 임팩트 사업을 통해 더 많은 아이와 부모에게 닿고 있습니다. 한 아이의 오늘을 바꾸는 것이, 세상의 내일을 바꾸는 일이라고 믿습니다.",
];

export function WhoWeAre() {
  return (
    <Section tone="muted" bordered={false}>
      {/*
        참고 사이트처럼 좌우를 같은 폭으로 나눈다. 1:2.4 로 나누고 글에
        max-w 까지 걸면 오른쪽에 빈 공간이 남아 글 덩어리가 가운데로
        몰려 보인다. 두 칸이 화면 양끝을 잡아야 안정적으로 읽힌다.
        한 칸이 너무 좁아지지 않도록 나누는 시점은 lg 부터.
      */}
      <div className="grid gap-6 lg:grid-cols-2 lg:gap-16">
        <h2 className="t-heading lg:pt-2">Who We Are</h2>

        <div>
          <p className="t-lead">바라스페이스는</p>
          <p className="t-lead">
            아이의 미래를 바꾸고, 부모의 성장을 돕는 기업입니다.
          </p>

          {/* lg 에서는 칸(544px)이 measure(35em)보다 좁아 무효.
              쌓이는 좁은 화면에서만 줄길이를 잡아준다 */}
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
