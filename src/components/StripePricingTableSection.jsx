import * as React from "react";
import { Helmet } from "react-helmet";
import SectionText from "./price-table/section-text";

export const STRIPE_PRICING_TABLE_PROPS = {
  "pricing-table-id": "prctbl_1Sv7lCAyFbkp4NXXdUmB3yIV",
  "publishable-key":
    "pk_live_51PIysTAyFbkp4NXXqtFhJS5ekLCM5XzgDgJz9O8DQnxJ4IorI9WhqQ7NUkN1YMyzlo8On7MXNCQCJeflzQ069byb00thRRmLsb",
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
            {...STRIPE_PRICING_TABLE_PROPS}
          />
        </div>
      </div>
    </>
  );
};

export default StripePricingTableSection;
