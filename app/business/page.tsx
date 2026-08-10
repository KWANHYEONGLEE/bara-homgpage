import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/page-header";
import { Solutions } from "@/components/sections/solutions";

export const metadata: Metadata = {
  title: "사업소개",
  description:
    "심바키즈, AI 부모코칭, 바라 임팩트 솔루션 — 아이의 모든 일상 속으로.",
};

export default function BusinessPage() {
  return (
    <>
      <PageHeader
        title="사업소개"
        description="아이의 모든 일상 속으로, 부모의 가장 가까운 손끝으로."
      />
      <Solutions />
    </>
  );
}
