import React from "react";

export const DivWrapper = (): JSX.Element => {
  return (
    <div className="relative w-full max-w-6xl mx-auto px-4 py-8 sm:py-12 md:py-16">
      <h2 className="text-center mb-8 sm:mb-12 md:mb-16 [font-family:'Outfit',Helvetica] font-bold text-black text-3xl sm:text-4xl md:text-5xl tracking-[0] leading-tight md:leading-[57.6px]">
        How AIM supports the water and wastewater sector
      </h2>

      <div className="space-y-8 sm:space-y-12 md:space-y-16">
        {/* First Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          <div className="flex gap-3 sm:gap-4">
            <img
              className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-[38px] flex-shrink-0"
              alt="Preferences circle"
              src="https://c.animaapp.com/mezjxobfmTWCBj/img/preferences-circle.png"
            />
            <div>
              <div className="mb-2 sm:mb-3 md:mb-4 [font-family:'Outfit',Helvetica] font-normal text-[#161c2d] text-lg sm:text-xl md:text-[21.7px] tracking-[-0.52px] leading-tight md:leading-[33.0px]">
                Optimises asset interventions
              </div>
              <p className="[font-family:'Outfit',Helvetica] font-normal text-[#1e1e1e] text-sm sm:text-base tracking-[0] leading-5 sm:leading-6">
                to reduce service failures, leakage, pollution, and environmental
                risk
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <img
              className="w-[38px] h-[38px] flex-shrink-0"
              alt="Ic shopping cart"
              src="https://c.animaapp.com/mezjxobfmTWCBj/img/ic-shopping-cart-48px.png"
            />
            <div>
              <div className="mb-4 [font-family:'Outfit',Helvetica] font-normal text-[#161c2d] text-[21.7px] tracking-[-0.52px] leading-[33.0px]">
                Models long-term investment
              </div>
              <p className="[font-family:'Outfit',Helvetica] font-normal text-[#1e1e1e] text-base tracking-[0] leading-6">
                needs under varying budgets, policies, and performance constraints
                and scenarios
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <img
              className="w-[39px] h-[29px] flex-shrink-0 mt-2"
              alt="Coupon"
              src="https://c.animaapp.com/mezjxobfmTWCBj/img/coupon.png"
            />
            <div>
              <div className="mb-4 [font-family:'Outfit',Helvetica] font-normal text-[#161c2d] text-[21.7px] tracking-[-0.52px] leading-[33.0px]">
                Builds regulator-ready
              </div>
              <p className="[font-family:'Outfit',Helvetica] font-normal text-[#1e1e1e] text-base tracking-[0] leading-6">
                business plans with full transparency, traceability, and
                justifiable assumptions
              </p>
            </div>
          </div>
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex gap-4">
            <img
              className="w-9 h-[38px] flex-shrink-0"
              alt="Ic layers"
              src="https://c.animaapp.com/mezjxobfmTWCBj/img/ic-layers-48px.png"
            />
            <div>
              <div className="mb-4 [font-family:'Outfit',Helvetica] font-normal text-[#161c2d] text-[21.7px] tracking-[-0.52px] leading-[33.0px]">
                Quantifies risk and value
              </div>
              <p className="[font-family:'Outfit',Helvetica] font-normal text-[#1e1e1e] text-base tracking-[0] leading-6">
                across options - enabling defensible trade-offs between cost,
                service, and carbon
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <img
              className="w-[38px] h-[39px] flex-shrink-0"
              alt="A sync"
              src="https://c.animaapp.com/mezjxobfmTWCBj/img/a-sync.png"
            />
            <div>
              <div className="mb-4 [font-family:'Outfit',Helvetica] font-normal text-[#161c2d] text-[21.7px] tracking-[-0.52px] leading-[33.0px]">
                Supports strategic
              </div>
              <p className="[font-family:'Outfit',Helvetica] font-normal text-[#1e1e1e] text-base tracking-[0] leading-6">
                and tactical planning from 40-year investment programmes to
                short-term delivery optimisation
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <img
              className="w-[35px] h-[35px] flex-shrink-0"
              alt="Chart bar"
              src="https://c.animaapp.com/mezjxobfmTWCBj/img/chart-bar-33.png"
            />
            <div>
              <div className="mb-4 [font-family:'Outfit',Helvetica] font-normal text-[#161c2d] text-[21.7px] tracking-[-0.52px] leading-[33.0px]">
                Adapts to changing
              </div>
              <p className="[font-family:'Outfit',Helvetica] font-normal text-[#1e1e1e] text-base tracking-[0] leading-6">
                landscapes - including climate change, stakeholder expectations,
                environmental concerns, and regulatory drivers
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
