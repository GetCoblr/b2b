import * as React from "react";
import PropTypes from "prop-types";

const Div = ({ className = "", reports }) => {
  return (
    <div
      className={`self-stretch flex flex-col items-start justify-center pt-5 pb-[19px] pr-[171px] pl-8 gap-[8px] text-center text-base text-darksalmon font-body border-s-[0.5px] border-y-[0.5px] border-solid border-dark-25 mq450:pr-5 mq450:box-border ${className}`}
    >
      <div className="rounded-2xl bg-blanchedalmond-100 flex flex-row items-center justify-center py-0.5 px-2 whitespace-nowrap">
        <div className="relative leading-[140%] inline-block min-w-[97px]">
          Coming Soon
        </div>
      </div>
      <div className="relative text-lg leading-[140%] font-semibold font-sub-title text-dark-100 text-left inline-block min-w-[74px]">
        {reports}
      </div>
    </div>
  );
};

Div.propTypes = {
  className: PropTypes.string,
  reports: PropTypes.string,
};

export default Div;
