import Layout from "components/common/Layout";
import CustomerReviews from "components/page/home/CustomerReviews";
import Hero from "components/common/Hero";
import Program from "components/page/home/Program";
import Solutions from "components/page/home/Solutions";
import InfoSection from "components/page/home/infoSection";

const IndexPage = () => (
  <Layout title="심바" description="심바를 만나면 육아에도 정답이 있다!">
    <Hero />
    <InfoSection />
    <Program />
    <CustomerReviews />
    <Solutions />
  </Layout>
);

export default IndexPage;
