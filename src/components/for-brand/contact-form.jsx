import * as React from "react";
import { GATSBY_SUPPORT_EMAIL_API } from "../../constants";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = ({ className }) => {
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

    fetch(GATSBY_SUPPORT_EMAIL_API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataToSend),
    })
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
    <form
      className={`bg-success ${className} flex-1 md:w-full z-[1] py-[32px] px-[38px] rounded-[10px] md:m-0 md:grid md:grid-cols-2 items-stretch flex-col flex text-white justify-start gap-[24px]`}
      onSubmit={handleSubmit}
    >
      <ToastContainer />
      <h2 className="col-span-2 m-0 relative md:text-11xl text-lg tracking-[0.02em] leading-[140%] md:font-bold font-semibold font-sub-title text-white text-left inline-block">
        <p className="m-0">Want to learn more about what we are building?</p>
      </h2>
      <div className="h-[49px] flex-1 flex flex-col items-start justify-between pt-0 px-0 pb-0 box-border">
        <div className="relative text-xs leading-[17px] font-medium font-sub-title text-left inline-block">
          First Name
        </div>
        <input
          type="text"
          required
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          className="[outline:none] bg-transparent border-white w-full border-b-[1px] h-[32px] font-medium font-sub-title text-xs leading-[140%] text-dark-25 text-left inline-block shrink-0 p-0"
        />
      </div>
      <div className="h-[49px] flex-1 flex flex-col items-start justify-between pt-0 px-0 pb-0 box-border">
        <div className="relative text-xs leading-[17px] font-medium font-sub-title text-left inline-block">
          Last Name
        </div>
        <input
          type="text"
          required
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          className="[outline:none] bg-transparent border-white w-full border-b-[1px] h-[32px] font-medium font-sub-title text-xs leading-[140%] text-dark-25 text-left inline-block shrink-0 p-0"
        />
      </div>
      <div className="h-[49px] flex-1 flex flex-col items-start justify-between pt-0 px-0 pb-0 box-border">
        <div className="relative text-xs leading-[17px] font-medium font-sub-title text-left inline-block">
          Email
        </div>
        <input
          type="text"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="[outline:none] bg-transparent border-white w-full border-b-[1px] h-[32px] font-medium font-sub-title text-xs leading-[140%] text-dark-25 text-left inline-block shrink-0 p-0"
        />
      </div>
      <div className="h-[49px] flex-1 flex flex-col items-start justify-between pt-0 px-0 pb-0 box-border">
        <div className="relative text-xs leading-[17px] font-medium font-sub-title text-left inline-block">
          Phone Number
        </div>
        <input
          type="text"
          name="phoneNumber"
          required
          value={formData.phoneNumber}
          onChange={handleChange}
          className="[outline:none] bg-transparent border-white w-full border-b-[1px] h-[32px] font-medium font-sub-title text-xs leading-[140%] text-dark-25 text-left inline-block shrink-0 p-0"
        />
      </div>
      <div className="col-span-2 self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-0 gap-[8px]">
        <div className="relative text-xs leading-[17px] font-medium font-sub-title text-left inline-block">
          Message
        </div>
        <input
          type="text"
          name="message"
          placeholder="Write your message.."
          required
          value={formData.message}
          onChange={handleChange}
          className="w-full border-b-[1px] h-[32px] [outline:none] bg-transparent border-white font-medium font-sub-title text-xs leading-[140%] placeholder:text-dark-25 text-left inline-block shrink-0 p-0"
        />
      </div>
      <button
        type="submit"
        className="cursor-pointer col-span-2 py-[9px] px-[22px] bg-white text-success md:rounded-md rounded-[10px] flex flex-row items-center justify-center border-[2px] border-solid border-seagreen"
      >
        <div className="flex flex-row items-center justify-center py-0 px-6">
          <div className="relative md:text-lg text-base leading-[140%] font-semibold font-body md:font-sub-title text-left text-nowrap">
            Send Message
          </div>
        </div>
      </button>
    </form>
  );
};

export default ContactForm;
