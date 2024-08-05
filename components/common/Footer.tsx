import styled from "styled-components";
import Link from "next/link";
import { device } from "styled/Breakpoint";

const Footer = () => {
  return (
    <FooterSection>
      <LinkWrapper href="/">
        <Logo src="/logo-orange.svg" />
      </LinkWrapper>
      <ImpLinks>
        <ImpLinkFirst>
          <Link href="/partner">파트너 모집</Link>
        </ImpLinkFirst>
        <ImpLinkSecond>
          <Link href="/">서비스 소개</Link>
        </ImpLinkSecond>
      </ImpLinks>
      <PrivacyPolicy>
        <Head>Privacy Policy</Head>
        <Para>
          {
            "바라\n사업자번호: 869-30-01235\n주소: 하남시 검단산로 239 하남벤처센터 217호\n대표: 윤미리\n이메일: baraspace@baraspace.com\n통신판매번호: 제 2022-성남분당B-0601호"
          }
        </Para>
     
      </PrivacyPolicy>

      <Copyright>@Copyright KZONE Co. Ltd. All Rights Reserved.</Copyright>
    </FooterSection>
  );
};

export default Footer;

const FooterSection = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px 0px;
  min-width: 360px;
  @media ${device.md} {
    padding: 60px 0px;
  }
`;

const LinkWrapper = styled(Link)`
  width: 180px;
  @media ${device.md} {
    max-width: 90px;
  }
`;

const Logo = styled.img`
  max-width: 180px;
  height: auto;
  width: 100%;
  margin-bottom: 80px;
  @media ${device.md} {
    margin-bottom: 50px;
  }
`;

const ImpLinks = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 100%;
  max-width: 272px;
  padding-bottom: 48px;
  @media ${device.md} {
    font-size: 14px;
    max-width: 180px;
  }
`;

const ImpLinkFirst = styled.div`
  column-span: 1;
  text-align: start;
`;
const ImpLinkSecond = styled.div`
  column-span: 1;
  border-left: 1px solid #d7d8de;
  text-align: end;
`;

const PrivacyPolicy = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1326px;
  width: 100%;
  border-bottom: 1px solid #d7d8de;
`;

const Head = styled.div`
  color: #000;
  font-size: 16px;
  font-weight: 600;
`;

const Para = styled.div`
  color: #5e5e5e;
  text-align: center;
  font-size: 14px;
  font-weight: 300;
  line-height: 24px;
  padding: 24px 0px;
  white-space: break-spaces;

  opacity: 0.7;

`;



const Copyright = styled.div`
  color: #5e5e5e;
  text-align: center;
  font-size: 12px;
  font-weight: 500;
  padding-top: 40px;
  opacity: 0.5;
`;
