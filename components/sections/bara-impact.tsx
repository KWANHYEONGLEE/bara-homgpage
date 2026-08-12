import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/layout/section";
import { FeatureCards, type Feature } from "@/components/sections/feature-cards";
import { Media } from "@/components/sections/media-placeholder";
import { imageCrops } from "@/lib/media";
import { StepList, type Step } from "@/components/sections/step-list";
import { Button } from "@/components/ui/button";

/** 기회 -> 지속 -> 확산. 임팩트가 넓어지는 순서다. */
const steps: Step[] = [
  {
    title: "기회를 넓히고",
    body: "배움의 기회가 환경에 따라 달라지지 않도록. 아이에게 필요한 사회정서·관계·학습의 경험을 더 가까이 전합니다.",
  },
  {
    title: "성장을 이어가고",
    body: "한 번의 지원이 아닌, 아이의 변화가 이어질 수 있도록. 아이의 일상과 연결된 지속 가능한 성장 경험을 만듭니다.",
  },
  {
    title: "함께 바꾸고",
    body: "아이의 성장은 우리 모두가 함께 만드는 변화입니다. 학교·지역사회·기업·전문가를 연결해 더 많은 아이에게 기회가 닿게 합니다.",
  },
];

const features: Feature[] = [
  {
    title: "기회를 더 넓게",
    body: (
      <span>
        더 많은 아이에게 <br />
        배움의 기회를 연결합니다.
      </span>
    ),
    image: "/images/business/business_7.png",
    alt: "야외에 나란히 서서 수료증을 들고 환하게 웃는 아이들",
  },
  {
    title: "성장을 더 오래",
    body: (
      <span>
        일회성을 넘어 <br />
        지속적인 성장을 지원합니다.
      </span>
    ),
    image: "/images/business/business_8.png",
    alt: "나무가 우거진 길에서 손을 마주치며 인사하는 두 학생",
  },
  {
    title: "변화를 함께",
    body: (
      <span>
        지역사회와 함께 <br />
        성장의 기반을 만듭니다.
      </span>
    ),
    image: "/images/business/business_9.png",
    alt: "교실 바닥에 둘러앉아 카드 활동을 함께하는 선생님과 아이들",
  },
];

export function BaraImpact() {
  return (
    <Section
      id="bara-impact"
      bordered={false}
      className="scroll-mt-20 sm:scroll-mt-24"
    >
      <div className="text-center">
        <h2 className="t-heading">바라 임팩트</h2>
        <p className="t-lead mx-auto mt-4 max-w-2xl">
          교육·돌봄 사각지대를 지원하는 ‘바라 임팩트’
        </p>
      </div>

      {/* 원본에 여백이 포함돼 있어 홈과 같은 좌표로 잘라 낸다 */}
      <Media
        src="/images/solutions/solution_3.png"
        alt="지역사회·학교·전문가를 연결하는 바라 임팩트 솔루션 구조도"
        {...imageCrops.solution3}
        className="mx-auto mt-12 max-w-2xl sm:mt-14"
      />
      <FeatureCards features={features} />

      {/* <div className="mx-auto mt-14 max-w-2xl sm:mt-16">
        <StepList steps={steps} />
      </div> */}

      <div className="mt-12 text-center sm:mt-14">
        <Button asChild size="lg" className="rounded-full">
          <Link href="/contact">
            바라 임팩트 문의하기
            <ArrowRight className="size-4" />
          </Link>
        </Button>
      </div>
    </Section>
  );
}
