import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/layout/section";
import { ImageSlot } from "@/components/sections/image-slot";
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

export function BaraImpact() {
  return (
    <Section bordered={false}>
      <div className="text-center">
        <h2 className="t-label">바라 임팩트</h2>
        <p className="t-lead mx-auto mt-4 max-w-2xl">
          교육·돌봄 사각지대의 아이와 지역사회를 잇습니다
        </p>
      </div>

      <ImageSlot
        label="바라 임팩트 솔루션 구조도 (지역사회·학교·전문가 연결 다이어그램)"
        className="mx-auto mt-12 aspect-square w-full max-w-2xl sm:mt-14"
      />

      <div className="mx-auto mt-14 max-w-2xl sm:mt-16">
        <StepList steps={steps} />
      </div>

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
