import Layout from "components/common/Layout";
import Hero from "components/common/Hero";
import Recruitment from "components/about/Recruitment";
import CounselingPlatform from "components/about/CounselingPlatform";
import ParentingInfo from "components/about/ParentingInfo";
import AboutBaraSpace from "components/about/AboutBaraSpace";

const IndexPage = () => (
  <Layout title="심바" description="심바를 만나면 육아에도 정답이 있다!">
    <Hero />
    <Recruitment />
    <CounselingPlatform />
    <ParentingInfo />
    <AboutBaraSpace />
  </Layout>
);

export default IndexPage;
