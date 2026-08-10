import Image from "next/image";
import { cn } from "@/lib/utils";

type MediaProps = {
  /** 실제 이미지 경로. 없으면 자리표시자를 렌더한다. */
  src?: string;
  alt: string;
  /** 자리표시자에 표시할 안내 문구 */
  hint?: string;
  className?: string;
};

/**
 * 시안의 솔루션 이미지 슬롯.
 * 아직 실제 에셋이 없으므로 src 가 비면 비율만 잡힌 자리표시자를 보여준다.
 */
export function Media({ src, alt, hint, className }: MediaProps) {
  return (
    <div
      className={cn(
        "relative aspect-[4/3] overflow-hidden rounded-2xl bg-secondary",
        className,
      )}
    >
      {src ? (
        <Image src={src} alt={alt} fill className="object-cover" sizes="(min-width: 768px) 50vw, 100vw" />
      ) : (
        <div className="flex size-full flex-col items-center justify-center gap-2 border border-dashed border-border p-6 text-center">
          <span className="text-sm font-medium text-muted-foreground">
            {alt}
          </span>
          {hint && (
            <span className="text-xs text-muted-foreground/70">{hint}</span>
          )}
        </div>
      )}
    </div>
  );
}
