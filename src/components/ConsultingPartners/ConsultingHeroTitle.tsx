import React from "react";

export const ConsultingHeroTitle = () => {
  return (
    <div className="absolute w-[90%] sm:w-[80%] md:w-[550px] h-[100px] sm:h-[120px] md:h-[146px] top-[140px] sm:top-[170px] md:top-[221px] left-1/2 transform -translate-x-1/2">
      <div className="w-full h-full">
        <div className="relative w-full h-full">
          <div className="absolute w-full h-[40px] sm:h-[55px] md:h-[69px] top-1 left-0 bg-[#d7ffb1] rounded-[30px] sm:rounded-[40px] md:rounded-[49.78px]" />

          <p className="absolute h-full top-0 left-0 sm:left-[40px] md:left-[78px] [font-family:'Outfit',Helvetica] font-normal text-transparent text-[28px] sm:text-[40px] md:text-[52px] text-center tracking-[0] leading-[1.2] sm:leading-[1.2] md:leading-[52px]">
            <span className="font-bold text-black leading-[0.1px]">
              Deliver More for
              <br />
            </span>

            <span className="font-bold text-[#ffffff] leading-[1.2] sm:leading-[1.3] md:leading-[72.8px]">
              {" "}
              Your Clients.{" "}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};
