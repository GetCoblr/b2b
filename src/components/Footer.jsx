import * as React from "react";
import PropTypes from "prop-types";
import {
  BranchSVG,
  CloudSVG,
  CustomerSVG,
} from "./icons";
import useFileImport from "../hooks/useFileImport";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Link, navigate } from "gatsby";

const Footer = ({ className = "", currentPage }) => {
  const fileMap = useFileImport();

  return (
    <>
      <div
        className={`md:flex hidden w-full bg-white flex-col items-start justify-center py-0 px-20 box-border leading-[normal] tracking-[normal] text-left text-xs text-blue-gray-600 font-body-xs ${className}`}
      >
        <section className="self-stretch box-border flex flex-row items-start justify-between pt-12 px-0 pb-[46px] max-w-full gap-[20px] text-left text-base text-blue-gray-600 font-body-xs border-b-[1px] border-solid border-dark-25 flex-wrap lg:flex-nowrap">
          <div className="w-[260px] flex flex-col items-start justify-center py-0 pr-5 pl-0 box-border gap-[24px] text-dark-100 font-body">
            <GatsbyImage
              className="w-[33px] h-[34px] relative object-cover"
              image={getImage(fileMap["Brand-logo"].gatsbyImageData)}
              alt="Brand Icon"
            />
            <div className="relative leading-[140%] whitespace-nowrap">
              <a
                className="[text-decoration:none] text-inherit"
                href="mailto:info@getcoblr.com"
              >
                info@getcoblr.com
              </a>
            </div>
          </div>
          <div className="w-[816px] flex flex-row items-start justify-start gap-[48px] max-w-full mq450:gap-[24px] mq750:flex-wrap">
            <div
              className={`flex-1 flex flex-col items-start justify-start min-w-[180px] text-left text-lg text-dark-100 font-montserrat ${className}`}
            >
              <div className="flex flex-row items-center justify-start py-3 pr-[106px] pl-0 gap-[8px]">
                <div className="h-6 w-6 relative overflow-hidden shrink-0">
                  <CustomerSVG />
                </div>
                <b className="relative leading-[140%] inline-block min-w-[102px]">
                  Customers
                </b>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start text-base text-blue-gray-600 font-body-xs">
                <div
                  onClick={() => navigate(process.env.GATSBY_LOGIN_URL)}
                  className="cursor-pointer self-stretch flex flex-row items-center justify-start py-3 px-0 gap-[8px] text-dark-100 font-body"
                >
                  <div className="relative leading-[140%] inline-block min-w-[48px]">
                    Sign In
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-center justify-start py-3 px-0 gap-[8px] text-dark-100 font-body">
                  <Link
                    to="/pricing"
                    className="[text-decoration:none] text-dark-100 relative leading-[140%] inline-block min-w-[50px]"
                  >
                    Pricing
                  </Link>
                </div>
                <div
                  onClick={() => navigate(process.env.GATSBY_CONTACT_US_URL)}
                  className="cursor-pointer whitespace-nowrap self-stretch flex flex-row items-center justify-start py-3 px-0 gap-[8px] text-dark-100 font-body"
                >
                  <div className="whitespace-nowrap relative leading-[140%] inline-block min-w-[80px]">
                    Contact Us
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`flex-1 flex flex-col items-start justify-start min-w-[180px] text-left text-lg text-dark-100 font-montserrat ${className}`}
            >
              <div className="flex flex-row items-center justify-start py-3 pr-[106px] pl-0 gap-[8px]">
                <CloudSVG className="h-6 w-6 relative overflow-hidden shrink-0" />
                <b className="relative leading-[140%] inline-block min-w-[102px]">
                  Product
                </b>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start text-base text-blue-gray-600 font-body-xs">
                <div className="self-stretch flex flex-row items-center justify-start py-3 px-0 gap-[8px] text-dark-100 font-body">
                  <Link
                    to="/features"
                    className="[text-decoration:none] text-dark-100 relative leading-[140%] inline-block min-w-[48px]"
                  >
                    Features
                  </Link>
                </div>
              </div>
            </div>
            <div
              className={`flex-1 flex flex-col items-start justify-start min-w-[180px] text-left text-lg text-dark-100 font-montserrat ${className}`}
            >
              <div className="flex flex-row items-center justify-start py-3 pr-[106px] pl-0 gap-[8px]">
                <BranchSVG className="h-6 w-6 relative overflow-hidden shrink-0" />
                <b className="relative leading-[140%] inline-block min-w-[102px]">
                  Resources
                </b>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start text-base text-blue-gray-600 font-body-xs">
                <div className="self-stretch flex flex-row items-center justify-start py-3 px-0 gap-[8px] text-dark-100 font-body">
                  <Link
                    to="/support"
                    className="[text-decoration:none] text-dark-100 relative leading-[140%] inline-block min-w-[48px]"
                  >
                    Support
                  </Link>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start text-base text-blue-gray-600 font-body-xs">
                <div className="self-stretch flex flex-row items-center justify-start py-3 px-0 gap-[8px] text-dark-100 font-body">
                  <Link
                    to="/for-brand"
                    className="[text-decoration:none] text-dark-100 relative leading-[140%] inline-block min-w-[48px]"
                  >
                    For Brands
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="flex flex-row items-center justify-between pt-12 px-0 pb-6 gap-[48px] w-full text-base text-blue-gray-600 font-body-xs">
          <div className="leading-[140%] font-body text-dark-50 whitespace-pre-wrap">
            © 2024, Coblrshop Inc. All rights reserved.
          </div>
          <div className="flex gap-5">
            <Link
              to="/terms-of-service"
              className={`text-base font-normal font-['Questrial'] leading-snug no-underline hover:underline ${
                currentPage === "terms-of-service"
                  ? "text-[#4c8c4a]"
                  : "text-[#939291]"
              }`}
            >
              Terms of Service
            </Link>
            <Link
              to="/privacy-policy"
              className={`text-base font-normal font-['Questrial'] leading-snug no-underline hover:underline ${
                currentPage === "privacy-policy"
                  ? "text-[#4c8c4a]"
                  : "text-[#939291]"
              }`}
            >
              Privacy Policy
            </Link>
          </div>
        </section>
      </div>

      <div
        className={`md:hidden w-full bg-white flex flex-col items-start justify-center py-0 px-6 box-border leading-[normal] tracking-[normal] text-left text-xs text-blue-gray-600 font-body-xs ${className}`}
      >
        <section className="self-stretch flex flex-col items-start justify-start pt-12 px-0 pb-[46px] gap-[32px] text-left text-base text-blue-gray-600 font-body-xs border-b-[1px] border-solid border-dark-25">
          <div className="flex flex-col items-start justify-center gap-[24px] text-dark-100 font-body">
            <GatsbyImage
              className="w-[33px] h-[34px] relative object-cover"
              image={getImage(fileMap["Brand-logo"].gatsbyImageData)}
              alt="Brand Icon"
            />
            <div className="relative leading-[140%] whitespace-nowrap">
              <a
                className="[text-decoration:none] text-inherit"
                href="mailto:info@getcoblr.com"
              >
                info@getcoblr.com
              </a>
            </div>
          </div>
          <div
            className={`self-stretch flex flex-col items-start justify-start text-left text-lg text-dark-100 font-montserrat ${className}`}
          >
            <div className="self-stretch flex flex-row items-center justify-start py-3 pr-52 pl-0 gap-[8px]">
              <div className="h-6 w-6 relative overflow-hidden shrink-0">
                <CustomerSVG />
              </div>
              <b className="relative leading-[140%] inline-block min-w-[102px]">
                Customers
              </b>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start text-base text-blue-gray-600 font-body-xs">
              <div
                onClick={() => navigate(process.env.GATSBY_LOGIN_URL)}
                className="self-stretch flex flex-row items-center justify-start py-3 px-0 gap-[8px] text-dark-100 font-body"
              >
                <div className="relative leading-[140%] inline-block min-w-[48px]">
                  Sign In
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start py-3 px-0 gap-[8px] text-dark-100 font-body">
                <Link
                  to="/pricing"
                  className="[text-decoration:none] text-dark-100 relative leading-[140%] inline-block min-w-[50px]"
                >
                  Pricing
                </Link>
              </div>
              <div
                onClick={() => navigate(process.env.GATSBY_CONTACT_US_URL)}
                className="cursor-pointer whitespace-nowrap self-stretch flex flex-row items-center justify-start py-3 px-0 gap-[8px] text-dark-100 font-body"
              >
                <div className="whitespace-nowrap relative leading-[140%] inline-block min-w-[80px]">
                  Contact Us
                </div>
              </div>
            </div>
          </div>
          <div
            className={`self-stretch flex flex-col items-start justify-start text-left text-lg text-dark-100 font-montserrat ${className}`}
          >
            <div className="self-stretch flex flex-row items-center justify-start py-3 pr-52 pl-0 gap-[8px]">
              <CloudSVG className="h-6 w-6 relative overflow-hidden shrink-0" />
              <b className="relative leading-[140%] inline-block min-w-[102px]">
                Product
              </b>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start text-base text-blue-gray-600 font-body-xs">
              <div className="self-stretch flex flex-row items-center justify-start py-3 px-0 gap-[8px] text-dark-100 font-body">
                <Link
                  to="/features"
                  className="[text-decoration:none] text-dark-100 relative leading-[140%] inline-block min-w-[48px]"
                >
                  Features
                </Link>
              </div>
            </div>
          </div>
          <div
            className={`self-stretch flex flex-col items-start justify-start text-left text-lg text-dark-100 font-montserrat ${className}`}
          >
            <div className="self-stretch flex flex-row items-center justify-start py-3 pr-52 pl-0 gap-[8px]">
              <BranchSVG className="h-6 w-6 relative overflow-hidden shrink-0" />
              <b className="relative leading-[140%] inline-block min-w-[102px]">
                Resources
              </b>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start text-base text-blue-gray-600 font-body-xs">
              <div className="self-stretch flex flex-row items-center justify-start py-3 px-0 gap-[8px] text-dark-100 font-body">
                <Link
                  to="/support"
                  className="[text-decoration:none] text-dark-100 relative leading-[140%] inline-block min-w-[48px]"
                >
                  Support
                </Link>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start text-base text-blue-gray-600 font-body-xs">
              <div className="self-stretch flex flex-row items-center justify-start py-3 px-0 gap-[8px] text-dark-100 font-body">
                <Link
                  to="/for-brand"
                  className="[text-decoration:none] text-dark-100 relative leading-[140%] inline-block min-w-[48px]"
                >
                  For Brands
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="flex flex-col justify-start pt-12 px-0 pb-6 box-border gap-[8px] max-w-full text-left text-base font-body-xs">
          <div className="flex gap-5">
            <Link
              to="/terms-of-service"
              className={`text-base font-normal font-['Questrial'] leading-snug no-underline hover:underline ${
                currentPage === "terms-of-service"
                  ? "text-[#4c8c4a]"
                  : "text-[#939291]"
              }`}
            >
              Terms of Service
            </Link>
            <Link
              to="/privacy-policy"
              className={`text-base font-normal font-['Questrial'] leading-snug no-underline hover:underline ${
                currentPage === "privacy-policy"
                  ? "text-[#4c8c4a]"
                  : "text-[#939291]"
              }`}
            >
              Privacy Policy
            </Link>
          </div>
          <div className="leading-[140%] font-body text-dark-50 whitespace-pre-wrap">
            © 2024, Coblrshop Inc. All rights reserved.
          </div>
        </section>
      </div>
    </>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
