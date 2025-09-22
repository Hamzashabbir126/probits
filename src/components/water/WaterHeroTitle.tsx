import React from "react";

export const WaterHeroTitle = (): JSX.Element => {
  return (
    <div className="absolute top-20 sm:top-32 md:top-44 left-1/2 transform -translate-x-1/2 w-full max-w-sm sm:max-w-xl md:max-w-2xl px-4">
      <div className="relative h-[160px] sm:h-[200px] md:h-[260px]">
        {/* Decorative background elements - hidden on smallest screens */}
        <div className="hidden sm:block w-[85%] top-0 left-[8%] absolute h-[40px] sm:h-[50px] md:h-[69px] bg-[#d7ffb1] rounded-[25px] sm:rounded-[35px] md:rounded-[49.78px]" />
        <div className="hidden sm:block w-[47%] top-[120px] sm:top-[150px] md:top-[191px] left-[26%] absolute h-[40px] sm:h-[50px] md:h-[69px] bg-[#d7ffb1] rounded-[25px] sm:rounded-[35px] md:rounded-[49.78px]" />

        <div className="flex flex-col w-full h-[160px] sm:h-[200px] md:h-[252px] items-center gap-2 relative">
          <p className="w-full [font-family:'Outfit',Helvetica] font-bold text-[24px] sm:text-[36px] md:text-[52px] text-center tracking-[0] leading-[1.2] sm:leading-[1.2] md:leading-[62.4px]">
            <span className="text-black">Smarter investment </span>
            <span className="text-[#ffffff]">
              planning for complex water and wastewater{" "}
            </span>
            <span className="text-black">networks.</span>
          </p>
        </div>
      </div>
    </div>
  );
};
