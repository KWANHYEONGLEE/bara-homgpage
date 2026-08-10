import type { Metadata } from "next";
import { Section } from "@/components/layout/section";
import { CategoryFilter } from "@/components/news/category-filter";
import { NewsCard } from "@/components/news/news-card";
import { Pagination } from "@/components/news/pagination";
import {
  POSTS_PER_PAGE,
  newsPosts,
  selectPosts,
} from "@/lib/newsroom";

export const metadata: Metadata = {
  title: "뉴스룸",
  description: "바라스페이스의 소식과 보도자료를 전합니다.",
};

export default async function NewsroomPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string; page?: string }>;
}) {
  const { category, page: pageParam } = await searchParams;

  const posts = selectPosts(category);
  const totalPages = Math.max(1, Math.ceil(posts.length / POSTS_PER_PAGE));
  // 범위를 벗어난 page 로 들어와도 빈 화면이 되지 않게 잘라 둔다
  const page = Math.min(Math.max(1, Number(pageParam) || 1), totalPages);
  const visible = posts.slice(
    (page - 1) * POSTS_PER_PAGE,
    page * POSTS_PER_PAGE,
  );

  return (
    <>
      <section className="hero-gradient -mt-16 px-5 pb-16 pt-32 sm:-mt-18 sm:pb-20 sm:pt-36 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="t-label">뉴스룸</p>
          <h1 className="t-lead mt-4">
            바라스페이스의 소식과 보도자료를 전합니다.
          </h1>
        </div>
      </section>

      <Section bordered={false}>
        <CategoryFilter active={category} />

        {visible.length === 0 ? (
          <p className="t-body py-20 text-center">
            {newsPosts.length === 0
              ? "준비 중입니다. 곧 새로운 소식을 전해드리겠습니다."
              : "이 분류에는 아직 소식이 없습니다."}
          </p>
        ) : (
          <>
            <ul className="mt-10 divide-y divide-border border-b border-border">
              {visible.map((post) => (
                <NewsCard key={post.slug} post={post} />
              ))}
            </ul>
            <Pagination
              page={page}
              totalPages={totalPages}
              category={category}
            />
          </>
        )}
      </Section>
    </>
  );
}
