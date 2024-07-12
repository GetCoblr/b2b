import * as React from "react";
import Footer from "../components/Footer";
import Navbar from "./Navbar";

const Layout = ({ children, bg = false, currentPage }) => {
  return (
    <div className="w-screen overflow-hidden">
      <div
        className={`${
          bg &&
          "[background:linear-gradient(rgba(76,_140,_74,_0.02),_rgba(76,_140,_74,_0.02)),_linear-gradient(180deg,_#fff,_#f7f7f7)]"
        }`}
      >
        <div className={`max-w-screen-2xl mt-[67px] md:mt-0 mx-auto`}>
          {bg && (
            <>
              <Navbar currentPage={currentPage} />
              {React.Children.toArray(children)[0]}
            </>
          )}
        </div>
      </div>
      <div className={`max-w-screen-2xl mx-auto`}>
        {!bg && <Navbar currentPage={currentPage} />}
        {React.Children.toArray(children).slice(bg ? 1 : 0)}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
