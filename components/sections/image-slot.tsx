import { cn } from "@/lib/utils";

/**
 * 실제 이미지가 들어올 자리.
 * 에셋을 받기 전까지 비율만 잡아 두어 레이아웃이 흔들리지 않게 한다.
 */
export function ImageSlot({
  label,
  className,
}: {
  /** 이 자리에 무엇이 들어오는지 */
  label: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex items-center justify-center rounded-xl border border-dashed border-border bg-secondary p-6 text-center",
        className,
      )}
    >
      <span className="t-caption">{label}</span>
    </div>
  );
}
