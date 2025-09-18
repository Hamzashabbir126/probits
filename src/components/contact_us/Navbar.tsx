import React from "react";

export const Navbar = (): JSX.Element => {
  return (
    <div className="flex flex-wrap w-full min-h-[61px] items-center justify-center gap-4 sm:gap-6 md:gap-8 px-4 sm:px-8 py-2 sm:py-0 absolute bottom-0 left-0 bg-[#5da502] overflow-hidden">
      <div className="[font-family:'Roboto',Helvetica] text-[#d7ffb1] text-sm sm:text-base md:text-xl tracking-[0.40px] leading-[24.0px] font-medium whitespace-nowrap">
        Green the planet
      </div>

      <img
        className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8"
        alt="Fi"
        src="https://c.animaapp.com/mevifcqqDZ3T8r/img/fi-3127084.svg"
      />

      <div className="[font-family:'Roboto',Helvetica] text-[#d7ffb1] text-sm sm:text-base md:text-xl tracking-[0.40px] leading-[24.0px] font-medium whitespace-nowrap">
        Cut carbon waste
      </div>

      <img
        className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8"
        alt="Fi"
        src="https://c.animaapp.com/mevifcqqDZ3T8r/img/fi-3127084.svg"
      />

      <div className="[font-family:'Roboto',Helvetica] text-[#d7ffb1] text-sm sm:text-base md:text-xl tracking-[0.40px] leading-[24.0px] font-medium whitespace-nowrap">
        Plan for resilience
      </div>

      <img
        className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8"
        alt="Fi"
        src="https://c.animaapp.com/mevifcqqDZ3T8r/img/fi-3127084.svg"
      />

      <div className="[font-family:'Roboto',Helvetica] text-[#d7ffb1] text-sm sm:text-base md:text-xl tracking-[0.40px] leading-[24.0px] font-medium whitespace-nowrap">
        Value public outcomes
      </div>

      <img
        className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8"
        alt="Fi"
        src="https://c.animaapp.com/mevifcqqDZ3T8r/img/fi-3127084.svg"
      />

      <div className="[font-family:'Roboto',Helvetica] text-[#d7ffb1] text-sm sm:text-base md:text-xl tracking-[0.40px] leading-[24.0px] font-medium whitespace-nowrap">
        Target net zero
      </div>

      <img
        className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8"
        alt="Fi"
        src="https://c.animaapp.com/mevifcqqDZ3T8r/img/fi-3127084.svg"
      />

      <div className="[font-family:'Roboto',Helvetica] font-medium text-[#d7ffb1] text-sm sm:text-base md:text-xl tracking-[0.40px] leading-[24.0px] whitespace-nowrap">
        Embed climate thinking
      </div>
    </div>
  );
};
