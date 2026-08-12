import Image from "next/image";
import { Section, SectionHeading } from "@/components/layout/section";
import { cn } from "@/lib/utils";

/**
 * 팀 사진 4컷.
 * 원본 vision.png 는 4컷이 한 장에 붙어 있고 각 컷이 세로 0.30 비율로
 * 지나치게 길어, 컷마다 인물 위치를 보고 1:2 로 잘라 낸 파일이다.
 * src 가 비면 같은 비율의 자리표시자로 렌더한다.
 */
const photos: { label: string; src?: string; alt: string }[] = [
  {
    label: "높게",
    src: "/images/vision/vision_1.png",
    alt: "창가 보드에 메모를 붙이며 아이디어를 정리하는 팀원",
  },
  {
    label: "함께",
    src: "/images/vision/vision_2.png",
    alt: "화이트보드 앞 테이블에 모여 함께 화면을 보는 팀원들",
  },
  {
    label: "깊게",
    src: "/images/vision/vision_3.png",
    alt: "사무실에서 코드를 작성하는 팀원",
  },
  {
    label: "넓게",
    src: "/images/vision/vision_4.png",
    alt: "계단형 라운지에 둘러앉아 이야기를 나누는 팀원들",
  },
];

const values = [
  {
    title: "기준을 높게",
    body: (
      <span>
        익숙한 수준에 만족하지 않습니다.
        <br /> 끊임없이 기준을 높이고, <br />
        한계를 넘어 더 나은 결과를 만듭니다.
      </span>
    ),
  },
  {
    title: "주도적으로",
    body: (
      <span>
        더 나은 결과를 위해 스스로 판단하고 실행합니다.
        <br /> 서로를 존중하며 적극적으로 소통하고, 팀의 목표를 위해 필요한 일을
        함께 만들어갑니다.
      </span>
    ),
  },
  {
    title: "빠르게",
    body: (
      <span>
        실패를 두려워하기보다 빠르게 시도하고 배웁니다. <br />
        어제보다 오늘 더 나은 사람이 되고, 그 성장의 속도를 즐깁니다.
      </span>
    ),
  },
  {
    title: "끝까지",
    body: (
      <span>
        쉽게 포기하지 않습니다. 안 되는 이유보다 될 수 있는 방법을 찾으며,{" "}
        <br />
        끝까지 최선의 답을 만들어갑니다.
      </span>
    ),
  },
];

export function Vision() {
  return (
    <Section>
      <SectionHeading label="Vision" lead="beyond space, for human growth" />
      <p className="t-caption mx-auto mt-4 max-w-3xl text-center font-bold">
        Enable everyone to understand children and provide them with the support
        they need.
      </p>

      <ul className="mt-14 grid grid-cols-2 gap-3 sm:mt-16 lg:grid-cols-4 lg:gap-4">
        {photos.map((photo) => (
          <li
            key={photo.label}
            className="relative aspect-1/2 overflow-hidden rounded-lg bg-secondary"
          >
            {photo.src ? (
              <>
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  className="object-cover"
                />
                {/* 어떤 사진 위에서도 흰 글씨가 읽히도록 하단만 어둡게 깐다 */}
                <span
                  aria-hidden
                  className="absolute inset-x-0 bottom-0 h-2/5 bg-linear-to-t from-black/60 to-transparent"
                />
              </>
            ) : (
              <span
                aria-hidden
                className="absolute inset-0 border border-dashed border-border"
              />
            )}

            <span
              className={cn(
                "t-title absolute inset-x-0 bottom-3 text-center sm:bottom-4 sm:text-4xl",
                photo.src ? "text-white" : "text-muted-foreground",
              )}
            >
              {photo.label}
            </span>
          </li>
        ))}
      </ul>

      <dl className="mt-16 grid gap-x-16 gap-y-10 sm:mt-20 md:grid-cols-2">
        {values.map((value) => (
          <div key={value.title}>
            <dt className="t-title sm:text-3xl">{value.title}</dt>
            <dd className="t-body measure mt-3">{value.body}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
