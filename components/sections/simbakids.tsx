import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/layout/section";
import { ImageSlot } from "@/components/sections/image-slot";
import { Button } from "@/components/ui/button";

const features = [
  {
    title: "전문 상담·교육 콘텐츠",
    body: "아이의 사회성·정서·행동·학습을 돕는 검증된 프로그램과 활동 자료로, 성장 단계에 맞는 맞춤 지원을 제공합니다.",
    slot: "전문 상담·교육 콘텐츠 이미지",
  },
  {
    title: "1:1 상담부터 소규모 그룹 수업까지",
    body: "아이의 특성과 상황에 맞춰 1:1 상담, 소그룹 등 다양한 방식으로 지속적인 성장을 지원합니다.",
    slot: "상담·수업 진행 이미지",
  },
  {
    title: "검증된 전문가 네트워크",
    body: "아동·청소년 분야의 전문 상담사와 교육 전문가가 함께 아이의 성장을 지속적으로 지원합니다.",
    slot: "전문가 네트워크 이미지",
  },
];

export function Simbakids() {
  return (
    <Section>
      <div className="text-center">
        <h2 className="t-label">심바키즈</h2>
        <p className="t-lead mx-auto mt-4 max-w-2xl">
          대한민국 No.1 아동·청소년 심리 상담 플랫폼
        </p>
      </div>

      {/*
        수업 영상. 7MB 라 preload 는 metadata 로 두어 진입 시 본문을
        가로막지 않게 하고, 재생은 사용자가 시작하도록 controls 만 둔다.
      */}
      <div className="mt-12 overflow-hidden rounded-xl border border-border bg-secondary sm:mt-14">
        <video
          className="aspect-video w-full"
          controls
          playsInline
          preload="metadata"
          aria-label="심바키즈 수업 영상"
        >
          <source src="/videos/intro.mp4" type="video/mp4" />
          이 브라우저는 영상 재생을 지원하지 않습니다.
        </video>
      </div>

      <ul className="mt-12 grid gap-5 sm:mt-14 md:grid-cols-3">
        {features.map((feature) => (
          <li
            key={feature.title}
            className="flex flex-col overflow-hidden rounded-xl border border-border"
          >
            <ImageSlot
              label={feature.slot}
              className="aspect-4/3 rounded-none border-0 border-b border-dashed"
            />
            <div className="p-5">
              <h3 className="t-title">{feature.title}</h3>
              <p className="t-body mt-2.5 text-[15px] leading-[1.75]">
                {feature.body}
              </p>
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-12 text-center sm:mt-14">
        <Button asChild size="lg" className="rounded-full">
          <Link
            href="https://simbakids.com"
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
