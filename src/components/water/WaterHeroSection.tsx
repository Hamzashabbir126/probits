import React from "react";

export const WaterHeroSection = (): JSX.Element => {
  return (
    <div className="relative w-full max-w-6xl mx-auto px-4 py-8 sm:py-12 md:py-16">
      {/* Image on mobile appears below text, on desktop appears at right */}
      <div className="block md:hidden w-full max-w-md mx-auto mb-8">
        <img
          className="w-full h-auto rounded-lg"
          alt="Mask group mobile"
          src="https://c.animaapp.com/mezjxobfmTWCBj/img/mask-group.png"
        />
      </div>

      {/* Desktop image (hidden on mobile) */}
      <img
        className="hidden md:block absolute w-[45%] h-[410px] top-0 right-0"
        alt="Mask group"
        src="https://c.animaapp.com/mezjxobfmTWCBj/img/mask-group.png"
      />

      <div className="relative w-full md:w-[50%] max-w-lg">
        <div className="mb-4 sm:mb-6 md:mb-8 [font-family:'Outfit',Helvetica] font-bold text-black text-3xl sm:text-4xl md:text-5xl tracking-[0] leading-tight md:leading-[57.6px]">
          Water &amp; Wastewater
        </div>
        
        <p className="[font-family:'Outfit',Helvetica] font-normal text-[#1e1e1e] text-sm sm:text-base tracking-[0] leading-5 sm:leading-6">
          Water companies face intense and growing pressure. Ageing
          infrastructure, climate-related risks, population growth, and
          increasingly stringent regulation all place new demands on capital
          planning, while customers and regulators expect improved outcomes,
          greater efficiency, and full transparency.
          <br />
          <br />
          The challenge: how to make the most of limited capital and operating
          budgets, while delivering measurable improvements in service,
          resilience, and environmental impact.
          <br />
          <br />
          That's where AIM delivers value.
        </p>
      </div>
    </div>
  );
};
