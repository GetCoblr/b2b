import * as React from "react";

const ContentBox = ({ className = "", icon, title, paragraph }) => {
  return (
    <div
      className={`flex-grow overflow-hidden flex gap-[24px] items-center relative max-w-full text-left text-base text-blue-gray-900 font-body-xs ${className}`}
    >
      {icon}
      <div className="self-stretch flex flex-col items-start justify-start gap-[16px] max-w-full">
        <div className="self-stretch flex flex-col items-start justify-start gap-[4px] max-w-full">
          <div className="self-stretch flex flex-row items-center justify-start gap-[8px] max-w-full text-lg text-dark-100 font-sub-title">
            <div className="flex-1 relative leading-[140%] font-semibold inline-block max-w-full">
              {title}
            </div>
          </div>
        </div>
        <div className="self-stretch relative leading-[140%] font-body text-dark-75">
          {paragraph}
        </div>
      </div>
    </div>
  );
};

export default ContentBox;
