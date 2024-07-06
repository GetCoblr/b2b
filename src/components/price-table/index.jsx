import * as React from "react";
import SectionText from "./section-text";
import Component from "./component";
import { TickSVG } from "../icons";
import Div from "./div";

const PriceTable = () => {
  return (
    <div className="w-full relative bg-default-white overflow-hidden flex flex-col items-center justify-start py-20 px-5 box-border gap-[60px] leading-[normal] tracking-[normal] mq675:gap-[30px]">
      <SectionText />
      <main className="w-[1264px] rounded-t rounded-b-none overflow-hidden flex flex-col items-start justify-start max-w-full">
      <div
      className={`grid grid-cols-4 flex-nowrap items-center justify-center`}
    >
      <div className="flex-1 rounded bg-success flex flex-row items-center justify-center py-4 px-6 box-border opacity-[0] w-full whitespace-nowrap" />
      <button className="border-[0.5px] cursor-pointer border-solid py-4 px-6 bg-success flex-1 rounded-t rounded-b-none flex flex-row items-center justify-center box-border w-full whitespace-nowrap hover:bg-mediumseagreen">
        <b className="text-sm flex-1 relative leading-[20px] font-inter text-default-white text-center">
          Now available!
        </b>
      </button>
      <button className="cursor-pointer pt-[15px] px-[23px] pb-4 bg-blanchedalmond-200 flex-1 rounded-t rounded-b-none box-border flex flex-row items-center justify-center w-full whitespace-nowrap border-t-[0.5px] border-solid border-dark-25 border-r-[0.5px] border-l-[0.5px] hover:bg-peachpuff">
        <b className="text-sm flex-1 relative leading-[20px] font-inter text-darksalmon text-center">
          Coming soon
        </b>
      </button>
      <button className="cursor-pointer pt-[15px] px-[23px] pb-4 bg-blanchedalmond-200 flex-1 rounded-t rounded-b-none box-border flex flex-row items-center justify-center w-full whitespace-nowrap border-t-[0.5px] border-solid border-dark-25 border-r-[0.5px] border-l-[0.5px] hover:bg-peachpuff">
        <b className="flex-1 relative text-sm leading-[20px] font-inter text-darksalmon text-center">
          Coming soon
        </b>
      </button>
      <div className=" self-stretch flex flex-col items-start justify-center pt-[170.5px] pb-[169px] pr-5 pl-8 text-5xl text-gray-200 font-body-xs border-[0.5px] border-solid border-dark-25 mq450:pt-[111px] mq450:pb-[110px] mq450:box-border">
        <h3 className="m-0 relative text-inherit font-bold font-inherit mq450:text-lgi">
          Features included
        </h3>
      </div>
      <div className="bg-seagreen-low self-stretch flex flex-col items-start justify-center pt-6 px-6 pb-[23px] gap-[16px] text-5xl font-sub-title border-[0.5px] border-solid border-dark-25 mq450:pt-5 mq450:pb-5 mq450:box-border">
        <h3 className="m-0 relative text-inherit leading-[34px] font-bold font-inherit inline-block min-w-[87px] mq450:text-lgi mq450:leading-[27px]">
          Starter
        </h3>
        <div className="self-stretch relative text-base leading-[140%] font-body">
          For the repair business committed to delivering a great in-person
          experience.
        </div>
        <div className="flex flex-col items-start justify-end gap-[4px] text-xs text-darkorange font-inter">
          <div className="relative leading-[17px] font-body text-dark-50 inline-block min-w-[57px]">
            Starting at
          </div>
          <div className="flex flex-row items-baseline justify-start gap-[8px] text-lg text-dark-75 font-sub-title">
            <div className="relative [text-decoration:line-through] leading-[140%] inline-block min-w-[32px] whitespace-nowrap">
              $75
            </div>
            <b className="relative text-19xl tracking-[0.02em] leading-[140%] inline-block text-dark-100 min-w-[75px] whitespace-nowrap mq450:text-4xl mq450:leading-[32px] mq750:text-11xl mq750:leading-[43px]">
              $50
            </b>
            <div className="flex flex-row items-end justify-start py-[7px] px-0 text-xs text-dark-50 font-body">
              <div className="relative leading-[17px] inline-block min-w-[39px]">
                /Month
              </div>
            </div>
          </div>
          <div className="relative leading-[20px] font-medium inline-block min-w-[119px]">
            Early adopters price.
          </div>
          <div className="relative leading-[20px]">
            <span className="font-medium">Deal ends in</span>
            <span className="font-semibold"> 3 days 2 hours 23 minutes.</span>
          </div>
        </div>
        <button className="cursor-pointer [border:none] py-4 px-6 bg-success self-stretch rounded flex flex-row items-center justify-center whitespace-nowrap hover:bg-mediumseagreen">
          <b className="flex-1 relative text-sm leading-[20px] font-inter text-default-white text-center">
            Get started free
          </b>
        </button>
      </div>
      <Component
        growth="Growth"
        forTheGrowingRepairBusine="For the growing  repair business with a few employees and multiple sales channels."
        prop="$99"
      />
      <Component
        growth="Enterprise"
        forTheGrowingRepairBusine="For repair businesses with large repair teams and complex operations."
        prop="$199"
      />
      <div className="self-stretch flex flex-row items-center justify-start pt-[27.5px] px-8 pb-[26px] border-[0.5px] border-solid border-dark-25">
        <div className="text-left text-lg text-dark-100 font-sub-title flex-1 relative leading-[140%] font-semibold">
          Number of Locations
        </div>
      </div>

      <div className="self-stretch flex text-left text-base text-dark-100 font-body flex-col items-center justify-center pt-[29px] px-5 pb-7 border-[0.5px] border-solid border-dark-25">
        <div className="relative leading-[140%] inline-block min-w-[75px]">
          1 Location
        </div>
      </div>

      <div className="text-left text-base text-dark-100 font-body self-stretch flex flex-col items-center justify-center pt-[29px] px-5 pb-7 border-[0.5px] border-solid border-dark-25">
        <div className="relative leading-[140%] inline-block min-w-[75px]">
          1 Location
        </div>
      </div>

      <div className="text-left text-base text-dark-100 font-body self-stretch flex flex-col items-center justify-center pt-[29px] px-5 pb-7 border-[0.5px] border-solid border-dark-25">
        <div className="relative leading-[140%] inline-block min-w-[83px]">
          3 Locations
        </div>
      </div>

      <div className="text-left text-lg text-dark-100 font-sub-title self-stretch flex flex-row items-center justify-start pt-[27.5px] px-8 pb-[26px] border-[0.5px] border-solid border-dark-25">
        <div className="flex-1 relative leading-[140%] font-semibold">
          Number of Users
        </div>
      </div>

      <div className="self-stretch text-left text-base text-dark-100 font-body flex flex-col items-center justify-center pt-[29px] px-5 pb-7 border-[0.5px] border-solid border-dark-25">
        <div className="relative leading-[140%] inline-block min-w-[91px]">
          2 Employees
        </div>
      </div>

      <div className="self-stretch flex text-left text-base text-dark-100 font-body flex-col items-center justify-center pt-[29px] px-5 pb-7 border-[0.5px] border-solid border-dark-25">
        <div className="relative leading-[140%] inline-block min-w-[91px]">
          4 Employees
        </div>
      </div>

      <div className="self-stretch text-left text-base text-dark-100 font-body flex flex-col items-center justify-center pt-[29px] px-5 pb-7 border-[0.5px] border-solid border-dark-25">
        <div className="relative leading-[140%] inline-block min-w-[91px]">
          6 Employees
        </div>
      </div>


      <div className="text-left text-lg text-dark-100 font-sub-title self-stretch flex flex-row items-center justify-start pt-[27.5px] px-8 pb-[26px] border-[0.5px] border-solid border-dark-25">
        <div className="flex-1 relative leading-[140%] font-semibold">
          Order Management
        </div>
      </div>


      <div className="self-stretch flex flex-row items-center justify-center pt-[30px] px-5 pb-[29px] border-[0.5px] border-solid border-dark-25">
      <TickSVG />
      </div>

      <div className="self-stretch flex flex-row items-center justify-center pt-[30px] px-5 pb-[29px] border-[0.5px] border-solid border-dark-25">
      <TickSVG />
      </div>

      <div className="self-stretch flex flex-row items-center justify-center pt-[30px] px-5 pb-[29px] border-[0.5px] border-solid border-dark-25">
        <TickSVG />
      </div>

      <div className="text-left text-lg text-dark-100 font-sub-title self-stretch flex flex-row items-center justify-start pt-[27.5px] px-8 pb-[26px] border-[0.5px] border-solid border-dark-25">
        <div className="flex-1 relative leading-[140%] font-semibold">
          Full POS
        </div>
      </div>
      <div className="self-stretch flex flex-row items-center justify-center pt-[30px] px-5 pb-[29px] border-[0.5px] border-solid border-dark-25">
        <TickSVG />
      </div>
      <div className="self-stretch flex flex-row items-center justify-center pt-[30px] px-5 pb-[29px] border-[0.5px] border-solid border-dark-25">
        <TickSVG />
      </div>
      <div className="self-stretch flex flex-row items-center justify-center pt-[30px] px-5 pb-[29px] border-[0.5px] border-solid border-dark-25">
        <TickSVG />
      </div>

      <div className="text-left text-lg text-dark-100 font-sub-title self-stretch flex flex-row items-center justify-start pt-[27.5px] px-8 pb-[26px] border-[0.5px] border-solid border-dark-25">
        <div className="flex-1 relative leading-[140%] font-semibold">
          Customer Management
        </div>
      </div>
      <div className="self-stretch flex flex-row items-center justify-center pt-[30px] px-5 pb-[29px] border-[0.5px] border-solid border-dark-25">
        <TickSVG />
      </div>
      <div className="self-stretch flex flex-row items-center justify-center pt-[30px] px-5 pb-[29px] border-[0.5px] border-solid border-dark-25">
        <TickSVG />
      </div>
      <div className="self-stretch flex flex-row items-center justify-center pt-[30px] px-5 pb-[29px] border-[0.5px] border-solid border-dark-25">
        <TickSVG />
      </div>

      <div className="text-left text-lg text-dark-100 font-sub-title self-stretch flex flex-col items-start justify-center pt-[27.5px] pb-[26px] pr-5 pl-8 border-[0.5px] border-solid border-dark-25">
        <div className="relative leading-[140%] font-semibold inline-block min-w-[91px]">
          Messages
        </div>
      </div>
      <div className="self-stretch flex flex-row items-center justify-center pt-[30px] px-5 pb-[29px] border-[0.5px] border-solid border-dark-25">
        <TickSVG />
      </div>
      <div className="self-stretch flex flex-row items-center justify-center pt-[30px] px-5 pb-[29px] border-[0.5px] border-solid border-dark-25">
        <TickSVG />
      </div>
      <div className="self-stretch flex flex-row items-center justify-center pt-[30px] px-5 pb-[29px] border-[0.5px] border-solid border-dark-25">
        <TickSVG />
      </div>
      <Div reports="Reports" />

      <div className="w-full h-full box-border border-[0.5px] border-solid border-dark-25" />
      <div className="self-stretch flex flex-row items-center justify-center pt-[30px] px-5 pb-[29px] border-[0.5px] border-solid border-dark-25">
        <TickSVG />
      </div>
      <div className="self-stretch flex flex-row items-center justify-center pt-[30px] px-5 pb-[29px] border-[0.5px] border-solid border-dark-25">
        <TickSVG />
      </div>

      <Div reports="Team Collaboration" />
      <div className="w-full h-full box-border border-[0.5px] border-solid border-dark-25" />
      <div className="w-full h-full box-border border-[0.5px] border-solid border-dark-25" />
      <div className="self-stretch flex flex-row items-center justify-center pt-[30px] px-5 pb-[29px] border-[0.5px] border-solid border-dark-25">
        <TickSVG />
      </div>

      <Div reports="eCommerce" />
      <div className="w-full h-full box-border border-[0.5px] border-solid border-dark-25" />
      <div className="w-full h-full box-border border-[0.5px] border-solid border-dark-25" />
      <div className="self-stretch flex flex-row items-center justify-center pt-[30px] px-5 pb-[29px] border-[0.5px] border-solid border-dark-25">
        <TickSVG />
      </div>

      <div className="font-sub-title text-left text-lg self-stretch flex flex-row items-center justify-start pt-[27px] px-8 pb-[26px] text-gray-200 border-[0.5px] border-solid border-dark-25">
        <div className="flex-1 relative leading-[26px] font-medium">
          Integrations
        </div>
      </div>
      <div className="self-stretch flex flex-row text-left text-base text-dark-100 font-body items-center justify-center pt-[29px] px-5 pb-7 border-[0.5px] border-solid border-dark-25">
        <div className="relative leading-[140%] inline-block min-w-[90px]">
          1 Integration
        </div>
      </div>

      <div className="self-stretch flex flex-row text-left text-base text-dark-100 font-body items-center justify-center pt-[29px] px-5 pb-7 border-[0.5px] border-solid border-dark-25">
        <div className="relative leading-[140%] inline-block min-w-[98px]">
          3 Integrations
        </div>
      </div>

      <div className="flex flex-row text-left text-base text-dark-100 font-body items-center justify-center pt-[29px] px-[79px] pb-7 border-[0.5px] border-solid border-dark-25 mq450:pl-5 mq450:pr-5 mq450:box-border">
        <div className="relative leading-[140%]">Unlimited Integrations</div>
      </div>

      <div className="font-sub-title text-left text-lg self-stretch flex flex-row items-center justify-start pt-[27px] px-8 pb-[26px] z-[1] text-gray-200  border-[0.5px] border-solid border-dark-25">
        <div className="flex-1 relative leading-[26px] font-medium">
          Support features
        </div>
      </div>
      <div className="self-stretch flex flex-row text-left text-base text-dark-100 font-body items-center justify-center pt-[29px] px-5 pb-7 z-[1] border-[0.5px] border-solid border-dark-25">
        <div className="relative leading-[140%]">Email Support Only</div>
      </div>
      <div className="self-stretch flex flex-row text-left text-base text-dark-100 font-body items-center justify-center pt-[18px] px-5 pb-[17px] z-[1] border-[0.5px] border-solid border-dark-25">
        <div className="relative leading-[140%]">
          <p className="m-0">12 hr support,</p>
          <p className="m-0">Phone and Email</p>
        </div>
      </div>

      <div className="self-stretch flex flex-row text-left text-base text-dark-100 font-body items-center justify-center pt-[18px] px-5 pb-[17px] z-[1] border-[0.5px] border-solid border-dark-25">
        <div className="relative leading-[140%]">
          <p className="m-0">12 hr support,</p>
          <p className="m-0">Priority Support</p>
        </div>
      </div>
    </div>
    
    

      </main>
    </div>
  );
};

export default PriceTable;