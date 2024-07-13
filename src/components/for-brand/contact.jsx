import * as React from "react";
import PropTypes from "prop-types";
import { GreenCircleSVG, LineSVG, MessageIconSVG } from "../icons";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { SUPPORT_EMAIL_API } from "../../constants";

const Contact = ({ className = "" }) => {
  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const dataToSend = {
      first_name: formData.firstName,
      last_name: formData.lastName,
      email: formData.email,
      phone_number: formData.phoneNumber,
      message: formData.message,
    };

    fetch(
      SUPPORT_EMAIL_API,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSend),
      }
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.text().then((text) => (text ? JSON.parse(text) : {}));
      })
      .then((data) => {
        toast.success("Message sent successfully!", {
          position: "top-center",
        });
        console.log("Success:", data);
      })
      .catch((error) => {
        alert("Error sending message");
        toast.error("Error sending message!", {
          position: "top-center",
        });
        console.error("Error:", error);
      });
  };
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start pt-0 md:px-20 px-5 pb-10 box-border max-w-full text-left text-lg text-white font-sub-title ${className}`}
    >
      <ToastContainer />
      <div className="flex-1 flex-wrap flex flex-row items-start justify-start gap-[80px] max-w-full mq750:gap-[40px] mq450:gap-[20px] mq1275:flex-wrap">
        <div className="h-full flex-[0.8678] rounded-[10px] bg-success overflow-hidden flex flex-col items-start justify-start pt-10 px-10 box-border  min-w-full md:min-w-[393px] max-w-full mq750:h-auto">
          <div className="flex flex-col items-start justify-start gap-[8px] shrink-0">
            <div className="relative leading-[140%] font-semibold">
              Contact Information
            </div>
          </div>
          <div>
            <LineSVG />
          </div>
          <div className="w-[597px] flex flex-row items-start justify-between shrink-0 max-w-[114%] gap-[20px] text-base font-body mq750:flex-wrap">
            <div className="flex flex-col mt-auto mb-10 items-end justify-end gap-[40px] min-w-[186px] mq750:flex-1">
              <div className="flex flex-col items-start justify-start gap-[32px]">
                <div className="flex flex-row items-start justify-start gap-[16px]">
                  <MessageIconSVG />
                  <div className="relative leading-[140%] whitespace-nowrap">
                    <a
                      className="[text-decoration:none] text-inherit"
                      href="mailto:info@getcoblr.com"
                    >
                      info@getcoblr.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start pt-[36px] px-0 pb-0 box-border">
              <GreenCircleSVG />
            </div>
          </div>
        </div>
        <form
          className="flex-1 m-0 grid grid-cols-2 items-start justify-start gap-[24px] min-w-full md:min-w-[387px] max-w-full"
          onSubmit={handleSubmit}
        >
          <h2 className="col-span-2 m-0 relative max-w-[500px] text-11xl tracking-[0.02em] leading-[140%] font-bold font-sub-title text-dark-100 text-left inline-block">
            <p className="m-0">
              Want to learn more about what we are building?
            </p>
          </h2>
          <div className="h-[49px] flex-1 flex flex-col items-start justify-between pt-0 px-0 pb-0 box-border min-w-[181px]">
            <div className="relative text-xs leading-[17px] font-medium font-sub-title text-dark-50 text-left inline-block min-w-[68px]">
              First Name
            </div>
            <input
              type="text"
              required
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="[outline:none] w-full border-b-[0.5px] font-medium font-sub-title text-xs leading-[140%] text-dark-25 text-left inline-block shrink-0 p-0"
            />
          </div>
          <div className="h-[49px] flex-1 flex flex-col items-start justify-between pt-0 px-0 pb-0 box-border min-w-[181px]">
            <div className="relative text-xs leading-[17px] font-medium font-sub-title text-dark-50 text-left inline-block min-w-[68px]">
              Last Name
            </div>
            <input
              type="text"
              required
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="[outline:none] w-full border-b-[0.5px] font-medium font-sub-title text-xs leading-[140%] text-dark-25 text-left inline-block shrink-0 p-0"
            />
          </div>
          <div className="h-[49px] flex-1 flex flex-col items-start justify-between pt-0 px-0 pb-0 box-border min-w-[181px]">
            <div className="relative text-xs leading-[17px] font-medium font-sub-title text-dark-50 text-left inline-block min-w-[68px]">
              Email
            </div>
            <input
              type="text"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="[outline:none] w-full border-b-[0.5px] font-medium font-sub-title text-xs leading-[140%] text-dark-25 text-left inline-block shrink-0 p-0"
            />
          </div>
          <div className="h-[49px] flex-1 flex flex-col items-start justify-between pt-0 px-0 pb-0 box-border min-w-[181px]">
            <div className="relative text-xs leading-[17px] font-medium font-sub-title text-dark-50 text-left inline-block min-w-[68px]">
              Phone Number
            </div>
            <input
              type="text"
              name="phoneNumber"
              required
              value={formData.phoneNumber}
              onChange={handleChange}
              className="[outline:none] w-full border-b-[0.5px] font-medium font-sub-title text-xs leading-[140%] text-dark-25 text-left inline-block shrink-0 p-0"
            />
          </div>
          <div className="col-span-2 self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-0 gap-[8px]">
            <div className="relative text-xs leading-[17px] font-medium font-sub-title text-dark-50 text-left inline-block min-w-[54px]">
              Message
            </div>
            <input
              type="text"
              name="message"
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full border-b-[0.5px] [outline:none] font-medium font-sub-title text-xs leading-[140%] placeholder:text-dark-25 text-left inline-block shrink-0 p-0"
            />
          </div>
          <button
            type="submit"
            className="cursor-pointer py-[9px] px-[22px] bg-success rounded-md flex flex-row items-center justify-center border-[2px] border-solid border-seagreen"
          >
            <div className="flex flex-row items-center justify-center py-0 px-6">
              <div className="relative text-lg leading-[140%] font-semibold font-sub-title text-white text-left text-nowrap">
                Send Message
              </div>
            </div>
          </button>
        </form>
      </div>
    </section>
  );
};

Contact.propTypes = {
  className: PropTypes.string,
};

export default Contact;
