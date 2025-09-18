import React from "react";


export const Navbar = (): JSX.Element => {
  return (
    <div className="flex w-full h-[61px] items-center justify-start md:justify-center overflow-x-auto gap-4 md:gap-8 px-4 md:px-8 py-0 absolute top-[300px] sm:top-[350px] md:top-[425px] bg-[#5da502] overflow-hidden hidden md:flex">
      <div className="md:ml-[-81.00px] [font-family:'Roboto',Helvetica] text-[#d7ffb1] text-base sm:text-lg md:text-xl tracking-[0.40px] leading-[24.0px] relative w-fit font-medium whitespace-nowrap">
        Green the planet
      </div>

      <img
        className="relative w-6 h-6 md:w-8 md:h-8"
        alt="Fi"
        src="https://c.animaapp.com/mevifcqqDZ3T8r/img/fi-3127084.svg"
      />

      <div className="[font-family:'Roboto',Helvetica] text-[#d7ffb1] text-base sm:text-lg md:text-xl tracking-[0.40px] leading-[24.0px] relative w-fit font-medium whitespace-nowrap">
        Cut carbon waste
      </div>

      <img
        className="relative w-6 h-6 md:w-8 md:h-8"
        alt="Fi"
        src="https://c.animaapp.com/mevifcqqDZ3T8r/img/fi-3127084.svg"
      />

      <div className="[font-family:'Roboto',Helvetica] text-[#d7ffb1] text-base sm:text-lg md:text-xl tracking-[0.40px] leading-[24.0px] relative w-fit font-medium whitespace-nowrap">
        Plan for resilience
      </div>

      <img
        className="relative w-6 h-6 md:w-8 md:h-8"
        alt="Fi"
        src="https://c.animaapp.com/mevifcqqDZ3T8r/img/fi-3127084.svg"
      />

      <div className="[font-family:'Roboto',Helvetica] text-[#d7ffb1] text-base sm:text-lg md:text-xl tracking-[0.40px] leading-[24.0px] relative w-fit font-medium whitespace-nowrap">
        Value public outcomes
      </div>

      <img
        className="relative w-6 h-6 md:w-8 md:h-8"
        alt="Fi"
        src="https://c.animaapp.com/mevifcqqDZ3T8r/img/fi-3127084.svg"
      />

      <div className="[font-family:'Roboto',Helvetica] text-[#d7ffb1] text-base sm:text-lg md:text-xl tracking-[0.40px] leading-[24.0px] relative w-fit font-medium whitespace-nowrap">
        Target net zero
      </div>

      <img
        className="relative w-6 h-6 md:w-8 md:h-8"
        alt="Fi"
        src="https://c.animaapp.com/mevifcqqDZ3T8r/img/fi-3127084.svg"
      />

      <div className="relative w-fit md:mr-[-32.00px] [font-family:'Roboto',Helvetica] font-medium text-[#d7ffb1] text-base sm:text-lg md:text-xl tracking-[0.40px] leading-[24.0px] whitespace-nowrap">
        Embed climate thinking
      </div>
    </div>
  );
};
