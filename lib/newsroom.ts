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
 * 여기에 항목을 추가하면 카드 목록과 페이지 수가 자동으로 채워진다.
 * 비어 있으면 페이지가 안내 문구를 대신 보여준다.
 *
 * ─────────────────────────────────────────────────────────────
 * ⚠ 아래 항목은 화면 확인용 목업입니다. 공개 전 반드시 지우세요.
 *
 * 제목·날짜는 회사소개 연혁의 실제 항목을 옮긴 것이지만,
 * 요약문은 형태를 보기 위해 임의로 쓴 문장이고
 * url 은 전부 example.com 을 가리키는 가짜 주소입니다.
 * 썸네일도 기존 사업/팀 이미지를 임시로 돌려 쓴 것입니다.
 * ─────────────────────────────────────────────────────────────
 */
export const newsPosts: NewsPost[] = [
  {
    id: "mock-2026-07-ip-nare",
    title: "바라스페이스, 지식재산센터 IP 나래 특허지원사업 선정",
    excerpt:
      "지역지식재산센터의 IP 나래 프로그램에 선정되어 아동·청소년 심리 상담 기술의 지식재산 확보를 이어갑니다.",
    date: "2026-07-15",
    url: "https://example.com/news/ip-nare",
    thumbnail: "/images/solutions/solution_1.png",
  },
  {
    id: "mock-2026-06-pangyo",
    title: "경기창조경제혁신센터 ‘판교 창업존’ 입주",
    excerpt:
      "판교 창업존에 입주하며 제품 개발과 파트너 협력을 위한 거점을 마련했습니다.",
    date: "2026-06-02",
    url: "https://example.com/news/pangyo",
    thumbnail: "/images/vision/vision_2.png",
  },
  {
    id: "mock-2026-05-social-service",
    title: "사회적기업진흥원 창업지원 ‘돌봄 사회서비스’ 선정",
    excerpt:
      "한국사회적기업진흥원의 사회적기업 창업지원 사업에서 돌봄 사회서비스 분야에 선정되었습니다.",
    date: "2026-05-20",
    url: "https://example.com/news/social-service",
    thumbnail: "/images/solutions/solution_3.png",
  },
  {
    id: "mock-2026-04-community-center",
    title: "지역아동센터 사회정서 프로그램 협력체계 확대",
    excerpt:
      "지역아동센터와의 협력 범위를 넓혀 교육·돌봄 사각지대 아동에게 사회정서 프로그램을 전합니다.",
    date: "2026-04-08",
    url: "https://example.com/news/community-center",
    thumbnail: "/images/vision/vision_4.png",
  },
  {
    id: "mock-2026-01-simbakids",
    title: "아동·청소년 심리 상담 플랫폼 ‘심바키즈’ 통합 개편",
    excerpt:
      "상담 예약부터 기록 확인까지의 흐름을 하나로 묶어 심바키즈를 개편했습니다.",
    date: "2026-01-12",
    url: "https://example.com/news/simbakids-renewal",
    thumbnail: "/images/solutions/solution_2.png",
  },
  {
    id: "mock-2025-09-little-penguin",
    title: "신용보증기금 ‘리틀펭귄’ 선정",
    excerpt:
      "글로벌 성장 가능성을 인정받아 신용보증기금 리틀펭귄 기업으로 선정되었습니다.",
    date: "2025-09-24",
    url: "https://example.com/news/little-penguin",
    thumbnail: "/images/vision/vision_1.png",
  },
];

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
