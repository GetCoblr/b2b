import * as React from "react";
import PropTypes from "prop-types";
import {
  FacebookIconSVG,
  GreenCircle,
  GreenCircleSVG,
  InstagramIconSVG,
  LineSVG,
  MessageIconSVG,
  PhoneIconSVG,
  TwitterIconSVG,
} from "../icons";

const Contact = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start pt-0 md:px-20 px-5 pb-20 box-border max-w-full text-left text-lg text-white font-sub-title ${className}`}
    >
      <div className="flex-1 flex-wrap flex flex-row items-start justify-start gap-[80px] max-w-full mq750:gap-[40px] mq450:gap-[20px] mq1275:flex-wrap">
        <div className="h-[379.4px] flex-[0.8678] rounded-[10px] bg-success overflow-hidden flex flex-col items-start justify-start pt-10 px-10 pb-[243.4px] box-border gap-[39.5px] min-w-[393px] max-w-full mq750:h-auto">
          <div className="flex flex-col items-start justify-start gap-[8px] shrink-0">
            <div className="relative leading-[140%] font-semibold">
              Contact Information
            </div>
            <div className="relative text-base leading-[140%] font-body">
              Say something to start a live chat!
            </div>
          </div>
          <div>
            <LineSVG />
          </div>
          <div className="w-[597px] flex flex-row items-start justify-between shrink-0 max-w-[114%] gap-[20px] text-base font-body mq750:flex-wrap">
            <div className="flex flex-col items-start justify-start gap-[40px] min-w-[186px] mq750:flex-1">
              <div className="flex flex-col items-start justify-start gap-[32px]">
                <div className="flex flex-row items-start justify-start gap-[16px]">
                  <PhoneIconSVG />
                  <div className="relative leading-[140%] inline-block min-w-[121px] whitespace-nowrap">
                    +1 123-456-7890
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[16px]">
                  <MessageIconSVG />
                  <div className="relative leading-[140%] whitespace-nowrap">
                    info@getcoblr.com
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-start justify-start gap-[16px]">
                <FacebookIconSVG />
                <TwitterIconSVG />
                <InstagramIconSVG />
              </div>
            </div>
            <div className="flex flex-col items-start justify-start pt-[34px] px-0 pb-0 box-border">
              <GreenCircleSVG />
            </div>
          </div>
        </div>
        <form className="flex-1 m-0 grid grid-cols-2 items-start justify-start gap-[24px] min-w-[387px] max-w-full mq750:min-w-full">
          <h2 className="col-span-2 m-0 relative max-w-[500px] text-11xl tracking-[0.02em] leading-[140%] font-bold font-sub-title text-dark-100 text-left inline-block">
            <p className="m-0">
              Want to learn more about what we are building?
            </p>
          </h2>
          <div className="h-[49px] flex-1 flex flex-col items-start justify-between pt-0 px-0 pb-0 box-border min-w-[181px]">
            <div className="relative text-xs leading-[17px] font-medium font-sub-title text-dark-50 text-left inline-block min-w-[68px]">
              First Name
            </div>
            <input
              type="text"
              className="[outline:none] w-full border-b-[0.5px] font-medium font-sub-title text-xs leading-[140%] text-dark-25 text-left inline-block shrink-0 p-0"
            />
          </div>
          <div className="h-[49px] flex-1 flex flex-col items-start justify-between pt-0 px-0 pb-0 box-border min-w-[181px]">
            <div className="relative text-xs leading-[17px] font-medium font-sub-title text-dark-50 text-left inline-block min-w-[68px]">
              Last Name
            </div>
            <input
              type="text"
              className="[outline:none] w-full border-b-[0.5px] font-medium font-sub-title text-xs leading-[140%] text-dark-25 text-left inline-block shrink-0 p-0"
            />
          </div>
          <div className="h-[49px] flex-1 flex flex-col items-start justify-between pt-0 px-0 pb-0 box-border min-w-[181px]">
            <div className="relative text-xs leading-[17px] font-medium font-sub-title text-dark-50 text-left inline-block min-w-[68px]">
              Email
            </div>
            <input
              type="text"
              className="[outline:none] w-full border-b-[0.5px] font-medium font-sub-title text-xs leading-[140%] text-dark-25 text-left inline-block shrink-0 p-0"
            />
          </div>
          <div className="h-[49px] flex-1 flex flex-col items-start justify-between pt-0 px-0 pb-0 box-border min-w-[181px]">
            <div className="relative text-xs leading-[17px] font-medium font-sub-title text-dark-50 text-left inline-block min-w-[68px]">
              Phone Number
            </div>
            <input
              type="text"
              className="[outline:none] w-full border-b-[0.5px] font-medium font-sub-title text-xs leading-[140%] text-dark-25 text-left inline-block shrink-0 p-0"
            />
          </div>
          <div className="col-span-2 self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-0 gap-[8px]">
            <div className="relative text-xs leading-[17px] font-medium font-sub-title text-dark-50 text-left inline-block min-w-[54px]">
              Message
            </div>
            <input
              className="w-full border-b-[0.5px] [outline:none] font-medium font-sub-title text-xs leading-[140%] placeholder:text-dark-25 text-left inline-block shrink-0 p-0"
              placeholder="Write your message.."
              type="text"
            />
          </div>
          <button className="cursor-pointer py-[9px] px-[22px] bg-success rounded-md flex flex-row items-center justify-center border-[2px] border-solid border-seagreen">
            <div className="flex flex-row items-center justify-center py-0 px-6">
              <div className="relative text-lg leading-[140%] font-semibold font-sub-title text-white text-left">
                Send Message
              </div>
            </div>
          </button>
        </form>
      </div>
    </section>
  );
};

Contact.propTypes = {
  className: PropTypes.string,
};

export default Contact;
