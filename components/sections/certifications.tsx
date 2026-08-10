import Image from "next/image";
import { Section } from "@/components/layout/section";

/**
 * 인증·지원기관 로고.
 * src 에 파일을 채우면 이미지로, 비어 있으면 기관명 텍스트로 렌더한다.
 * 에셋은 public/certifications/ 에 배치.
 */
const partners: { name: string; src?: string }[] = [
  { name: "중소벤처기업부" },
  { name: "여성기업" },
  { name: "KOITA 한국산업기술진흥협회" },
  { name: "한국사회적기업진흥원" },
  { name: "RIPC 지역지식재산센터" },
  { name: "KOSME 중소벤처기업진흥공단" },
  { name: "Start-up NEST" },
];

export function Certifications() {
  return (
    <Section className="py-16 sm:py-20 lg:py-24">
      <h2 className="sr-only">인증 및 지원기관</h2>

      <ul className="grid grid-cols-2 items-center justify-items-center gap-x-6 gap-y-10 sm:grid-cols-4 lg:grid-cols-7">
        {partners.map((partner) => (
          <li key={partner.name} className="flex justify-center">
            {partner.src ? (
              <Image
                src={partner.src}
                alt={partner.name}
                width={120}
                height={56}
                className="h-12 w-auto object-contain sm:h-14"
              />
            ) : (
              <span className="flex h-12 items-center px-2 text-center text-xs leading-tight text-muted-foreground sm:h-14">
                {partner.name}
              </span>
            )}
          </li>
        ))}
      </ul>
    </Section>
  );
}
