import { Section } from "@/components/layout/section";

/**
 * 문단 순서가 곧 창업 논리다.
 * 문제 -> 우리가 모인 이유 -> 방법.
 */
const paragraphs = [
  "아이를 향한 무한한 사랑, 그리고 그만큼 깊어지는 부모들의 현실적인 고민.",
  "우리는 따뜻한 마음만으로는 풀기 어려웠던 문제를 기술과 데이터, 그리고 전문성으로 해결하기 위해 모였습니다. AI 기술로 부모와 전문가, 지역사회를 연결합니다.",
  "모두의 바람이 모여, 한 아이의 삶을 바꾸는 힘이 될 수 있도록 바라스페이스가 새로운 길을 만들어갑니다.",
];

export function FoundingStory() {
  return (
    <Section>
      {/* 홈 Who We Are 와 같은 좌우 동일 분할 (참고 사이트 Founding Story) */}
      <div className="grid gap-6 lg:grid-cols-2 lg:gap-16">
        <h2 className="t-heading lg:pt-2">Founding Story</h2>

        <div>
          <p className="t-lead">
            간절한 &lsquo;바람(Wish)&rsquo;이,
            <br />
            세상을 바꾸는 &lsquo;바람(Wind)&rsquo;이 되다
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
