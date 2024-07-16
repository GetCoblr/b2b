import * as React from "react";
import Layout from "../components/Layout";
import Section from "../components/for-brand/section";
import Contact from "../components/for-brand/contact";

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

export const Head = () => <title>For Brands</title>;
