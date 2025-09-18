import React from "react";
import { MakeOurWorld } from "./Blog/MakeOurWorld";
import { MakeOurWorldWrapper } from "./Blog/MakeOurWorldWrapper";
import { OverlapGroupWrapper } from "./Blog/OverlapGroupWrapper";
import { OverlapWrapper } from "./Blog/OverlapWrapper";

export const Blog = () => {
  return (
    <div
      className="bg-[#ffffff] w-full min-h-screen pt-14 sm:pt-0 overflow-x-hidden"
      data-model-id="248:467"
    >
      <div className="bg-[#ffffff] w-full relative">
        {/* Hero section with background image */}
        <div className="w-full h-[280px] sm:h-[350px] md:h-[430px] relative">
          <img
            className="w-full h-full left-0 right-0 absolute object-cover"
            alt="Patrick hendry"
            src="https://c.animaapp.com/mezk8qhiRH69bc/img/23232-333604632-tiny-1.png"
          />

          <div className="absolute w-full h-full top-0 left-0 right-0 bg-[#26262642]" />

          <div className="absolute w-[90%] sm:w-[80%] md:w-full max-w-[562px] h-auto sm:h-[69px] top-[50%] sm:top-[50%] md:top-[212px] left-[50%] transform -translate-x-1/2 -translate-y-1/2 md:translate-y-0">
            <div className="w-full h-auto sm:h-[69px]">
              <div className="relative w-full h-[50px] sm:h-[60px] md:h-[69px] bg-[#d7ffb1] rounded-[30px] sm:rounded-[40px] md:rounded-[49.78px]">
                <div className="absolute w-full h-full flex items-center justify-center [font-family:'Outfit',Helvetica] font-bold text-[#000000] text-[28px] sm:text-[40px] md:text-[52px] text-center tracking-[0] leading-[1.2] md:leading-[62.4px]">
                  Our Blog
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navbar ribbon (flowing) */}
        <div className="w-full h-auto py-3 md:h-[61px] bg-[#5da502] overflow-hidden">
          <div className="flex flex-wrap w-full h-full items-center justify-center gap-3 sm:gap-4 md:gap-8 px-2 sm:px-4 md:px-8 py-0">
            <div className="[font-family:'Roboto',Helvetica] font-normal text-[#d7ffb1] text-sm sm:text-base md:text-xl">Green the planet</div>
            <img className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" alt="Fi" src="https://c.animaapp.com/mez1gtpiAT6jQW/img/fi-3127084.svg" />
            <div className="[font-family:'Roboto',Helvetica] font-normal text-[#d7ffb1] text-sm sm:text-base md:text-xl">Cut carbon waste</div>
            <img className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" alt="Fi" src="https://c.animaapp.com/mez1gtpiAT6jQW/img/fi-3127084.svg" />
            <div className="[font-family:'Roboto',Helvetica] font-normal text-[#d7ffb1] text-sm sm:text-base md:text-xl">Plan for resilience</div>
            <img className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 hidden sm:block" alt="Fi" src="https://c.animaapp.com/mez1gtpiAT6jQW/img/fi-3127084.svg" />
            <div className="[font-family:'Roboto',Helvetica] font-normal text-[#d7ffb1] text-sm sm:text-base md:text-xl hidden sm:block">Value public outcomes</div>
            <img className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 hidden md:block" alt="Fi" src="https://c.animaapp.com/mez1gtpiAT6jQW/img/fi-3127084.svg" />
            <div className="[font-family:'Roboto',Helvetica] font-normal text-[#d7ffb1] text-sm sm:text-base md:text-xl hidden md:block">Target net zero</div>
          </div>
        </div>

        {/* Content Container */}
        <div className="w-full max-w-[1920px] mx-auto">
          {/* Search Bar */}
          <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 py-4 sm:py-6 md:py-8">
            <OverlapGroupWrapper />
          </div>

          {/* Featured + Recent */}
          <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 py-4 sm:py-6 md:py-8">
            <OverlapWrapper />
          </div>

          {/* Category 1 */}
          <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 py-4 sm:py-6 md:py-8">
            <MakeOurWorld />
          </div>

          {/* Category 2 */}
          <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 py-4 sm:py-6 md:py-8">
            <MakeOurWorldWrapper />
          </div>
        </div>
      </div>
    </div>
  );
};
