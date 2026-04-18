import * as React from "react";
import useFileImport from "../../hooks/useFileImport";
import { navigate } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const FrameComponent = ({ className = "" }) => {
  const fileMap = useFileImport();
  const backgroundImage = fileMap["section@3x"]
    ? fileMap["section@3x"].gatsbyImageData
    : "";

  const [email, setEmail] = React.useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const url = `${process.env.GATSBY_SIGNUP_URL}?prefilled_email=${email}`;
    window.open(url, "_blank");
  };

  return (
    <>
      <section
        className={`hidden w-full self-stretch md:flex flex-row items-start justify-start pt-0 px-0 pb-10 box-border max-w-full text-left text-41xl text-white font-sub-title ${className}`}
      >
        <div className="relative">
          <div
            style={{
              left: "min(0px, calc((1440px - 100vw) / 2))",
              position: "absolute",
              width: "100vw",
              height: "100%",
            }}
          >
            <GatsbyImage
              className="w-full h-full object-cover"
              image={getImage(backgroundImage)}
              alt="Background Image"
            />
            <div className="absolute w-full h-full z-[1] inset-0 bg-black opacity-50" />
          </div>
          <div className="relative overflow-hidden flex-1 flex flex-row items-start justify-start py-14 px-20 box-border bg-cover bg-no-repeat bg-[top] min-h-[561px] max-w-full mq750:gap-[40px] mq750:pl-10 mq750:pr-10 mq750:box-border mq450:gap-[20px] mq450:pt-9 mq450:pb-9 mq450:box-border">
            <div className="z-10 flex-1 flex flex-col items-start justify-center gap-[24px] max-w-full">
              <div className="self-stretch flex flex-col items-start justify-center gap-[24px] max-w-full">
                <div className="self-stretch flex flex-col items-start justify-center py-0 pr-5 pl-0 box-border max-w-full">
                  <h1 className="m-0 w-[621px] relative text-inherit tracking-[0.02em] leading-[140%] font-bold font-inherit text-transparent !bg-clip-text [background:linear-gradient(90deg,_#61ba5f,_#4c8c4a)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block max-w-full">
                    The heartbeat of your business.
                  </h1>
                </div>
                <div className="w-[621px] relative text-lg leading-[140%] font-semibold inline-block max-w-full">
                  Manage your business in one place with powerful features built
                  specifically for repair businesses.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div
        className={`mb-20 relative md:hidden w-full flex flex-row items-start justify-start py-[110px] px-6 box-border bg-cover bg-no-repeat bg-[top] leading-[normal] tracking-[normal] ${className}`}
      >
        <GatsbyImage
          className="w-full h-full object-cover !absolute inset-0"
          image={getImage(backgroundImage)}
          alt="Background Image"
        />
        <div className="absolute inset-0 bg-black opacity-50" />
        <section className="z-10 flex-1 flex flex-col items-start justify-start gap-[24px] max-w-full text-left text-[26px] text-white font-montserrat">
          <h2 className="m-0 self-stretch relative text-inherit tracking-[0.02em] leading-[140%] font-bold font-inherit text-transparent !bg-clip-text [background:linear-gradient(90deg,_#61ba5f,_#4c8c4a)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
            <p className="[margin-block-start:0] [margin-block-end:5px]">{`The heartbeat of `}</p>
            <p className="m-0">your business.</p>
          </h2>
          <div className="self-stretch flex flex-col items-start justify-start text-base">
            <div className="self-stretch relative leading-[150%] font-semibold">
              Manage your business in one place with powerful features built
              specifically for repair businesses.
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default FrameComponent;
