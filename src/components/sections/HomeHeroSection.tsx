import React from "react";

export const HomeHeroSection = (): JSX.Element => {
  return (
    <div className="absolute w-full sm:w-[80%] md:w-[70%] lg:w-[884px] h-auto top-[20%] sm:top-[25%] md:top-[30%] lg:top-[370px] left-0 right-0 mx-auto lg:left-[358px] lg:mx-0 px-4 sm:px-0">
      <div className="relative h-auto sm:h-[182px]">
        {/* First decorative background element */}
        <div className="hidden sm:block w-[40%] md:w-[45%] lg:w-[423px] top-0 left-0 absolute h-[60px] md:h-[80px] lg:h-[94px] bg-[#d7ffb1] rounded-[40px] md:rounded-[50px] lg:rounded-[68px]" />

        {/* Second decorative background element */}
        <div className="hidden sm:block w-[40%] md:w-[45%] lg:w-[416px] top-[60px] md:top-[70px] lg:top-[88px] left-[45%] lg:left-[430px] absolute h-[60px] md:h-[80px] lg:h-[94px] bg-[#d7ffb1] rounded-[40px] md:rounded-[50px] lg:rounded-[68px]" />

        {/* Text content with responsive adjustments */}
        <div className="inline-flex flex-col items-center sm:items-end gap-3 w-full sm:absolute sm:top-0 sm:left-2">
          <p className="relative w-full sm:w-[95%] md:w-[877px] mt-[-1.00px] [font-family:'Outfit',Helvetica] font-bold text-transparent text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-center tracking-[0] leading-[1.2] sm:leading-[1.3] md:leading-[1.4] lg:leading-[86.4px]">
            <span className="text-black">See deeper.&nbsp;&nbsp;</span>
            <span className="text-[#ffffff]">Model faster. Invest with</span>
            <span className="text-black">&nbsp;&nbsp;confidence.</span>
          </p>
        </div>
      </div>
    </div>
  );
};