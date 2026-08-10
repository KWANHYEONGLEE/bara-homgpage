import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

function pageHref(page: number) {
  return page > 1 ? `/newsroom?page=${page}` : "/newsroom";
}

export function Pagination({
  page,
  totalPages,
}: {
  page: number;
  totalPages: number;
}) {
  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  const arrow =
    "inline-flex size-9 items-center justify-center rounded-md border border-border transition-colors";

  return (
    <nav aria-label="페이지" className="mt-14 flex justify-center">
      <ul className="flex items-center gap-1.5">
        <li>
          {page > 1 ? (
            <Link
              href={pageHref(page - 1)}
              aria-label="이전 페이지"
              className={cn(arrow, "hover:text-brand-ink")}
            >
              <ChevronLeft className="size-4" />
            </Link>
          ) : (
            <span aria-hidden className={cn(arrow, "text-muted-foreground/40")}>
              <ChevronLeft className="size-4" />
            </span>
          )}
        </li>

        {pages.map((n) => (
          <li key={n}>
            <Link
              href={pageHref(n)}
              aria-current={n === page ? "page" : undefined}
              className={cn(
                "inline-flex size-9 items-center justify-center rounded-md text-[15px] tabular-nums transition-colors",
                n === page
                  ? "bg-foreground font-semibold text-background"
                  : "text-foreground/80 hover:text-brand-ink",
              )}
            >
              {n}
            </Link>
          </li>
        ))}

        <li>
          {page < totalPages ? (
            <Link
              href={pageHref(page + 1)}
              aria-label="다음 페이지"
              className={cn(arrow, "hover:text-brand-ink")}
            >
              <ChevronRight className="size-4" />
            </Link>
          ) : (
            <span aria-hidden className={cn(arrow, "text-muted-foreground/40")}>
              <ChevronRight className="size-4" />
            </span>
          )}
        </li>
      </ul>
    </nav>
  );
}
