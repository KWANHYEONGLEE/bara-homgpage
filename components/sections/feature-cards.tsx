import Image from "next/image";

export type Feature = {
  title: string;
  /** 줄바꿈을 직접 넣는 경우가 있어 문자열이 아니라 노드로 받는다 */
  body: React.ReactNode;
  image: string;
  alt: string;
};

/**
 * 사업 특징 카드 3장. 세 섹션이 같은 모양을 쓴다.
 *
 * 사진이 가로형(비율 0.97~1.50)으로 바뀌었는데 카드는 세로 4:5 로
 * 담고 있어, 가로 사진을 세로로 잘라내며 카드 키만 키우고 있었다.
 * 3:2 가로로 바꿔 원본 비율에 가깝게 담는다.
 *
 * 모바일에서는 세 장을 세로로 쌓는 대신 가로 스크롤로 둔다.
 * 카드 폭을 화면의 58% 로 잡아 다음 카드가 걸쳐 보이게 해서,
 * 옆으로 넘길 수 있다는 것이 스크롤바 없이도 드러나게 했다.
 * 3열이 들어가는 md 부터는 평범한 그리드로 돌아간다.
 */
export function FeatureCards({
  features,
  label = "주요 특징",
}: {
  features: Feature[];
  /** 가로 스크롤 영역을 키보드로 만났을 때 읽히는 이름 */
  label?: string;
}) {
  return (
    <div
      // 카드가 화면 끝까지 흐르도록 섹션 좌우 여백을 잠시 벗어난다
      className="-mx-5 mt-12 overflow-x-auto px-5 pb-2 [scrollbar-width:none] sm:mt-14 md:mx-0 md:overflow-x-visible md:px-0 md:pb-0 [&::-webkit-scrollbar]:hidden"
      // 스크롤 영역은 키보드로도 닿아야 한다
      tabIndex={0}
      role="region"
      aria-label={label}
    >
      <ul className="flex snap-x snap-mandatory scroll-px-5 gap-4 md:grid md:snap-none md:grid-cols-3 md:gap-5 md:scroll-px-0">
        {features.map((feature) => (
          <li
            key={feature.title}
            className="w-[58vw] shrink-0 snap-start overflow-hidden rounded-xl border border-border sm:w-[40vw] md:w-auto"
          >
            <div className="relative aspect-3/2 border-b border-border bg-secondary">
              <Image
                src={feature.image}
                alt={feature.alt}
                fill
                sizes="(min-width: 768px) 33vw, (min-width: 640px) 40vw, 58vw"
                className="object-cover"
              />
            </div>

            <div className="p-4 sm:p-5">
              <h3 className="t-title font-bold">{feature.title}</h3>
              <p className="t-body-sm mt-2">{feature.body}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
