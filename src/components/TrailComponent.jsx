import * as React from "react";
import PropTypes from "prop-types";

const TrailComponent = ({ className = "" }) => {
  return (
    <>
    <div
      className={`w-full hidden [background:linear-gradient(97.2deg,_rgba(248,_255,_248,_0.01),_rgba(76,_140,_74,_0.05)),_#f7f7f7] md:flex flex-row items-center justify-start p-20 box-border leading-[normal] tracking-[normal] mq450:gap-[20px] mq750:gap-[40px] mq750:pl-10 mq750:pr-10 mq750:box-border ${className}`}
    >
      <section className="flex-1 flex flex-col items-start justify-start gap-[24px] max-w-full text-left text-[56px] text-dark-100 font-montserrat">
        <h1 className="m-0 self-stretch relative text-inherit tracking-[0.02em] leading-[140%] font-bold font-inherit mq450:text-[34px] mq450:leading-[47px] mq750:text-[45px] mq750:leading-[63px]">
          Start your free trial
        </h1>
        <div className="self-stretch relative text-base leading-[140%] font-body">
          Signup now for 14 days of free premium access. Its free and takes less
          than 3 minutes.
        </div>
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-center justify-start">
          <div className="shadow-[0px_1px_1.92px_rgba(16,_24,_40,_0.05)] rounded-lg bg-success overflow-hidden flex flex-row items-center justify-center p-[15px] whitespace-nowrap border-[1px] border-solid border-success">
            <div className="relative text-base leading-[140%] font-body text-white text-left">
              Get started for Free
            </div>
          </div>
        </button>
      </section>
    </div>
    <div
    className={`m w-full md:hidden flex flex-row items-center justify-start py-[60px] px-6 box-border leading-[normal] tracking-[normal] ${className}`}
  >
    <section className="flex-1 flex flex-col items-start justify-start gap-[16px] max-w-full text-left text-[26px] text-dark-100 font-montserrat">
      <h2 className="m-0 relative text-inherit tracking-[0.02em] leading-[140%] font-bold font-inherit">
        Start your free trial
      </h2>
      <div className="self-stretch relative text-base leading-[140%] font-body">
        Signup now for 14 days of free premium access. Its free and takes less
        than 3 minutes.
      </div>
      <button className="cursor-pointer p-2 bg-success w-[149px] rounded-[10px] box-border flex flex-row items-center justify-center border-[2px] border-solid border-seagreen">
        <img
          className="h-6 w-6 relative overflow-hidden shrink-0 hidden"
          alt=""
          src="/icon--jamicons--outline--logos--plus.svg"
        />
        <div className="flex flex-row items-center justify-center py-0 px-6">
          <div className="relative text-base leading-[140%] font-body text-white text-left inline-block min-w-[81px] whitespace-nowrap">
            Get started
          </div>
        </div>
        <img
          className="h-6 w-6 relative overflow-hidden shrink-0 hidden"
          alt=""
          src="/icon--jamicons--outline--logos--arrowright.svg"
        />
      </button>
    </section>
  </div>
    </>
  );
};

export default TrailComponent;
