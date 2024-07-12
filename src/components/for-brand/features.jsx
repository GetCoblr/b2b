import * as React from "react";
import ContentBox from "./content-box";
import PropTypes from "prop-types";
import { CardSVG, HeartSVG, MailFastSVG } from "../icons";

const Features = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-20 box-border max-w-full text-center text-base text-blue-gray-600 font-body-xs mq750:pb-[52px] mq750:box-border ${className}`}
    >
      <div className="relative">
        <div
          style={{
            left: "min(0px, calc((1440px - 100vw) / 2))",
            position: "absolute",
            width: "100vw",
            height: "100%",
          }}
          className="[background:linear-gradient(rgba(76,_140,_74,_0.02),_rgba(76,_140,_74,_0.02)),_linear-gradient(180deg,_#f7f7f7,_rgba(248,_255,_248,_0.02))]"
        />
        <div className="flex-1 overflow-hidden flex flex-col items-center justify-start p-20 box-border gap-[48px] max-w-full mq750:gap-[24px] mq750:py-[52px] mq750:px-10 mq750:box-border">
          <div className="flex flex-col items-center justify-start gap-[24px] max-w-full">
            <div className="flex flex-col items-center justify-start py-0 px-[72px] box-border gap-[8px] max-w-full text-xl mq1100:pl-9 mq1100:pr-9 mq1100:box-border">
              <h1 className="m-0 h-[123px] relative text-23xl tracking-[0.02em] leading-[140%] font-bold font-sub-title text-transparent !bg-clip-text [background:linear-gradient(90deg,_#61ba5f,_#4c8c4a)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block mq750:text-15xl mq750:leading-[47px] mq450:text-6xl mq450:leading-[35px]">
                <p className="[margin-block-start:0] [margin-block-end:5px]">
                  Outsource the critical repair step
                </p>
                <p className="m-0">and process</p>
              </h1>
            </div>
          </div>
          <div className="self-stretch flex flex-wrap flex-row items-start justify-start gap-[48px] max-w-full text-left text-blue-gray-900 mq750:gap-[24px] mq1275:flex-wrap">
            <ContentBox
              icon={<MailFastSVG />}
              title="Simple Tracking"
              paragraph="Easy order tracking, transparent process, and upfront pricing."
            />
            <ContentBox
              icon={<CardSVG />}
              title="Trusted Repair Artisans"
              paragraph="Excellent craftsmanship each and every time."
            />
            <ContentBox
              icon={<HeartSVG />}
              title="Build Loyalty, Support Sustainability"
              paragraph="Helping customers revive their favorite items builds brand loyalty."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

Features.propTypes = {
  className: PropTypes.string,
};

export default Features;
