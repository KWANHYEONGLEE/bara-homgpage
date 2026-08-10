import Image from "next/image";
import { cn } from "@/lib/utils";

type MediaProps = {
  /** 실제 이미지 경로. 없으면 자리표시자를 렌더한다. */
  src?: string;
  alt: string;
  width?: number;
  height?: number;
  /** 자리표시자에 표시할 안내 문구 */
  hint?: string;
  className?: string;
};

/**
 * 솔루션 이미지 슬롯.
 * 에셋 자체에 여백이 포함돼 있어 별도 배경이나 비율 강제 없이
 * 원본 종횡비 그대로 렌더한다.
 */
export function Media({
  src,
  alt,
  width,
  height,
  hint,
  className,
}: MediaProps) {
  if (!src) {
    return (
      <div
        className={cn(
          "flex aspect-4/3 flex-col items-center justify-center gap-2 rounded-2xl border border-dashed border-border bg-secondary p-6 text-center",
          className,
        )}
      >
        <span className="text-sm font-medium text-muted-foreground">{alt}</span>
        {hint && (
          <span className="text-xs text-muted-foreground/70">{hint}</span>
        )}
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width ?? 1121}
      height={height ?? 937}
      sizes="(min-width: 768px) 50vw, 100vw"
      className={cn("h-auto w-full", className)}
    />
  );
}
