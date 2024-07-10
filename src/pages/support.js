import * as React from "react";
import Layout from "../components/Layout";
import Header from "../components/support/Header";
import FaqComponent from "../components/support/faqComponent";
import TrailComponent from "../components/TrailComponent";

const SupportPage = () => {
  return <Layout bg={true}>
    <Header />
    <FaqComponent />
    <TrailComponent />
  </Layout>;
};

export default SupportPage;

export const Head = () => <title>Support Page</title>;
