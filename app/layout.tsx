import type { Metadata } from "next";
import "./globals.css";
import { gmarketSans, pretendard } from "./fonts";
import { SiteHeader } from "@/components/layout/site-header";

const SITE_URL = "https://www.baraspace.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "바라스페이스",
    template: "%s | 바라스페이스",
  },
  description:
    "아이의 오늘을 이해하고, 내일의 성장을 돕는 AI. 바라스페이스는 아이의 미래를 바꾸고, 부모의 성장을 돕는 기업입니다.",
  icons: { icon: "/favicon.jpeg" },
  openGraph: {
    type: "website",
    siteName: "바라스페이스",
    title: "바라스페이스",
    description: "아이의 오늘을 이해하고, 내일의 성장을 돕는 기업",
    url: SITE_URL,
    images: [{ url: "/bara-logo.jpeg" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="ko"
      className={`${pretendard.variable} ${gmarketSans.variable}`}
    >
      <body className="min-w-[360px]">
        <SiteHeader />
        {/*
          푸터는 전역이 아니라 홈과 문의 페이지에서만 붙인다.
          (app/page.tsx, app/contact/page.tsx)
        */}
        <main>{children}</main>
      </body>
    </html>
  );
}
