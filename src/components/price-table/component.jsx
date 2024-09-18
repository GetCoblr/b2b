import * as React from "react";
import PropTypes from "prop-types";

const Component = ({
  className = "",
  growth,
  forTheGrowingRepairBusine,
  prop,
  disabled = false,
  planPaymentLink,
  linkTitle,
}) => {
  return (
    <div
      className={`bg-default-white self-stretch flex flex-col items-start justify-center pt-6 px-6 pb-[23px] gap-[16px] text-left text-5xl text-dark-100 font-sub-title border-[0.5px] border-solid border-dark-25 mq450:pt-5 mq450:pb-5 mq450:box-border ${className}`}
    >
      <h3 className="m-0 relative text-inherit leading-[34px] font-bold font-inherit inline-block min-w-[94px] mq450:text-lgi mq450:leading-[27px]">
        {growth}
      </h3>
      <div className="self-stretch relative text-base leading-[140%] font-body">
        {forTheGrowingRepairBusine}
      </div>
      <div className="w-[230px] flex flex-col items-start justify-end gap-[4px] text-xs text-darkorange font-inter">
        <div className="relative leading-[17px] font-body text-dark-50 inline-block min-w-[57px]">
          Starting at
        </div>
        <div className="flex flex-row items-baseline justify-start gap-[7px] text-19xl text-dark-100 font-sub-title">
          <b className="relative tracking-[0.02em] leading-[140%] inline-block min-w-[75px] whitespace-nowrap mq450:text-4xl mq450:leading-[32px] mq750:text-11xl mq750:leading-[43px]">
            {prop}
          </b>
          <div className="flex flex-row items-end justify-start py-[7px] px-0 text-xs text-dark-50 font-body">
            <div className="relative leading-[17px] inline-block min-w-[39px]">
              /Month
            </div>
          </div>
        </div>
        <div className="w-[119px] h-5 relative leading-[20px] font-medium flex items-center opacity-[0]">
          Early adopters price.
        </div>
        <div className="self-stretch h-5 relative leading-[20px] flex items-center opacity-[0]">
          <span>
            <span className="font-medium">Deal ends in</span>
            <span className="font-semibold"> 3 days 2 hours 23 minutes.</span>
          </span>
        </div>
      </div>
      <a
        href={planPaymentLink}
        target="_blank"
        className={`${
          disabled
            ? "cursor-not-allowed bg-dark-25 border-dark-50 hover:bg-darkgray hover:border-gray-100"
            : "cursor-pointer bg-success hover:bg-mediumseagreen"
        } py-3.5 px-[23px] no-underline self-stretch rounded flex flex-row items-center justify-center whitespace-nowrap border-[1px] border-solid hover:box-border hover:border-[1px] hover:border-solid`}
      >
        <b className="flex-1 relative text-sm leading-[20px] font-inter text-default-white text-center">
          {linkTitle}
        </b>
      </a>
    </div>
  );
};

Component.propTypes = {
  className: PropTypes.string,
  growth: PropTypes.string,
  forTheGrowingRepairBusine: PropTypes.string,
  prop: PropTypes.string,
  disabled: PropTypes.bool,
  planPaymentLink: PropTypes.string,
};

export default Component;
