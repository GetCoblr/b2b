import * as React from "react";
import { navigate } from "gatsby";
import moment from "moment";
import momentTimezone from "moment-timezone";

import SectionText from "./section-text";
import Component from "./component";
import Div from "./div";
import BasicItems from "./basicItems";
import { motion } from "framer-motion";
import MobileExtended from "./mobileExtended";

import { DownArrowSVG, IconLinkSVG, TickSVG } from "../icons";

const PriceTable = ({ extended = false, title, subTitle }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const containerRef = React.useRef(null);

  const planRemainingTime = (deadline) => {
    const deadlineDate = moment.tz(
      deadline + " 00:00",
      "MM-DD-YYYY HH:mm",
      process.env.GATSBY_DEADLINE_TIMEZONE
    );
    const now = moment.tz(moment(), process.env.GATSBY_DEADLINE_TIMEZONE);
    const duration = moment.duration(deadlineDate.diff(now));

    if (duration.asMilliseconds() <= 0) {
      return {
        isTimeRemaining: false,
        remainingTimeStr: `0 days 0 hours 0 minutes`
      };
    }

    const days = Math.floor(duration.asDays());
    const hours = duration.hours();
    const minutes = duration.minutes();

    return {
      isTimeRemaining: true,
      remainingTimeStr: `${days} days ${hours} hours ${minutes} minutes`,
    };
  }

  return (
    <>
      <div className="hidden w-full relative overflow-hidden md:flex flex-col items-center justify-start py-10 px-5 box-border gap-[60px] leading-[normal] tracking-[normal] mq675:gap-[30px]">
        <SectionText title={title} subTitle={subTitle} />
        <main className="w-[1264px] rounded-t rounded-b-none overflow-hidden flex flex-col items-start justify-start max-w-full">
          <div
            className={`grid grid-cols-4 flex-nowrap items-center justify-center`}
          >
            <div className="flex-1 rounded bg-success flex flex-row items-center justify-center py-4 px-6 box-border opacity-[0] w-full whitespace-nowrap" />
            <button className="h-full border-[0.5px] cursor-pointer border-solid py-4 px-6 bg-success flex-1 rounded-t rounded-b-none flex flex-row items-center justify-center box-border w-full whitespace-nowrap hover:bg-mediumseagreen">
              <b className="text-sm flex-1 relative leading-[20px] font-inter text-default-white text-center">
                Now available!
              </b>
            </button>
            <button className="h-full cursor-pointer pt-[15px] px-[23px] pb-4 bg-blanchedalmond-200 flex-1 rounded-t rounded-b-none box-border flex flex-row items-center justify-center w-full whitespace-nowrap border-t-[0.5px] border-solid border-dark-25 border-r-[0.5px] border-l-[0.5px] hover:bg-peachpuff">
              <b className="text-sm flex-1 relative leading-[20px] font-inter text-darksalmon text-center">
                Coming soon
              </b>
            </button>
            <button className="h-full cursor-pointer pt-[15px] px-[23px] pb-4 bg-blanchedalmond-200 flex-1 rounded-t rounded-b-none box-border flex flex-row items-center justify-center w-full whitespace-nowrap border-t-[0.5px] border-solid border-dark-25 border-r-[0.5px] border-l-[0.5px] hover:bg-peachpuff">
              <b className="flex-1 relative text-sm leading-[20px] font-inter text-darksalmon text-center">
                Coming soon
              </b>
            </button>
            <div className="bg-default-white self-stretch flex flex-col items-start justify-center pt-[170.5px] pb-[169px] pr-5 pl-8 text-5xl text-gray-200 font-body-xs border-[0.5px] border-solid border-dark-25 mq450:pt-[111px] mq450:pb-[110px] mq450:box-border">
              <h3 className="m-0 relative text-inherit font-bold font-inherit mq450:text-lgi">
                Features included
              </h3>
            </div>
            {/* <div className="bg-seagreen-low self-stretch flex flex-col items-start justify-center pt-6 px-6 pb-[23px] gap-[16px] text-5xl font-sub-title border-[0.5px] border-solid border-dark-25 mq450:pt-5 mq450:pb-5 mq450:box-border">
              <h3 className="m-0 relative text-inherit leading-[34px] font-bold font-inherit inline-block min-w-[87px] mq450:text-lgi mq450:leading-[27px]">
                Starter
              </h3>
              <div className="self-stretch relative text-base leading-[140%] font-body">
                For the repair business committed to delivering a great
                in-person experience.
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
                  <span className="font-semibold">
                    {" "}
                    {
                      planRemainingTime(process.env.GATSBY_BASIC_PLAN_DEADLINE)
                        ?.remainingTimeStr
                    }
                  </span>
                </div>
              </div>
              <a
                href={
                  planRemainingTime(process.env.GATSBY_BASIC_PLAN_DEADLINE)?.isTimeRemaining
                    ? process.env.GATSBY_STARTER_PLAN_SUBSCRIPTION_LINK_DISCOUNTED
                    : process.env.GATSBY_STARTER_PLAN_SUBSCRIPTION_LINK_FLAT
                }
                target="_blank"
                className="cursor-pointer [border:none] no-underline py-4 px-6 bg-success self-stretch rounded flex flex-row items-center justify-center whitespace-nowrap hover:bg-mediumseagreen"
              >
                <b className="flex-1 relative text-sm leading-[20px] font-inter text-default-white text-center">
                  Get started free
                </b>
              </a>
            </div> */}
            <Component
              growth="Starter"
              forTheGrowingRepairBusine="For the repair business committed to delivering a great in-person experience."
              prop="$75"
              planPaymentLink={
                process.env.GATSBY_STARTER_PLAN_SUBSCRIPTION_LINK_FLAT
              }
              linkTitle="Get started free"
            />
            <Component
              growth="Growth"
              forTheGrowingRepairBusine="For the growing  repair business with a few employees and multiple sales channels."
              prop="$99"
              disabled={true}
              linkTitle="Coming soon"
            />
            <Component
              growth="Enterprise"
              forTheGrowingRepairBusine="For repair businesses with large repair teams and complex operations."
              prop="$199"
              disabled={true}
              linkTitle="Coming soon"
            />
            <div className="bg-default-white self-stretch flex flex-row items-center justify-start pt-[27.5px] px-8 pb-[26px] border-[0.5px] border-solid border-dark-25">
              <div className="text-left text-lg text-dark-100 font-sub-title flex-1 relative leading-[140%] font-semibold">
                Number of Locations
              </div>
            </div>

            <div className="bg-seagreen-low self-stretch flex text-left text-base text-dark-100 font-body flex-col items-center justify-center pt-[29px] px-5 pb-7 border-[0.5px] border-solid border-dark-25">
              <div className="relative leading-[140%] inline-block min-w-[75px]">
                1 Location
              </div>
            </div>

            <div className="bg-default-white text-left text-base text-dark-100 font-body self-stretch flex flex-col items-center justify-center pt-[29px] px-5 pb-7 border-[0.5px] border-solid border-dark-25">
              <div className="relative leading-[140%] inline-block min-w-[75px]">
                1 Location
              </div>
            </div>

            <div className="bg-default-white text-left text-base text-dark-100 font-body self-stretch flex flex-col items-center justify-center pt-[29px] px-5 pb-7 border-[0.5px] border-solid border-dark-25">
              <div className="relative leading-[140%] inline-block min-w-[83px]">
                3 Locations
              </div>
            </div>

            <div className="bg-default-white text-left text-lg text-dark-100 font-sub-title self-stretch flex flex-row items-center justify-start pt-[27.5px] px-8 pb-[26px] border-[0.5px] border-solid border-dark-25">
              <div className="flex-1 relative leading-[140%] font-semibold">
                Number of Users
              </div>
            </div>

            <div className="bg-seagreen-low self-stretch text-left text-base text-dark-100 font-body flex flex-col items-center justify-center pt-[29px] px-5 pb-7 border-[0.5px] border-solid border-dark-25">
              <div className="relative leading-[140%] inline-block min-w-[91px]">
                2 Employees
              </div>
            </div>

            <div className="bg-default-white self-stretch flex text-left text-base text-dark-100 font-body flex-col items-center justify-center pt-[29px] px-5 pb-7 border-[0.5px] border-solid border-dark-25">
              <div className="relative leading-[140%] inline-block min-w-[91px]">
                4 Employees
              </div>
            </div>

            <div className="bg-default-white self-stretch text-left text-base text-dark-100 font-body flex flex-col items-center justify-center pt-[29px] px-5 pb-7 border-[0.5px] border-solid border-dark-25">
              <div className="relative leading-[140%] inline-block min-w-[91px]">
                6 Employees
              </div>
            </div>

            <div className="bg-default-white text-left text-lg text-dark-100 font-sub-title self-stretch flex flex-row items-center justify-start pt-[27.5px] px-8 pb-[26px] border-[0.5px] border-solid border-dark-25">
              <div className="flex-1 relative leading-[140%] font-semibold">
                Order Management
              </div>
            </div>

            <div className="bg-seagreen-low self-stretch flex flex-row items-center justify-center pt-[30px] px-5 pb-[29px] border-[0.5px] border-solid border-dark-25">
              <TickSVG />
            </div>

            <div className="bg-default-white self-stretch flex flex-row items-center justify-center pt-[30px] px-5 pb-[29px] border-[0.5px] border-solid border-dark-25">
              <TickSVG />
            </div>

            <div className="bg-default-white self-stretch flex flex-row items-center justify-center pt-[30px] px-5 pb-[29px] border-[0.5px] border-solid border-dark-25">
              <TickSVG />
            </div>

            <div className="bg-default-white text-left text-lg text-dark-100 font-sub-title self-stretch flex flex-row items-center justify-start pt-[27.5px] px-8 pb-[26px] border-[0.5px] border-solid border-dark-25">
              <div className="flex-1 relative leading-[140%] font-semibold">
                Full POS
              </div>
            </div>
            <div className="bg-seagreen-low self-stretch flex flex-row items-center justify-center pt-[30px] px-5 pb-[29px] border-[0.5px] border-solid border-dark-25">
              <TickSVG />
            </div>
            <div className="bg-default-white self-stretch flex flex-row items-center justify-center pt-[30px] px-5 pb-[29px] border-[0.5px] border-solid border-dark-25">
              <TickSVG />
            </div>
            <div className="bg-default-white self-stretch flex flex-row items-center justify-center pt-[30px] px-5 pb-[29px] border-[0.5px] border-solid border-dark-25">
              <TickSVG />
            </div>

            <div className="bg-default-white text-left text-lg text-dark-100 font-sub-title self-stretch flex flex-row items-center justify-start pt-[27.5px] px-8 pb-[26px] border-[0.5px] border-solid border-dark-25">
              <div className="flex-1 relative leading-[140%] font-semibold">
                Customer Management
              </div>
            </div>
            <div className="bg-seagreen-low self-stretch flex flex-row items-center justify-center pt-[30px] px-5 pb-[29px] border-[0.5px] border-solid border-dark-25">
              <TickSVG />
            </div>
            <div className="bg-default-white self-stretch flex flex-row items-center justify-center pt-[30px] px-5 pb-[29px] border-[0.5px] border-solid border-dark-25">
              <TickSVG />
            </div>
            <div className="bg-default-white self-stretch flex flex-row items-center justify-center pt-[30px] px-5 pb-[29px] border-[0.5px] border-solid border-dark-25">
              <TickSVG />
            </div>

            <div className="bg-default-white text-left text-lg text-dark-100 font-sub-title self-stretch flex flex-col items-start justify-center pt-[27.5px] pb-[26px] pr-5 pl-8 border-[0.5px] border-solid border-dark-25">
              <div className="relative leading-[140%] font-semibold inline-block min-w-[91px]">
                Messages
              </div>
            </div>
            <div className="bg-seagreen-low self-stretch flex flex-row items-center justify-center pt-[30px] px-5 pb-[29px] border-[0.5px] border-solid border-dark-25">
              <TickSVG />
            </div>
            <div className="bg-default-white self-stretch flex flex-row items-center justify-center pt-[30px] px-5 pb-[29px] border-[0.5px] border-solid border-dark-25">
              <TickSVG />
            </div>
            <div className="bg-default-white self-stretch flex flex-row items-center justify-center pt-[30px] px-5 pb-[29px] border-[0.5px] border-solid border-dark-25">
              <TickSVG />
            </div>
            <Div reports="Reports" />

            <div className="bg-seagreen-low w-full h-full box-border border-[0.5px] border-solid border-dark-25" />
            <div className="bg-default-white self-stretch flex flex-row items-center justify-center pt-[30px] px-5 pb-[29px] border-[0.5px] border-solid border-dark-25">
              <TickSVG />
            </div>
            <div className="bg-default-white self-stretch flex flex-row items-center justify-center pt-[30px] px-5 pb-[29px] border-[0.5px] border-solid border-dark-25">
              <TickSVG />
            </div>

            <Div reports="Team Collaboration" />
            <div className="bg-seagreen-low w-full h-full box-border border-[0.5px] border-solid border-dark-25" />
            <div className="bg-default-white w-full h-full box-border border-[0.5px] border-solid border-dark-25" />
            <div className="bg-default-white self-stretch flex flex-row items-center justify-center pt-[30px] px-5 pb-[29px] border-[0.5px] border-solid border-dark-25">
              <TickSVG />
            </div>

            <Div reports="eCommerce" />
            <div className="bg-seagreen-low w-full h-full box-border border-[0.5px] border-solid border-dark-25" />
            <div className="bg-default-white w-full h-full box-border border-[0.5px] border-solid border-dark-25" />
            <div className="bg-default-white self-stretch flex flex-row items-center justify-center pt-[30px] px-5 pb-[29px] border-[0.5px] border-solid border-dark-25">
              <TickSVG />
            </div>

            {/* <div className="bg-default-white font-sub-title text-left text-lg self-stretch flex flex-row items-center justify-start pt-[27px] px-8 pb-[26px] text-gray-200 border-[0.5px] border-solid border-dark-25">
              <div className="flex-1 relative leading-[26px] font-medium">
                Integrations
              </div>
            </div>
            <div className="bg-seagreen-low self-stretch flex flex-row text-left text-base text-dark-100 font-body items-center justify-center pt-[29px] px-5 pb-7 border-[0.5px] border-solid border-dark-25">
              <div className="relative leading-[140%] inline-block min-w-[90px]">
                1 Integration
              </div>
            </div>

            <div className="bg-default-white self-stretch flex flex-row text-left text-base text-dark-100 font-body items-center justify-center pt-[29px] px-5 pb-7 border-[0.5px] border-solid border-dark-25">
              <div className="relative leading-[140%] inline-block min-w-[98px]">
                3 Integrations
              </div>
            </div>

            <div className="bg-default-white flex flex-row text-left text-base text-dark-100 font-body items-center justify-center pt-[29px] px-[79px] pb-7 border-[0.5px] border-solid border-dark-25 mq450:pl-5 mq450:pr-5 mq450:box-border">
              <div className="relative leading-[140%]">
                Unlimited Integrations
              </div>
            </div> */}

            <div className="bg-default-white font-sub-title text-left text-lg self-stretch flex flex-row items-center justify-start pt-[27px] px-8 pb-[26px] z-[1] text-gray-200  border-[0.5px] border-solid border-dark-25">
              <div className="flex-1 relative leading-[26px] font-medium">
                Support features
              </div>
            </div>
            <div className="bg-seagreen-low self-stretch flex flex-row text-left text-base text-dark-100 font-body items-center justify-center pt-[29px] px-5 pb-7 z-[1] border-[0.5px] border-solid border-dark-25">
              <div className="relative leading-[140%]">Email Support Only</div>
            </div>
            <div className="bg-default-white self-stretch flex flex-row text-left text-base text-dark-100 font-body items-center justify-center pt-[18px] px-5 pb-[17px] z-[1] border-[0.5px] border-solid border-dark-25">
              <div className="relative leading-[140%]">
                <p className="m-0">12 hr support,</p>
                <p className="m-0">Phone and Email</p>
              </div>
            </div>

            <div className="bg-default-white self-stretch flex flex-row text-left text-base text-dark-100 font-body items-center justify-center pt-[18px] px-5 pb-[17px] z-[1] border-[0.5px] border-solid border-dark-25">
              <div className="relative leading-[140%]">
                <p className="m-0">12 hr support,</p>
                <p className="m-0">Priority Support</p>
              </div>
            </div>
            {extended && (
              <>
                <section
                  className={`w-full bg-[rgba(76,_140,_74,_0.2)] col-span-4 box-border flex flex-row items-start justify-start pt-4 px-[31px] pb-[15px] leading-[normal] tracking-[normal] text-center text-[24px] text-gray font-montserrat border-r-[0.5px] border-solid border-dark-25 border-b-[0.5px] border-l-[0.5px]`}
                >
                  <b className="flex-1 relative leading-[34px] inline-block max-w-full mq450:text-[19px] mq450:leading-[27px]">
                    Hardware
                  </b>
                </section>
                <header className="col-span-4 self-stretch bg-silver box-border flex flex-row items-center justify-center pt-4 px-[31px] pb-[15px] top-[0] z-[99] sticky max-w-full text-center text-lg text-[#252430] font-sub-title border-r-[0.5px] border-solid border-dark-25 border-b-[0.5px] border-l-[0.5px]">
                  <div className="flex-1 relative leading-[140%] font-semibold inline-block max-w-full">
                    Required
                  </div>
                </header>
                <div className="bg-default-white flex text-left text-lg text-gray-200 font-sub-title self-stretch flex-row items-center justify-start pt-[27px] px-8 pb-[26px] z-[1] border-[0.5px] border-solid border-dark-25">
                  <div className="relative leading-[140%]">
                    <p className="m-0 text-lg font-semibold">
                      Tablet or Computer
                    </p>
                    <p className="m-0 text-base font-questrial">
                      (mobile coming soon)
                    </p>
                  </div>
                </div>
                <div className="bg-default-white col-span-3 self-stretch flex flex-row text-left text-base text-dark-100 font-body items-center justify-center pt-[18px] px-5 pb-[17px] z-[1] border-[0.5px] border-solid border-dark-25">
                  <div className="text-base font-questrial relative leading-[140%]">
                    <div className="relative leading-[140%]">
                      Bring Your Own Device
                    </div>
                  </div>
                </div>
                <div className="bg-default-white font-sub-title text-left text-lg self-stretch flex flex-row items-center justify-start pt-[27px] ps-8 pb-[26px] text-gray-200 border-[0.5px] border-solid border-dark-25">
                  <div className="flex-1 flex items-center relative leading-[26px] font-medium flex-nowrap">
                    <a
                      className="relative leading-[140%] font-semibold text-[inherit]"
                      href="https://dashboard.stripe.com/terminal/shop/thsku_K0pFVGgj9FYNWK"
                      target="_blank"
                    >
                      Stripe Credit Card Reader
                    </a>
                    <IconLinkSVG />
                  </div>
                </div>
                <div className="bg-default-white self-stretch flex flex-row items-center justify-center pt-[30px] px-5 pb-[29px] border-[0.5px] border-solid border-dark-25">
                  <TickSVG />
                </div>
                <div className="bg-default-white self-stretch flex flex-row items-center justify-center pt-[30px] px-5 pb-[29px] border-[0.5px] border-solid border-dark-25">
                  <TickSVG />
                </div>
                <div className="bg-default-white self-stretch flex flex-row items-center justify-center pt-[30px] px-5 pb-[29px] border-[0.5px] border-solid border-dark-25">
                  <TickSVG />
                </div>
                <div className="bg-default-white font-sub-title text-left text-lg self-stretch flex flex-row items-center justify-start pt-[27px] ps-8 pb-[26px] text-gray-200 border-[0.5px] border-solid border-dark-25">
                  <div className="flex-1 relative leading-[140%] font-semibold">
                    Shipping Label Printer
                  </div>
                </div>
                <div className="bg-default-white w-full h-full box-border border-[0.5px] border-solid border-dark-25" />
                <div className="bg-default-white self-stretch flex flex-row items-center justify-center pt-[30px] px-5 pb-[29px] border-[0.5px] border-solid border-dark-25">
                  <TickSVG />
                </div>
                <div className="bg-default-white self-stretch flex flex-row items-center justify-center pt-[30px] px-5 pb-[29px] border-[0.5px] border-solid border-dark-25">
                  <TickSVG />
                </div>
                <header
                  onClick={() => setIsOpen(!isOpen)}
                  className="col-span-4 self-stretch bg-silver box-border flex flex-row items-center justify-center pt-4 px-[31px] pb-[15px] top-[0] z-[99] sticky max-w-full text-center text-lg text-[#252430] font-sub-title border-r-[0.5px] border-solid border-dark-25 border-b-[0.5px] border-l-[0.5px]"
                >
                  <div className="cursor-pointer flex-1 flex relative leading-[140%] font-semibold items-center justify-center gap-1 max-w-full">
                    <div>Recommended</div>
                    <motion.div
                      animate={{ rotate: isOpen ? 0 : 180 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                      <DownArrowSVG />
                    </motion.div>
                  </div>
                </header>
                <motion.div
                  ref={containerRef}
                  initial={{ height: 0 }}
                  animate={{
                    height: isOpen ? containerRef.current.scrollHeight : 0,
                  }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  style={{ overflow: "hidden" }}
                  className={`bg-default-white grid grid-cols-4 flex-nowrap items-center col-span-4 justify-center`}
                >
                  <div className="font-sub-title text-left text-lg self-stretch flex flex-row items-center justify-start pt-[27px] ps-8 pb-[26px] text-gray-200 border-[0.5px] border-solid border-dark-25">
                    <div className="flex-1 relative leading-[140%] font-semibold">
                      Docking Station
                    </div>
                  </div>
                  <div className="font-sub-title col-span-3 text-left text-5xl self-stretch flex flex-row items-center justify-start ps-8 text-gray-200 border-[0.5px] border-solid border-dark-25">
                    <div className="self-stretch flex flex-row items-center justify-center gap-[40px] max-w-full mq450:gap-[20px] mq975:flex-wrap">
                      <b className="relative leading-[34px] inline-block min-w-[60px] whitespace-nowrap mq450:text-[19px] mq450:leading-[27px]">
                        $230
                      </b>
                      <div className="flex-1 relative text-base leading-[140%] font-questrial inline-block min-w-[515px] max-w-full mq725:min-w-full">
                        <p className="m-0">
                          Keep all of your hardware safe and organized in one
                          place with this durable docking station
                        </p>
                        <p className="m-0">
                          <a
                            className="text-[inherit]"
                            href="https://us.bouncepad.com/products/click-and-caddy-light"
                            target="_blank"
                          >
                            https://us.bouncepad.com/products/click-and-caddy-light
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                  <section className="self-stretch col-span-4 bg-silver box-border flex flex-col items-center text-center justify-center pt-4 pb-[15px] pr-5 pl-8 gap-[8px] max-w-full text-lg text-gray-200 font-sub-title border-[0.5px] border-solid border-dark-25">
                    <div className="relative leading-[140%] font-semibold flex items-center justify-center text-center max-w-full">
                      Shipping Label Printer
                    </div>
                    <div className="relative text-base justify-center text-center leading-[140%] font-questrial text-gray-200 flex items-center max-w-full">
                      Seamlessly print shipping labels from the platform for
                      mail-in / online orders
                    </div>
                  </section>
                  <div className="box-border text-lg text-gray-200 font-sub-title self-stretch flex flex-col items-start justify-center pl-8 gap-[4px] border-[0.5px] border-solid border-dark-25">
                    <div className="flex flex-row items-center justify-start">
                      <a
                        className="relative leading-[140%] font-semibold text-[inherit] inline-block"
                        href="https://www.rollo.com/product/rollo-wireless-printer/"
                        target="_blank"
                      >
                        Rollo
                      </a>
                      <IconLinkSVG />
                    </div>
                    <div className="relative text-base leading-[140%] font-questrial flex items-center"></div>
                  </div>
                  <div className="px-8 relative text-[#272523] text-base font-normal font-['Questrial'] leading-snug h-full text-center flex items-center border-[0.5px] border-solid border-dark-25 box-border">
                    For lower volume shipping needs
                  </div>
                  <div className="self-stretch text-lg font-montserrat col-span-2 flex flex-row text-left font-semibold items-center justify-center pt-[29px] px-5 pb-7 border-[0.5px] border-solid border-dark-25">
                    <div className="relative font-semibold leading-[140%] inline-block min-w-[98px]">
                      $259
                    </div>
                  </div>
                  <div className="box-border text-lg text-gray-200 font-sub-title self-stretch flex flex-col items-start justify-center pl-8 gap-[4px] border-[0.5px] border-solid border-dark-25">
                    <div className="flex flex-row items-center justify-start">
                      <a
                        className="relative leading-[140%] font-semibold text-[inherit] inline-block"
                        href={`https://www.amazon.com/Brother-QL-1110NWB-Professional-Wireless-Connectivity/dp/B079G51QT9/ref=sr_1_1?dib=eyJ2IjoiMSJ9.Bm2iyDENtsTEu3__jcM4VTIOXKPksWntoYA9sZdO0qMSl3QJ3Xm9Tyhlww_7Nr9FtIj3gHFB9GVp7p29A4L1qjx2_azorhDznJ--asZ-I-dP655Tf3YFu9ZFCAwGJ4W2P2PN5WgnysBL7P9FSR1j0JcPZbRyB_hYNIXSyfoRmoUWiIcwRolTadDEvjfbefc3etzQEAZQxm2xUJnM_PWEIO0a8HAJC4ubZuQEvQAfSQclFlXZZrTxSaPBQUOKS9kd4nxjTrtn-BsN7nmPd1e9XQMiaZzWmYIjL1iRuYhcICs.rnQxNwQXjJEa39A5RpILulQ_S75dAOXxbOnf_M-fXgU&dib_tag=se&hvadid=580747452884&hvdev=c&hvlocphy=9073394&hvnetw=g&hvqmt=e&hvrand=8070326892004399468&hvtargid=kwd-702279508720&hydadcr=10873_13484257&keywords=brother+ql-1110nwb+label&qid=1718250745&sr=8-1`}
                        target="_blank"
                      >
                        Brother
                      </a>
                      <IconLinkSVG />
                    </div>
                  </div>
                  <div className="px-8 relative text-[#272523] text-base font-normal font-['Questrial'] leading-snug h-full text-center flex items-center border-[0.5px] border-solid border-dark-25 box-border">
                    For high volume shipping needs
                  </div>
                  <div className="self-stretch font-montserrat text-lg col-span-2 flex flex-row text-left font-semibold items-center justify-center pt-[29px] px-5 pb-7 border-[0.5px] border-solid border-dark-25">
                    <div className="relative font-semibold leading-[140%] inline-block min-w-[98px]">
                      $399
                    </div>
                  </div>
                  <div className="box-border text-lg text-gray-200 font-sub-title self-stretch flex flex-col items-start justify-center py-[20px] pl-8 pe-3 gap-[4px] border-[0.5px] border-solid border-dark-25">
                    <div className="flex flex-row items-center justify-start">
                      <a
                        className="relative leading-[140%] font-semibold text-[inherit] inline-block"
                        href={`https://www.amazon.com/Thermal-Desktop-Printer-Ethernet-ZD4A042-D01E00EZ/dp/B09BXZVGXQ`}
                        target="_blank"
                      >
                        Zebra
                      </a>
                      <IconLinkSVG />
                    </div>
                  </div>
                  <div className="px-8 relative text-[#272523] text-base font-normal font-['Questrial'] leading-snug h-full text-center flex items-center border-[0.5px] border-solid border-dark-25 box-border">
                    All-in-one printer solution for order and shipping labels
                  </div>
                  <div className="self-stretch font-montserrat text-lg col-span-2 flex flex-row text-left font-semibold items-center justify-center px-5 border-[0.5px] border-solid border-dark-25">
                    <div className="relative font-semibold leading-[140%] inline-block min-w-[98px]">
                      $419
                    </div>
                  </div>
                  <section className="self-stretch col-span-4 bg-silver box-border flex flex-col items-center text-center justify-center pt-4 pb-[15px] pr-5 pl-8 gap-[8px] max-w-full text-lg text-gray-200 font-sub-title border-[0.5px] border-solid border-dark-25">
                    <div className="relative leading-[140%] font-semibold flex items-center justify-center text-center max-w-full">
                      Order Label Printer
                    </div>
                    <div className="relative text-base justify-center text-center leading-[140%] font-questrial text-gray-200 flex items-center max-w-full">
                      Simplify in-store order management with order labels with
                      QR codes to quickly view order details or update the order
                      status
                    </div>
                  </section>
                  <div className="box-border text-lg text-gray-200 font-sub-title self-stretch flex flex-col items-start justify-center pl-8 pe-3 gap-[4px] border-[0.5px] border-solid border-dark-25">
                    <div className="flex flex-row items-center justify-start">
                      <a
                        className="relative leading-[140%] font-semibold text-[inherit] inline-block"
                        href={`https://www.uline.com/Product/Detail/H-10839/Zebra-Desktop-Barcode-Printers/Zebra-ZD411-Desktop-Direct-Thermal-Barcode-Printer-2?pricode=WA9420&gadtype=pla&id=H-10839&gad_source=1&gclid=CjwKCAjwjqWzBhAqEiwAQmtgT9khRbPYprTZ1YjsMtIjDNQYv-f0pRMTYlsp9YImwREmDOwDYGmQ5BoCgcYQAvD_BwE`}
                        target="_blank"
                      >
                        Zebra
                      </a>
                      <IconLinkSVG />
                    </div>
                  </div>
                  <div className="px-8 relative text-[#272523] text-base font-normal font-['Questrial'] leading-snug h-full text-center flex items-center border-[0.5px] border-solid border-dark-25 box-border">
                    Heavy duty printer for order labels and QR codes
                  </div>
                  <div className="self-stretch font-montserrat text-lg col-span-2 flex flex-row text-left font-semibold items-center justify-center pt-[29px] px-5 pb-7 border-[0.5px] border-solid border-dark-25">
                    <div className="relative font-semibold leading-[140%] inline-block min-w-[98px]">
                      $360
                    </div>
                  </div>
                  <div className="box-border text-lg text-gray-200 font-sub-title self-stretch flex flex-col items-start justify-center py-[20px] pl-8 pe-3 gap-[4px] border-[0.5px] border-solid border-dark-25">
                    <div className="flex flex-row items-center justify-start">
                      <a
                        className="relative leading-[140%] font-semibold text-[inherit] inline-block"
                        href={`https://www.amazon.com/Brother-High-Speed-Professional-Multi-System-Compatible/dp/B01N49R9KP?tag=p00935-20&ascsubtag=064qOsfoqgU1Dt2TbNPF7QC&th=1`}
                        target="_blank"
                      >
                        Brother
                      </a>
                      <IconLinkSVG />
                    </div>
                  </div>
                  <div className="px-8 relative text-[#272523] text-base font-normal font-['Questrial'] leading-snug h-full text-center flex items-center border-[0.5px] border-solid border-dark-25 box-border">
                    Straightforward printer for order labels and QR codes for
                    in-store order management.
                  </div>
                  <div className="self-stretch font-montserrat text-lg col-span-2 flex flex-row text-left font-semibold items-center justify-center px-5 border-[0.5px] border-solid border-dark-25">
                    <div className="relative font-semibold leading-[140%] inline-block min-w-[98px]">
                      $110
                    </div>
                  </div>
                </motion.div>
              </>
            )}
          </div>
        </main>
      </div>

      <div className="mb-5 md:hidden mx-[30px]">
        <div
          className={`mb-6 w-full flex flex-col items-start justify-start gap-[16px] leading-[normal] tracking-[normal] text-center text-[26px] text-dark-100 font-montserrat`}
        >
          <div className="self-stretch flex flex-row items-start justify-center py-0 px-2 box-border max-w-full">
            <h1 className="max-w-72 m-0 flex-1 relative text-inherit tracking-[0.02em] leading-[140%] font-bold font-inherit text-transparent !bg-clip-text [background:linear-gradient(90deg,_#61ba5f,_#4c8c4a)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block">
              {title}
            </h1>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[8px] text-base font-info-text">
            <div className="self-stretch flex flex-col gap-2 relative text-sm leading-[140%] text-dark-75">
              {subTitle.map((text) => (
                <p className="m-0">{text}</p>
              ))}
            </div>
          </div>
        </div>
        <div
          className={`w-full flex flex-col items-start justify-start gap-[16px] leading-[normal] tracking-[normal]`}
        >
          <section className="self-stretch flex flex-col items-start justify-start max-w-full text-center text-sm text-lavender font-inter">
            <div className="self-stretch h-[52px] border-[0.5px] flex flex-row items-center justify-start max-w-full">
              <div className="flex-1 rounded-t rounded-b-none bg-success flex flex-row items-center justify-center py-4 px-6 box-border whitespace-nowrap max-w-full">
                <b className="flex-1 relative leading-[20px]">Now available!</b>
              </div>
            </div>
            <div className="self-stretch rounded-[5px] box-border overflow-hidden flex flex-row items-start justify-start max-w-full text-left text-xs text-dark-100 font-sub-title border-[0.5px] border-solid border-dark-25">
              <div className="flex-1 [background:linear-gradient(rgba(76,_140,_74,_0.05),_rgba(76,_140,_74,_0.05)),_#fff] flex flex-col items-start justify-center max-w-full">
                <div className="self-stretch flex flex-col items-start justify-center p-6 gap-[16px]">
                  <h3 className="m-0 relative text-lg leading-[140%] font-semibold font-inherit inline-block min-w-[50px]">
                    Starter
                  </h3>
                  <div className="self-stretch relative leading-[140%] font-info-text">
                    For the repair business committed to delivering a great
                    in-person experience.
                  </div>
                  <div className="w-[165px] flex flex-col items-start justify-center gap-[8px] text-dark-50 font-inter">
                    <div className="relative leading-[17px] font-info-text inline-block min-w-[57px]">
                      Starting at
                    </div>
                    <div className="flex flex-row items-baseline justify-center gap-[4px] text-lg text-dark-100 font-sub-title">
                      <div className="relative leading-[140%] font-semibold inline-block whitespace-nowrap">
                        $75
                      </div>
                      <div className="relative text-xs leading-[17px] font-info-text text-dark-50 inline-block min-w-[39px]">
                        /Month
                      </div>
                    </div>
                  </div>
                  <a
                    href={
                      process.env.GATSBY_STARTER_PLAN_SUBSCRIPTION_LINK_FLAT
                    }
                    target="_blank"
                    className="cursor-pointer py-[5px] px-5 no-underline bg-success self-stretch shadow-[0px_1px_1.92px_rgba(16,_24,_40,_0.05)] rounded-lg overflow-hidden flex flex-row items-center justify-center whitespace-nowrap border-[1px] border-solid border-success"
                  >
                    <div className="relative text-xs leading-[17px] font-info-text text-white text-left inline-block min-w-[84px]">
                      Get started free
                    </div>
                  </a>
                </div>
                <BasicItems
                  location1="1 Location"
                  employees="2 Employees"
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
                    <div className="flex-1 relative leading-[17px]">
                      Messages
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="self-stretch flex flex-col items-start justify-start max-w-full text-left text-xs text-dark-100 font-info-text">
            <button className="cursor-pointer h-[52px] w-full pt-[15px] px-[23px] pb-4 bg-blanchedalmond-200 self-stretch rounded-t rounded-b-none flex flex-row items-center justify-center whitespace-nowrap border-t-[0.5px] border-solid border-dark-25 border-r-[0.5px] border-l-[0.5px]">
              <b className="flex-1 relative text-sm leading-[20px] font-inter text-darksalmon text-center">
                Coming soon
              </b>
            </button>
            <div className="self-stretch rounded-[5px] box-border overflow-hidden flex flex-row items-start justify-start max-w-full border-[0.5px] border-solid border-dark-25">
              <div className="flex-1 bg-white flex flex-col items-start justify-center max-w-full">
                <div className="self-stretch flex flex-col items-start justify-center py-6 pr-5 pl-6 gap-[16px]">
                  <h3 className="m-0 relative text-lg leading-[140%] font-semibold font-sub-title inline-block min-w-[114px]">
                    Growth
                  </h3>
                  <div className="self-stretch relative leading-[140%]">
                    For the growing repair business with a few employees and
                    multiple sales channels.
                  </div>
                  <div className="flex flex-col items-start justify-center gap-[8px] text-dark-50">
                    <div className="relative leading-[17px] inline-block min-w-[57px]">
                      Starting at
                    </div>
                    <div className="flex flex-row items-baseline justify-center gap-[4px] text-lg text-dark-100 font-sub-title">
                      <div className="relative leading-[140%] font-semibold inline-block whitespace-nowrap">
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
                  <div className="w-full flex flex-row items-center justify-start py-2 px-0 box-border gap-[8px]">
                    <TickSVG />
                    <div className="flex-1 relative leading-[17px]">
                      Customer Management
                    </div>
                  </div>
                  <div className="w-full flex flex-row items-center justify-start py-2 px-0 box-border gap-[8px]">
                    <TickSVG />
                    <div className="flex-1 relative leading-[17px]">
                      Messages
                    </div>
                  </div>
                  <div className="w-full flex-wrap self-stretch flex flex-row items-center justify-start py-2 pr-[110px] pl-0 gap-[8px]">
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
            <button className="cursor-pointer h-[52px] pt-[15px] px-[23px] pb-4 bg-blanchedalmond-200 self-stretch rounded-t rounded-b-none flex flex-row items-center justify-center whitespace-nowrap border-t-[0.5px] border-solid border-dark-25 border-r-[0.5px] border-l-[0.5px]">
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
                    <div className="flex flex-row items-baseline justify-center gap-[4px] text-lg text-dark-100 font-sub-title">
                      <div className="relative leading-[140%] font-semibold inline-block whitespace-nowrap">
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
                    <div className="flex-1 relative leading-[17px]">
                      Messages
                    </div>
                  </div>
                  <div className="w-full flex-wrap self-stretch flex flex-row items-center justify-start py-2 pr-[110px] pl-0 gap-[8px]">
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
                  <div className="w-full flex-wrap self-stretch flex flex-row items-center justify-start py-2 pr-12 pl-0 gap-[8px]">
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
                  <div className="w-full flex-wrap self-stretch flex flex-row items-center justify-start py-2 pr-[86px] pl-0 gap-[8px]">
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
      {extended && <MobileExtended />}
    </>
  );
};

export default PriceTable;
