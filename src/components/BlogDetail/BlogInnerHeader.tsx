import React from "react";

export const BlogInnerHeader = (): JSX.Element => {
  return (
    <div className="w-full mx-auto px-4 md:px-0">
      <div className="flex items-center gap-2 md:gap-8 mb-6 md:mb-0">
        <div className="flex items-center">
          <img
            className="w-5 h-5 md:w-6 md:h-6"
            alt="Shuttle"
            src="https://c.animaapp.com/mez24gm7aTt0yA/img/shuttle.svg"
          />
          <div className="ml-2 md:ml-8 [font-family:'Outfit',Helvetica] font-bold text-[#232536] text-lg md:text-2xl tracking-[0] leading-8">
            Startup
          </div>
        </div>
      </div>

      <p className="w-full mt-6 md:mt-[30px] [font-family:'Outfit',Helvetica] font-bold text-[#232536] text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-[-1px] md:tracking-[-2.00px] leading-tight md:leading-[64px]">
        Step-by-step guide to choosing great font pairs
      </p>

      <div className="flex mt-6 md:mt-10">
        <img
          className="w-10 h-10 md:w-12 md:h-12"
          alt="Image"
          src="https://c.animaapp.com/mez24gm7aTt0yA/img/image.png"
        />

        <div className="ml-4 md:ml-6">
          <div className="opacity-[0.87] [font-family:'Outfit',Helvetica] font-medium text-[#592ea9] text-base md:text-lg">
            Andrew Jonson
          </div>

          <p className="mt-1 md:mt-2 [font-family:'Outfit',Helvetica] font-normal text-[#6d6e76] text-sm md:text-base">
            Posted on 27th January 2022
          </p>
        </div>
      </div>
    </div>
  );
};
