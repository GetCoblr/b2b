import * as React from "react";
import PropTypes from "prop-types";
import useFileImport from "../../hooks/useFileImport";

const Section = ({ className = "" }) => {
  const fileMap = useFileImport();
  const backgroundImage = fileMap["section@3x-brand"]
    ? fileMap["section@3x-brand"].publicURL
    : "";

  return (
    <>
      <section
        className={`hidden w-full self-stretch md:flex flex-row items-start justify-start pt-0 px-0 pb-10 box-border max-w-full text-left text-27xl text-white font-sub-title ${className}`}
      >
        <div className="relative">
          <div
            className="z-[1] bg-cover bg-no-repeat bg-[center]"
            style={{
              left: "min(0px, calc((1440px - 100vw) / 2))",
              position: "absolute",
              width: "100vw",
              height: "100%",
              backgroundImage: `url(${backgroundImage})`,
            }}
          >
            <div className="absolute w-full h-full z-[1] inset-0 bg-black opacity-50" />
          </div>
          <div className="relative overflow-hidden flex-1 flex flex-row items-start justify-start py-14 px-20 box-border bg-cover bg-no-repeat bg-[top] min-h-[561px] max-w-full">
            <div className="z-10 flex-1 flex flex-col items-start justify-center gap-[24px] max-w-full">
              <div className="self-stretch flex flex-col items-start justify-center gap-[24px] max-w-full">
                <div className="self-stretch flex flex-col items-start justify-center py-0 pr-5 pl-0 box-border max-w-full">
                  <h1 className="m-0 relative text-inherit tracking-[0.02em] leading-[140%] font-bold font-inherit text-transparent !bg-clip-text [background:linear-gradient(90deg,_#61ba5f,_#4c8c4a)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block max-w-full">
                    Join the <br />
                    Repair Revolution.
                  </h1>
                </div>
                <div className="w-[628px] relative text-base leading-[140%] inline-block max-w-full">
                  The time for circularity is now and repair is key to achieve a
                  circular future. Coblr is the operating system for fashion
                  repair, providing a solution for brands post-sale, or
                  pre-resale.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
        className={`mb-20 relative md:hidden w-full flex flex-row items-start justify-start py-[110px] px-6 box-border bg-cover bg-no-repeat bg-[top] leading-[normal] tracking-[normal] ${className}`}
      >
        <div className="absolute inset-0 bg-black opacity-50" />
        <section className="z-10 flex-1 flex flex-col items-start justify-start gap-[24px] max-w-full text-left text-[26px] text-white font-montserrat">
          <h2 className="m-0 self-stretch relative text-inherit tracking-[0.02em] leading-[140%] font-bold font-inherit text-transparent !bg-clip-text [background:linear-gradient(90deg,_#61ba5f,_#4c8c4a)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
            <p className="[margin-block-start:0] [margin-block-end:5px]">{`Join the `}</p>
            <p className="m-0">Repair Revolution.</p>
          </h2>
          <div className="self-stretch flex flex-col items-start justify-start text-base">
            <div className="self-stretch relative leading-[150%] font-semibold">
              The time for circularity is now and repair is key to achieve a
              circular future. Coblr is the operating system for fashion repair,
              providing a solution for brands post-sale, or pre-resale.
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

Section.propTypes = {
  className: PropTypes.string,
};

export default Section;
