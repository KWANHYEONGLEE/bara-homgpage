import type { Metadata } from "next";
import { BusinessHero } from "@/components/sections/business-hero";
import { Simbakids } from "@/components/sections/simbakids";
import { AiCoach } from "@/components/sections/ai-coach";
import { BaraImpact } from "@/components/sections/bara-impact";

export const metadata: Metadata = {
  title: "사업소개",
  description:
    "아동·청소년 심리 상담 플랫폼 심바키즈, AI 부모코칭, 바라 임팩트 솔루션. 바라스페이스가 하는 일을 소개합니다.",
};

export default function BusinessPage() {
  return (
    <>
      <BusinessHero />
      <Simbakids />
      <AiCoach />
      <BaraImpact />
    </>
  );
}
