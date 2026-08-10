import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { formatNewsDate, type NewsPost } from "@/lib/newsroom";

export function NewsCard({ post }: { post: NewsPost }) {
  return (
    <li>
      <a
        href={post.url}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex h-full flex-col overflow-hidden rounded-xl border border-border transition-colors hover:border-foreground/25"
      >
        <div className="relative aspect-16/10 shrink-0 overflow-hidden bg-secondary">
          {post.thumbnail ? (
            <Image
              src={post.thumbnail}
              alt=""
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
            />
          ) : (
            <span
              aria-hidden
              className="absolute inset-0 border-b border-dashed border-border"
            />
          )}
        </div>

        {/* mt-auto 로 날짜를 아래에 붙여, 제목 길이가 달라도 카드 밑단이 맞는다 */}
        <div className="flex flex-1 flex-col p-5">
          <h3 className="t-title line-clamp-2 transition-colors group-hover:text-brand-ink">
            {post.title}
          </h3>
          <p className="t-body mt-2.5 line-clamp-2 text-[15px] leading-[1.7]">
            {post.excerpt}
          </p>

          <div className="mt-auto flex items-center justify-between gap-3 pt-5">
            <time dateTime={post.date} className="t-caption">
              {formatNewsDate(post.date)}
            </time>
            {/* 전부 외부 기사라 제목 옆이 아니라 여기에서 조용히 알린다 */}
            <ArrowUpRight
              aria-hidden
              className="size-4 shrink-0 text-muted-foreground transition-colors group-hover:text-brand-ink"
            />
            <span className="sr-only">새 창에서 열림</span>
          </div>
        </div>
      </a>
    </li>
  );
}
