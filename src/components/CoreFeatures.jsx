import * as React from "react";
import PropTypes from "prop-types";
import { CalSVG, CustSVG, GraphSVG, MessageSVG, OrderSVG } from "./icons";

const CoreFeatures = ({ className = "" }) => {
  return (
    <>
      <div
        className={`hidden w-full overflow-hidden md:flex flex-col items-center justify-start px-20 py-10 box-border gap-[48px] leading-[normal] tracking-[normal] mq750:gap-[24px] mq750:pl-10 mq750:pr-10 mq750:box-border ${className}`}
      >
        <section className="w-[900px] flex flex-col items-center justify-start gap-[24px] max-w-full text-center text-base text-blue-gray-600 font-body-s">
          <div className="self-stretch flex flex-col items-center justify-start py-0 px-5 box-border gap-[8px] max-w-full text-xl">
            <h1 className="m-0 relative text-[42px] tracking-[0.02em] leading-[140%] font-bold font-sub-title text-transparent !bg-clip-text [background:linear-gradient(90deg,_#61ba5f,_#4c8c4a)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] mq450:text-[25px] mq450:leading-[35px] mq1050:text-[34px] mq1050:leading-[47px]">
              Core Features
            </h1>
          </div>
          <div className="self-stretch relative leading-[140%] font-body text-dark-100">
            An all-in-one tool to manage your repair business. Built for the
            nuances of repair, but fully customizable to adjust to the unique
            needs of your business.
          </div>
        </section>
        <section className="self-stretch grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start justify-start gap-[48px] max-w-full text-left text-base text-blue-gray-900 font-body-s">
          <div className="flex-1 overflow-hidden flex flex-col items-start justify-center relative min-w-[296px] max-w-full">
            <div className="self-stretch flex flex-col items-start justify-start gap-[16px] max-w-full">
              <OrderSVG />
              <div className="self-stretch flex flex-col items-start justify-start gap-[4px] max-w-full">
                <div className="self-stretch flex flex-row items-center justify-start gap-[8px] max-w-full text-lg text-dark-100 font-sub-title">
                  <div className="flex-1 relative leading-[140%] font-semibold inline-block [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)] max-w-full">
                    Order Management
                  </div>
                </div>
              </div>
              <div className="self-stretch relative leading-[140%] font-body text-dark-75">
                View and manage orders from all sources (mail-in, online,
                in-store) in one consolidated view. No more toggling between
                different tools to manage orders.
              </div>
            </div>
          </div>
          <div className="flex-1 overflow-hidden flex flex-col items-start justify-center relative min-w-[296px] max-w-full">
            <div className="self-stretch flex flex-col items-start justify-start gap-[16px] max-w-full">
              <CalSVG />
              <div className="self-stretch flex flex-col items-start justify-start gap-[4px] max-w-full">
                <div className="self-stretch flex flex-row items-center justify-start gap-[8px] max-w-full text-lg text-dark-100 font-sub-title">
                  <div className="flex-1 relative leading-[140%] font-semibold inline-block [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)] max-w-full max-w-full">
                    Point of Sale
                  </div>
                </div>
              </div>
              <div className="self-stretch relative leading-[140%] font-body text-dark-75">
                Easily create orders for in-store customers, send quotes, and
                build custom product and service offerings.
              </div>
            </div>
          </div>
          <div className="flex-1 overflow-hidden flex flex-col items-start justify-center relative min-w-[296px] max-w-full">
            <div className="self-stretch flex flex-col items-start justify-start gap-[16px] max-w-full">
              <MessageSVG />
              <div className="self-stretch flex flex-col items-start justify-start gap-[4px] max-w-full">
                <div className="self-stretch flex flex-row items-center justify-start gap-[8px] max-w-full text-lg text-dark-100 font-sub-title">
                  <div className="flex-1 relative leading-[140%] font-semibold inline-block [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)] max-w-full max-w-full">
                    Messages
                  </div>
                </div>
              </div>
              <div className="self-stretch relative leading-[140%] font-body text-dark-75">
                Streamline communications with built-in messaging with
                customers. Never lose a conversation or customer request.
              </div>
            </div>
          </div>
          <div className="flex-1 overflow-hidden flex flex-col items-start justify-center relative min-w-[256px] max-w-full">
            <div className="self-stretch flex flex-col items-start justify-start gap-[16px] max-w-full">
              <CustSVG />
              <div className="self-stretch flex flex-col items-start justify-start gap-[4px] max-w-full">
                <div className="self-stretch flex flex-row items-center justify-start gap-[8px] max-w-full text-lg text-dark-100 font-sub-title">
                  <div className="flex-1 relative leading-[140%] font-semibold inline-block [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)] max-w-full max-w-full">
                    Customer Management
                  </div>
                </div>
              </div>
              <div className="self-stretch relative leading-[140%] font-body text-dark-75">
                Never skip a beat with your customers with a detailed customer
                overview, tools for personalized email marketing campaigns, and
                automated status updates.
              </div>
            </div>
          </div>
          <div className="flex-1 overflow-hidden flex flex-col items-start justify-center relative min-w-[256px] max-w-full">
            <div className="self-stretch flex flex-col items-start justify-start gap-[16px] max-w-full">
              <GraphSVG />
              <div className="self-stretch flex flex-col items-start justify-start gap-[4px] max-w-full">
                <div className="self-stretch flex flex-row items-center justify-start py-0 pr-[115px] pl-0 gap-[8px] text-lg text-dark-100 font-sub-title mq450:pr-5 mq450:box-border mq750:flex-wrap">
                  <div className="relative leading-[140%] font-semibold [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)]">
                    Business Reporting
                  </div>
                  <div className="rounded-2xl bg-blanchedalmond-100 flex flex-row items-center justify-center py-0.5 px-2 whitespace-nowrap text-center text-xs text-darksalmon font-body">
                    <div className="relative leading-[17px] inline-block max-w-full min-w-[73px]">
                      Coming Soon
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch relative leading-[140%] font-body text-dark-75">
                Dive into detailed insights on sales, customers, trends, and
                orders, and be empowered to run your business more efficiently.
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="md:hidden w-full relative [background:linear-gradient(rgba(76,_140,_74,_0.02),_rgba(76,_140,_74,_0.02)),_linear-gradient(180deg,_#f7f7f7,_rgba(248,_255,_248,_0.02))] overflow-hidden flex flex-col items-start justify-start pt-10 px-4 pb-[60px] box-border gap-[40px] leading-[normal] tracking-[normal]">
        <section className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-2 box-border gap-[16px] max-w-full text-center text-[26px] text-dark-100 font-sub-title">
          <div className="self-stretch flex flex-row items-start justify-start py-0 px-2 box-border max-w-full">
            <h2 className="m-0 flex-1 relative text-inherit tracking-[0.02em] leading-[140%] font-bold font-inherit text-transparent !bg-clip-text [background:linear-gradient(90deg,_#61ba5f,_#4c8c4a)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block max-w-full">
              Core Features
            </h2>
          </div>
          <div className="self-stretch relative text-base leading-[140%] font-body">
            An all-in-one tool to manage your repair business. Built for the
            nuances of repair, but fully customizable to adjust to the unique
            needs of your business.
          </div>
        </section>
        <section className="self-stretch flex flex-row items-start justify-start py-0 px-2 box-border max-w-full text-left text-lg text-dark-100 font-sub-title">
          <div className="flex-1 flex flex-col items-start justify-start gap-[8px] max-w-full">
            <div
              className={`self-stretch flex flex-row items-start justify-start gap-[24px] text-left text-lg text-dark-100 font-sub-title ${className}`}
            >
              <div className="flex-1 flex flex-col items-start justify-start gap-[40px]">
                <div className="flex flex-row items-center gap-[24px]">
                  <span>
                    <OrderSVG width={40} height={40} />
                  </span>
                  <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
                    <div className="self-stretch relative leading-[140%] font-semibold">
                      Order Management
                    </div>
                    <div className="self-stretch relative text-base leading-[140%] font-body text-dark-75">
                      View and manage orders from all sources (mail-in, online,
                      in-store) in one consolidated view. No more toggling
                      between different tools to manage orders.
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-center gap-[24px]">
                  <span>
                    <CalSVG width={40} height={40} />
                  </span>

                  <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
                    <div className="self-stretch relative leading-[140%] font-semibold">
                      Point of Sale
                    </div>
                    <div className="self-stretch relative text-base leading-[140%] font-body text-dark-75">
                      Easily create orders for in-store customers, send quotes,
                      and build custom product and service offerings.
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-center gap-[24px]">
                  <span>
                    <MessageSVG width={40} height={40} />
                  </span>
                  <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
                    <div className="self-stretch relative leading-[140%] font-semibold">
                      Messages
                    </div>
                    <div className="self-stretch relative text-base leading-[140%] font-body text-dark-75">
                      Streamline communications with built-in messaging with
                      customers. Never lose a conversation or customer request.
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-center gap-[24px]">
                  <span>
                    <CustSVG width={40} height={40} />
                  </span>
                  <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
                    <div className="self-stretch relative leading-[140%] font-semibold">
                      Customer Management
                    </div>
                    <div className="self-stretch relative text-base leading-[140%] font-body text-dark-75">
                      Never skip a beat with your customers with a detailed
                      customer overview, tools for personalized email marketing
                      campaigns, and automated status updates.
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-center gap-[24px]">
                  <span>
                    <GraphSVG width={40} height={40} />
                  </span>
                  <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
                    <div className="rounded-2xl bg-blanchedalmond-100 flex flex-row items-center justify-center py-0.5 px-2 whitespace-nowrap text-center">
                      <div className="relative text-xs text-darksalmon font-body leading-[17px] inline-block min-w-[73px]">
                        Coming Soon
                      </div>
                    </div>
                    <div className="self-stretch relative leading-[140%] font-semibold">
                      Business Reporting
                    </div>
                    <div className="self-stretch relative text-base leading-[140%] font-body text-dark-75">
                      Dive into detailed insights on sales, customers, trends,
                      and orders, and be empowered to run your business more
                      efficiently.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CoreFeatures;
