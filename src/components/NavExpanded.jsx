import * as React from "react";

const NavExpanded = ({expand = false}) => {
  return (
    <div style={{
        transform: `translateX(${expand ? 0 : 100}%)`,
        transition: "transform 0.4s ease"
    }} className="pb-44 w-full fixed z-50 h-screen bg-white overflow-hidden flex flex-col items-end justify-between pt-0 px-0 box-border gap-[32px] leading-[normal] tracking-[normal]">
      <section className="self-stretch flex flex-col items-start justify-start pt-0 px-6 box-border gap-[27.5px] max-w-full text-left text-base text-blue-gray-900 font-button-m">
        <div className="mt-20 flex flex-row items-start justify-start py-0 px-2">
          <a className="[text-decoration:none] relative tracking-[0.5px] leading-[24px] font-medium text-[inherit] inline-block min-w-[54px]">
            Features
          </a>
        </div>
        <div className="w-full h-px relative box-border opacity-[0.3] max-w-full border-t-[1px] border-solid border-dark-25" />
        <div className="flex flex-row items-start justify-start py-0 px-2">
          <a className="[text-decoration:none] relative tracking-[0.5px] leading-[24px] font-medium text-[inherit] inline-block min-w-[54px]">
            Pricing
          </a>
        </div>
        <div className="w-full h-px relative box-border opacity-[0.3] max-w-full border-t-[1px] border-solid border-dark-25" />
        <div className="flex flex-row items-start justify-start py-0 px-2">
          <a className="[text-decoration:none] relative tracking-[0.5px] leading-[24px] font-medium text-[inherit] inline-block min-w-[61px]">
            Support
          </a>
        </div>
        <div className="w-full h-px relative box-border opacity-[0.3] max-w-full border-t-[1px] border-solid border-dark-25" />
      </section>
      <section
        className={`self-stretch flex flex-row items-start justify-end py-0 px-6 box-border max-w-full text-left text-base text-blue-gray-900 font-body`}
      >
        <div className="flex-1 flex flex-col items-start justify-start gap-[16px] max-w-full">
          <div className="self-stretch rounded-sm overflow-hidden flex flex-row items-start justify-center py-2.5 px-5">
            <div className="relative leading-[140%] inline-block min-w-[44px] whitespace-nowrap">
              Log In
            </div>
          </div>
          <button className="cursor-pointer py-[9px] px-5 bg-success self-stretch shadow-[0px_1px_1.92px_rgba(16,_24,_40,_0.05)] rounded-sm overflow-hidden flex flex-row items-start justify-center whitespace-nowrap border-[1px] border-solid border-success">
            <div className="relative text-base leading-[140%] font-body text-white text-left inline-block min-w-[54px]">
              Sign up
            </div>
          </button>
        </div>
      </section>
    </div>
  );
};

export default NavExpanded;
