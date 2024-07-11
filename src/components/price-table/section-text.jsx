import * as React from "react";
import PropTypes from "prop-types";

const SectionText = ({ className = "", title, subTitle }) => {
  return (
    <div
      className={`w-[900px] flex flex-col items-center justify-start gap-[24px] max-w-full text-center text-base text-blue-gray-600 font-body-xs ${className}`}
    >
      <div className="self-stretch flex flex-col items-center justify-start py-0 px-5 box-border gap-[8px] max-w-full text-xl">
        <h1 className="max-w-[600px] m-0 relative text-23xl tracking-[0.02em] leading-[140%] font-bold font-sub-title text-transparent !bg-clip-text [background:linear-gradient(90deg,_#61ba5f,_#4c8c4a)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block">
          {title}
        </h1>
      </div>
      <div className="self-stretch relative leading-[140%] font-body text-dark-100">
        {subTitle.map((text) => (
          <p className="m-0">{text}</p>
        ))}
      </div>
      <div className="w-[528px] h-12 hidden flex-row items-center justify-center gap-[16px] max-w-full text-left text-blue-600">
        <div className="h-16 rounded-7xl bg-fuchsia-600 box-border flex flex-row items-center justify-center py-5 px-[22px] text-5xl text-default-white border-[2px] border-solid border-fuchsia-600">
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0 hidden min-h-[24px]"
            alt=""
            src="/icon--jamicons--outline--logos--plus.svg"
          />
          <div className="self-stretch flex flex-row items-center justify-center py-0 px-6">
            <b className="self-stretch relative tracking-[0.5px] leading-[24px] mq450:text-lgi mq450:leading-[19px]">
              Start Now
            </b>
          </div>
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0 hidden min-h-[24px]"
            alt=""
            src="/icon--jamicons--outline--logos--arrowright.svg"
          />
        </div>
        <div className="self-stretch rounded-lg hidden flex-row items-center justify-center py-3 px-2.5 border-[2px] border-solid border-blue-600">
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0 hidden min-h-[24px]"
            alt=""
            src="/icon--jamicons--outline--logos--plus.svg"
          />
          <div className="self-stretch flex flex-row items-center justify-center py-0 px-4">
            <div className="self-stretch relative tracking-[0.5px] leading-[24px] font-medium">
              Button Text
            </div>
          </div>
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
            alt=""
            src="/icon--jamicons--outline--logos--arrowright.svg"
          />
        </div>
        <div className="self-stretch rounded-lg hidden flex-row items-center justify-center py-3 px-2 relative">
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0 hidden min-h-[24px] z-[0]"
            alt=""
            src="/icon--jamicons--outline--logos--plus.svg"
          />
          <div className="self-stretch flex flex-row items-center justify-center py-0 px-4 z-[1]">
            <div className="self-stretch relative tracking-[0.5px] leading-[24px] font-medium">
              Button Text
            </div>
          </div>
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px] z-[2]"
            alt=""
            src="/icon--jamicons--outline--logos--arrowright-1.svg"
          />
          <div className="!m-[0] absolute top-[8px] left-[24px] rounded-xl bg-default-alert hidden flex-row items-center justify-center py-[0.5px] px-[5px] z-[3] text-center text-xs text-default-white">
            <div className="relative leading-[140%]">9</div>
          </div>
        </div>
      </div>
    </div>
  );
};

SectionText.propTypes = {
  className: PropTypes.string,
};

export default SectionText;
