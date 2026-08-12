export const siteConfig = {
  name: "바라스페이스",
  url: "https://www.baraspace.com",
  email: "baraspace@baraspace.com",
} as const;

/** 외부 서비스 링크 — 홈과 사업소개 두 곳에서 쓰므로 여기서만 관리한다 */
export const externalLinks = {
  simbakids: "https://simba.kr/",
} as const;

export const navItems = [
  { label: "홈", href: "/" },
  { label: "회사소개", href: "/about" },
  { label: "사업소개", href: "/business" },
  { label: "뉴스룸", href: "/newsroom" },
  { label: "문의", href: "/contact" },
] as const;

/** 사업자 정보 — 푸터 표기용 */
export const companyInfo = {
  legalName: "주식회사 바라스페이스",
  ceo: "윤미리",
  businessNumber: "559-86-03522",
  mailOrderNumber: "제 2026-성남수정-0510호",
  address:
    "경기도 성남시 수정구 대왕판교로 815, 판교창조경제밸리 713호(시흥동)",
  email: "baraspace@baraspace.com",
} as const;
