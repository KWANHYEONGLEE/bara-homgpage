import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section, SectionHeading } from "@/components/layout/section";
import { Media } from "@/components/sections/media-placeholder";
import { Button } from "@/components/ui/button";

type Solution = {
  title: string;
  body: string;
  cta?: { label: string; href: string; external?: boolean };
  media: { src: string; alt: string; width: number; height: number };
};

const solutions: Solution[] = [
  {
    title: "No.1 아동·청소년 심리 상담 플랫폼",
    body: "느린 아이의 심리 케어부터 사회성 강화까지, 검증된 전문가를 집에서 가장 편안하게 만나보세요.",
    cta: { label: "심바키즈 바로가기", href: "https://simbakids.com", external: true },
    media: {
      src: "/images/solutions/solution_1.png",
      alt: "심바키즈 서비스 화면",
      width: 1121,
      height: 937,
    },
  },
  {
    title: "아이의 오늘을 이해하고\n내일의 성장을 이끄는 AI",
    body: "검색해도 우리 아이 이야기는 없으니까, 우리 아이에게 꼭 맞는 코칭을 시작하세요.",
    media: {
      src: "/images/solutions/solution_2.png",
      alt: "AI 부모코칭 서비스 화면",
      width: 1121,
      height: 1080,
    },
  },
  {
    title: "바라 임팩트 솔루션",
    body: "교육·돌봄 사각지대 아동·청소년을 위해 지역사회와 함께 교육 격차를 줄여갑니다.",
    cta: { label: "바라 임팩트 문의하기", href: "/contact" },
    media: {
      src: "/images/solutions/solution_3.png",
      alt: "바라 임팩트 솔루션 구조도",
      width: 1074,
      height: 1024,
    },
  },
];

export function Solutions() {
  return (
    <Section>
      <SectionHeading
        label="Solution"
        title="아이의 모든 일상 속으로, 부모의 가장 가까운 손끝으로"
      />

      <div className="mt-16 space-y-20 sm:mt-20 sm:space-y-28">
        {solutions.map((item, i) => {
          // 홀수 번째 블록은 이미지를 오른쪽으로 — 시안의 지그재그 배치
          const reversed = i % 2 === 1;

          return (
            <div
              key={item.title}
              className="grid items-center gap-8 md:grid-cols-2 md:gap-14"
            >
              <Media
                src={item.media.src}
                alt={item.media.alt}
                width={item.media.width}
                height={item.media.height}
                className={reversed ? "md:order-2" : undefined}
              />

              <div className={reversed ? "md:order-1" : undefined}>
                <h3 className="whitespace-pre-line text-lg font-bold leading-[1.55] sm:text-xl">
                  {item.title}
                </h3>
                <p className="mt-4 text-[15px] leading-[1.8] text-muted-foreground">
                  {item.body}
                </p>

                {item.cta && (
                  <Button asChild className="mt-7 rounded-full" size="lg">
                    <Link
                      href={item.cta.href}
                      {...(item.cta.external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                    >
                      {item.cta.label}
                      <ArrowRight className="size-4" />
                    </Link>
                  </Button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
