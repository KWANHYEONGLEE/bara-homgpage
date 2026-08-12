import Link from "next/link";
import { Hero } from "@/components/sections/hero";
import { WhoWeAre } from "@/components/sections/who-we-are";
import { Solutions } from "@/components/sections/solutions";
import { Certifications } from "@/components/sections/certifications";
import { ContactForm } from "@/components/sections/contact-form";
import { Section } from "@/components/layout/section";

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
          </div>

          <div className="mt-10">
            <ContactForm />
          </div>
        </div>
      </Section>
    </>
  );
}
