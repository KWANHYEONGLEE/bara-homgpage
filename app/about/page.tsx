import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/page-header";
import { WhoWeAre } from "@/components/sections/who-we-are";
import { Certifications } from "@/components/sections/certifications";

export const metadata: Metadata = {
  title: "회사소개",
  description:
    "바라스페이스는 아이의 미래를 바꾸고, 부모의 성장을 돕는 기업입니다.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="회사소개"
        description="아이의 사회·정서 학습부터 부모의 성장까지, 기술과 전문가의 경험을 연결합니다."
      />
      <WhoWeAre />
      <Certifications />
    </>
  );
}
