import * as React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

const Station = ({ className = "", isOpen }) => {
  const containerRef = React.useRef(null);
  return (
    <>
      <motion.div
        ref={containerRef}
        initial={{ height: 0 }}
        animate={{
          height: isOpen ? containerRef.current.scrollHeight : 0,
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        style={{ overflow: "hidden" }}
        className={`col-span-4 grid grid-cols-4 bg-white items-start justify-center shrink-0 text-left text-xs text-gray-200 font-info-text border-solid border-dark-25 border-[0.5px] ${className}`}
      >
        <div className="w-full h-full box-border col-span-1 flex flex-row items-center justify-start pt-[52px] px-4 pb-[51px] border-solid border-dark-25 border-[0.5px]">
          <div className="flex-1 relative leading-[140%]">Docking Station</div>
        </div>
        <div className="col-span-3 flex-1 box-border flex flex-col items-center justify-center pt-5 px-6 pb-[19px] text-base text-dark-100 border-[0.5px] border-solid border-dark-25">
          <div className="self-stretch flex flex-col items-start justify-center gap-[8px]">
            <div className="relative leading-[140%] inline-block min-w-[37px] whitespace-wrap">
              $230
            </div>
            <div className="relative text-xs leading-[140%] flex items-center">
              <span className="w-full">
                <p className="m-0">
                  Keep all of your hardware safe and organized in one place with
                  this durable docking station.
                </p>
                <p className="m-0">
                  <a
                    className="text-[inherit]"
                    href="https://us.bouncepad.com/products/click-and-caddy-light"
                    target="_blank"
                  >
                    <span className="[text-decoration:underline]">
                      https://us.bouncepad.com/products/click-and-caddy-light
                    </span>
                  </a>
                </p>
              </span>
            </div>
          </div>
        </div>
        <section className="col-span-4 self-stretch [background:linear-gradient(rgba(201,_200,_200,_0.1),_rgba(201,_200,_200,_0.1)),_#fff] box-border flex flex-col items-start justify-center pt-4 pb-[15px] pr-5 pl-6 gap-[4px] shrink-0 max-w-full text-left text-base text-gray font-sub-title border-solid border-dark-25 border-[0.5px]">
          <div className="self-stretch relative leading-[140%] font-semibold">
            Shipping Label Printer
          </div>
          <div className="w-[326px] relative text-xs leading-[140%] font-info-text text-dark-100 flex items-center max-w-full">
            Seamlessly print shipping labels from the platform for mail-in /
            online orders.
          </div>
        </section>
        <div className="w-full h-full text-left text-base text-dark-100 font-sub-title flex-[0.6935] box-border flex flex-col items-start justify-center pt-5 px-[15px] pb-[19px] gap-[4px] border-[0.5px] border-solid border-dark-25">
          <a
            className="self-stretch relative [text-decoration:underline] leading-[140%] font-semibold text-[inherit]"
            href="https://www.rollo.com/product/rollo-wireless-printer/"
            target="_blank"
          >
            Rollo
          </a>
          <div className="self-stretch relative text-xs leading-[140%] font-info-text">
            For lower volume shipping needs
          </div>
        </div>
        <div className="w-full h-full box-border border-[0.5px] border-solid border-dark-25" />
        <div className="w-full h-full text-left text-dark-100 font-sub-title flex flex-row items-center justify-center text-lg box-border border-[0.5px] border-solid border-dark-25">
          <div className="relative leading-[140%] font-semibold inline-block whitespace-nowrap">
            $259
          </div>
        </div>
        <div className="w-full h-full box-border border-[0.5px] border-solid border-dark-25" />
        <div className="w-full h-full text-left text-base text-dark-100 font-sub-title flex-[0.6935] box-border flex flex-col items-start justify-center pt-5 px-[15px] pb-[19px] gap-[4px] border-[0.5px] border-solid border-dark-25">
          <a
            className="relative [text-decoration:underline] leading-[140%] font-semibold text-[inherit] inline-block min-w-[68px]"
            href={`https://www.amazon.com/Brother-QL-1110NWB-Professional-Wireless-Connectivity/dp/B079G51QT9/ref=sr_1_1?dib=eyJ2IjoiMSJ9.Bm2iyDENtsTEu3__jcM4VTIOXKPksWntoYA9sZdO0qMSl3QJ3Xm9Tyhlww_7Nr9FtIj3gHFB9GVp7p29A4L1qjx2_azorhDznJ--asZ-I-dP655Tf3YFu9ZFCAwGJ4W2P2PN5WgnysBL7P9FSR1j0JcPZbRyB_hYNIXSyfoRmoUWiIcwRolTadDEvjfbefc3etzQEAZQxm2xUJnM_PWEIO0a8HAJC4ubZuQEvQAfSQclFlXZZrTxSaPBQUOKS9kd4nxjTrtn-BsN7nmPd1e9XQMiaZzWmYIjL1iRuYhcICs.rnQxNwQXjJEa39A5RpILulQ_S75dAOXxbOnf_M-fXgU&dib_tag=se&hvadid=580747452884&hvdev=c&hvlocphy=9073394&hvnetw=g&hvqmt=e&hvrand=8070326892004399468&hvtargid=kwd-702279508720&hydadcr=10873_13484257&keywords=brother+ql-1110nwb+label&qid=1718250745&sr=8-1`}
            target="_blank"
          >
            Brother
          </a>
          <div className="self-stretch relative text-xs leading-[140%] font-info-text">
            For high volume shipping needs
          </div>
        </div>
        <div className="w-full h-full box-border border-[0.5px] border-solid border-dark-25" />
        <div className="w-full h-full text-left text-dark-100 font-sub-title flex flex-row items-center justify-center text-lg box-border border-[0.5px] border-solid border-dark-25">
          <div className="relative leading-[140%] font-semibold inline-block whitespace-nowrap">
            $399
          </div>
        </div>
        <div className="w-full h-full box-border border-[0.5px] border-solid border-dark-25" />
        <div className="w-full h-full text-left text-base text-dark-100 font-sub-title flex-[0.6935] box-border flex flex-col items-start justify-center pt-5 px-[15px] pb-[19px] gap-[4px] border-[0.5px] border-solid border-dark-25">
          <a
            className="self-stretch relative [text-decoration:underline] leading-[140%] font-semibold text-[inherit]"
            href="https://www.amazon.com/Thermal-Desktop-Printer-Ethernet-ZD4A042-D01E00EZ/dp/B09BXZVGXQ"
            target="_blank"
          >
            Zebra
          </a>
          <div className="self-stretch relative text-xs leading-[140%] font-info-text">
            All-in-one printer solution for order and shipping labels
          </div>
        </div>
        <div className="w-full h-full box-border border-[0.5px] border-solid border-dark-25" />
        <div className="w-full h-full text-left text-dark-100 font-sub-title flex flex-row items-center justify-center text-lg box-border border-[0.5px] border-solid border-dark-25">
          <div className="relative leading-[140%] font-semibold inline-block whitespace-nowrap">
            $419
          </div>
        </div>
        <div className="w-full h-full box-border border-[0.5px] border-solid border-dark-25" />
        <section className="w-full h-full col-span-4 self-stretch [background:linear-gradient(rgba(201,_200,_200,_0.1),_rgba(201,_200,_200,_0.1)),_#fff] box-border flex flex-col items-start justify-center pt-4 pb-[15px] pr-5 pl-6 gap-[4px] shrink-0 z-[2] text-left text-base text-gray font-sub-title border-solid border-dark-25 border-[0.5px]">
          <div className="self-stretch relative leading-[140%] font-semibold">
            Order Label Printer
          </div>
          <div className="w-[326px] relative text-xs leading-[140%] font-info-text text-dark-100 flex items-center max-w-full">
            Simplify in-store order management with order labels with QR codes
            to quickly view order details or update the order status.
          </div>
        </section>
        <div className="w-full h-full text-left text-base text-dark-100 font-sub-title flex-[0.6935] box-border flex flex-col items-start justify-center pt-5 px-[15px] pb-[19px] gap-[4px] border-[0.5px] border-solid border-dark-25">
          <a
            className="self-stretch relative [text-decoration:underline] leading-[140%] font-semibold text-[inherit]"
            href={`https://www.uline.com/Product/Detail/H-10839/Zebra-Desktop-Barcode-Printers/Zebra-ZD411-Desktop-Direct-Thermal-Barcode-Printer-2?pricode=WA9420&gadtype=pla&id=H-10839&gad_source=1&gclid=CjwKCAjwjqWzBhAqEiwAQmtgT9khRbPYprTZ1YjsMtIjDNQYv-f0pRMTYlsp9YImwREmDOwDYGmQ5BoCgcYQAvD_BwE`}
            target="_blank"
          >
            Zebra
          </a>
        </div>
        <div className="w-full h-full box-border border-[0.5px] border-solid border-dark-25" />
        <div className="text-left text-dark-100 flex-[0.8337] box-border flex flex-row items-center justify-center pt-5 px-2 pb-[19px] w-full text-xs font-info-text border-solid border-dark-25 border-[0.5px]">
          <div className="flex-1 relative leading-[140%]">
            Heavy duty order and QR code printer.
          </div>
        </div>
        <div className="w-full h-full box-border border-[0.5px] border-solid border-dark-25" />
        <div className="w-full h-full text-left text-base text-dark-100 font-sub-title flex-[0.6935] box-border flex flex-col items-start justify-center pt-5 px-[15px] pb-[19px] gap-[4px] border-[0.5px] border-solid border-dark-25">
          <a
            className="relative [text-decoration:underline] leading-[140%] font-semibold text-[inherit] inline-block min-w-[68px]"
            href={`https://www.amazon.com/Brother-High-Speed-Professional-Multi-System-Compatible/dp/B01N49R9KP?tag=p00935-20&ascsubtag=064qOsfoqgU1Dt2TbNPF7QC&th=1`}
            target="_blank"
          >
            Brother
          </a>
        </div>
        <div className="w-full h-full box-border border-[0.5px] border-solid border-dark-25" />
        <div className="text-left text-dark-100 flex-[0.8337] box-border flex flex-row items-center justify-center pt-5 px-2 pb-[19px] w-full text-xs font-info-text border-solid border-dark-25 border-[0.5px]">
          <div className="h-[153px] flex-1 relative tracking-[-0.16px] leading-[140%] flex items-center">
            Straightforward Straightforward printer for order labels and QR
            codes for in-store order management.
          </div>
        </div>
        <div className="w-full h-full box-border border-[0.5px] border-solid border-dark-25" />
      </motion.div>
    </>
  );
};

Station.propTypes = {
  className: PropTypes.string,
};

export default Station;
