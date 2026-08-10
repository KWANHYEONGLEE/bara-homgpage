import { companyInfo } from "@/lib/site";

export function SiteFooter() {
  return (
    // 본문 열과 좌측 기준선을 맞추려면 Section 과 같이
    // 패딩은 바깥, max-width 는 안쪽에 둬야 한다.
    <footer className="px-5 py-16 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <address className="border-t border-border pt-8 text-[15px] not-italic leading-[1.9] text-muted-foreground">
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

        <p className="mt-8 text-[13px] text-muted-foreground">
          © {new Date().getFullYear()} BARASPACE Co., Ltd. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
