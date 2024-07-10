import * as React from "react";
import Layout from "../components/Layout";
import Header from "../components/support/Header";
import TrailComponent from "../components/TrailComponent";
import FaqComponent from "../components/support/FaqComponent";

const SupportPage = () => {
  return (
    <Layout bg={true}>
      <Header />
      <FaqComponent />
      <TrailComponent />
    </Layout>
  );
};

export default SupportPage;

export const Head = () => <title>Support Page</title>;
