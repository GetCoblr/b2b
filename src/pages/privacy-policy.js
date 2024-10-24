import * as React from "react";
import Layout from "../components/Layout";
import SEO from "../components/seo";
import { PRIVACY_POLICY } from "../constants";

export const ContactInformation = () => {
  return (
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
  );
}

const PrivacyPolicyPage = () => {
  return (
    <Layout bg={true} currentPage="privacy-policy">
      <div className="max-w-[980px] mx-auto">
        <header className="mx-5">
          <p className="text-left md:text-center md:w-auto text-[#61b95e] text-[26px] leading-9 md:text-[52px] font-bold font-['Montserrat'] md:leading-[72.80px] tracking-wide py-10 md:py-0">
            Privacy Policy
          </p>
        </header>

        <section className="px-6 py-12 md:py-6 md:my-auto bg-white md:bg-transparent">
          <p className="text-[#272523] text-xs font-normal font-['Questrial'] leading-none">
            Last updated: October 5, 2024
          </p>
          <div className="flex flex-col gap-8">
            {PRIVACY_POLICY.map((section, index) => (
              <div key={index} className="flex flex-col gap-4">
                <span className="text-[#272523] text-4xl font-bold font-['Montserrat'] leading-[33.60px]">
                  {section.title}
                </span>
                {section.description && (
                  <span className="text-[#272523] text-base font-normal font-['Questrial'] leading-snug">
                    {section.description}
                  </span>
                )}
                {section.subsections?.map((sub, subIndex) => (
                  <div
                    key={subIndex}
                    className="flex flex-col gap-2 justify-start items-start"
                  >
                    {sub.subheading && (
                      <span className="text-[#272523] text-lg font-semibold font-['Montserrat'] leading-[25.20px]">
                        {sub.subheading}
                        <br />
                      </span>
                    )}
                    {sub.subcontent && (
                      <span className="text-[#272523] text-base font-normal font-['Questrial'] leading-snug">
                        {sub.subcontent}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
          <ContactInformation />
        </section>
      </div>
    </Layout>
  );
};

export default PrivacyPolicyPage;

export const Head = () => {
  return (
    <SEO
      title="Coblr Privacy Policy | How We Protect Your Data and Privacy"
      description="Learn how Coblr collects, uses, and protects your personal data. Our Privacy Policy outlines the types of information we collect and how we ensure your privacy while using our services."
    />
  );
};
