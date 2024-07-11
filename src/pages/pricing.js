import * as React from "react";
import Layout from "../components/Layout";
import PriceTable from "../components/price-table/index";
import FaqComponent from '../components/support/FaqComponent';
import TrailComponent from "../components/TrailComponent";

const PricingPage = () => {
  return (
    <Layout bg={true}>
      <PriceTable
        extended={true}
        title="Choose a Plan to Grow Your Business"
        subTitle={["Choose From One Of The Plans That Suits Your Business Best.", "Free for the first 14 days."]}
      />
      <FaqComponent />
      <TrailComponent />
    </Layout>
  );
};

export default PricingPage;

export const Head = () => <title>Pricing</title>;
