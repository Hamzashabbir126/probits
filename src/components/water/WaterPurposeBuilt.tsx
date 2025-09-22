import React from "react";

export const WaterPurposeBuilt = (): JSX.Element => {
  return (
    <div className="relative w-full max-w-6xl mx-auto px-4 py-8 sm:py-12 md:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="relative grid grid-cols-2 gap-2 sm:gap-4 h-auto sm:h-[400px] md:h-[500px] lg:h-[616px]">
          <img
            className="w-full h-[150px] sm:h-[200px] md:h-[275px] object-cover"
            alt="Image"
            src="https://c.animaapp.com/mezjxobfmTWCBj/img/image-1.png"
          />
          <img
            className="w-full h-[150px] sm:h-[200px] md:h-[273px] object-cover mt-4 sm:mt-6 md:mt-10"
            alt="Image"
            src="https://c.animaapp.com/mezjxobfmTWCBj/img/image-2.png"
          />
          <img
            className="w-full h-[150px] sm:h-[200px] md:h-[273px] object-cover"
            alt="Image"
            src="https://c.animaapp.com/mezjxobfmTWCBj/img/image-3.png"
          />
          <img
            className="w-full h-[150px] sm:h-[200px] md:h-[275px] object-cover mt-4 sm:mt-6 md:mt-10"
            alt="Image"
            src="https://c.animaapp.com/mezjxobfmTWCBj/img/image-4.png"
          />
        </div>

        <div className="space-y-4 sm:space-y-6 md:space-y-8">
          <h2 className="[font-family:'Outfit',Helvetica] font-bold text-black text-3xl sm:text-4xl md:text-5xl tracking-[0] leading-tight md:leading-[57.6px]">
            Purpose-built for long-term planning and regulatory alignment
          </h2>
          
          <p className="[font-family:'Outfit',Helvetica] font-normal text-[#1e1e1e] text-sm sm:text-base tracking-[0] leading-5 sm:leading-6">
            AIM is used by leading water utilities to plan and prioritise
            investment across all asset types - from buried distribution networks
            to treatment works. It helps organisations justify funding decisions,
            meet regulatory expectations, and build robust asset strategies that
            align with frameworks such as the Common Framework, DWMP, Asset
            Management Plans, Water Resources Planning, Asset Health, and OFWAT's
            regulatory price review requirements.
            <br />
            <br />
            Instead of relying on static spreadsheets, top down analysis, or even
            rules of thumb, AIM enables precise, scenario-based planning at the
            individual asset level - combining condition, cost, criticality, and
            risk in a unified platform.
          </p>
        </div>
      </div>
    </div>
  );
};
