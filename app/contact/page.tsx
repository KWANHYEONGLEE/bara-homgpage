import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/page-header";
import { Section } from "@/components/layout/section";
import { ContactForm } from "@/components/sections/contact-form";

export const metadata: Metadata = {
  title: "문의",
  description: "바라스페이스에 문의를 남겨주세요.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="문의"
        description="사업 제휴, 임팩트 사업, 채용 등 무엇이든 편하게 문의해주세요."
      />
      <Section bordered={false}>
        <ContactForm />
      </Section>
    </>
  );
}
