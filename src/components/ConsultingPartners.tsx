import React from "react";
import { Div } from "./ConsultingPartners/Div";
import { DivWrapper } from "./ConsultingPartners/DivWrapper";
import { Group } from "./ConsultingPartners/Group";
import { Group1 } from "./ConsultingPartners/Group1";
import { GroupWrapper } from "./ConsultingPartners/GroupWrapper";
import { Navbar } from "./ConsultingPartners/Navbar";
import { OverlapWrapper } from "./ConsultingPartners/OverlapWrapper";
import { SectionComponentNode } from "./ConsultingPartners/SectionComponentNode";
import { Group2 } from "./ConsultingPartners/Group2";
import { AIMInConsulting } from "./ConsultingPartners/AIMInConsulting";

export const ConsultingPartners = () => {
  return (
    <div className="bg-[#ffffff] w-full min-h-screen">
      {/* Hero Section */}
      <div className="relative w-full h-[300px] sm:h-[400px] md:h-[526px]">
      <img
          className="w-full h-full object-cover"
          alt="Patrick hendry"
          src="https://c.animaapp.com/mezk8qhiRH69bc/img/23232-333604632-tiny-1.png"
        />
        <div className="absolute inset-0 bg-[#26262642]" />
        
       

        {/* Main Title */}
        <div className="absolute w-[90%] sm:w-[80%] md:w-full max-w-[562px] top-[100px] sm:top-[150px] md:top-[212px] left-1/2 transform -translate-x-1/2">
          <div className="w-full h-[45px] sm:h-[55px] md:h-[69px]">
            <div className="relative w-full h-[45px] sm:h-[55px] md:h-[69px] bg-[#d7ffb1] rounded-[30px] sm:rounded-[40px] md:rounded-[49.78px]">
              <div className="absolute w-full h-[40px] sm:h-[50px] md:h-[62px] top-1 left-1 sm:left-2 md:left-3 [font-family:'Outfit',Helvetica] font-bold text-[#000000] text-[24px] sm:text-[36px] md:text-[52px] text-center tracking-[0] leading-[1.2] sm:leading-[1.2] md:leading-[62.4px]">
                Consulting Partners
              </div>
            </div>
          </div>
        </div>

        {/* Group Component */}
        <Group />
      </div>

      {/* Navigation Bar */}
      <div className="w-full h-[61px] bg-[#5da502] overflow-x-auto overflow-y-hidden hidden md:block">
        <div className="flex w-max md:w-full h-full items-center justify-start md:justify-center gap-4 md:gap-8 px-4 md:px-8 py-0">
          <div className="[font-family:'Roboto',Helvetica] font-normal text-[#d7ffb1] text-xl tracking-[0.40px] leading-[24.0px] relative w-fit whitespace-nowrap">
            Green the planet
          </div>

          <img
            className="relative w-8 h-8"
            alt="Fi"
            src="https://c.animaapp.com/mex1vqwcVI8Lk7/img/fi-3127084.svg"
          />

          <div className="[font-family:'Roboto',Helvetica] font-normal text-[#d7ffb1] text-xl tracking-[0.40px] leading-[24.0px] relative w-fit whitespace-nowrap">
            Cut carbon waste
          </div>

          <img
            className="relative w-8 h-8"
            alt="Fi"
            src="https://c.animaapp.com/mex1vqwcVI8Lk7/img/fi-3127084.svg"
          />

          <div className="[font-family:'Roboto',Helvetica] font-normal text-[#d7ffb1] text-xl tracking-[0.40px] leading-[24.0px] relative w-fit whitespace-nowrap">
            Plan for resilience
          </div>

          <img
            className="relative w-8 h-8"
            alt="Fi"
            src="https://c.animaapp.com/mex1vqwcVI8Lk7/img/fi-3127084.svg"
          />

          <div className="[font-family:'Roboto',Helvetica] font-normal text-[#d7ffb1] text-xl tracking-[0.40px] leading-[24.0px] relative w-fit whitespace-nowrap">
            Value public outcomes
          </div>

          <img
            className="relative w-8 h-8"
            alt="Fi"
            src="https://c.animaapp.com/mex1vqwcVI8Lk7/img/fi-3127084.svg"
          />

          <div className="[font-family:'Roboto',Helvetica] font-normal text-[#d7ffb1] text-xl tracking-[0.40px] leading-[24.0px] relative w-fit whitespace-nowrap">
            Target net zero
          </div>

          <img
            className="relative w-8 h-8"
            alt="Fi"
            src="https://c.animaapp.com/mex1vqwcVI8Lk7/img/fi-3127084.svg"
          />

          <div className="relative w-fit mr-[-32.00px] [font-family:'Roboto',Helvetica] font-normal text-[#d7ffb1] text-xl tracking-[0.40px] leading-[24.0px] whitespace-nowrap">
            Embed climate thinking
          </div>
        </div>
      </div>

      {/* Main Content Sections - Reordered according to requirements */}
      <div className="w-full">
        {/* 1. AIM in Consulting (heading) */}
        <AIMInConsulting />

        {/* 2. Using AIM to deliver for your clients */}
        <Div />
        
        {/* 3. Decorative Section */}
        <img
          className="w-full h-[100px] sm:h-[140px] md:h-[188px] object-cover"
          alt="Section"
          src="https://c.animaapp.com/mezjxobfmTWCBj/img/section.svg"
        />
        
        {/* 4. AIM. A robust competitive advantage in consulting. */}
        <SectionComponentNode />
        
        {/* 5. Testimonial Section */}
        <OverlapWrapper />
        
        {/* 6. How Probit supports you. */}
        <Group1 />
        
       
        
        {/* 8. Interested in using AIM? */}
        <DivWrapper />
      </div>
    </div>
  );
};