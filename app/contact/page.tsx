import type { Metadata } from "next";
import { Section } from "@/components/layout/section";
import { ContactForm } from "@/components/sections/contact-form";
import { companyInfo } from "@/lib/site";

export const metadata: Metadata = {
  title: "문의",
  description:
    "사업 제휴, 임팩트 사업, 채용 등 무엇이든 편하게 문의해주세요. 바라스페이스 연락처를 안내합니다.",
};

export default function ContactPage() {
  return (
    <>
      <section className="hero-gradient -mt-16 px-5 pb-16 pt-32 sm:-mt-18 sm:pb-20 sm:pt-36 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="t-heading">문의</h1>
          <p className="t-lead mt-4">
            사업 제휴, 임팩트 사업, 채용 등 무엇이든 편하게 문의해주세요.
          </p>
        </div>
      </section>

      <Section bordered={false}>
        {/*
          이 폼은 서버로 보내지 않고 메일 앱을 여는 방식이라, 메일 주소를
          숨기지 않고 폼과 나란히 둔다. 메일 앱을 쓰지 않는 사람도
          막히지 않게 하기 위함이다.
        */}
        <div className="grid gap-12 md:grid-cols-[minmax(0,1fr)_minmax(0,1.35fr)] md:gap-16 lg:gap-24">
          <div>
            <h2 className="t-title">바로 연락하기</h2>

            <dl className="mt-6 space-y-6">
              <div>
                <dt className="t-caption">이메일</dt>
                <dd className="mt-1">
                  <a
                    href={`mailto:${companyInfo.email}`}
                    className="t-ui -my-1 inline-block py-2.5 font-medium underline underline-offset-4 transition-colors hover:text-brand-ink"
                  >
                    {companyInfo.email}
                  </a>
                </dd>
              </div>

              <div>
                <dt className="t-caption">주소</dt>
                <dd className="t-body-sm mt-1">{companyInfo.address}</dd>
              </div>
            </dl>
          </div>

          <div className="md:max-w-xl">
            <h2 className="t-title">문의 남기기</h2>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
