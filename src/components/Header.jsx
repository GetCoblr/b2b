import * as React from "react";
import PropTypes from "prop-types";
import { GreenCircle, RedCircle, YellowCircle } from "./icons";
import useFileImport from "../hooks/useFileImport";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const Header = ({ className = "" }) => {
  const fileMap = useFileImport();
  return (
    <>
      <div
        className={`w-full hidden md:flex flex-col items-end justify-start pt-0 px-0 pb-[94px] box-border gap-[32px] leading-[normal] tracking-[normal] mq725:gap-[16px] ${className}`}
      >
        <section className="self-stretch flex flex-row-reverse items-center justify-start py-0 px-20 box-border min-h-[433px] max-w-full text-left text-[46px] text-dark-100 font-sub-title mq725:pl-10 mq725:pr-10 mq725:box-border">
          <div className="mr-[-122px] w-[691px] shadow-[0px_20px_25px_-5px_rgba(0,_0,_0,_0.1),_0px_0px_10px_rgba(0,_0,_0,_0.07)] rounded-[15px] bg-white overflow-hidden flex flex-col items-start justify-start max-w-full z-[1]">
            <div className="self-stretch bg-whitesmoke flex flex-row items-start justify-start py-[9.5px] px-4 box-border max-w-full">
              <div className="flex-1 flex flex-row items-start justify-start gap-[5px] max-w-full mq450:flex-wrap mq450:justify-center">
                <RedCircle />
                <YellowCircle />
                <GreenCircle />
              </div>
            </div>
            <GatsbyImage className="self-stretch h-[404px] relative max-w-full overflow-hidden object-cover" image={getImage(fileMap['rectangle-14@2x'])} alt="Computer program" />
          </div>
          <div className="flex shrink-0 flex-col items-start justify-center gap-[24px] max-w-full">
            <div className="self-stretch flex flex-col items-start justify-center gap-[24px] max-w-full">
              <div className="self-stretch flex flex-col items-start justify-center py-0 pr-5 pl-0 box-border max-w-full">
                <h1 className="m-0 h-[133px] relative text-inherit tracking-[0.02em] leading-[140%] font-bold font-inherit text-transparent !bg-clip-text [background:linear-gradient(90deg,_#61ba5f,_#4c8c4a)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block max-w-full mq450:text-[28px] mq450:leading-[39px] mq1000:text-[37px] mq1000:leading-[52px]">
                  <p className="[margin-block-start:0] [margin-block-end:5px]">
                    Built for repair businesses.
                  </p>
                  <p className="m-0">Built for you.</p>
                </h1>
              </div>
              <div className="w-[560px] relative text-lg leading-[140%] font-semibold inline-block max-w-full">
                <p className="m-0">{`From in-store sales to order management, `}</p>
                <p className="m-0">
                  we take care of it all, so you can focus on what you do best!
                </p>
              </div>
              <div className="w-[560px] relative text-base leading-[140%] font-body inline-block max-w-full">
                A system designed specifically for shoe and clothing repair
                businesses, to support your growth with easy technology!
              </div>
            </div>
            <div className="w-[560px] flex flex-row flex-wrap items-start justify-start gap-[16px] max-w-full">
              <div className="flex-1 rounded-md bg-white box-border flex flex-row items-center justify-start py-[11px] px-[23px] gap-[8px] min-w-[223px] max-w-full border-[1px] border-solid border-blue-gray-300">
                <img
                  className="h-6 w-6 relative overflow-hidden shrink-0 hidden"
                  alt=""
                  src="/icon--jamicons--outline--logos--envelope.svg"
                />
                <input
                  className="w-full [border:none] [outline:none] font-body text-base bg-[transparent] h-[22px] flex-1 relative leading-[140%] text-dark-50 text-left inline-block min-w-[177px] p-0"
                  placeholder="Enter your email"
                  type="text"
                />
                <img
                  className="h-6 w-6 relative overflow-hidden shrink-0 hidden"
                  alt=""
                  src="/icon--jamicons--outline--logos--chevrondown.svg"
                />
              </div>
              <button className="cursor-pointer py-[9px] px-[22px] bg-success rounded-md flex flex-row items-center justify-center border-[2px] border-solid border-seagreen">
                <img
                  className="h-6 w-6 relative overflow-hidden shrink-0 hidden"
                  alt=""
                  src="/icon--jamicons--outline--logos--plus.svg"
                />
                <div className="flex flex-row items-center justify-center py-0 px-6">
                  <div className="relative text-lg leading-[140%] font-semibold font-sub-title text-white text-left inline-block min-w-[105px] whitespace-nowrap">
                    Get started
                  </div>
                </div>
                <img
                  className="h-6 w-6 relative overflow-hidden shrink-0 hidden"
                  alt=""
                  src="/icon--jamicons--outline--logos--arrowright.svg"
                />
              </button>
            </div>
          </div>
        </section>
      </div>
      
      <div
      className={`w-full md:hidden [background:linear-gradient(rgba(76,_140,_74,_0.02),_rgba(76,_140,_74,_0.02)),_linear-gradient(180deg,_#fff,_#f7f7f7)] flex flex-row items-start justify-start pb-10 pr-3.5 pl-6 box-border leading-[normal] tracking-[normal] ${className}`}
    >
      <section className="flex-1 flex flex-col items-start justify-start gap-[24px] max-w-full text-left text-[26px] text-dark-100 font-montserrat">
      <div style={{
        marginLeft: 'min(calc(50vw - 239px), calc(100vw - 478px))'
      }} className="min-w-[430px] w-[430px] shadow-[0px_20px_25px_-5px_rgba(0,_0,_0,_0.1),_0px_0px_10px_rgba(0,_0,_0,_0.07)] rounded-[15px] bg-white overflow-hidden flex flex-col items-start justify-start max-w-full z-[1]">
        <div className="self-stretch bg-whitesmoke flex flex-row items-start justify-start py-[9.5px] px-4 box-border max-w-full">
          <div className="flex-1 flex flex-row items-start justify-start gap-[5px] max-w-full">
            <RedCircle />
            <YellowCircle />
            <GreenCircle />
          </div>
        </div>
        <GatsbyImage className="self-stretch h-[251px] relative max-w-full overflow-hidden object-cover" image={getImage(fileMap['rectangle-14@2x'])} alt="Computer program" />
      </div>
        <h2 className="m-0 w-[342px] relative text-inherit tracking-[0.02em] leading-[140%] font-bold font-inherit text-transparent !bg-clip-text [background:linear-gradient(90deg,_#61ba5f,_#4c8c4a)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block max-w-full">
          <p className="[margin-block-start:0] [margin-block-end:5px]">
            Built for repair shops.
          </p>
          <p className="m-0">Built for you.</p>
        </h2>
        <div className="self-stretch flex flex-col items-start justify-start gap-[16px] max-w-full text-base">
          <div className="relative leading-[150%] font-semibold">
            <p className="m-0">{`From in-store sales to order management, `}</p>
            <p className="m-0">
              we take care of it all so you can focus on what you do best!
            </p>
          </div>
          <div className="w-[326px] relative leading-[150%] font-body inline-block max-w-full">
            A system designed specifically for shoe repair shops, and to support
            their growth with easy technology that works!
          </div>
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[8px]">
          <div className="w-[195px] rounded-3xs bg-white box-border flex flex-row items-center justify-start py-[11px] px-6 gap-[8px] border-[1px] border-solid border-blue-gray-300">
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0 hidden"
              alt=""
              src="/icon--jamicons--outline--logos--envelope.svg"
            />
            <input
              className="w-[87px] [border:none] [outline:none] font-body text-xs bg-[transparent] h-[17px] relative leading-[140%] text-dark-50 text-left inline-block p-0"
              placeholder="Enter your email"
              type="text"
            />
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0 hidden"
              alt=""
              src="/icon--jamicons--outline--logos--chevrondown.svg"
            />
          </div>
          <button className="cursor-pointer p-2 bg-success flex-1 rounded-3xs box-border flex flex-row items-center justify-center min-w-[97px] border-[2px] border-solid border-seagreen">
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0 hidden"
              alt=""
              src="/icon--jamicons--outline--logos--plus.svg"
            />
            <div className="flex flex-row items-center justify-center py-0 px-6">
              <div className="relative text-base leading-[140%] font-body text-white text-left inline-block min-w-[81px] whitespace-nowrap">
                Get started
              </div>
            </div>
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0 hidden"
              alt=""
              src="/icon--jamicons--outline--logos--arrowright.svg"
            />
          </button>
        </div>
      </section>
    </div>
    </>
  );
};

export default Header;