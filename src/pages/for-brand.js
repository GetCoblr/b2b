import * as React from "react";
import Layout from "../components/Layout";
import Section from "../components/for-brand/section";
import Contact from "../components/for-brand/contact";
import SEO from "../components/seo";

const ForBrandPage = () => {
  return (
    <Layout currentPage="for-brand">
      <Section />
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
        <Contact />
      </div>
    </Layout>
  );
};

export default ForBrandPage;

export const Head = () => {
  return (
    <SEO
      title="Coblr for Brands | Drive Customer Loyalty with Seamless Repair Solutions"
      description="Coblr helps brands integrate repair into their customer experience, powering sustainability and extending product life cycles. Join us in building a circular fashion future."
    />
  );
};
