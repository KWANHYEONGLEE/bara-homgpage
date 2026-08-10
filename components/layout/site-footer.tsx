import Link from "next/link";
import { companyInfo } from "@/lib/site";
import { SiteLogo } from "@/components/layout/site-logo";

const footerLinks = [
  { label: "사업소개", href: "/business" },
  { label: "문의", href: "/contact" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center px-5 py-16 lg:px-8 lg:py-24">
        <Link href="/" aria-label="바라스페이스 홈">
          <SiteLogo className="h-7" />
        </Link>

        <nav className="mt-10 flex items-center gap-6 text-sm" aria-label="푸터 메뉴">
          {footerLinks.map((link, i) => (
            <span key={link.href} className="flex items-center gap-6">
              {i > 0 && <span aria-hidden className="h-3 w-px bg-border" />}
              <Link
                href={link.href}
                className="text-foreground/80 transition-colors hover:text-brand-ink"
              >
                {link.label}
              </Link>
            </span>
          ))}
        </nav>

        <address className="mt-10 w-full border-t border-border pt-8 text-center text-sm not-italic leading-7 text-muted-foreground">
          <p>{companyInfo.legalName}</p>
          <p>
            대표: {companyInfo.ceo} · 사업자번호: {companyInfo.businessNumber}
          </p>
          <p>통신판매번호: {companyInfo.mailOrderNumber}</p>
          <p>주소: {companyInfo.address}</p>
          <p>
            메일:{" "}
            <a
              href={`mailto:${companyInfo.email}`}
              className="transition-colors hover:text-brand-ink"
            >
              {companyInfo.email}
            </a>
          </p>
        </address>

        <p className="mt-8 text-xs text-muted-foreground/70">
          © {new Date().getFullYear()} BARASPACE Co., Ltd. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
