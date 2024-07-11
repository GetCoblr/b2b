import * as React from "react";
import Layout from "../components/Layout";
import PriceTable from "../components/price-table/index";
import FaqComponent from "../components/support/FaqComponent";
import TrailComponent from "../components/TrailComponent";

const PricingPage = () => {
  return (
    <Layout currentPage="pricing" bg={true}>
      <PriceTable
        extended={true}
        title="Choose a Plan to Grow Your Business"
        subTitle={[
          "Choose From One Of The Plans That Suits Your Business Best.",
          "Free for the first 14 days.",
        ]}
      />
      <FaqComponent />
      <div className="relative">
        <div
          style={{
            left: "min(0px, calc((1440px - 100vw) / 2))",
            position: "absolute",
            width: "100vw",
            height: "100%",
            zIndex: "-99",
          }}
          className="[background:linear-gradient(97.2deg,_rgba(248,_255,_248,_0.01),_rgba(76,_140,_74,_0.05)),_#f7f7f7]"
        />
        <TrailComponent />
      </div>
    </Layout>
  );
};

export default PricingPage;

export const Head = () => <title>Pricing</title>;
