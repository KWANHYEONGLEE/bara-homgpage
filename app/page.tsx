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
        <ContactForm />
      </Section>
    </>
  );
}
