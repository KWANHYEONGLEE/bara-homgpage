import Image from "next/image";
import { cn } from "@/lib/utils";

/**
 * 바라스페이스 워드마크.
 *
 * 원본은 500x500 캔버스에 워드마크가 412x114 @ (44,193) 로만 들어 있어
 * 그대로 쓰면 위아래 여백 때문에 로고가 작아 보인다.
 * 컨테이너가 여백을 잘라내 워드마크 높이 = 지정한 높이가 되게 한다.
 */
const MARK = { canvasW: 500, canvasH: 500, x: 44, y: 193, w: 412, h: 114 };

export function SiteLogo({
  className,
  priority,
}: {
  className?: string;
  priority?: boolean;
}) {
  const { canvasW, canvasH, x, y, w, h } = MARK;

  return (
    <span
      className={cn("relative block overflow-hidden", className)}
      style={{ aspectRatio: `${w} / ${h}` }}
    >
      <Image
        src="/images/bara-logo-bg.png"
        alt="바라스페이스"
        width={canvasW}
        height={canvasH}
        priority={priority}
        style={{
          position: "absolute",
          width: `${(canvasW / w) * 100}%`,
          height: `${(canvasH / h) * 100}%`,
          left: `${(-x / w) * 100}%`,
          top: `${(-y / h) * 100}%`,
          maxWidth: "none",
        }}
      />
    </span>
  );
}
