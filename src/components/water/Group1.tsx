import React from "react";

export const Group1 = (): JSX.Element => {
  return (
    <div className="relative w-full max-w-6xl mx-auto px-4 py-8 sm:py-12 md:py-16">
      <h2 className="text-center mb-8 sm:mb-12 md:mb-16 [font-family:'Outfit',Helvetica] font-semibold text-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-[0] leading-tight md:leading-[57.6px]">
        Water &amp; Wastewater sector case studies
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {/* Thames Water Case Study */}
        <div className="rounded-[8px] sm:rounded-[10px] md:rounded-[14.76px] overflow-hidden border border-[#eaf0dd] bg-gradient-to-b from-white/40 to-white">
          <img
            className="w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[322px] object-cover rounded-t-[8px] sm:rounded-t-[10px] md:rounded-t-[12.92px]"
            alt="Image"
            src="https://c.animaapp.com/mezjxobfmTWCBj/img/image-15.png"
          />
          
          <div className="p-4 sm:p-6 md:p-8 space-y-2 sm:space-y-3 md:space-y-4">
            <h3 className="[font-family:'Inter',Helvetica] font-normal text-[#1d1f13] text-xs sm:text-sm md:text-[14.8px] tracking-[0] leading-[1.5] sm:leading-[1.8] md:leading-[28.8px]">
              Thames Water: Scenario-led planning for a £5bn, 40-year
              investment strategy
            </h3>

            <p className="[font-family:'Inter',Helvetica] font-normal text-[#1d1f13] text-[10px] sm:text-[11px] md:text-[12.9px] tracking-[-0.26px] leading-[1.5] sm:leading-[1.6] md:leading-[22.1px]">
              AIM enabled Thames Water to model hundreds of investment
              scenarios, helping them build a regulator-ready, asset-level
              investment plan.
            </p>
          </div>
        </div>

        {/* South West Water Case Study */}
        <div className="rounded-[8px] sm:rounded-[10px] md:rounded-[14.76px] overflow-hidden border border-[#eaf0dd] bg-gradient-to-b from-white/40 to-white">
          <img
            className="w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[322px] object-cover rounded-t-[8px] sm:rounded-t-[10px] md:rounded-t-[12.92px]"
            alt="Image"
            src="https://c.animaapp.com/mezjxobfmTWCBj/img/image-15-1.png"
          />
          
          <div className="p-4 sm:p-6 md:p-8 space-y-2 sm:space-y-3 md:space-y-4">
            <h3 className="[font-family:'Inter',Helvetica] font-normal text-[#1d1f13] text-xs sm:text-sm md:text-[14.8px] tracking-[0] leading-[1.5] sm:leading-[1.8] md:leading-[28.8px]">
              South West Water: Optimising above-ground asset investments
              across treatment networks
            </h3>

            <p className="[font-family:'Inter',Helvetica] font-normal text-[#1d1f13] text-[10px] sm:text-[11px] md:text-[12.9px] tracking-[-0.26px] leading-[1.5] sm:leading-[1.6] md:leading-[22.1px]">
              AIM was used to model equipment reliability, system performance,
              and service risk across critical treatment and pumping
              infrastructure.
            </p>
          </div>
        </div>

        {/* Welsh Water Case Study */}
        <div className="rounded-[8px] sm:rounded-[10px] md:rounded-[14.76px] overflow-hidden border border-[#eaf0dd] bg-gradient-to-b from-white/40 to-white">
          <img
            className="w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[322px] object-cover rounded-t-[8px] sm:rounded-t-[10px] md:rounded-t-[12.92px]"
            alt="Image"
            src="https://c.animaapp.com/mezjxobfmTWCBj/img/image-15-2.png"
          />
          
          <div className="p-4 sm:p-6 md:p-8 space-y-2 sm:space-y-3 md:space-y-4">
            <h3 className="[font-family:'Inter',Helvetica] font-normal text-[#1d1f13] text-xs sm:text-sm md:text-[14.8px] tracking-[0] leading-[1.5] sm:leading-[1.8] md:leading-[28.8px]">
              Welsh Water: Asset-level optimisation to meet customer-focused
              regulatory targets
            </h3>

            <p className="[font-family:'Inter',Helvetica] font-normal text-[#1d1f13] text-[10px] sm:text-[11px] md:text-[12.9px] tracking-[-0.26px] leading-[1.5] sm:leading-[1.6] md:leading-[22.1px]">
              By embedding AIM in its planning cycle, Welsh Water linked asset
              risk with customer outcomes under Ofwat's regulatory framework.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
