import * as React from "react";
import { Helmet } from "react-helmet";
import SectionText from "./price-table/section-text";

/** Props for `<stripe-pricing-table />` (see `.env.example` and README). */
const stripePricingTableProps = {
  "pricing-table-id": process.env.GATSBY_STRIPE_PRICING_TABLE_ID ?? "",
  "publishable-key": process.env.GATSBY_STRIPE_PUBLISHABLE_KEY ?? "",
};

const StripePricingTableSection = ({ title, subTitle }) => {
  return (
    <>
      <Helmet>
        <script async src="https://js.stripe.com/v3/pricing-table.js" />
      </Helmet>
      <div className="w-full flex flex-col items-center justify-start py-10 px-5 box-border gap-[60px] mq675:gap-[30px]">
        <SectionText title={title} subTitle={subTitle} />
        <div className="w-full self-stretch min-w-0">
          <stripe-pricing-table
            className="block w-full min-w-0"
            {...stripePricingTableProps}
          />
        </div>
      </div>
    </>
  );
};

export default StripePricingTableSection;
