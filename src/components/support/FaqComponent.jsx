import * as React from "react";
import PropTypes from "prop-types";
import FAQItem from "./FAQItem";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import useFileImport from "../../hooks/useFileImport";

const FaqComponent = ({ className = "" }) => {
  const fileMap = useFileImport();
  return (
    <div
      className={`w-full bg-white flex flex-col items-center justify-center md:p-20 px-6 pt-10 box-border md:gap-[80px] gap-[40px] leading-[normal] tracking-[normal] font-montserrat ${className}`}
    >
      <header className="hidden self-stretch md:flex flex-col items-center justify-start gap-[24px] max-w-full">
        <div className="text-center text-xl text-blue-gray-900 font-body-l self-stretch flex flex-col items-center justify-start gap-[8px] max-w-full">
          <h2 className="m-0 self-stretch relative text-[42px] tracking-[0.02em] leading-[59px] font-bold font-montserrat whitespace-nowrap">
            Frequently Asked Questions
          </h2>
        </div>
      </header>
      <h2 className="md:hidden m-0 self-stretch relative text-[26px] tracking-[0.02em] leading-[140%] font-bold font-inherit">
        Frequently Asked Questions
        </h2>
      <section className="self-stretch flex flex-col items-start justify-start max-w-full">
        <FAQItem question="How does billing work?">
          <p>
            The Coblr subscription is charged on a monthly basis. After the 14
            day free trial, your card will be charged for the next 30 days.
          </p>
          <p>
            <b>For example)</b> If you are signed up for our Basic plan
            ($50/month) and your free trial ends on the 14th of the month, you
            will be charged $50 for the next month of access. Your billing date
            will be the 15th of each month.
          </p>
          <p>
            If you cancel before your billing date, you won’t be charged for the
            upcoming month.
          </p>
          <p>
            If you cancel after your billing date, we will refund you. We
            promise. No funny business.
          </p>
        </FAQItem>
        <FAQItem question="How do I add my employees?">
          <p>
            When you set up your account you have the ability to add new
            employees. Note that all users can view all details on the app. We
            will be launching permissions to tailor access for different user
            types before Q4 2024.
          </p>
        </FAQItem>
        <FAQItem question="How to create a custom quote?">
          <p>
            You can create a full repair order in the POS and when you get to
            the point of creating the order, you select “Create a quote.”
            Instead of going through the payment process, you enter the
            customer’s email and the quote is sent to them. The customer will
            receive an email with the repair quote and a link to pay for the
            service. Once the quote is paid, the quote will become an order and
            show up in the “new” order column under “Order Overview.” Quotes are
            treated as an online order and shipping labels can be created for
            the order. To include shipping in the order, please add as a custom
            field to your POS.
          </p>
          <GatsbyImage alt="Image" image={getImage(fileMap["new-order"])} />
        </FAQItem>
        <FAQItem question="How does billing work for shipping labels?">
          <p>
            Currently, we have a unique code for your business and each time a
            shipping label is created we will assign the charge to your
            business. At the end of each calendar month, we will aggregate all
            shipping labels created by your store and invoice you for that
            total.
          </p>
          <p>
            You can also give us your UPS, USPS, or FedEx account number and we
            can set up 3rd party billing so that your shipper account is charged
            directly.
          </p>
          <p>
            We are working on improving this experience and will be launching a
            simpler shipping integration in the near future, so that you are
            charged directly as you create labels.
          </p>
        </FAQItem>
        <FAQItem question="What automated emails are sent?">
          <p>
            We know that customers expect updates on their repairs to make the
            repair experience better. But doing this manually can be
            time-consuming. To improve the experience, we have built automated
            email notifications throughout the entire Coblr product.
          </p>
          <ul className="list-disc">
            <li>
              <p>
                Customers will receive updates each time their order status is
                updated.
              </p>
            </li>
            <ul className="list-none">
              <li>
                Online Orders: Order Confirmation, Shipping Confirmation, In
                Progress / Received, and Repaired.
              </li>
              <li>In-Store: Order Confirmation, In Progress, Repaired.</li>
            </ul>
          </ul>
          <p>
            When updating some statuses in “Order Overview” you can select “move
            without notifications” so that the customer doesn’t receive an
            update, but we suggest sending updates each time there is a change
            in status.
          </p>
          <ul className="list-disc">
            <li>
              Customers will receive emails when you send them messages via our
              app
            </li>
          </ul>
        </FAQItem>
        <FAQItem question="How do I request new features?">
          <p>
            Please email us at{" "}
            <a href="mailto:support@getcoblr.com">support@getcoblr.com</a> and
            include:
          </p>
          <ul className="list-disc">
            <li>Your name</li>
            <li>Business Name</li>
            <li>
              Feature request and any additional details on why it is important
            </li>
          </ul>
        </FAQItem>
        <FAQItem question="How do I cancel?">
          <p>
            We hate to see you go! But, we are committed to making signing up
            and canceling as easy as possible. To cancel, please email us at{" "}
            <a href="mailto:info@getcoblr.com">info@getcoblr.com</a>
          </p>
          <p>
            Of course, we would love to know why you are canceling. This helps
            us improve our product and service.
          </p>
        </FAQItem>
        <FAQItem question="Do you have a referral program? ">
          <p>
            Yes! Getting out the word to all shoe repair shops is so important!
            Please tell your referral to email us at{" "}
            <a href="mailto:referral@getcoblr.com">referral@getcoblr.com</a> and
            copy your business email and we will offer both businesses 2 months
            of free access to Coblr!
          </p>
        </FAQItem>
        <FAQItem question="What platforms does Coblr work on?">
          <p>
            Coblr is available everywhere you work — on the web via tablet and
            desktop. Mobile is coming soon. Use Coblr on your desktop or tablet
            to easily view all details and manage your full business, and use
            the tablet or smartphone to view order details, upload before and
            after images, and update order statuses on the go.
          </p>
        </FAQItem>
      </section>
    </div>
  );
};

export default FaqComponent;
