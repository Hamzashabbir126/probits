import React from "react";

export const Group1 = () => {
  return (
    <div className="w-full max-w-[1200px] mx-auto px-4 py-8 sm:py-12 md:py-16">
      <div className="text-center mb-8 sm:mb-12 md:mb-16">
        <h2 className="[font-family:'Outfit',Helvetica] font-bold text-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center tracking-[0] leading-[1.2] sm:leading-[1.3] md:leading-[1.3] lg:leading-[57.6px] mb-4 sm:mb-5 md:mb-6">
          How Probit supports you.
        </h2>
        <p className="font-normal text-[#1e1e1e] text-sm sm:text-base text-center leading-5 sm:leading-6 [font-family:'Outfit',Helvetica] tracking-[0] max-w-4xl mx-auto">
          You lead the engagement. We support the platform. Our role is to help
          you succeed with AIM, without getting in the way.
          <br />
          We offer targeted support to help you deliver more value to your
          clients, faster and with less friction:
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
        {/* Implementation support and onboarding */}
        <div className="flex items-start space-x-3 sm:space-x-4 p-3 sm:p-4">
          <img
            className="w-8 sm:w-9 md:w-10 h-[30px] sm:h-[34px] md:h-[38px] flex-shrink-0"
            alt="Preferences circle"
            src="https://c.animaapp.com/mex1vqwcVI8Lk7/img/preferences-circle.png"
          />
          <div>
            <h3 className="[font-family:'Outfit',Helvetica] font-normal text-[#161c2d] text-base sm:text-lg md:text-xl lg:text-[21.7px] tracking-[-0.52px] leading-[1.4] sm:leading-[1.5] md:leading-[33.0px] mb-2 sm:mb-3">
              Implementation support and onboarding
            </h3>
            <p className="font-normal text-[#1e1e1e] text-sm sm:text-base leading-5 sm:leading-6 [font-family:'Outfit',Helvetica] tracking-[0]">
              get AIM up and running efficiently for you or your clients
            </p>
          </div>
        </div>

        {/* Training and knowledge transfer */}
        <div className="flex items-start space-x-3 sm:space-x-4 p-3 sm:p-4">
          <img
            className="w-[30px] sm:w-[34px] md:w-[38px] h-[30px] sm:h-[34px] md:h-[38px] flex-shrink-0"
            alt="Ic shopping cart"
            src="https://c.animaapp.com/mex1vqwcVI8Lk7/img/ic-shopping-cart-48px.png"
          />
          <div>
            <h3 className="[font-family:'Outfit',Helvetica] font-normal text-[#161c2d] text-base sm:text-lg md:text-xl lg:text-[21.7px] tracking-[-0.52px] leading-[1.4] sm:leading-[1.5] md:leading-[33.0px] mb-2 sm:mb-3">
              Training and knowledge transfer
            </h3>
            <p className="font-normal text-[#1e1e1e] text-sm sm:text-base leading-5 sm:leading-6 [font-family:'Outfit',Helvetica] tracking-[0]">
              so your team can work independently, not rely on us
            </p>
          </div>
        </div>

        {/* Advanced configuration advice */}
        <div className="flex items-start space-x-3 sm:space-x-4 p-3 sm:p-4">
          <img
            className="w-[28px] sm:w-[32px] md:w-[35px] h-[28px] sm:h-[32px] md:h-[35px] flex-shrink-0"
            alt="Chart bar"
            src="https://c.animaapp.com/mex1vqwcVI8Lk7/img/chart-bar-33.png"
          />
          <div>
            <h3 className="[font-family:'Outfit',Helvetica] font-normal text-[#161c2d] text-base sm:text-lg md:text-xl lg:text-[21.7px] tracking-[-0.52px] leading-[1.4] sm:leading-[1.5] md:leading-[33.0px] mb-2 sm:mb-3">
              Advanced configuration advice
            </h3>
            <p className="font-normal text-[#1e1e1e] text-sm sm:text-base leading-5 sm:leading-6 [font-family:'Outfit',Helvetica] tracking-[0]">
              for complex regulatory, risk or valuation scenarios
            </p>
          </div>
        </div>

        {/* Data integration assistance */}
        <div className="flex items-start space-x-3 sm:space-x-4 p-3 sm:p-4">
          <img
            className="w-7 sm:w-8 md:w-9 h-[30px] sm:h-[34px] md:h-[38px] flex-shrink-0"
            alt="Ic layers"
            src="https://c.animaapp.com/mex1vqwcVI8Lk7/img/ic-layers-48px.png"
          />
          <div>
            <h3 className="[font-family:'Outfit',Helvetica] font-normal text-[#161c2d] text-base sm:text-lg md:text-xl lg:text-[21.7px] tracking-[-0.52px] leading-[1.4] sm:leading-[1.5] md:leading-[33.0px] mb-2 sm:mb-3">
              Data integration assistance
            </h3>
            <p className="font-normal text-[#1e1e1e] text-sm sm:text-base leading-5 sm:leading-6 [font-family:'Outfit',Helvetica] tracking-[0]">
              including SAP, Maximo, GIS, BI and other client systems
            </p>
          </div>
        </div>

        {/* Second-line technical support */}
        <div className="flex items-start space-x-3 sm:space-x-4 p-3 sm:p-4">
          <img
            className="w-7 sm:w-8 md:w-9 h-8 sm:h-9 md:h-10 flex-shrink-0"
            alt="A sync"
            src="https://c.animaapp.com/mex1vqwcVI8Lk7/img/a-sync.png"
          />
          <div>
            <h3 className="[font-family:'Outfit',Helvetica] font-normal text-[#161c2d] text-base sm:text-lg md:text-xl lg:text-[21.7px] tracking-[-0.52px] leading-[1.4] sm:leading-[1.5] md:leading-[33.0px] mb-2 sm:mb-3">
              Second-line technical support
            </h3>
            <p className="font-normal text-[#1e1e1e] text-sm sm:text-base leading-5 sm:leading-6 [font-family:'Outfit',Helvetica] tracking-[0]">
              we're here when you need us for technical or modelling escalations
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
