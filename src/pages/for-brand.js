import * as React from "react";
import Layout from "../components/Layout";
import Section from "../components/for-brand/section";
import Features from "../components/for-brand/features";
import Contact from "../components/for-brand/contact";

const ForBrandPage = () => {
  return (
    <Layout currentPage="for-brand">
      <Section />
      <Features />
      <Contact />
    </Layout>
  );
};

export default ForBrandPage;

export const Head = () => <title>For Brand Page</title>;
