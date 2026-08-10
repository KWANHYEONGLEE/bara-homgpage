import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import {
  categoryLabel,
  formatNewsDate,
  type NewsPost,
} from "@/lib/newsroom";

export function NewsCard({ post }: { post: NewsPost }) {
  const external = Boolean(post.externalUrl);
  const href = post.externalUrl ?? `/newsroom/${post.slug}`;

  return (
    <li>
      <Link
        href={href}
        {...(external
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
        className="group grid gap-4 py-7 sm:grid-cols-[13rem_minmax(0,1fr)] sm:gap-7"
      >
        <div className="relative aspect-16/10 overflow-hidden rounded-lg bg-secondary">
          {post.thumbnail ? (
            <Image
              src={post.thumbnail}
              alt=""
              fill
              sizes="(min-width: 640px) 13rem, 100vw"
              className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
            />
          ) : (
            <span
              aria-hidden
              className="absolute inset-0 border border-dashed border-border"
            />
          )}
        </div>

        {/* 목록 폭을 그대로 쓰면 한 줄이 60자를 넘어 훑기 어렵다 */}
        <div className="min-w-0 max-w-2xl">
          <div className="flex items-center gap-2.5">
            <span className="t-label">{categoryLabel(post.category)}</span>
            <span aria-hidden className="h-2.5 w-px bg-border" />
            <time dateTime={post.date} className="t-caption">
              {formatNewsDate(post.date)}
            </time>
          </div>

          <h3 className="t-title mt-2.5 transition-colors group-hover:text-brand-ink">
            {post.title}
            {external && (
              <ArrowUpRight
                aria-label="새 창에서 열림"
                className="ml-1 inline size-4 shrink-0 translate-y-[-1px]"
              />
            )}
          </h3>

          <p className="t-body mt-2 line-clamp-2 text-[15px] leading-[1.7]">
            {post.excerpt}
          </p>
        </div>
      </Link>
    </li>
  );
}
