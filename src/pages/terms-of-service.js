import * as React from "react";
import Layout from "../components/Layout";
import SEO from "../components/seo";
import { TERMS_OF_SERVICE } from "../constants";

const TermsOfServicePage = ({}) => {
  return (
    <Layout bg={true}>
      <div className="max-w-[980px] mx-auto">
        <header className="mx-5">
          <p className="text-left md:text-center md:w-auto text-[#61b95e] text-[26px] leading-9 md:text-[52px] font-bold font-['Montserrat'] md:leading-[72.80px] tracking-wide py-10 md:py-0">
            Terms of Service
          </p>
        </header>

        <section className="px-6 py-12 md:py-6 md:my-auto bg-white md:bg-transparent">
          <p className="text-[#272523] text-xs font-normal font-['Questrial'] leading-none">
            Last updated: October 5, 2024
          </p>
          <div className="flex flex-col gap-8">
            {TERMS_OF_SERVICE.map((section, index) => (
              <div key={index} className="flex flex-col gap-4">
                {section.title && (
                  <span className="text-[#272523] text-4xl font-bold font-['Montserrat'] leading-[33.60px]">
                    {section.title}
                  </span>
                )}
                {section.description && (
                  <span className="text-[#272523] text-base font-normal font-['Questrial'] leading-snug">
                    {section.description}
                  </span>
                )}
                {section.points && section.points.length > 0 && (
                  <ul className="m-0 pl-4 flex flex-col gap-2">
                    {section.points.map(
                      ({ content, isTitle = false, subContent }, itemIndex) => (
                        <li
                          key={itemIndex}
                          className={`text-base font-normal font-['Questrial'] leading-snug ${
                            isTitle && "text-lg font-semibold leading-[25.20px]"
                          }`}
                        >
                          {content}
                          {subContent && (
                            <p className="pl-0 text-[#272523] text-base font-normal font-['Questrial'] leading-snug">
                              {subContent}
                            </p>
                          )}
                        </li>
                      )
                    )}
                  </ul>
                )}
              </div>
            ))}
          </div>
          <div className="pt-5">
            <span className="text-[#272523] text-base font-normal font-['Questrial'] leading-snug">
              Coblrshop,Inc
              <br />
              588 Boston Post Rd, Weston, MA 02493
              <br />
            </span>
            <a
              href="mailto:info@coblrshop.com"
              className="text-[#272523] text-base font-normal font-['Questrial'] underline leading-snug"
            >
              info@coblrshop.com
            </a>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default TermsOfServicePage;

export const Head = () => {
  return (
    <SEO
      title="Coblr Terms of Service | Rules and Conditions for Using Our Platform"
      description="Understand the terms and conditions for using Coblr’s platform. Our Terms of Service explain the rights and responsibilities of both Coblr and our users, ensuring a secure and fair experience."
    />
  );
};
