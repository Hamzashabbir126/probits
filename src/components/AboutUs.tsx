import React from "react";
import { DivMain } from "./about/Div";
import { DivWrapper } from "./about/DivWrapper";
import { Group } from "./about/Group";
import { Group1 } from "./about/Group1";
import { Group2 } from "./about/Group2";
import { GroupWrapper } from "./about/GroupWrapper";
import { Helping } from "./about/Helping";
import { SectionComponentNode } from "./about/SectionComponentNode";

export const AboutUs = () => {
  return (
    <div className="bg-[#ffffff] w-full min-h-screen">
      {/* Hero */}
      <div className="relative w-full h-[300px] sm:h-[400px] md:h-[526px]">
        <img
          className="w-full h-full object-cover"
          alt="Patrick hendry"
          src="https://c.animaapp.com/mewzloz6gWYaG0/img/patrick-hendry-6xedizgopaw-unsplash-1.png"
        />
        <div className="absolute inset-0 bg-[#26262642]" />
        
        <div className="absolute inset-0 flex items-center justify-center px-4">
        <div className="absolute top-1/4 sm:top-1/3 md:top-44 left-1/2 transform -translate-x-1/2 w-full max-w-xs sm:max-w-xl md:max-w-2xl px-4">
      <div className="relative h-[180px] sm:h-[220px] md:h-[260px]">
        <div className="w-[85%] top-0 left-[8%] absolute h-[40px] sm:h-[55px] md:h-[69px] bg-[#d7ffb1] rounded-[49.78px]" />
        <div className="w-[47%] top-[130px] sm:top-[160px] md:top-[191px] left-[26%] absolute h-[40px] sm:h-[55px] md:h-[69px] bg-[#d7ffb1] rounded-[49.78px]" />

        <div className="flex flex-col w-full h-[170px] sm:h-[210px] md:h-[252px] items-center gap-2 relative">
          <p className="w-full [font-family:'Outfit',Helvetica] font-bold text-[28px] sm:text-[40px] md:text-[52px] text-center tracking-[0] leading-[1.2]">
            <span className="text-black">Helping infrastructure </span>
            <span className="text-[#ffffff]">
               organizations make better <br className="hidden xs:inline" />long-term{" "} <br />
            </span>
            <span className="text-black"> decisions.</span>
          </p>
        </div>
      </div>
    </div>
        </div>
      </div>

      {/* Ribbon */}
      <div className="w-full min-h-[61px] bg-[#5da502] overflow-hidden py-2 sm:py-0">
        <div className="flex flex-wrap w-full h-full items-center justify-center gap-4 sm:gap-6 md:gap-8 px-4 sm:px-8">
          <div className="[font-family:'Roboto',Helvetica] text-[#d7ffb1] text-sm sm:text-base md:text-xl">Green the planet</div>
          <img className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" alt="Fi" src="https://c.animaapp.com/mewzloz6gWYaG0/img/fi-3127084.svg" />
          <div className="[font-family:'Roboto',Helvetica] text-[#d7ffb1] text-sm sm:text-base md:text-xl">Cut carbon waste</div>
          <img className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" alt="Fi" src="https://c.animaapp.com/mewzloz6gWYaG0/img/fi-3127084.svg" />
          <div className="[font-family:'Roboto',Helvetica] text-[#d7ffb1] text-sm sm:text-base md:text-xl">Plan for resilience</div>
          <img className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" alt="Fi" src="https://c.animaapp.com/mewzloz6gWYaG0/img/fi-3127084.svg" />
          <div className="[font-family:'Roboto',Helvetica] text-[#d7ffb1] text-sm sm:text-base md:text-xl">Value public outcomes</div>
          <img className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" alt="Fi" src="https://c.animaapp.com/mewzloz6gWYaG0/img/fi-3127084.svg" />
          <div className="[font-family:'Roboto',Helvetica] text-[#d7ffb1] text-sm sm:text-base md:text-xl">Target net zero</div>
        </div>
      </div>

      {/* Flowing sections */}
      <div className="w-full">
        {/* About us overview (light gray) */}
        <div className="w-full bg-neutral-100 py-8 sm:py-12 md:py-16 px-4">
          <Group />
        </div>
     <div className="h-[50px] sm:h-[75px] md:h-[100px]"></div>
        {/* Decorative separator */}
        <img className="w-full top-[100px] h-[100px] sm:h-[140px] md:h-[188px] object-cover" alt="Section" src="https://c.animaapp.com/mezjxobfmTWCBj/img/section.svg" />

        {/* Building a better way */}
        <div className="relative w-full py-8 sm:py-12 md:py-16 px-4">
          <DivWrapper />
        </div>

        {/* Team with heading */}
        <div className="w-full py-8 sm:py-12 md:py-16 px-4">
          <div className="w-full max-w-[300px] sm:max-w-[450px] md:max-w-[562px] mx-auto text-center mb-4 sm:mb-6 md:mb-8">
            <div className="[font-family:'Outfit',Helvetica] font-bold text-black text-3xl sm:text-4xl md:text-5xl leading-[1.2] sm:leading-[1.2] md:leading-[57.6px]">
              Unrivalled experience in
              <br />
              asset analytics.
            </div>
          </div>
          <GroupWrapper />
        </div>

        {/* Mission block */}
        <div className="w-full bg-[#5da502] rounded-[10px] py-8 sm:py-12 md:py-16">
          <DivMain />
        </div>

        {/* Principles */}
        <SectionComponentNode />

        {/* Working with us */}
        <Group2 />
        <img
          className="relative w-[90%] sm:w-[80%] md:w-[70%] mx-auto h-[200px] sm:h-[300px] md:h-[395px] object-contain"
          alt="Group"
          src="https://c.animaapp.com/mewzloz6gWYaG0/img/group-1000004965.png"
        />

      </div>
    </div>
  );
};
