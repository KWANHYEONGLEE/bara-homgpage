import { Section } from "@/components/layout/section";

/**
 * 문단 순서가 곧 창업 논리다.
 * 문제 -> 우리가 모인 이유 -> 방법.
 */
const paragraphs = [
  "아이를 향한 무한한 사랑, 그리고 그만큼 깊어지는 부모들의 현실적인 고민.",
  "우리는 따뜻한 마음만으로는 풀기 어려웠던 문제를 기술과 데이터, 그리고 전문성으로 해결하기 위해 모였습니다.",
  "AI 기술로, 부모와 전문가, 지역사회를 연결합니다.",
  "모두의 바람이 모여, 한 아이의 삶을 바꾸는 힘이 될 수 있도록 바라스페이스가 새로운 길을 만들어갑니다.",
];

export function FoundingStory() {
  return (
    <Section>
      <div className="grid gap-6 md:grid-cols-[minmax(0,1fr)_minmax(0,2.4fr)] md:gap-16">
        <h2 className="t-label md:pt-2">Founding Story</h2>

        <div>
          <p className="t-lead max-w-2xl">
            간절한 &lsquo;바람(Wish)&rsquo;이,
            <br />
            세상을 바꾸는 &lsquo;바람(Wind)&rsquo;이 되다
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
