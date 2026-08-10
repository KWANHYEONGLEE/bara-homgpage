import type { Metadata } from "next";
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
      {/*
        시안에 페이지 제목 영역이 없어 화면에는 그대로 두고,
        문서 구조상 필요한 h1 만 스크린리더용으로 둔다.
        (각 사업 섹션이 h2, 그 안의 항목이 h3)
      */}
      <h1 className="sr-only">사업소개</h1>
      <Simbakids />
      <AiCoach />
      <BaraImpact />
    </>
  );
}
