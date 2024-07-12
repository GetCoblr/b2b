import * as React from "react";
import Station from "./station";
import { DownArrowSVG, TickSVG } from "../icons";
import { motion } from "framer-motion";

const MobileExtended = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div className="md:hidden bg-default-white w-full relative grid grid-cols-4 pt-0 px-0 pb-0 box-border leading-[normal] tracking-[normal] text-left text-xs text-dark-100 font-sub-title">
      <header className="self-stretch col-span-4 [background:linear-gradient(rgba(201,_200,_200,_0.1),_rgba(201,_200,_200,_0.1)),_#fff] box-border flex flex-row items-center justify-center py-[15px] px-[31px] top-[0] z-[1] sticky whitespace-nowrap max-w-full shrink-0 text-center text-base text-gray-200 font-sub-title border-[0.5px] border-solid border-dark-25">
        <div className="flex-1 relative leading-[140%] font-semibold inline-block max-w-full">
          Required Hardware
        </div>
      </header>
      <div className="w-full h-full flex-1 box-border border-solid border-dark-25 border-[0.5px]" />
      <div className="flex flex-col items-center justify-center pt-4 px-[31px] pb-[15px] border-[0.5px] border-solid border-dark-25">
        <div className="relative leading-[17px] font-xs inline-block min-w-[33px]">
          Basic
        </div>
      </div>
      <div className="flex flex-col items-center justify-center pt-4 px-2.5 pb-[15px] text-center border-[0.5px] border-solid border-dark-25">
        <div className="relative leading-[17px] font-xs inline-block min-w-[75px]">
          Professional
        </div>
      </div>
      <div className="flex flex-col items-center justify-center pt-4 px-4 pb-[15px] z-[1] border-[0.5px] border-solid border-dark-25">
        <div className="relative leading-[17px] font-xs inline-block min-w-[63px]">
          Enterprise
        </div>
      </div>
      <div className="text-left text-xs text-dark-100 font-info-text box-border flex flex-row items-center justify-start pt-5 px-4 pb-[19px] border-[0.5px] border-solid border-dark-25">
        <div className="flex-1 relative tracking-[-0.3px] leading-[140%] flex flex-col items-center">
          <p className="m-0">Tablet&#8203;/&#8203;Computer</p>
          <p className="m-0">(mobile coming soon)</p>
        </div>
      </div>
      <div className="flex-1 col-span-3 box-border flex flex-col items-start justify-center py-[45.5px] px-4 font-info-text text-xs text-dark-100 border-[0.5px] border-solid border-dark-25">
        Bring Your Own Device or Select from Recommended Devices Here.
      </div>
      <div className="flex-1 box-border flex flex-row items-center justify-start pt-[14.5px] px-[15px] pb-[13px] text-left text-xs text-dark-100 font-info-text border-solid border-dark-25 border-[0.5px]">
        <a
          className="flex-1 relative leading-[140%] text-[inherit]"
          href="https://dashboard.stripe.com/terminal/shop/thsku_K0pFVGgj9FYNWK"
          target="_blank"
        >
          Stripe Credit Card Reader
        </a>
      </div>
      <div className="flex flex-row items-center justify-center pt-[30px] px-[38px] pb-[29px] border-[0.5px] border-solid border-dark-25">
        <TickSVG />
      </div>
      <div className="flex flex-row items-center justify-center pt-[30px] px-[38px] pb-[29px] border-[0.5px] border-solid border-dark-25">
        <TickSVG />
      </div>
      <div className="flex flex-row items-center justify-center pt-[30px] px-[38px] pb-[29px] z-[1] border-[0.5px] border-solid border-dark-25">
        <TickSVG />
      </div>
      <div className="flex-1 box-border flex flex-row items-center justify-start pt-[14.5px] px-[15px] pb-[13px] text-left text-xs text-dark-100 font-info-text border-solid border-dark-25 border-[0.5px]">
        Shipping Label Printer
      </div>
      <div className="w-full h-full box-border border-[0.5px] border-solid border-dark-25" />
      <div className="flex flex-row items-center justify-center pt-[30px] px-[38px] pb-[29px] border-[0.5px] border-solid border-dark-25">
        <TickSVG />
      </div>
      <div className="flex flex-row items-center justify-center pt-[30px] px-[38px] pb-[29px] z-[1] border-[0.5px] border-solid border-dark-25">
        <TickSVG />
      </div>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="col-span-4 [background:linear-gradient(rgba(201,_200,_200,_0.1),_rgba(201,_200,_200,_0.1)),_#fff] flex flex-row items-center justify-center pt-4 px-[71px] pb-[15px] gap-[8px] whitespace-nowrap shrink-0 text-center text-base text-gray border-solid border-dark-25 border-[0.5px]"
      >
        <div className="relative leading-[140%] font-semibold">
          Recommended Hardwares
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <DownArrowSVG />
        </motion.div>
      </div>
      <Station isOpen={isOpen} />
    </div>
  );
};

export default MobileExtended;
