import Image from "next/image";
import { Section } from "@/components/layout/section";
import { cn } from "@/lib/utils";

/**
 * 인증·지원기관 로고.
 *
 * 원본 이미지는 캔버스 대비 로고가 차지하는 비율이 14~25%로 제각각이라,
 * 그대로 같은 높이에 넣으면 크기가 들쭉날쭉하게 보인다.
 * renderHeight 는 각 로고의 실제 잉크 영역이 약 80px 높이로 보이도록
 * 이미지별로 계산한 렌더 높이다. (컨테이너가 여백을 잘라낸다)
 */
const partners = [
  { name: "중소벤처기업부", file: "partners_1", w: 738, h: 689, renderHeight: 408 },
  { name: "여성기업", file: "partners_2", w: 738, h: 674, renderHeight: 400 },
  { name: "KOITA 한국산업기술진흥협회", file: "partners_3", w: 685, h: 674, renderHeight: 357 },
  { name: "한국사회적기업진흥원", file: "partners_4", w: 706, h: 706, renderHeight: 449 },
  { name: "RIPC 지역지식재산센터", file: "partners_5", w: 753, h: 674, renderHeight: 563 },
  { name: "KOSME 중소벤처기업진흥공단", file: "partners_6", w: 689, h: 689, renderHeight: 319 },
  { name: "Start-up NEST", file: "partners_7", w: 706, h: 674, renderHeight: 412 },
];

function LogoItem({
  partner,
  duplicate,
}: {
  partner: (typeof partners)[number];
  duplicate?: boolean;
}) {
  return (
    <li
      aria-hidden={duplicate}
      className={cn(
        "flex h-28 w-52 shrink-0 items-center justify-center overflow-hidden sm:w-60",
        // 애니메이션을 끄면 복제본은 숨기고 원본만 감싸서 배치한다
        duplicate && "motion-reduce:hidden",
      )}
    >
      <Image
        src={`/images/partners/${partner.file}.png`}
        alt={partner.name}
        width={partner.w}
        height={partner.h}
        style={{ height: partner.renderHeight, width: "auto" }}
        className="max-w-none object-contain"
      />
    </li>
  );
}

export function Certifications() {
  return (
    <Section
      tone="muted"
      bordered={false}
      className="py-16 sm:py-20 lg:py-24"
    >
      {/* 화면에는 로고만 흐르고, 이 목록이 무엇인지는 스크린리더에 전달한다 */}
      <h2 className="sr-only">인증 및 지원기관</h2>

      <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_6%,#000_94%,transparent)] motion-reduce:[mask-image:none]">
        <ul
          className={cn(
            "flex w-max animate-marquee items-center",
            // 포인터를 올리면 읽을 수 있도록 멈춘다
            "hover:[animation-play-state:paused]",
            // 모션 최소화 설정에서는 정지 상태로 줄바꿈 배치
            "motion-reduce:w-full motion-reduce:animate-none motion-reduce:flex-wrap motion-reduce:justify-center motion-reduce:gap-y-4",
          )}
        >
          {partners.map((p) => (
            <LogoItem key={p.file} partner={p} />
          ))}
          {partners.map((p) => (
            <LogoItem key={`${p.file}-dup`} partner={p} duplicate />
          ))}
        </ul>
      </div>
    </Section>
  );
}
