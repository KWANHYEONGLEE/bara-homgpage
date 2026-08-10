import { cn } from "@/lib/utils";

type SectionProps = React.ComponentProps<"section"> & {
  /** 섹션 사이 구분선 */
  bordered?: boolean;
};

export function Section({
  className,
  bordered = true,
  children,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(
        "px-5 py-20 sm:py-28 lg:px-8 lg:py-32",
        bordered && "border-b border-border",
        className,
      )}
      {...props}
    >
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  );
}

/** 시안의 중앙 정렬 섹션 제목 (영문 라벨 + 국문 부제) */
export function SectionHeading({
  label,
  title,
  className,
}: {
  label: string;
  title?: string;
  className?: string;
}) {
  return (
    <div className={cn("text-center", className)}>
      <h2 className="text-xl font-bold sm:text-2xl">{label}</h2>
      {title && (
        <p className="mt-3 text-base font-bold text-foreground sm:text-lg">
          {title}
        </p>
      )}
    </div>
  );
}
