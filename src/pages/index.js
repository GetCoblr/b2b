import * as React from "react";
import Layout from "../components/Layout";
import Header from "../components/Header";
import CoreFeatures from "../components/CoreFeatures";
import ImageText from "../components/ImageText";
import useFileImport from "../hooks/useFileImport";
import PriceTable from "../components/price-table";

const IndexPage = () => {
  const fileMap = useFileImport()
  return (
    <Layout bg={true}>
      <Header />
      <div className="relative">
      <div style={{
        left: 'min(0px, calc((1440px - 100vw) / 2))',
        position: 'absolute',
        width: '100vw',
        height: '100%',
      }} className="[background:linear-gradient(rgba(76,_140,_74,_0.02),_rgba(76,_140,_74,_0.02)),_linear-gradient(180deg,_#f7f7f7,_rgba(248,_255,_248,_0.02))]">
      </div>
      <CoreFeatures />
      <ImageText image={fileMap['frame-9110@2x']} title="Run Your Business Better" summary="No more toggling between different technology solutions and hand written tickets. Simplify your operations with a one stop shop solution for repair businesses (And improve customer experiences while you’re at it.)" />
      <ImageText image={fileMap['pos-1@2x']} imageLeft={false} title="Increase Revenue" summary="Reduce time spent on administrative tasks, grow repair volume, and improve the customer experience to keep customers coming back for repeat business." />
      </div>
      <PriceTable />
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
