import * as React from "react";
import { DownSVG } from "../icons";
import { motion } from 'framer-motion';


const FAQItem = ({ className = "", question, children }) => {
    const [isOpen, setIsOpen] = React.useState(false)
    const containerRef = React.useRef(null);
    const phoneRef = React.useRef(null);
  return (
    <>
    <div
      className={`hidden transition duration-700 ease-in-out self-stretch box-border md:flex flex-col items-start justify-center pt-[30px] px-0 pb-8 max-w-full text-left text-5xl text-dark-100 font-body-l border-t-[1px] border-solid border-dark-25 ${className}`}
    >
      <div onClick={() => setIsOpen(!isOpen)} className="cursor-pointer self-stretch flex flex-row items-center justify-start gap-[8px] max-w-full">
        <div className="flex-1 relative leading-[160%] inline-block max-w-[calc(100%_-_32px)]">
          {question}
        </div>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}>
            <DownSVG />
        </motion.div>
      </div>
      <motion.div
      ref={containerRef}
      initial={{ height: 0 }}
      animate={{ height: isOpen ? containerRef.current.scrollHeight : 0 }}
      transition={{ duration: 0.5, ease: "backInOut" }}
      style={{ overflow: 'hidden'}}
    >
      {children}
    </motion.div>
    </div>

    <div
    className={`md:hidden self-stretch box-border flex flex-col items-start justify-center pt-[31px] px-0 pb-8 max-w-full text-left text-base text-dark-100 font-body border-t-[0.5px] border-solid border-dark-25 ${className}`}
    >
    <div onClick={() => setIsOpen(!isOpen)} className="self-stretch flex flex-row flex-wrap items-center justify-start gap-[8px]">
    <div className="flex-1 relative leading-[140%] inline-block min-w-[201px]">
        {question}
    </div>
    <motion.div animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}>
            <DownSVG />
        </motion.div>
    </div>
    <motion.div
        ref={phoneRef}
        initial={{ height: 0 }}
        animate={{ height: isOpen ? phoneRef.current.scrollHeight : 0 }}
        transition={{ duration: 0.5, ease: "backInOut" }}
        style={{ overflow: 'hidden'}}
        >
        {children}
        </motion.div>
    </div>
    </>
  );
};

export default FAQItem;
