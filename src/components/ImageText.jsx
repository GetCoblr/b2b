import * as React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const ImageText = ({ imageLeft = true, image, title, summary }) => {
  return (
    <>
    <div
      className={`w-full hidden md:flex ${imageLeft ? 'flex-row' : 'flex-row-reverse'}  items-center justify-start p-20 box-border gap-[80px] leading-[normal] tracking-[normal] text-left text-base text-dark-100 font-body-xs mq750:gap-[40px] mq750:pl-10 mq750:pr-10 mq750:box-border mq450:gap-[20px] mq1125:flex-wrap`}
    >
      <GatsbyImage
        className="min-h-[300px] flex-1 relative max-w-full overflow-hidden object-cover"
        alt="Image"
        image={getImage(image)}
      />
      <div className="w-[450px] flex flex-col items-start justify-center min-w-[450px] max-w-full mq750:min-w-full mq1125:flex-1">
        <div className="self-stretch flex flex-col items-start justify-start gap-[32px] max-w-full">
          <div className="self-stretch flex flex-col items-start justify-start gap-[16px] text-xl">
            <h1 className="m-0 self-stretch relative text-[42px] tracking-[0.02em] leading-[140%] font-bold font-montserrat mq450:text-[25px] mq450:leading-[35px] mq1050:text-[34px] mq1050:leading-[47px]">
              {title}
            </h1>
          </div>
          <div className="self-stretch relative leading-[140%] font-body">
            {summary}
          </div>
        </div>
      </div>
    </div>

<div
className={`w-full md:hidden overflow-hidden flex flex-col items-end mb-24 justify-start gap-[32px] leading-[normal] tracking-[normal]`}
>
<GatsbyImage
        className="self-stretch relative max-w-full overflow-hidden max-h-full object-cover shrink-0"
        alt="Image"
        image={getImage(image)}
      />
<section className="self-stretch flex flex-row items-start justify-end py-0 pr-4 pl-6 box-border max-w-full shrink-0 text-left text-[24px] text-dark-100 font-montserrat">
  <div className="flex-1 flex flex-col items-start justify-start gap-[16px] max-w-full">
    <h3 className="m-0 self-stretch relative text-inherit tracking-[0.02em] leading-[34px] font-bold font-inherit">
      {title}
    </h3>
    <div className="self-stretch relative text-base leading-[140%] font-body">
      {summary}
    </div>
  </div>
</section>
</div>
</>
  );
};

export default ImageText;