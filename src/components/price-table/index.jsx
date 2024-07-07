import * as React from "react";
import SectionText from "./section-text";
import Component from "./component";
import { TickSVG } from "../icons";
import Div from "./div";
import BasicItems from "./basicItems";

const PriceTable = () => {

  const [seconds, setSeconds] = React.useState(267780);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(prevSeconds => prevSeconds - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
    <div className="hidden w-full relative bg-default-white overflow-hidden md:flex flex-col items-center justify-start py-20 px-5 box-border gap-[60px] leading-[normal] tracking-[normal] mq675:gap-[30px]">
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
            <span className="font-semibold"> {Math.floor(seconds / (3600 * 24))} days {Math.floor((seconds % (3600 * 24)) / 3600)} hours {Math.floor((seconds % 3600) / 60)} minutes.</span>
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

      <div className="bg-seagreen-low self-stretch flex text-left text-base text-dark-100 font-body flex-col items-center justify-center pt-[29px] px-5 pb-7 border-[0.5px] border-solid border-dark-25">
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

      <div className="bg-seagreen-low self-stretch text-left text-base text-dark-100 font-body flex flex-col items-center justify-center pt-[29px] px-5 pb-7 border-[0.5px] border-solid border-dark-25">
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


      <div className="bg-seagreen-low self-stretch flex flex-row items-center justify-center pt-[30px] px-5 pb-[29px] border-[0.5px] border-solid border-dark-25">
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
      <div className="bg-seagreen-low self-stretch flex flex-row items-center justify-center pt-[30px] px-5 pb-[29px] border-[0.5px] border-solid border-dark-25">
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
      <div className="bg-seagreen-low self-stretch flex flex-row items-center justify-center pt-[30px] px-5 pb-[29px] border-[0.5px] border-solid border-dark-25">
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
      <div className="bg-seagreen-low self-stretch flex flex-row items-center justify-center pt-[30px] px-5 pb-[29px] border-[0.5px] border-solid border-dark-25">
        <TickSVG />
      </div>
      <div className="self-stretch flex flex-row items-center justify-center pt-[30px] px-5 pb-[29px] border-[0.5px] border-solid border-dark-25">
        <TickSVG />
      </div>
      <div className="self-stretch flex flex-row items-center justify-center pt-[30px] px-5 pb-[29px] border-[0.5px] border-solid border-dark-25">
        <TickSVG />
      </div>
      <Div reports="Reports" />

      <div className="bg-seagreen-low w-full h-full box-border border-[0.5px] border-solid border-dark-25" />
      <div className="self-stretch flex flex-row items-center justify-center pt-[30px] px-5 pb-[29px] border-[0.5px] border-solid border-dark-25">
        <TickSVG />
      </div>
      <div className="self-stretch flex flex-row items-center justify-center pt-[30px] px-5 pb-[29px] border-[0.5px] border-solid border-dark-25">
        <TickSVG />
      </div>

      <Div reports="Team Collaboration" />
      <div className="bg-seagreen-low w-full h-full box-border border-[0.5px] border-solid border-dark-25" />
      <div className="w-full h-full box-border border-[0.5px] border-solid border-dark-25" />
      <div className="self-stretch flex flex-row items-center justify-center pt-[30px] px-5 pb-[29px] border-[0.5px] border-solid border-dark-25">
        <TickSVG />
      </div>

      <Div reports="eCommerce" />
      <div className="bg-seagreen-low w-full h-full box-border border-[0.5px] border-solid border-dark-25" />
      <div className="w-full h-full box-border border-[0.5px] border-solid border-dark-25" />
      <div className="self-stretch flex flex-row items-center justify-center pt-[30px] px-5 pb-[29px] border-[0.5px] border-solid border-dark-25">
        <TickSVG />
      </div>

      <div className="font-sub-title text-left text-lg self-stretch flex flex-row items-center justify-start pt-[27px] px-8 pb-[26px] text-gray-200 border-[0.5px] border-solid border-dark-25">
        <div className="flex-1 relative leading-[26px] font-medium">
          Integrations
        </div>
      </div>
      <div className="bg-seagreen-low self-stretch flex flex-row text-left text-base text-dark-100 font-body items-center justify-center pt-[29px] px-5 pb-7 border-[0.5px] border-solid border-dark-25">
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
      <div className="bg-seagreen-low self-stretch flex flex-row text-left text-base text-dark-100 font-body items-center justify-center pt-[29px] px-5 pb-7 z-[1] border-[0.5px] border-solid border-dark-25">
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

<div className="mb-5 md:hidden mx-[30px]">
<div
className={`mb-6 w-full flex flex-col items-start justify-start gap-[16px] leading-[normal] tracking-[normal] text-center text-[26px] text-dark-100 font-montserrat`}
>
<div className="self-stretch flex flex-row items-start justify-start py-0 px-2 box-border max-w-full">
  <h1 className="m-0 flex-1 relative text-inherit tracking-[0.02em] leading-[140%] font-bold font-inherit text-transparent !bg-clip-text [background:linear-gradient(90deg,_#61ba5f,_#4c8c4a)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block max-w-full">
    Choose your plan
  </h1>
</div>
<div className="self-stretch flex flex-col items-start justify-start gap-[8px] text-base font-info-text">
  <div className="self-stretch relative leading-[140%]">
    Choose a plan that's right for your growing team.
  </div>
  <div className="self-stretch relative text-xs leading-[140%] text-dark-75">
    <p className="m-0">{`Simple pricing. No hidden charges. `}</p>
    <p className="m-0">Free for the first 14 days.</p>
  </div>
</div>
</div>
<div
      className={`w-full flex flex-col items-start justify-start gap-[16px] leading-[normal] tracking-[normal]`}
    >
      <section className="self-stretch flex flex-col items-start justify-start max-w-full text-center text-sm text-lavender font-inter">
        <div className="self-stretch border-[0.5px] flex flex-row items-center justify-start max-w-full">
          <div className="flex-1 rounded-t rounded-b-none bg-success flex flex-row items-center justify-center py-4 px-6 box-border whitespace-nowrap max-w-full">
            <b className="flex-1 relative leading-[20px]">Now available!</b>
          </div>
        </div>
        <div className="self-stretch rounded-[5px] box-border overflow-hidden flex flex-row items-start justify-start max-w-full text-left text-xs text-dark-100 font-sub-title border-[0.5px] border-solid border-dark-25">
          <div className="flex-1 [background:linear-gradient(rgba(76,_140,_74,_0.05),_rgba(76,_140,_74,_0.05)),_#fff] flex flex-col items-start justify-center max-w-full">
            <div className="self-stretch flex flex-col items-start justify-center p-6 gap-[16px]">
              <h3 className="m-0 relative text-lg leading-[140%] font-semibold font-inherit inline-block min-w-[50px]">
                Basic
              </h3>
              <div className="self-stretch relative leading-[140%] font-info-text">
                For the repair business committed to delivering a great
                in-person experience.
              </div>
              <div className="w-[122px] flex flex-col items-start justify-center gap-[8px] text-dark-50 font-inter">
                <div className="relative leading-[17px] font-info-text inline-block min-w-[57px]">
                  Starting at
                </div>
                <div className="w-[115px] flex flex-row items-baseline justify-center gap-[8px] text-sm font-sub-title">
                  <div className="relative [text-decoration:line-through] leading-[20px] font-semibold inline-block min-w-[26px] whitespace-nowrap">
                    $75
                  </div>
                  <div className="flex-1 relative text-lg leading-[140%] font-semibold text-dark-100 inline-block min-w-[34px] whitespace-nowrap">
                    $50
                  </div>
                  <div className="flex-1 relative text-xs leading-[17px] font-info-text inline-block min-w-[39px]">
                    /Month
                  </div>
                </div>
                <div className="relative leading-[20px] font-medium text-darkorange inline-block min-w-[119px]">
                  Early adopters price.
                </div>
                <div className="self-stretch relative leading-[20px] text-darkorange">
                  <p className="m-0 font-medium">Deal ends in</p>
                  <p className="m-0 font-semibold">{Math.floor(seconds / (3600 * 24))}d {Math.floor((seconds % (3600 * 24)) / 3600)} hrs {Math.floor((seconds % 3600) / 60)} mins.</p>
                </div>
              </div>
              <button className="cursor-pointer py-[5px] px-5 bg-success self-stretch shadow-[0px_1px_1.92px_rgba(16,_24,_40,_0.05)] rounded-lg overflow-hidden flex flex-row items-center justify-center whitespace-nowrap border-[1px] border-solid border-success">
                <div className="relative text-xs leading-[17px] font-info-text text-white text-left inline-block min-w-[84px]">
                  Get started free
                </div>
              </button>
            </div>
            <BasicItems
              location1="1 Location"
              employees="2 Employees"
              integration="1 Integration"
              emailSupportOnly="Email Support Only"
            />
            <div className="self-stretch flex flex-col items-start justify-center py-4 pr-[132px] pl-6 gap-[4px] font-info-text">
              <div className="relative leading-[17px] text-dark-50 inline-block min-w-[99px]">
                Features included:
              </div>
              <div className="flex flex-row items-center justify-start py-2 pr-9 pl-0 gap-[8px]">
              <TickSVG />
                <div className="relative leading-[17px] inline-block min-w-[106px]">
                  Order Management
                </div>
              </div>
              <div className="flex flex-row items-center justify-start py-2 pr-[97px] pl-0 gap-[8px]">
              <TickSVG />
                <div className="relative leading-[17px] inline-block min-w-[45px]">
                  Full POS
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start py-2 px-0 gap-[8px]">
                <TickSVG />
                <div className="flex-1 relative leading-[17px]">
                  Customer Management
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start py-2 px-0 gap-[8px]">
                <TickSVG />
                <div className="flex-1 relative leading-[17px]">Messages</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="self-stretch flex flex-col items-start justify-start max-w-full text-left text-xs text-dark-100 font-info-text">
        <button className="cursor-pointer pt-[15px] px-[23px] pb-4 bg-blanchedalmond-200 self-stretch rounded-t rounded-b-none flex flex-row items-center justify-center whitespace-nowrap border-t-[0.5px] border-solid border-dark-25 border-r-[0.5px] border-l-[0.5px]">
          <b className="flex-1 relative text-sm leading-[20px] font-inter text-darksalmon text-center">
            Coming soon
          </b>
        </button>
        <div className="self-stretch rounded-[5px] box-border overflow-hidden flex flex-row items-start justify-start max-w-full border-[0.5px] border-solid border-dark-25">
          <div className="flex-1 bg-white flex flex-col items-start justify-center max-w-full">
            <div className="self-stretch flex flex-col items-start justify-center py-6 pr-5 pl-6 gap-[16px]">
              <h3 className="m-0 relative text-lg leading-[140%] font-semibold font-sub-title inline-block min-w-[114px]">
                Professional
              </h3>
              <div className="self-stretch relative leading-[140%]">
                For the growing  repair business with a few employees and
                multiple sales channels.
              </div>
              <div className="flex flex-col items-start justify-center gap-[8px] text-dark-50">
                <div className="relative leading-[17px] inline-block min-w-[57px]">
                  Starting at
                </div>
                <div className="flex flex-row items-baseline justify-center gap-[8px] text-lg text-dark-100 font-sub-title">
                  <div className="relative leading-[140%] font-semibold inline-block min-w-[34px] whitespace-nowrap">
                    $99
                  </div>
                  <div className="relative text-xs leading-[17px] font-info-text text-dark-50 inline-block min-w-[39px]">
                    /Month
                  </div>
                </div>
              </div>
            </div>
            <BasicItems
              location1="1 Location"
              employees="4 Employees"
              integration="3 Integrations"
              emailSupportOnly="12 hr phone and Email support"
            />
            <div className="self-stretch flex flex-col items-start justify-center py-4 px-6 gap-[4px]">
              <div className="relative leading-[17px] text-dark-50 inline-block min-w-[99px]">
                Features included:
              </div>
              <div className="flex flex-row items-center justify-start py-2 pr-9 pl-0 gap-[8px]">
                <TickSVG />
                <div className="relative leading-[17px] inline-block min-w-[106px]">
                  Order Management
                </div>
              </div>
              <div className="flex flex-row items-center justify-start py-2 pr-[97px] pl-0 gap-[8px]">
                <TickSVG />
                <div className="relative leading-[17px] inline-block min-w-[45px]">
                  Full POS
                </div>
              </div>
              <div className="w-[170px] flex flex-row items-center justify-start py-2 px-0 box-border gap-[8px]">
                <TickSVG />
                <div className="flex-1 relative leading-[17px]">
                  Customer Management
                </div>
              </div>
              <div className="w-[170px] flex flex-row items-center justify-start py-2 px-0 box-border gap-[8px]">
                <TickSVG />
                <div className="flex-1 relative leading-[17px]">Messages</div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start py-2 pr-[110px] pl-0 gap-[8px]">
                <TickSVG />
                <div className="relative leading-[17px] inline-block min-w-[43px]">
                  Reports
                </div>
                <div className="rounded-2xl bg-blanchedalmond-100 flex flex-row items-center justify-center py-0.5 px-2 whitespace-nowrap text-center text-darksalmon">
                  <div className="relative leading-[17px] inline-block min-w-[73px]">
                    Coming Soon
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="rounded-8xs box-border border-[0.5px] self-stretch flex flex-col items-start justify-start max-w-full text-left text-xs text-dark-100 font-info-text">
        <button className="cursor-pointer pt-[15px] px-[23px] pb-4 bg-blanchedalmond-200 self-stretch rounded-t rounded-b-none flex flex-row items-center justify-center whitespace-nowrap border-t-[0.5px] border-solid border-dark-25 border-r-[0.5px] border-l-[0.5px]">
          <b className="flex-1 relative text-sm leading-[20px] font-inter text-darksalmon text-center">
            Coming soon
          </b>
        </button>
        <div className="self-stretch overflow-hidden flex flex-row items-start justify-start max-w-full border-[0.5px] border-solid border-dark-25 rounded-[5px]">
          <div className="flex-1 bg-white flex flex-col items-start justify-center max-w-full">
            <div className="self-stretch flex flex-col items-start justify-center py-6 pr-5 pl-6 gap-[16px]">
              <h3 className="m-0 relative text-lg leading-[140%] font-semibold font-sub-title inline-block min-w-[96px]">
                Enterprise
              </h3>
              <div className="self-stretch relative leading-[140%]">
                For repair businesses with large repair teams and complex
                operations.
              </div>
              <div className="flex flex-col items-start justify-center gap-[8px] text-dark-50">
                <div className="relative leading-[17px] inline-block min-w-[57px]">
                  Starting at
                </div>
                <div className="flex flex-row items-baseline justify-center gap-[8px] text-lg text-dark-100 font-sub-title">
                  <div className="relative leading-[140%] font-semibold inline-block min-w-[41px] whitespace-nowrap">
                    $199
                  </div>
                  <div className="relative text-xs leading-[17px] font-info-text text-dark-50 inline-block min-w-[39px]">
                    /Month
                  </div>
                </div>
              </div>
            </div>
            <BasicItems
              location1="3 Locations"
              employees="6 Employees"
              integration="Unlimited Integrations"
              emailSupportOnly="12 hr priority support"
            />
            <div className="self-stretch flex flex-col items-start justify-center py-4 px-6 gap-[4px]">
              <div className="relative leading-[17px] text-dark-50 inline-block min-w-[99px]">
                Features included:
              </div>
              <div className="flex flex-row items-center justify-start py-2 pr-9 pl-0 gap-[8px]">
                <TickSVG />
                <div className="relative leading-[17px] inline-block min-w-[106px]">
                  Order Management
                </div>
              </div>
              <div className="flex flex-row items-center justify-start py-2 pr-[97px] pl-0 gap-[8px]">
                <TickSVG />
                <div className="relative leading-[17px] inline-block min-w-[45px]">
                  Full POS
                </div>
              </div>
              <div className="w-[170px] flex flex-row items-center justify-start py-2 px-0 box-border gap-[8px]">
                <TickSVG />
                <div className="flex-1 relative leading-[17px]">
                  Customer Management
                </div>
              </div>
              <div className="w-[170px] flex flex-row items-center justify-start py-2 px-0 box-border gap-[8px]">
                <TickSVG />
                <div className="flex-1 relative leading-[17px]">Messages</div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start py-2 pr-[110px] pl-0 gap-[8px]">
                <TickSVG />
                <div className="relative leading-[17px] inline-block min-w-[43px]">
                  Reports
                </div>
                <div className="rounded-2xl bg-blanchedalmond-100 flex flex-row items-center justify-center py-0.5 px-2 whitespace-nowrap text-center text-darksalmon">
                  <div className="relative leading-[17px] inline-block min-w-[73px]">
                    Coming Soon
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start py-2 pr-12 pl-0 gap-[8px]">
              <TickSVG />
                <div className="relative leading-[17px] inline-block min-w-[105px]">
                  Team Collaboration
                </div>
                <div className="rounded-2xl bg-blanchedalmond-100 flex flex-row items-center justify-center py-0.5 px-2 whitespace-nowrap text-center text-darksalmon">
                  <div className="relative leading-[17px] inline-block min-w-[73px]">
                    Coming Soon
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start py-2 pr-[86px] pl-0 gap-[8px]">
              <TickSVG />
                <div className="relative leading-[17px] inline-block min-w-[67px]">
                  eCommerce
                </div>
                <div className="rounded-2xl bg-blanchedalmond-100 flex flex-row items-center justify-center py-0.5 px-2 whitespace-nowrap text-center text-darksalmon">
                  <div className="relative leading-[17px] inline-block min-w-[73px]">
                    Coming Soon
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    </div>
</>
  );
};

export default PriceTable;