import * as React from "react";
import PropTypes from "prop-types";
import { CardSVG, HeartSVG, MailFastSVG } from "../icons";
import ContentBox from "./content-box";
import ContactForm from "./contact-form";

const Contact = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start md:px-20 px-5 py-10 box-border max-w-full text-left text-lg text-white font-sub-title ${className}`}
    >
      <div className="flex xl:flex-row flex-col items-center justify-center gap-[80px] max-w-full">
        <section
          className={`flex-1 flex flex-row items-start justify-start box-border max-w-full text-base text-blue-gray-600 font-body-xs ${className}`}
        >
          <div className="flex-grow overflow-hidden flex flex-col items-center justify-start box-border gap-[48px] max-w-full">
            <div className="flex flex-col items-center justify-start gap-[24px] max-w-full">
              <div className="flex flex-col items-center justify-start py-0 box-border gap-[8px] max-w-full text-xl">
                <h1 className="m-0 relative md:text-23xl text-[26px] tracking-[0.02em] leading-[140%] font-bold font-sub-title text-transparent !bg-clip-text [background:linear-gradient(90deg,_#61ba5f,_#4c8c4a)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block">
                  <p className="[margin-block-start:0] max-w-[660px] [margin-block-end:5px]">
                    Outsource the critical repair step and process
                  </p>
                </h1>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[48px] max-w-full text-left text-blue-gray-900">
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
        </section>
        <ContactForm />
      </div>
    </section>
  );
};

Contact.propTypes = {
  className: PropTypes.string,
};

export default Contact;
