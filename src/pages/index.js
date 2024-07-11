import * as React from "react";
import Layout from "../components/Layout";
import Header from "../components/Header";
import CoreFeatures from "../components/CoreFeatures";
import ImageText from "../components/ImageText";
import useFileImport from "../hooks/useFileImport";
import PriceTable from "../components/price-table";
import TrailComponent from "../components/TrailComponent";

const IndexPage = () => {
  const fileMap = useFileImport();
  return (
    <Layout bg={true} currentPage="home">
      <Header />
      <div className="relative">
        <div
          style={{
            left: "min(0px, calc((1440px - 100vw) / 2))",
            position: "absolute",
            width: "100vw",
            height: "100%",
          }}
          className="[background:linear-gradient(rgba(76,_140,_74,_0.02),_rgba(76,_140,_74,_0.02)),_linear-gradient(180deg,_#f7f7f7,_rgba(248,_255,_248,_0.02))]"
        />
        <CoreFeatures />
        <ImageText
          image={fileMap["frame-9110@2x"]}
          title="Run Your Business Better"
          summary="No more toggling between different technology solutions and hand written tickets. Simplify your operations with a one stop shop solution for repair businesses (And improve customer experiences while you’re at it.)"
        />
        <ImageText
          image={fileMap["pos-1@2x"]}
          imageLeft={false}
          title="Increase Revenue"
          summary="Reduce time spent on administrative tasks, grow repair volume, and improve the customer experience to keep customers coming back for repeat business."
        />
      </div>
      <PriceTable
        title="Choose your plan"
        subTitle={[
          "Choose a plan that's right for your growing team.",
          "Free for the first 14 days.",
        ]}
      />
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

export default IndexPage;

export const Head = () => <title>Home Page</title>;
