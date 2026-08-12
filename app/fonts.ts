import localFont from "next/font/local";

/**
 * Pretendard — 본문 및 제목 기본 서체.
 * public/fonts/Pretendard 의 woff2 5종을 weight 별로 연결한다.
 */
export const pretendard = localFont({
  src: [
    { path: "../public/fonts/Pretendard/Pretendard-Light.woff2", weight: "300", style: "normal" },
    { path: "../public/fonts/Pretendard/Pretendard-Regular.woff2", weight: "400", style: "normal" },
    { path: "../public/fonts/Pretendard/Pretendard-Medium.woff2", weight: "500", style: "normal" },
    { path: "../public/fonts/Pretendard/Pretendard-SemiBold.woff2", weight: "600", style: "normal" },
    { path: "../public/fonts/Pretendard/Pretendard-Bold.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-pretendard",
  display: "swap",
  // 폰트 교체 시 레이아웃 밀림(CLS)을 줄이기 위한 대체 서체
  fallback: ["ui-sans-serif", "system-ui", "sans-serif"],
});

/**
 * GmarketSans — 디스플레이(강조) 용도로만 유지.
 */
export const gmarketSans = localFont({
  src: [
    { path: "../public/fonts/GmarketSans/GmarketSansLight.woff2", weight: "300", style: "normal" },
    { path: "../public/fonts/GmarketSans/GmarketSansMedium.woff2", weight: "500", style: "normal" },
    { path: "../public/fonts/GmarketSans/GmarketSansBold.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-gmarket",
  display: "swap",
  fallback: ["ui-sans-serif", "system-ui", "sans-serif"],
});
