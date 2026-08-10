import Link from "next/link";
import { ArrowDown } from "lucide-react";

/**
 * 사업 색인.
 * 페이지가 5,000px 가 넘는데 사업이 셋이라, 끝까지 내려가야 세 번째를
 * 발견하게 된다. 히어로가 곧 목차 역할을 하도록 세 사업을 나열하고
 * 각 섹션으로 건너뛰게 한다.
 *
 * 세 사업은 단계가 아니라 병렬이므로 번호를 붙이지 않는다.
 */
const lines = [
  {
    name: "심바키즈",
    summary: "아동·청소년 심리 상담 플랫폼",
    href: "#simbakids",
  },
  {
    name: "AI 부모코칭",
    summary: "우리 아이에게 맞는 맞춤 코칭",
    href: "#ai-coach",
  },
  {
    name: "바라 임팩트",
    summary: "교육·돌봄 사각지대 지원",
    href: "#bara-impact",
  },
];

export function BusinessHero() {
  return (
    <section className="hero-gradient -mt-16 px-5 pb-16 pt-32 sm:-mt-18 sm:pb-20 sm:pt-36 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <p className="t-label">사업소개</p>
          <h1 className="t-lead mt-4">
            바라스페이스는 세 가지 사업으로 아이와 부모, 지역사회를 잇습니다.
          </h1>
        </div>

        <ul className="mt-12 border-t border-border/80 sm:mt-14">
          {lines.map((line) => (
            <li key={line.href}>
              <Link
                href={line.href}
                className="group flex items-baseline gap-4 border-b border-border/80 py-5 transition-colors hover:text-brand-ink"
              >
                <span className="t-title shrink-0">{line.name}</span>
                <span className="t-body min-w-0 flex-1 text-[15px] leading-normal">
                  {line.summary}
                </span>
                <ArrowDown
                  aria-hidden
                  className="size-4 shrink-0 translate-y-0.5 text-muted-foreground transition-colors group-hover:text-brand-ink"
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
