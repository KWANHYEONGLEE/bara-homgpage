export type NewsPost = {
  /** 목록 키. 중복만 없으면 된다 */
  id: string;
  title: string;
  /** 카드에 두 줄로 보이는 요약 */
  excerpt: string;
  /** YYYY-MM-DD */
  date: string;
  /** 기사 원문 주소. 항상 새 창으로 연다 */
  url: string;
  /** public/ 기준 경로. 없으면 자리표시자가 렌더된다 */
  thumbnail?: string;
};

/**
 * 소식 목록.
 *
 * 여기에 항목을 추가하면 카드 목록과 페이지 수가 자동으로 채워진다.
 * 비어 있는 동안에는 페이지가 안내 문구를 대신 보여준다.
 *
 * 예시:
 *   {
 *     id: "2026-08-partnership",
 *     title: "바라스페이스, 지역아동센터와 협력체계 확대",
 *     excerpt: "교육·돌봄 사각지대 아동을 위한 사회정서 프로그램을 ...",
 *     date: "2026-08-01",
 *     url: "https://example.com/article/123",
 *     thumbnail: "/images/newsroom/2026-08-partnership.png",
 *   }
 */
export const newsPosts: NewsPost[] = [];

/** 3열 그리드라 한 페이지를 3의 배수로 둔다 */
export const POSTS_PER_PAGE = 12;

/** 최신순 정렬 */
export function selectPosts() {
  return [...newsPosts].sort((a, b) => b.date.localeCompare(a.date));
}

/** 카드에 보여줄 날짜 표기 (2026.08.01) */
export function formatNewsDate(date: string) {
  return date.replaceAll("-", ".");
}
