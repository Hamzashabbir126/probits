import React from "react";

export const HomeHeroContent = (): JSX.Element => {
  return (
    <div className="absolute w-full max-w-[90%] sm:max-w-[80%] md:max-w-[70%] lg:max-w-[884px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <div className="relative w-full flex flex-col items-center justify-center">
        {/* Text content - perfectly centered with inline backgrounds */}
        <div className="flex flex-col items-center justify-center w-full text-center">
          <p className="w-full [font-family:'Outfit',Helvetica] font-bold text-3xl sm:text-4xl md:text-5xl lg:text-7xl tracking-[0] leading-[1.2] sm:leading-[1.3] md:leading-[1.4] lg:leading-[86.4px]">
            <span className="text-black bg-[#d7ffb1] px-2 py-1 rounded-full">See deeper.</span>
            <span className="text-black">&nbsp;&nbsp;</span>
            <span className="text-[#ffffff]">Model faster. Invest with</span>
            <span className="text-black">&nbsp;&nbsp;</span>
            <span className="text-black bg-[#d7ffb1] px-2 py-1 rounded-full">confidence.</span>
          </p>
        </div>
      </div>
    </div>
  );
};
