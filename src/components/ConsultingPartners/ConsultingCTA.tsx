import React from "react";
import { ArrowButton } from "../ui";

export const ConsultingCTA = () => {
  return (
    <div className="w-full">
      {/* CTA Section */}
      <div className="w-full bg-[#dfffb6] py-8 sm:py-12 md:py-16">
        <div className="max-w-[800px] mx-auto px-4 text-center">
          <h2 className="[font-family:'Outfit',Helvetica] font-normal text-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center tracking-[0] leading-[1.2] sm:leading-[1.3] md:leading-[1.3] lg:leading-[57.6px] mb-4 sm:mb-5 md:mb-6 lg:mb-8">
            Interested in using AIM?
          </h2>
          <p className="[font-family:'Outfit',Helvetica] font-normal text-[#1e1e1e] text-sm sm:text-base text-center tracking-[0] leading-5 sm:leading-6 mb-6 sm:mb-7 md:mb-8">
            Get in touch. There's no formal partnership process - just a
            powerful platform, a proven support model, and the shared
            objective of better decisions for infrastructure owners.
          </p>
          <ArrowButton onClick={() => console.log("View Details Clicked")}>LET'S TALK</ArrowButton>
                 
        </div>
      </div>
    </div>
  );
};
