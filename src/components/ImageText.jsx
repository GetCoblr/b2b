import * as React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { CheckMarkSVG, GreenCircle, RedCircle, YellowCircle } from "./icons";

const ImageText = ({
  imageLeft = true,
  image,
  title,
  summary,
  summaryList,
  rightImage,
  comingSoon = false,
  bottomImage,
}) => {
  return (
    <>
      <div
        className={`${bottomImage && "mb-28 pb-20"} w-full hidden md:flex ${
          imageLeft ? "flex-row" : "flex-row-reverse"
        }  items-center justify-between px-20 py-10 box-border gap-[80px] leading-[normal] tracking-[normal] text-left text-base text-dark-100 font-body-xs`}
      >
        <div
          className={`${
            rightImage ? "w-[500px] mr-20" : "w-[691px]"
          } relative shadow-[0px_20px_25px_-5px_rgba(0,_0,_0,_0.1),_0px_0px_10px_rgba(0,_0,_0,_0.07)] rounded-[15px] bg-white flex flex-col items-start justify-start max-w-full z-[1]`}
        >
          <div className="rounded-t-[15px] self-stretch bg-whitesmoke flex flex-row items-start justify-start py-[9.5px] px-4 box-border max-w-full">
            <div className="flex-1 flex flex-row items-start justify-start gap-[5px] max-w-full mq450:flex-wrap mq450:justify-center">
              <RedCircle />
              <YellowCircle />
              <GreenCircle />
            </div>
          </div>
          <GatsbyImage
            className={`rounded-b-[15px] min-h-[300px] flex-1 relative max-w-full overflow-hidden object-cover`}
            alt="Image"
            image={getImage(image)}
          />
          {bottomImage && (
            <GatsbyImage
              style={{
                width: "88%",
                bottom: "-33%"
              }}
              className="absolute !m-[0] right-[-8px] object-cover z-[2]"
              alt="Image"
              image={getImage(bottomImage)}
            />
          )}
          {rightImage && (
            <div className="w-[305px] h-[438px] absolute !m-[0] top-[-46px] right-[-122px] z-[2] flex items-center justify-center">
              <GatsbyImage
                className="w-full h-full z-[2] object-contain absolute left-[2px] top-[3px] [transform:scale(1.046)]"
                image={getImage(rightImage)}
              />
            </div>
          )}
        </div>

        <div className="w-1/2 flex flex-col items-start justify-center max-w-full mq750:min-w-full mq1125:flex-1">
          <div className="self-stretch flex flex-col items-start justify-start gap-[32px] max-w-full">
            <div className="self-stretch flex flex-col items-start justify-start gap-[16px] text-xl">
              {comingSoon && (
                <div className="rounded-2xl z-10 bg-blanchedalmond-100 text-darksalmon font-body flex flex-row items-center justify-center py-0.5 px-2 whitespace-nowrap">
                  <div className="relative leading-[140%] inline-block min-w-[97px]">
                    Coming Soon
                  </div>
                </div>
              )}
              <h1 className="m-0 self-stretch relative text-[42px] tracking-[0.02em] leading-[140%] font-bold font-montserrat mq450:text-[25px] mq450:leading-[35px] mq1050:text-[34px] mq1050:leading-[47px]">
                {title}
              </h1>
            </div>
            {summary && (
              <div className="self-stretch relative leading-[140%] font-body">
                {summary}
              </div>
            )}
            {summaryList &&
              summaryList.map((paragraph) => (
                <div className="self-stretch z-[1] flex flex-row items-center justify-start gap-[16px] max-w-full mq750:flex-wrap">
                  <CheckMarkSVG />
                  <div className="flex-1 relative leading-[140%] inline-block min-w-[312px] max-w-full">
                    {paragraph}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>

      <div
        className={`mx-[20px] relative md:hidden flex flex-col items-end mb-24 justify-start gap-[32px] leading-[normal] tracking-[normal]`}
      >
        <div className="relative rounded-[15px] shadow-[0px_20px_25px_-5px_rgba(0,_0,_0,_0.1),_0px_0px_10px_rgba(0,_0,_0,_0.07)]">
          <div className="self-stretch rounded-t-[15px] bg-whitesmoke flex flex-row items-start justify-start py-[9.5px] px-4 box-border max-w-full">
            <div className="flex-1 flex flex-row items-start justify-start gap-[5px] max-w-full mq450:flex-wrap mq450:justify-center">
              <RedCircle />
              <YellowCircle />
              <GreenCircle />
            </div>
          </div>
          <div className="relative">
            <GatsbyImage
              className="self-stretch rounded-b-[15px] relative max-w-full overflow-hidden max-h-full object-cover shrink-0"
              alt="Image"
              image={getImage(image)}
            />
            {rightImage && (
              <div
                style={{
                  bottom: "-14%",
                  right: "-24%",
                }}
                className="absolute w-3/5 flex items-center justify-center"
              >
                <GatsbyImage
                  className="object-fit"
                  image={getImage(rightImage)}
                />
              </div>
            )}
            {bottomImage && (
              <GatsbyImage
                style={{
                  bottom: "-40%",
                  width: "88%",
                }}
                className="h-auto absolute !m-[0] right-[-8px]  object-cover z-[1]"
                alt="Image"
                image={getImage(bottomImage)}
              />
            )}
          </div>
        </div>
        <section
          className={`${
            bottomImage && "mt-20"
          } self-stretch flex flex-row items-start justify-end py-0 pr-4 pl-6 box-border max-w-full shrink-0 text-left text-[24px] text-dark-100 font-montserrat`}
        >
          <div className="flex-1 flex flex-col items-start justify-start gap-[16px] max-w-full">
            {comingSoon && <div
              className={`rounded-2xl w-[96px] bg-blanchedalmond-100 text-xs flex flex-row items-start justify-start py-0.5 px-2 box-border whitespace-nowrap leading-[normal] tracking-[normal] text-center text-darksalmon font-questrial`}
            >
              <div className="relative leading-[17px] inline-block">
                Coming Soon
              </div>
            </div>}
            <h3 className="m-0 self-stretch relative text-inherit tracking-[0.02em] leading-[34px] font-bold font-inherit">
              {title}
            </h3>
            {summary && (
              <div className="self-stretch relative text-base leading-[140%] font-body">
                {summary}
              </div>
            )}
            {summaryList && (
              <section className="self-stretch flex flex-col items-start justify-start gap-[16px] text-left text-xs text-dark-100 font-info-text">
                {summaryList.map((paragraph, index) => (
                  <div
                    key={index}
                    className="z-[1] self-stretch flex flex-row flex-wrap items-center justify-start gap-[16px]"
                  >
                    <CheckMarkSVG />
                    <div className="flex-1 relative leading-[140%] inline-block min-w-[201px]">
                      {paragraph}
                    </div>
                  </div>
                ))}
              </section>
            )}
          </div>
        </section>
      </div>
    </>
  );
};

export default ImageText;
