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
 * 모바일에서 세로로 쌓으면 사진 한 장이 333x416 으로 카드의 74% 를
 * 차지해 화면을 다 먹는다. 그렇다고 비율만 낮추면 원본이 세로 사진이라
 * (272x350) 크게 잘려나간다 — 특히 두 장면이 위아래로 붙은 컷은
 * 가운데가 잘려 어색해진다.
 *
 * 그래서 좁은 화면에서는 사진을 왼쪽 썸네일로 눕히고,
 * 3열이 되는 md 부터 원래의 세로 카드로 돌아간다. 잘라내지 않는다.
 */
export function FeatureCards({ features }: { features: Feature[] }) {
  return (
    <ul className="mt-12 grid gap-5 sm:mt-14 md:grid-cols-3 md:text-center">
      {features.map((feature) => (
        <li
          key={feature.title}
          className="flex overflow-hidden rounded-xl border border-border md:flex-col"
        >
          {/* 원본 사진이 272x350 이라 4:5 로 담는다 */}
          <div className="relative aspect-4/5 w-32 shrink-0 self-start border-r border-border bg-secondary sm:w-44 md:w-full md:self-auto md:border-r-0 md:border-b">
            <Image
              src={feature.image}
              alt={feature.alt}
              fill
              sizes="(min-width: 768px) 33vw, (min-width: 640px) 11rem, 8rem"
              className="object-cover"
            />
          </div>

          {/* flex-1 이 없으면 글이 짧을 때 카드 오른쪽이 비어 보인다 */}
          <div className="min-w-0 flex-1 self-center p-4 sm:p-5 md:self-auto">
            <h3 className="t-title font-bold sm:text-3xl">{feature.title}</h3>
            <p className="t-body mt-2.5 font-semibold sm:text-2xl">
              {feature.body}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
}
