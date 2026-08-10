import Link from "next/link";
import { Hero } from "@/components/sections/hero";
import { WhoWeAre } from "@/components/sections/who-we-are";
import { Solutions } from "@/components/sections/solutions";
import { Certifications } from "@/components/sections/certifications";
import { ContactForm } from "@/components/sections/contact-form";
import { Section } from "@/components/layout/section";
import { companyInfo } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhoWeAre />
      <Solutions />
      <Certifications />

      <Section bordered={false}>
        <div className="mx-auto max-w-xl">
          <div className="text-center">
            <h2 className="t-label">Contact us</h2>
            <p className="t-lead mt-4">궁금한 점을 남겨주세요.</p>
            <p className="t-body-sm mt-3">
              바로 보내려면{" "}
              <a
                href={`mailto:${companyInfo.email}`}
                className="font-medium text-foreground underline underline-offset-4 transition-colors hover:text-brand-ink"
              >
                {companyInfo.email}
              </a>
              , 또는{" "}
              <Link
                href="/contact"
                className="font-medium text-foreground underline underline-offset-4 transition-colors hover:text-brand-ink"
              >
                문의 페이지
              </Link>
              를 이용하세요.
            </p>
          </div>

          <div className="mt-10">
            <ContactForm />
          </div>
        </div>
      </Section>
    </>
  );
}
