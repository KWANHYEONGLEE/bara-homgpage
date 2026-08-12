import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/layout/section";
import { FeatureCards, type Feature } from "@/components/sections/feature-cards";
import { IntroVideo } from "@/components/sections/intro-video";
import { Button } from "@/components/ui/button";
import { externalLinks } from "@/lib/site";

const features: Feature[] = [
  {
    title: "No.1 온라인 아동상담",
    body: (
      <span>
        집에서도 만나는 <br />
        아동·청소년 전문 상담
      </span>
    ),
    image: "/images/business/business_1.png",
    alt: "방에서 노트북 화면을 보며 웃는 얼굴로 손을 흔드는 여자아이",
  },
  {
    title: "1:1 & 그룹 수업",
    body: (
      <span>
        아이에게 꼭 맞는 방식으로 <br />
        배우고 성장해요
      </span>
    ),
    image: "/images/business/business_2.png",
    alt: "화상 수업 화면에 네 명의 아이가 각자 자기 방에서 참여하고 있는 모습",
  },
  {
    title: "검증된 전문가",
    body: (
      <span>
        아동·청소년 전문 선생님을 <br />
        엄선해 연결합니다
      </span>
    ),
    image: "/images/business/business_3.png",
    alt: "사무실 테이블에 둘러앉아 노트북과 자료를 놓고 이야기하는 상담·교육 전문가들",
  },
];

export function Simbakids() {
  return (
    // 색인에서 건너뛸 때 sticky 헤더에 제목이 가리지 않도록 여백을 준다
    <Section id="simbakids" className="scroll-mt-20 sm:scroll-mt-24">
      <div className="text-center">
        <h2 className="t-label">심바키즈</h2>
        <p className="t-lead mx-auto mt-4 max-w-4xl sm:text-5xl">
          대한민국 No.1 아동·청소년 심리 상담 플랫폼
        </p>
      </div>

      <div className="mx-auto mt-12 max-w-4xl overflow-hidden rounded-xl border border-border bg-secondary sm:mt-14">
        <IntroVideo />
      </div>
      <p className="t-caption mx-auto mt-3 max-w-4xl text-center">
        소리 없이 자동 재생됩니다. 소리는 재생바에서 켜주세요.
      </p>

      <FeatureCards features={features} />

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
