import { companyInfo } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="px-5 py-16 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <address className="t-legal border-t border-border pt-8 not-italic">
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
              className="inline-block py-2 underline underline-offset-4 transition-colors hover:text-brand-ink"
            >
              {companyInfo.email}
            </a>
          </p>
        </address>

        <p className="t-caption mt-8">
          © {new Date().getFullYear()} BARASPACE Co., Ltd. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
