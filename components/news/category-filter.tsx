import Link from "next/link";
import { cn } from "@/lib/utils";
import { newsCategories, newsPosts } from "@/lib/newsroom";

/**
 * 분류 필터.
 * 상태를 쿼리스트링에 두어 서버에서 렌더하고, 특정 분류의 목록을
 * 그대로 공유하거나 북마크할 수 있게 한다.
 */
export function CategoryFilter({ active }: { active?: string }) {
  const counts = newsCategories.map((category) => ({
    ...category,
    count: newsPosts.filter((p) => p.category === category.slug).length,
  }));

  const tabs = [
    { slug: undefined, label: "전체", count: newsPosts.length },
    ...counts,
  ];

  return (
    <nav aria-label="소식 분류">
      <ul className="flex flex-wrap gap-2">
        {tabs.map((tab) => {
          const isActive = (tab.slug ?? undefined) === (active ?? undefined);
          return (
            <li key={tab.label}>
              <Link
                href={tab.slug ? `/newsroom?category=${tab.slug}` : "/newsroom"}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "inline-flex items-center gap-1.5 rounded-full border px-4 py-2 text-[15px] transition-colors",
                  isActive
                    ? "border-foreground bg-foreground font-semibold text-background"
                    : "border-border text-foreground/80 hover:border-foreground/30 hover:text-brand-ink",
                )}
              >
                {tab.label}
                <span
                  className={cn(
                    "tabular-nums",
                    isActive ? "text-background/70" : "text-muted-foreground",
                  )}
                >
                  {tab.count}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
