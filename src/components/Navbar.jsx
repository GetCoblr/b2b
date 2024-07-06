import * as React from "react";
import PropTypes from "prop-types";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import useFileImport from "../hooks/useFileImport";

const Navbar = ({ className = "" }) => {
  const fileMap = useFileImport();
  return (
    <>
      <div
        className={`w-full md:hidden shadow-[2px_3px_5px_2px_rgba(0,_0,_0,_0.05)] bg-white flex flex-row items-start justify-between p-6 box-border leading-[normal] tracking-[normal] gap-[20px] ${className}`}
      >
        <GatsbyImage
          className="h-9 w-9 relative object-cover"
          image={getImage(fileMap["Brand-logo"])}
          alt="Brand Icon"
        />
        <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
          <div className="w-[34px] h-[34px] relative rounded-lg overflow-hidden shrink-0">
            <div className="absolute top-[10px] left-[8px] w-[18px] h-3.5">
              <div className="absolute top-[0px] left-[0px] rounded-8xs bg-dark-100 w-[18px] h-0.5" />
              <div className="absolute top-[6px] left-[0px] rounded-8xs bg-dark-100 w-[18px] h-0.5" />
              <div className="absolute top-[12px] left-[0px] rounded-8xs bg-dark-100 w-[18px] h-0.5" />
            </div>
          </div>
        </div>
      </div>
      <div
        className={`w-full hidden md:flex flex-row items-end justify-between py-6 px-20 box-border leading-[normal] tracking-[normal] gap-[20px] text-left text-base text-success font-button-m mq750:flex-wrap mq750:pl-10 mq750:pr-10 mq750:box-border ${className}`}
      >
        <div className="flex flex-row items-start justify-start gap-[48px] max-w-full mq450:flex-wrap mq450:gap-[24px]">
          <div className="h-12 w-12 relative">
            <GatsbyImage
              className="absolute top-[calc(50%_-_18px)] left-[calc(50%_-_18px)] w-9 h-9 object-cover"
              image={getImage(fileMap["Brand-logo"])}
              alt="Brand Icon"
            />
          </div>
          <div className="h-[50.5px] w-[182px] flex flex-col items-start justify-start pt-3 px-0 pb-0 box-border">
            <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[8px]">
              <div className="self-stretch flex-1 flex flex-row items-start justify-start py-0 pr-0 pl-[7px]">
                <div className="self-stretch flex-1 flex flex-row items-start justify-between gap-[20px]">
                  <a className="[text-decoration:none] relative tracking-[0.5px] leading-[24px] font-medium text-[inherit] inline-block min-w-[67px]">
                    Features
                  </a>
                  <a className="[text-decoration:none] relative tracking-[0.5px] leading-[24px] font-medium text-blue-gray-900 inline-block min-w-[54px]">
                    Pricing
                  </a>
                </div>
              </div>
              <div className="w-20 h-1.5 relative rounded-[100px] bg-success" />
            </div>
          </div>
          <div className="flex flex-col items-start justify-start pt-3 px-0 pb-0 text-blue-gray-900">
            <a className="[text-decoration:none] relative tracking-[0.5px] leading-[24px] font-medium text-[inherit] inline-block min-w-[61px]">
              Support
            </a>
          </div>
        </div>
        <div className="flex flex-row items-center justify-start text-blue-gray-900 font-body">
          <div className="flex flex-row items-center justify-start gap-[16px]">
            <div className="relative leading-[140%] inline-block min-w-[44px] whitespace-nowrap">
              Log In
            </div>
            <button className="cursor-pointer py-[15px] px-[31px] bg-success shadow-[0px_1px_1.92px_rgba(16,_24,_40,_0.05)] rounded-[14px] overflow-hidden flex flex-row items-center justify-center whitespace-nowrap border-[1px] border-solid border-success hover:bg-mediumseagreen hover:box-border hover:border-[1px] hover:border-solid hover:border-mediumseagreen">
              <div className="relative text-base leading-[140%] font-body text-white text-left inline-block min-w-[54px]">
                Sign up
              </div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
