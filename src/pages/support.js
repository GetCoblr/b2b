import * as React from "react";
import Layout from "../components/Layout";
import Header from "../components/support/Header";
import TrailComponent from "../components/TrailComponent";
import FaqComponent from "../components/support/FaqComponent";
import SEO from "../components/seo";

const SupportPage = () => {
  return (
    <Layout currentPage="support" bg={true}>
      <Header />
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

export default SupportPage;

export const Head = () => {
  return (
    <SEO
      title="Coblr Support | Expert Help for Your Repair Business"
      description="Get expert support, from onboarding to troubleshooting. Our team is here to help you every step of the way to help transform your repair business."
    />
  );
};
