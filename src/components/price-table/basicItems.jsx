import * as React from "react";
import PropTypes from "prop-types";

const BasicItems = ({
  className = "",
  location1,
  employees,
  integration,
  emailSupportOnly,
}) => {
  return (
    <div
      className={`self-stretch flex flex-col items-start justify-center py-[15px] pr-[199px] pl-6 gap-[4px] text-left text-xs text-dark-50 font-info-text border-t-[0.5px] border-solid border-dark-25 border-b-[0.5px] ${className}`}
    >
      <div className="relative leading-[17px] inline-block min-w-[81px]">
        Items included:
      </div>
      <div className="self-stretch flex flex-col items-start justify-center gap-[4px] text-dark-100">
        <div className="relative leading-[17px] inline-block min-w-[56px]">
          {location1}
        </div>
        <div className="relative leading-[17px] inline-block min-w-[69px]">
          {employees}
        </div>
        {integration && (<div className="relative leading-[17px] inline-block min-w-[68px]">
          {integration}
        </div>)}
        <div className="relative leading-[17px] inline-block min-w-[103px]">
          {emailSupportOnly}
        </div>
      </div>
    </div>
  );
};

BasicItems.propTypes = {
  className: PropTypes.string,
  location1: PropTypes.string,
  employees: PropTypes.string,
  integration: PropTypes.string,
  emailSupportOnly: PropTypes.string,
};

export default BasicItems;
