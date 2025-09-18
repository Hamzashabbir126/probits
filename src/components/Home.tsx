import React from "react";
import { Div } from "./home/Div";
import { DivWrapper } from "./home/DivWrapper";
import { Group } from "./home/Group";
import { Group1 } from "./home/Group1";
import { GroupWrapper } from "./home/GroupWrapper";
import { OverlapGroupWrapper } from "./home/OverlapGroupWrapper";
import { SectionComponentNode } from "./home/SectionComponentNode";
// import { JSX } from "react/jsx-runtime";

export const Home = (): JSX.Element => {
  return (
    <div className="bg-white min-h-screen w-full" data-model-id="132:321">
      {/* Hero Section */}
      <div className="relative w-full">
        <img
          className="w-full h-[400px] sm:h-[600px] md:h-[700px] lg:h-[879px] object-cover"
          alt="Element tiny"
          src="https://c.animaapp.com/mezk8qhiRH69bc/img/23232-333604632-tiny-1.png"
        />
        
        <div className="absolute inset-0 bg-[#26262642]" />
        
        {/* Hero Content */}
        <OverlapGroupWrapper />
        
        {/* Decorative Elements */}
        <img
          className="absolute bottom-10 sm:bottom-16 md:bottom-20 right-0 w-[40%] sm:w-[38%] md:w-[36%] lg:w-[34%] h-auto"
          alt="Group"
          src="https://c.animaapp.com/mezk8qhiRH69bc/img/group-1000004260.png"
        />
      </div>

      {/* Green Banner */}
      <div className="w-full h-auto py-3 sm:py-2 sm:h-[61px] bg-[#5da502] flex flex-wrap sm:flex-nowrap items-center justify-center gap-4 sm:gap-8 px-4 sm:px-8 overflow-hidden">
        <div className="font-medium text-[#d7ffb1] text-base sm:text-lg md:text-xl tracking-[0.40px] leading-[24.0px] whitespace-nowrap">
          Green the planet
        </div>
        <img className="w-6 h-6 sm:w-8 sm:h-8" alt="Fi" src="https://c.animaapp.com/mezk8qhiRH69bc/img/fi-3127084.svg" />
        <div className="font-medium text-[#d7ffb1] text-base sm:text-lg md:text-xl tracking-[0.40px] leading-[24.0px] whitespace-nowrap">
          Cut carbon waste
        </div>
        <img className="w-6 h-6 sm:w-8 sm:h-8" alt="Fi" src="https://c.animaapp.com/mezk8qhiRH69bc/img/fi-3127084.svg" />
        <div className="font-medium text-[#d7ffb1] text-base sm:text-lg md:text-xl tracking-[0.40px] leading-[24.0px] whitespace-nowrap">
          Plan for resilience
        </div>
        <img className="w-6 h-6 sm:w-8 sm:h-8" alt="Fi" src="https://c.animaapp.com/mezk8qhiRH69bc/img/fi-3127084.svg" />
        <div className="font-medium text-[#d7ffb1] text-base sm:text-lg md:text-xl tracking-[0.40px] leading-[24.0px] whitespace-nowrap">
          Value public outcomes
        </div>
        <img className="w-6 h-6 sm:w-8 sm:h-8" alt="Fi" src="https://c.animaapp.com/mezk8qhiRH69bc/img/fi-3127084.svg" />
        <div className="font-medium text-[#d7ffb1] text-base sm:text-lg md:text-xl tracking-[0.40px] leading-[24.0px] whitespace-nowrap">
          Target net zero
        </div>
      </div>

      {/* Main Content Sections */}
      <div className="relative w-full">
        <GroupWrapper />
        
        <div className="relative w-full py-8 sm:py-12 md:py-16">
          <img
            className="absolute left-4 sm:left-6 md:left-8 top-0 w-[50%] sm:w-[45%] md:w-[40%] h-auto"
            alt="Group"
            src="https://c.animaapp.com/mezk8qhiRH69bc/img/group-1000004261.png"
          />
          <Group />
        </div>
      </div>

      {/* Industry Sections */}
      <div className="relative w-full space-y-8 sm:space-y-12 md:space-y-16 py-8 sm:py-12 md:py-16">
        <SectionComponentNode />
        <Div />
        <Group1 />
      </div>

      {/* Bottom Content */}
      <div className="relative w-full">
        <DivWrapper />
        
        {/* Decorative Elements */}
        <img
          className="absolute left-2 sm:left-3 md:left-4 top-4 sm:top-6 md:top-8 w-[20%] sm:w-[18%] md:w-[15%] h-auto"
          alt="Group"
          src="https://c.animaapp.com/mezk8qhiRH69bc/img/group-1000004262.png"
        />
        
        <img
          className="absolute left-[15%] sm:left-[20%] md:left-1/4 bottom-16 sm:bottom-24 md:bottom-32 w-[45%] sm:w-[40%] md:w-[36%] h-auto"
          alt="Group"
          src="https://c.animaapp.com/mezk8qhiRH69bc/img/group-1000004261-1.png"
        />
      </div>
    </div>
  );
};
