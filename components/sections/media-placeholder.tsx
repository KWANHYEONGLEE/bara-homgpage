import Image from "next/image";
import { cn } from "@/lib/utils";

/** 원본 캔버스 크기와, 그 안에서 실제 그림이 차지하는 영역(px) */
export type Crop = {
  /** 캔버스 크기 */
  canvasW: number;
  canvasH: number;
  /** 콘텐츠 바운딩 박스 */
  x: number;
  y: number;
  w: number;
  h: number;
};

/**
 * 콘텐츠 영역이 컨테이너를 채우도록 여백을 잘라내는 좌표를 계산한다.
 *
 * 컨테이너 폭 W 는 콘텐츠 폭 w 에 대응하므로 배율 s = W/w 이고,
 * 이미지는 canvasW * s 로 커진 뒤 (-x * s) 만큼 왼쪽으로 밀린다.
 * 이를 컨테이너 대비 백분율로 환산한다.
 *
 * @param pad 콘텐츠 주변에 남길 여백 비율 (그림자 falloff 보호용)
 */
function cropToContent(c: Crop, pad = 0.04) {
  const padX = c.w * pad;
  const padY = c.h * pad;
  const w = c.w + padX * 2;
  const h = c.h + padY * 2;
  const x = c.x - padX;
  const y = c.y - padY;

  return {
    wrapper: { aspectRatio: `${w} / ${h}` },
    image: {
      position: "absolute" as const,
      width: `${(c.canvasW / w) * 100}%`,
      height: `${(c.canvasH / h) * 100}%`,
      left: `${(-x / w) * 100}%`,
      top: `${(-y / h) * 100}%`,
      maxWidth: "none",
    },
  };
}

type MediaProps = {
  src: string;
  alt: string;
  /** 원본에 여백이 포함된 경우, 잘라낼 콘텐츠 영역 */
  crop: Crop;
  className?: string;
};

export function Media({ src, alt, crop, className }: MediaProps) {
  const { wrapper, image } = cropToContent(crop);

  return (
    <div
      className={cn("relative w-full overflow-hidden", className)}
      style={wrapper}
    >
      <Image
        src={src}
        alt={alt}
        width={crop.canvasW}
        height={crop.canvasH}
        sizes="(min-width: 768px) 50vw, 100vw"
        style={image}
      />
    </div>
  );
}
