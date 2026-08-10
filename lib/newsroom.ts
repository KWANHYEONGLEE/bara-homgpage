export type NewsCategorySlug = "company" | "press" | "service";

export const newsCategories: { slug: NewsCategorySlug; label: string }[] = [
  { slug: "company", label: "기업 소식" },
  { slug: "press", label: "보도자료" },
  { slug: "service", label: "서비스 소식" },
];

export type NewsPost = {
  /** 목록에서의 식별자. 상세 페이지를 만들면 /newsroom/[slug] 로 쓴다 */
  slug: string;
  title: string;
  /** 목록에 보이는 두 줄 요약 */
  excerpt: string;
  /** YYYY-MM-DD */
  date: string;
  category: NewsCategorySlug;
  /** public/ 기준 경로. 없으면 자리표시자가 렌더된다 */
  thumbnail?: string;
  /** 외부 기사로 연결할 때만 채운다. 비우면 상세 페이지로 간다 */
  externalUrl?: string;
};

/**
 * 소식 목록.
 *
 * 여기에 항목을 추가하면 목록·분류·페이지가 모두 자동으로 채워진다.
 * 비어 있는 동안에는 페이지가 안내 문구를 대신 보여준다.
 *
 * 예시:
 *   {
 *     slug: "2026-08-partnership",
 *     title: "바라스페이스, 지역아동센터와 협력체계 확대",
 *     excerpt: "교육·돌봄 사각지대 아동을 위한 사회정서 프로그램을 ...",
 *     date: "2026-08-01",
 *     category: "company",
 *     thumbnail: "/images/newsroom/2026-08-partnership.png",
 *   }
 */
export const newsPosts: NewsPost[] = [];

export const POSTS_PER_PAGE = 10;

/** 최신순 정렬 + 분류 필터 */
export function selectPosts(category?: string) {
  const valid = newsCategories.some((c) => c.slug === category);
  return newsPosts
    .filter((post) => (valid ? post.category === category : true))
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function categoryLabel(slug: NewsCategorySlug) {
  return newsCategories.find((c) => c.slug === slug)?.label ?? slug;
}

/** 목록에 보여줄 날짜 표기 (2026.08.01) */
export function formatNewsDate(date: string) {
  return date.replaceAll("-", ".");
}
