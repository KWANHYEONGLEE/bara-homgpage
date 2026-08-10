import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/page-header";
import { Section } from "@/components/layout/section";

export const metadata: Metadata = {
  title: "뉴스룸",
  description: "바라스페이스의 소식과 보도자료를 전합니다.",
};

type NewsItem = {
  title: string;
  date: string;
  href: string;
  source?: string;
};

/**
 * 시안에 뉴스룸 화면이 없어 목록 구조만 잡아둔다.
 * 항목을 채우면 그대로 렌더되고, 비어 있으면 안내 문구를 보여준다.
 */
const news: NewsItem[] = [];

export default function NewsroomPage() {
  return (
    <>
      <PageHeader
        title="뉴스룸"
        description="바라스페이스의 소식과 보도자료를 전합니다."
      />

      <Section bordered={false}>
        {news.length === 0 ? (
          <p className="py-16 text-center text-[15px] text-muted-foreground">
            준비 중입니다. 곧 새로운 소식을 전해드리겠습니다.
          </p>
        ) : (
          <ul className="divide-y divide-border">
            {news.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col gap-2 py-6 transition-colors hover:text-brand-ink sm:flex-row sm:items-baseline sm:justify-between sm:gap-8"
                >
                  <span className="text-base font-medium">{item.title}</span>
                  <span className="shrink-0 text-sm text-muted-foreground">
                    {item.source ? `${item.source} · ` : ""}
                    {item.date}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        )}
      </Section>
    </>
  );
}
