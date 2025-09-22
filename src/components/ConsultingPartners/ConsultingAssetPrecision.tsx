import React from "react";

export const ConsultingAssetPrecision = () => {
  return (
    <div className="w-full max-w-[1200px] mx-auto px-4 py-8 sm:py-12 md:py-16">
      <div className="flex flex-col lg:flex-row items-center gap-6 sm:gap-8 md:gap-10 lg:gap-12">
        <div className="flex-1 w-full">
          <h2 className="[font-family:'Outfit',Helvetica] font-bold text-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-[0] leading-[1.2] sm:leading-[1.3] md:leading-[1.3] lg:leading-[57.6px] mb-4 sm:mb-5 md:mb-6">
            Asset-Level Precision
          </h2>
          <p className="[font-family:'Outfit',Helvetica] font-normal text-[#1e1e1e] text-sm sm:text-base tracking-[0] leading-5 sm:leading-6">
            AIM's bottom-up design enables investment decisions at the level of
            individual assets. This level of granularity means every
            intervention is based on actual need and value rather than averages
            or assumptions. It's the difference between broad strategy and
            actionable planning.
          </p>
        </div>
        <div className="flex-1 w-full mt-6 lg:mt-0">
          <img
            className="w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[410px] object-cover rounded-lg"
            alt="Mask group"
            src="https://c.animaapp.com/mex2pphepZzofP/img/mask-group-1.png"
          />
        </div>
      </div>
    </div>
  );
};
