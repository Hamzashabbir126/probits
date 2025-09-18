import React from "react";

export const GroupWrapper = (): JSX.Element => {
  return (
    <div className="relative w-full max-w-6xl mx-auto px-4 py-8 sm:py-12 md:py-16 space-y-8 sm:space-y-12 md:space-y-16">
      {/* First Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center">
        <div className="space-y-4 sm:space-y-6">
          <h2 className="[font-family:'Outfit',Helvetica] font-bold text-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-[0] leading-tight md:leading-[57.6px]">
            In use: Planning across the full asset base
          </h2>
          
          <p className="[font-family:'Outfit',Helvetica] font-normal text-[#1e1e1e] text-sm sm:text-base tracking-[0] leading-5 sm:leading-6">
            From water mains to pumping stations, AIM helps planners
            understand when, where, and how to invest. Teams use it to
            develop long-term plans, stress-test scenarios, and ensure that
            investment aligns with customer outcomes and regulatory drivers.
            <br />
            <br />
            Utilities like Thames Water and South West Water have embedded
            AIM into their business-as-usual planning cycle using it to,
            amongst other applications, build AMP7 and AMP8 investment
            plans, and manage trunk main renewal programmes.
          </p>
        </div>

        <img
          className="w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[410px] object-cover rounded-lg"
          alt="Mask group"
          src="https://c.animaapp.com/mezjxobfmTWCBj/img/mask-group-1.png"
        />
      </div>

      {/* Second Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center">
        <img
          className="w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[410px] object-cover rounded-lg order-last lg:order-first"
          alt="Mask group"
          src="https://c.animaapp.com/mezjxobfmTWCBj/img/mask-group-2.png"
        />

        <div className="space-y-4 sm:space-y-6">
          <h2 className="[font-family:'Outfit',Helvetica] font-bold text-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-[0] leading-tight md:leading-[57.6px]">
            AIM enables
          </h2>

          <div className="space-y-4 sm:space-y-6">
            <p className="[font-family:'Outfit',Helvetica] font-semibold text-[#1e1e1e] text-sm sm:text-base tracking-[0] leading-5 sm:leading-6">
              Confident investment planning under uncertainty
              <br />
              Clear, evidence-based decision-making
              <br />
              Improved resilience and reduced risk exposure
              <br />
              Better outcomes at lower whole-life cost
            </p>

            <p className="[font-family:'Outfit',Helvetica] font-normal text-[#1e1e1e] text-sm sm:text-base tracking-[0] leading-5 sm:leading-6">
              Whether you're building your business plan, defending it to
              stakeholders, or delivering it in practice - AIM gives you the
              insight and control to do it better
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
