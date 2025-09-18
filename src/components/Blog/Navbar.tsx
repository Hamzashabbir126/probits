import React from "react";

export const Navbar = () => {
  return (
    <div className="flex w-full h-auto py-3 md:h-[61px] items-center justify-center gap-3 sm:gap-4 md:gap-8 px-2 sm:px-4 md:px-8 absolute top-[250px] sm:top-[300px] md:top-[400px] bg-[#5da502] overflow-hidden">
      <div className="[font-family:'Roboto',Helvetica] font-normal text-[#d7ffb1] text-sm sm:text-base md:text-xl tracking-[0.40px] leading-[24.0px] relative w-fit whitespace-nowrap">
        Green the planet
      </div>

      <img
        className="relative w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8"
        alt="Fi"
        src="https://c.animaapp.com/mez1gtpiAT6jQW/img/fi-3127084.svg"
      />

      <div className="[font-family:'Roboto',Helvetica] font-normal text-[#d7ffb1] text-sm sm:text-base md:text-xl tracking-[0.40px] leading-[24.0px] relative w-fit whitespace-nowrap">
        Cut carbon waste
      </div>

      <img
        className="relative w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8"
        alt="Fi"
        src="https://c.animaapp.com/mez1gtpiAT6jQW/img/fi-3127084.svg"
      />

      <div className="[font-family:'Roboto',Helvetica] font-normal text-[#d7ffb1] text-sm sm:text-base md:text-xl tracking-[0.40px] leading-[24.0px] relative w-fit whitespace-nowrap">
        Plan for resilience
      </div>

      <img
        className="relative w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 hidden sm:block"
        alt="Fi"
        src="https://c.animaapp.com/mez1gtpiAT6jQW/img/fi-3127084.svg"
      />

      <div className="[font-family:'Roboto',Helvetica] font-normal text-[#d7ffb1] text-sm sm:text-base md:text-xl tracking-[0.40px] leading-[24.0px] relative w-fit whitespace-nowrap hidden sm:block">
        Value public outcomes
      </div>

      <img
        className="relative w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 hidden md:block"
        alt="Fi"
        src="https://c.animaapp.com/mez1gtpiAT6jQW/img/fi-3127084.svg"
      />

      <div className="[font-family:'Roboto',Helvetica] font-normal text-[#d7ffb1] text-sm sm:text-base md:text-xl tracking-[0.40px] leading-[24.0px] relative w-fit whitespace-nowrap hidden md:block">
        Target net zero
      </div>

      <img
        className="relative w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 hidden md:block"
        alt="Fi"
        src="https://c.animaapp.com/mez1gtpiAT6jQW/img/fi-3127084.svg"
      />

      <div className="relative w-fit mr-[-16px] sm:mr-[-24px] md:mr-[-32.00px] [font-family:'Roboto',Helvetica] font-normal text-[#d7ffb1] text-sm sm:text-base md:text-xl tracking-[0.40px] leading-[24.0px] whitespace-nowrap hidden md:block">
        Embed climate thinking
      </div>
    </div>
  );
};
