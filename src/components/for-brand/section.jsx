import * as React from "react";
import PropTypes from "prop-types";
import useFileImport from "../../hooks/useFileImport";
import { navigate } from "gatsby";

const Section = ({ className = "" }) => {
  const fileMap = useFileImport();
  const backgroundImage = fileMap["section@3x-brand"]
    ? fileMap["section@3x-brand"].publicURL
    : "";
  return (
    <div className="relative">
      <div
        className="bg-cover bg-no-repeat bg-center"
        style={{
          left: "min(0px, calc((1440px - 100vw) / 2))",
          position: "absolute",
          width: "100vw",
          height: "100%",
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        <div className="absolute w-full h-full z-[0] inset-0 bg-black opacity-50" />
      </div>
      <section
        className={`z-[1] self-stretch flex flex-row items-start justify-start py-14 px-20 box-border bg-cover bg-no-repeat bg-[top] min-h-[500px] max-w-full text-left text-27xl text-white font-sub-title ${className}`}
      >
        <div className="flex-1 flex flex-col items-start justify-center gap-[24px] max-w-full">
          <div className="self-stretch flex flex-col items-start justify-center gap-[24px] max-w-full">
            <div className="self-stretch flex flex-col items-start justify-center py-0 pr-5 pl-0 box-border max-w-full">
              <h1 className="m-0 h-[133px] relative text-inherit tracking-[0.02em] leading-[140%] font-bold font-inherit text-transparent !bg-clip-text [background:linear-gradient(90deg,_#61ba5f,_#4c8c4a)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block max-w-full mq750:text-18xl mq750:leading-[52px] mq450:text-9xl mq450:leading-[39px]">
                <p className="[margin-block-start:0] [margin-block-end:5px]">{`Join the `}</p>
                <p className="m-0">Repair Revolution.</p>
              </h1>
            </div>
            <div className="w-[560px] relative text-base leading-[140%] font-body inline-block max-w-full">
              The time for circularity is now and repair is key to achieve a
              circular future. Coblr is the operating system for fashion repair,
              providing a solution for brands post-sale, or pre-resale.
            </div>
          </div>
          <div className="z-[1] w-[560px] flex flex-row items-start justify-start gap-[16px] max-w-full mq750:flex-wrap">
            <button
              onClick={() => navigate("mailto:info@getcoblr.com")}
              className="cursor-pointer py-[9px] px-[22px] bg-success rounded-md flex flex-row items-center justify-center border-[2px] border-solid border-seagreen"
            >
              <div className="flex flex-row items-center justify-center py-0 px-6">
                <div className="relative text-lg leading-[140%] font-semibold font-sub-title text-white text-left inline-block min-w-[105px] whitespace-nowrap">
                  Get started
                </div>
              </div>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

Section.propTypes = {
  className: PropTypes.string,
};

export default Section;
