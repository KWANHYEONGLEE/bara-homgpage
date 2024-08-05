import Layout from "components/common/Layout";
import Hero from "components/common/Hero";
import Recruit from "components/page/partner/Recruit";
import Intro from "components/page/partner/Intro";
import Banner from "components/page/partner/Banner";
import History from "components/page/partner/History";

const IndexPage = () => (
  <Layout title="심바" description="심바를 만나면 육아에도 정답이 있다!">
    <Hero />
    <Recruit />
    <Intro />
    <Banner />
    <History />
  </Layout>
);

export default IndexPage;
