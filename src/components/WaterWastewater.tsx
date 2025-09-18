import React from "react";
import { Div } from "./water/Div";
import { DivWrapper } from "./water/DivWrapper";
import { Frame } from "./water/frame";
import { Group } from "./water/Group";
import { Group1 } from "./water/Group1";
import { GroupWrapper } from "./water/GroupWrapper";
import { OverlapGroupWrapper } from "./water/OverlapGroupWrapper";
import { SectionComponentNode } from "./water/SectionComponentNode";

export const WaterWastewater = (): JSX.Element => {
  return (
    <div
      className="bg-[#ffffff] w-full min-h-screen"
      data-model-id="179:462"
    >
      <div className="bg-[#ffffff] overflow-hidden w-full relative">
        {/* Hero Section */}
        <div className="relative w-full h-[300px] sm:h-[400px] md:h-[526px] bg-cover bg-center">
          <img
            className="w-full h-[280px] sm:h-[380px] md:h-[505px] object-cover"
            alt="Element tiny"
            src="https://c.animaapp.com/mezjxobfmTWCBj/img/23232-333604632-tiny-1.png"
          />

          <div className="absolute inset-0 bg-[#26262642]" />

          <OverlapGroupWrapper />
        </div>

        {/* Green Banner */}
        <div className="flex flex-wrap w-full min-h-[61px] items-center justify-center gap-4 sm:gap-6 md:gap-8 px-4 sm:px-8 py-2 sm:py-0 bg-[#5da502] overflow-hidden">
          <div className="[font-family:'Roboto',Helvetica] text-[#d7ffb1] text-sm sm:text-base md:text-xl tracking-[0.40px] leading-[24.0px] font-medium whitespace-nowrap">
            Green the planet
          </div>
          <img
            className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8"
            alt="Fi"
            src="https://c.animaapp.com/mezjxobfmTWCBj/img/fi-3127084.svg"
          />
          <div className="[font-family:'Roboto',Helvetica] text-[#d7ffb1] text-sm sm:text-base md:text-xl tracking-[0.40px] leading-[24.0px] font-medium whitespace-nowrap">
            Cut carbon waste
          </div>
          <img
            className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8"
            alt="Fi"
            src="https://c.animaapp.com/mezjxobfmTWCBj/img/fi-3127084.svg"
          />
          <div className="[font-family:'Roboto',Helvetica] text-[#d7ffb1] text-sm sm:text-base md:text-xl tracking-[0.40px] leading-[24.0px] font-medium whitespace-nowrap">
            Plan for resilience
          </div>
          <img
            className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8"
            alt="Fi"
            src="https://c.animaapp.com/mezjxobfmTWCBj/img/fi-3127084.svg"
          />
          <div className="[font-family:'Roboto',Helvetica] text-[#d7ffb1] text-sm sm:text-base md:text-xl tracking-[0.40px] leading-[24.0px] font-medium whitespace-nowrap">
            Value public outcomes
          </div>
          <img
            className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8"
            alt="Fi"
            src="https://c.animaapp.com/mezjxobfmTWCBj/img/fi-3127084.svg"
          />
          <div className="[font-family:'Roboto',Helvetica] text-[#d7ffb1] text-sm sm:text-base md:text-xl tracking-[0.40px] leading-[24.0px] font-medium whitespace-nowrap">
            Target net zero
          </div>
          <img
            className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8"
            alt="Fi"
            src="https://c.animaapp.com/mezjxobfmTWCBj/img/fi-3127084.svg"
          />
          <div className="[font-family:'Roboto',Helvetica] font-medium text-[#d7ffb1] text-sm sm:text-base md:text-xl tracking-[0.40px] leading-[24.0px] whitespace-nowrap">
            Embed climate thinking
          </div>
        </div>

        {/* Main Content Section */}
        <div className="relative w-full py-8 sm:py-12 md:py-16 bg-neutral-100">
          <img
            className="absolute w-48 sm:w-64 md:w-80 h-auto sm:h-[400px] md:h-[537px] top-5 right-[5%] md:right-[10%] opacity-70 sm:opacity-100"
            alt="Group"
            src="https://c.animaapp.com/mezjxobfmTWCBj/img/group-1000004260.png"
          />
          <Group />
        </div>

        {/* Decorative Section */}
        <img
          className="w-full h-[100px] sm:h-[140px] md:h-[188px] object-cover"
          alt="Section"
          src="https://c.animaapp.com/mezjxobfmTWCBj/img/section.svg"
        />

        <SectionComponentNode />

        {/* Features Section */}
        <div className="relative w-full py-8 sm:py-12 md:py-16 bg-[#dfffb6]">
          <DivWrapper />
        </div>

        {/* Testimonial Section */}
        <div className="relative w-full py-8 sm:py-12 md:py-16">
          <div className="w-full h-full bg-[#5da502] rounded-[10px]">
            <Div />
          </div>
        </div>

        {/* Case Studies Section */}
        <div className="relative w-full py-8 sm:py-12 md:py-16">
          <img
            className="absolute w-[30%] sm:w-[35%] md:w-[40%] h-auto sm:h-[140px] md:h-[179px] bottom-0 right-[5%] sm:right-[10%] opacity-70 sm:opacity-100"
            alt="Group"
            src="https://c.animaapp.com/mezjxobfmTWCBj/img/group-1000004275.png"
          />
          <GroupWrapper />
        </div>

        <Frame />
        <Group1 />
      </div>
    </div>
  );
};

