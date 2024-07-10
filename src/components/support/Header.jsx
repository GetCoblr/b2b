import { GatsbyImage, getImage } from "gatsby-plugin-image";
import * as React from "react";
import useFileImport from "../../hooks/useFileImport";

const Header = ({ className = "" }) => {
  const fileMap = useFileImport();
  return (
    <>
      <div className="hidden md:flex px-20 xl:flex-row flex-col-reverse py-6 pe-0 items-start">
        <div
          className={`xl:mt-16 mt-0 z-[2] flex-1 flex flex-col items-start justify-center box-border gap-[24px] leading-[normal] tracking-[normal] text-left text-[52px] font-sub-title ${className}`}
        >
          <h1 className="m-0 text-nowrap relative text-inherit tracking-[0.02em] leading-[140%] font-bold font-inherit text-transparent !bg-clip-text [background:linear-gradient(90deg,_#61ba5f,_#4c8c4a)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block max-w-full">
            <p className="[margin-block-start:0] [margin-block-end:5px]">
              Feeling stuck?
            </p>
            <p className="m-0">We’re here to help!</p>
          </h1>
          <button className="cursor-pointer py-[9px] px-[22px] bg-success w-[198px] rounded-md box-border flex flex-row items-center justify-center border-[2px] border-solid border-seagreen">
            <div className="flex flex-row items-center justify-center py-0 px-6">
              <div className="relative text-lg leading-[140%] font-semibold font-sub-title text-white text-left inline-block min-w-[102px]">
                Contact Us
              </div>
            </div>
          </button>
        </div>
        <div className="relative h-[600px] w-full">
          <div className="w-[997px] h-[509px] absolute !m-[0] right-[-140px] bottom-[_10%] z-[1]">
            <GatsbyImage
              className="shadow-[0px_0px_25px_5px_rgba(0,_0,_0,_0.1),_0px_0px_10px_rgba(0,_0,_0,_0.07)] absolute top-[calc(50%_-_242.5px)] left-[225px] w-[772px] h-[458px] object-cover"
              alt="Image"
              image={getImage(fileMap["support-mockup-1@2x"])}
            />
            <div className="absolute top-[calc(50%_+_22.5px)] left-[-20px] rounded-3xs w-72 h-[232px] z-[1] flex items-center justify-center">
              <GatsbyImage
                className="rounded-[15px] shadow-[0px_0px_25px_5px_rgba(0,_0,_0,_0.1),_0px_0px_10px_rgba(0,_0,_0,_0.07)] w-full h-full z-[1] object-contain absolute left-[2px] top-[3px] [transform:scale(1.06)]"
                alt="Image"
                image={getImage(fileMap["msg-1@2x"])}
              />
            </div>
            <div className="absolute top-[calc(50%_-_275px)] left-[180px] rounded-3xs w-[150px] h-[386px] z-[2] flex items-center justify-center">
              <GatsbyImage
                className="rounded-[15px] shadow-[0px_0px_25px_5px_rgba(0,_0,_0,_0.1),_0px_0px_10px_rgba(0,_0,_0,_0.07)] w-full h-full z-[2] object-contain absolute left-[2px] top-[3px] [transform:scale(1.093)]"
                alt="Image"
                image={getImage(fileMap["pos--checkout-1@2x"])}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="md:hidden w-full relative [background:linear-gradient(rgba(76,_140,_74,_0.02),_rgba(76,_140,_74,_0.02)),_linear-gradient(180deg,_#fff,_#f7f7f7)] flex flex-row items-start justify-start pt-[397px] pb-[50px] pr-3.5 pl-6 box-border gap-[80px] leading-[normal] tracking-[normal]">
        <section
          className={`flex-1 flex flex-col items-start justify-start gap-[24px] max-w-full text-left text-7xl text-white font-montserrat ${className}`}
        >
          <h2 className="m-0 w-[342px] relative text-inherit tracking-[0.02em] leading-[140%] font-bold font-inherit text-transparent !bg-clip-text [background:linear-gradient(90deg,_#61ba5f,_#4c8c4a)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block max-w-full">
            <p className="[margin-block-start:0] [margin-block-end:5px]">
              Feeling stuck?
            </p>
            <p className="m-0">We’re here to help!</p>
          </h2>
          <div className="self-stretch flex flex-row items-start justify-start max-w-full text-base font-body">
            <div className="flex-1 rounded-[10px] bg-success box-border flex flex-row items-center justify-center py-2 px-0 max-w-full border-[2px] border-solid border-seagreen">
              <div className="flex flex-row items-center justify-center py-0 px-6">
                <div className="relative leading-[140%] inline-block min-w-[80px]">
                  Contact Us
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="h-[259.4px] w-[476.7px] absolute !m-[0] top-[98.5px] right-[-104.7px]">
          <GatsbyImage
            className="rounded-[10px] shadow-[0px_0px_25px_5px_rgba(0,_0,_0,_0.1),_0px_0px_10px_rgba(0,_0,_0,_0.07)] absolute top-[calc(50%_-_129.7px)] left-[61.1px] w-[415.6px] h-[235.6px] object-cover"
            alt="Image"
            image={getImage(fileMap["support-mockup-1@2x"])}
          />
          <div className="absolute top-[calc(50%_+_10.3px)] left-[46px] rounded-[10px] w-[155px] h-[119.4px] z-[1] flex items-center justify-center">
            <GatsbyImage
              className="rounded-[10px] shadow-[0px_0px_25px_5px_rgba(0,_0,_0,_0.1),_0px_0px_10px_rgba(0,_0,_0,_0.07)] w-full h-full z-[1] object-contain absolute left-[2px] top-[3px] [transform:scale(1.117)]"
              alt="Image"
              image={getImage(fileMap["msg-1@2x"])}
            />
          </div>
          <div className="absolute top-[17.7px] left-[0px] rounded-[10px] w-[80.7px] h-[198.6px] z-[2] flex items-center justify-center">
            <GatsbyImage
              className="rounded-[10px] shadow-[0px_0px_25px_5px_rgba(0,_0,_0,_0.1),_0px_0px_10px_rgba(0,_0,_0,_0.07)] w-full h-full z-[2] object-contain absolute left-[2px] top-[3px] [transform:scale(1.173)]"
              alt="Image"
              image={getImage(fileMap["pos--checkout-1@2x"])}
            />
          </div>
        </section>
      </div>
    </>
  );
};

export default Header;
