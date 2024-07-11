import * as React from "react";
import FrameComponent from "../components/features/frame-component";
import useFileImport from "../hooks/useFileImport";
import { Rectangle1SVG, RectangleSVG } from "../components/icons";
import Layout from "../components/Layout";
import ImageText from "../components/ImageText";
import TrailComponent from "../components/TrailComponent";

const FeaturesPage = () => {
  const fileMap = useFileImport();
  return (
    <Layout currentPage="features">
      <div className="w-full relative bg-white flex flex-col items-start justify-start leading-[normal] tracking-[normal]">
        <FrameComponent />
        <div className="w-screen absolute !m-[0] right-[0px] md:bottom-[325px] bottom-[271px] left-[0px] shrink-0">
          <Rectangle1SVG />
        </div>
        <div className="w-screen absolute !m-[0] right-[0px] md:bottom-[1705px] bottom-[2020px] left-[0px] shrink-0">
          <RectangleSVG />
        </div>
        <ImageText
          image={fileMap["services--products-1@2x"].gatsbyImageData}
          title="Point of Sale"
          summaryList={[
            "Create and manage custom services, products, and prices.",
            "Easily build in-store orders or send repair quotes to customers with the tap of a button.",
            "Add custom discounts, estimated completion dates, and offer rushed orders for a top tier customer experience.",
          ]}
        />
        <ImageText
          image={fileMap["services--products-1-1@2x"].gatsbyImageData}
          imageLeft={false}
          title="Order Management"
          summaryList={[
            "View and manage orders from all sources (mail-in, online, in-store) in one place.",
            "Upload before and after images for each repair and share with customers.",
            "Manage everything that you sell from products to services in one place.",
          ]}
        />
        <ImageText
          image={fileMap["message-1@2x"].gatsbyImageData}
          title="Messages"
          summaryList={[
            "Streamline customer communications with built-in messaging.",
            "Never miss a request with customer message history views.",
          ]}
        />
        <ImageText
          image={fileMap["customer-detail-view-1@2x"].gatsbyImageData}
          imageLeft={false}
          rightImage={fileMap["customer-details-1@2x"]}
          title="Customer Management"
          summaryList={[
            "View customer details, including order and messaging history.",
            "Easy to use templates to create email marketing campaigns to engage customers and build loyalty.",
            "Keep customers happy with automated status updates and transparent repair pricing.",
          ]}
        />
        <ImageText
          image={fileMap["report-1@2x"].gatsbyImageData}
          bottomImage={fileMap["reportaddon-1@2x"]}
          comingSoon={true}
          title="Reporting"
          summaryList={[
            "View detailed insights on sales, customers, trends, and orders.",
            "Create custom reports for more in depth analysis.",
            "Download reports for your accountant.",
          ]}
        />
        <div className="relative">
          <div
            style={{
              left: "min(0px, calc((1440px - 100vw) / 2))",
              position: "absolute",
              width: "100vw",
              height: "100%",
            }}
            className="[background:linear-gradient(97.2deg,_rgba(248,_255,_248,_0.01),_rgba(76,_140,_74,_0.05)),_#f7f7f7]"
          />
          <TrailComponent />
        </div>
      </div>
    </Layout>
  );
};

export default FeaturesPage;
