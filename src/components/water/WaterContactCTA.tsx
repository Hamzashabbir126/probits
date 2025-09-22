import React from "react";
import { ArrowButton } from "../ui";

export const WaterContactCTA = (): JSX.Element => {
  return (
    <div className="w-full py-8 sm:py-16 md:py-24 bg-[#dfffb6]">
      <div className="relative w-full max-w-4xl mx-auto px-4 text-center">
        <div className="space-y-4 sm:space-y-6 md:space-y-8 mb-6 sm:mb-8 md:mb-12">
          <h2 className="[font-family:'Outfit',Helvetica] font-semibold text-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-[0] leading-tight md:leading-[57.6px]">
            Get in touch
          </h2>

          <p className="[font-family:'Outfit',Helvetica] font-normal text-[#1e1e1e] text-sm sm:text-base tracking-[0] leading-5 sm:leading-6 max-w-2xl mx-auto">
            If you are a Water / Wastewater asset owner, or a consulting firm
            advising the sector on asset value optimisation and investment
            strategy, let us show you the difference AIM could make.
          </p>
        </div>

     <ArrowButton onClick={() => console.log("View Details Clicked")}>LET'S TALK</ArrowButton>
         
      </div>
    </div>
  );
};
