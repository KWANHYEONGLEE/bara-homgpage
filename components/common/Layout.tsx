import React, { ReactNode } from "react";
import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
import { styled } from "styled-components";

type Props = {
  children?: ReactNode;
  title?: string;
  description?: string;
};

const Layout = ({
  children,
  title = "This is the default title",
  description = "I am a default Description",
}: Props) => (
  <>
    <Head>
      <title>{"바라 스페이스"}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="icon" type="image/x-icon" href="/favicon.jpeg"></link>

      <meta name="description" content={"패밀리 멘탈 헬스 케어 서비스"} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={"바라 스페이스"} />
      <meta property="og:description" content={"패밀리 멘탈 헬스 케어 서비스"} />
      <meta property="og:image" content="https://www.baraspace.com/bara-logo.jpeg" />
      <meta property="og:url" content="https://www.baraspace.com" />
    </Head>
    <Header />
    <Body>{children}</Body>
    <Footer />
  </>
);

export default Layout;

const Body = styled.div`
  min-width: 360px;
`;
