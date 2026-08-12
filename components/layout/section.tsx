import { cn } from "@/lib/utils";

type SectionProps = React.ComponentProps<"section"> & {
  /** 섹션 사이 구분선 */
  bordered?: boolean;
  /**
   * 배경 톤. 구분선 대신 이 톤을 번갈아 써서 섹션을 나눈다.
   * 선 하나를 긋는 것보다 덩어리가 나뉘어 보인다.
   */
  tone?: "default" | "muted";
};

export function Section({
  className,
  bordered = true,
  tone = "default",
  children,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(
        "px-5 py-20 sm:py-24 lg:px-8 lg:py-32",
        bordered && "border-b border-border",
        tone === "muted" && "bg-surface",
        className,
      )}
      {...props}
    >
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  );
}

/**
 * 섹션 머리.
 * label 은 분류표(Who We Are, Solution)라 작은 브랜드 라벨로 두고,
 * 섹션이 실제로 하는 말인 lead 가 시각적 제목 역할을 맡는다.
 */
export function SectionHeading({
  label,
  lead,
  align = "center",
  className,
}: {
  label: string;
  lead?: string;
  align?: "center" | "start";
  className?: string;
}) {
  return (
    <div className={cn(align === "center" && "text-center", className)}>
      <h2 className="t-heading">{label}</h2>
      {lead && (
        <p
          className={cn(
            "t-lead mt-4",
            align === "center" && "mx-auto max-w-2xl",
          )}
        >
          {lead}
        </p>
      )}
    </div>
  );
}
