import React from "react";

export const Frame = (): JSX.Element => {
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

        <div className="flex justify-center">
          <button className="inline-flex items-center">
            <button className="inline-flex h-[40px] sm:h-[52px] items-center justify-center gap-2 pl-4 sm:pl-6 pr-6 sm:pr-8 py-4 sm:py-6 rounded-[44px] border-[0.8px] border-solid border-[#475467]">
              <div className="font-body-regular-m-web font-medium text-primary-900 text-sm sm:text-base tracking-[var(--body-regular-m-web-letter-spacing)] leading-[var(--body-regular-m-web-line-height)] whitespace-nowrap">
                LET'S TALK
              </div>
            </button>

            <div className="flex w-[40px] h-[40px] sm:w-[52px] sm:h-[52px] items-center justify-center -ml-4 sm:-ml-5 bg-[#5da502] rounded-[200px]">
              <img
                className="w-[20px] h-[20px] sm:w-[30px] sm:h-[30px]"
                alt="Vuesax linear arrow"
                src="https://c.animaapp.com/mezjxobfmTWCBj/img/vuesax-linear-arrow-right.svg"
              />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};
