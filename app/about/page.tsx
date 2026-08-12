import type { Metadata } from "next";
import { AboutHero } from "@/components/sections/about-hero";
import { FoundingStory } from "@/components/sections/founding-story";
import { Vision } from "@/components/sections/vision";
import { History } from "@/components/sections/history";

export const metadata: Metadata = {
  title: "회사소개",
  description:
    "간절한 바람이 세상을 바꾸는 바람이 되도록. 바라스페이스가 걸어온 길과 일하는 방식을 소개합니다.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <FoundingStory />
      <Vision />
      <History />
    </>
  );
}
