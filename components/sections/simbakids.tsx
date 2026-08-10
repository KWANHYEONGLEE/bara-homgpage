import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/layout/section";
import { IntroVideo } from "@/components/sections/intro-video";
import { Button } from "@/components/ui/button";
import { externalLinks } from "@/lib/site";

/**
 * 원본 business.png 는 카드 3장이 한 장에 붙어 있고 제목·본문까지
 * 이미지에 구워져 있었다. 글자가 중복되지 않도록 사진 영역만 잘라 쓰고,
 * 제목·본문은 아래처럼 텍스트로 둔다.
 */
const features = [
  {
    title: "전문 상담·교육 콘텐츠",
    body: "아이의 사회성·정서·행동·학습을 돕는 검증된 프로그램과 활동 자료로, 성장 단계에 맞는 맞춤 지원을 제공합니다.",
    image: "/images/business/business_1.png",
    alt: "감정 이해하기 워크북과 또래관계·집중력 프로그램 교재",
  },
  {
    title: "1:1 상담부터 소규모 그룹 수업까지",
    body: "아이의 특성과 상황에 맞춰 1:1 상담, 소그룹 등 다양한 방식으로 지속적인 성장을 지원합니다.",
    image: "/images/business/business_2.png",
    alt: "화상으로 1:1 상담을 받는 아이와, 소규모 그룹 수업 장면",
  },
  {
    title: "검증된 전문가 네트워크",
    body: "아동·청소년 분야의 전문 상담사와 교육 전문가가 함께 아이의 성장을 지속적으로 지원합니다.",
    image: "/images/business/business_3.png",
    alt: "회의 테이블에 모여 논의하는 상담·교육 전문가들",
  },
];

export function Simbakids() {
  return (
    // 색인에서 건너뛸 때 sticky 헤더에 제목이 가리지 않도록 여백을 준다
    <Section id="simbakids" className="scroll-mt-20 sm:scroll-mt-24">
      <div className="text-center">
        <h2 className="t-label">심바키즈</h2>
        <p className="t-lead mx-auto mt-4 max-w-2xl">
          대한민국 No.1 아동·청소년 심리 상담 플랫폼
        </p>
      </div>

      <div className="mx-auto mt-12 max-w-4xl overflow-hidden rounded-xl border border-border bg-secondary sm:mt-14">
        <IntroVideo />
      </div>
      <p className="t-caption mx-auto mt-3 max-w-4xl text-center">
        소리 없이 자동 재생됩니다. 소리는 재생바에서 켜주세요.
      </p>

      <ul className="mt-12 grid gap-5 sm:mt-14 md:grid-cols-3">
        {features.map((feature) => (
          <li
            key={feature.title}
            className="flex flex-col overflow-hidden rounded-xl border border-border"
          >
            {/* 원본 사진이 272x350 이라 4:5 로 담는다 */}
            <div className="relative aspect-4/5 shrink-0 border-b border-border bg-secondary">
              <Image
                src={feature.image}
                alt={feature.alt}
                fill
                sizes="(min-width: 768px) 33vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="p-5">
              <h3 className="t-title">{feature.title}</h3>
              <p className="t-body mt-2.5">{feature.body}</p>
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-12 text-center sm:mt-14">
        <Button asChild size="lg" className="rounded-full">
          <Link
            href={externalLinks.simbakids}
            target="_blank"
            rel="noopener noreferrer"
          >
            심바키즈 바로가기
            <ArrowRight className="size-4" />
          </Link>
        </Button>
      </div>
    </Section>
  );
}
