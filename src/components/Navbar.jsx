import * as React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import useFileImport from "../hooks/useFileImport";
import NavExpanded from "./NavExpanded";
import { CloseSVG } from "./icons";
import { Link, navigate } from "gatsby";

const Navbar = ({ className = "", currentPage }) => {
  const fileMap = useFileImport();
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [expand, setExpand] = React.useState(false);
  const [windowSize, setWindowSize] = React.useState(
    typeof window !== "undefined" ? window.innerWidth : null
  );

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      // Function to update window size
      const updateSize = () => {
        setWindowSize(window.innerWidth);
      };

      // Event listener for window resize
      window.addEventListener("resize", updateSize);

      // Initial call to updateSize
      updateSize();

      // Cleanup the event listener
      return () => window.removeEventListener("resize", updateSize);
    }
  }, []);

  // Effect to update expand state based on window width
  React.useEffect(() => {
    if (windowSize >= 768) {
      setExpand(false);
    }
  }, [windowSize]);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <NavExpanded expand={expand} />
      <nav
        className={`fixed top-0 z-50 w-full md:hidden ${
          isScrolled && "shadow-[2px_3px_5px_2px_rgba(0,_0,_0,_0.05)]"
        } bg-white flex flex-row items-center justify-between px-6 py-4 box-border leading-[normal] tracking-[normal] gap-[20px] ${className}`}
      >
        <Link className="cursor-pointer" to="/">
          <GatsbyImage
            className="relative object-cover w-8 h-8"
            image={getImage(fileMap["Brand-logo"].gatsbyImageData)}
            alt="Brand Icon"
          />
        </Link>
        <div
          onClick={() => setExpand(!expand)}
          className="flex flex-col items-start justify-start pt-px px-0 pb-0 cursor-pointer"
        >
          {!expand ? (
            <div
              className={`w-[34px] h-[34px] relative rounded-lg overflow-hidden shrink-0`}
            >
              <div className="absolute top-[10px] left-[8px] w-[18px] h-3.5">
                <div className="absolute top-[0px] left-[0px] rounded-8xs bg-dark-100 w-[18px] h-0.5" />
                <div className="absolute top-[6px] left-[0px] rounded-8xs bg-dark-100 w-[18px] h-0.5" />
                <div className="absolute top-[12px] left-[0px] rounded-8xs bg-dark-100 w-[18px] h-0.5" />
              </div>
            </div>
          ) : (
            <CloseSVG />
          )}
        </div>
      </nav>
      <div
        className={`w-full hidden md:flex flex-row items-end justify-between py-6 px-20 box-border leading-[normal] tracking-[normal] gap-[20px] text-left text-base text-blue-gray-900 font-button-m ${className}`}
      >
        <div className="flex flex-row items-start justify-start gap-[48px] max-w-full">
          <div className="h-12 w-12 relative">
            <Link className="cursor-pointer" to="/">
              <GatsbyImage
                className="absolute top-[calc(50%_-_18px)] left-[calc(50%_-_18px)] w-9 h-9 object-cover"
                image={getImage(fileMap["Brand-logo"].gatsbyImageData)}
                alt="Brand Icon"
              />
            </Link>
          </div>
          <div className="flex flex-col gap-[8px] items-start justify-start pt-3 pb-0">
            <Link
              to="/features"
              className={`[text-decoration:none] hover:text-success cursor-pointer px-[8px] relative tracking-[0.5px] leading-[24px] font-medium text-[inherit] inline-block ${
                currentPage === "features" && "text-success"
              }`}
            >
              Features
            </Link>
            {currentPage === "features" && (
              <div className="w-full h-1.5 relative rounded-[100px] bg-success" />
            )}
          </div>
          <div className="flex flex-col gap-[8px] items-start justify-start pt-3 pb-0 text-blue-gray-900">
            <Link
              to="/pricing"
              className={`[text-decoration:none] hover:text-success cursor-pointer px-[8px] relative tracking-[0.5px] leading-[24px] font-medium text-[inherit] inline-block ${
                currentPage === "pricing" && "text-success"
              }`}
            >
              Pricing
            </Link>
            {currentPage === "pricing" && (
              <div className="w-full h-1.5 relative rounded-[100px] bg-success" />
            )}
          </div>
          <div className="flex flex-col gap-[8px] items-start justify-start pt-3 pb-0 text-blue-gray-900">
            <Link
              to="/support"
              className={`[text-decoration:none] hover:text-success cursor-pointer px-[8px] relative tracking-[0.5px] leading-[24px] font-medium text-[inherit] inline-block" ${
                currentPage === "support" && "text-success"
              }`}
            >
              Support
            </Link>
            {currentPage === "support" && (
              <div className="w-full h-1.5 relative rounded-[100px] bg-success" />
            )}
          </div>
          <div className="flex flex-col gap-[8px] items-start justify-start pt-3 pb-0 text-blue-gray-900">
            <Link
              to="/for-brand"
              className={`[text-decoration:none] hover:text-success cursor-pointer px-[8px] relative tracking-[0.5px] leading-[24px] font-medium text-[inherit] inline-block" ${
                currentPage === "for-brand" && "text-success"
              }`}
            >
              For Brands
            </Link>
            {currentPage === "for-brand" && (
              <div className="w-full h-1.5 relative rounded-[100px] bg-success" />
            )}
          </div>
        </div>
        <div className="flex flex-row items-center justify-start text-blue-gray-900 font-body">
          <div className="flex flex-row items-center justify-start gap-[16px]">
            <div
              onClick={() => navigate(process.env.GATSBY_LOGIN_URL)}
              className="cursor-pointer relative leading-[140%] inline-block min-w-[44px] whitespace-nowrap"
            >
              Log In
            </div>
            <button className="cursor-pointer py-[15px] px-[31px] bg-success shadow-[0px_1px_1.92px_rgba(16,_24,_40,_0.05)] rounded-[14px] overflow-hidden flex flex-row items-center justify-center whitespace-nowrap border-[1px] border-solid border-success hover:bg-mediumseagreen hover:box-border hover:border-[1px] hover:border-solid hover:border-mediumseagreen">
              <div
                onClick={() => navigate(process.env.GATSBY_SIGNUP_URL)}
                className="relative text-base leading-[140%] font-body text-white text-left inline-block min-w-[54px]"
              >
                Sign up
              </div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
