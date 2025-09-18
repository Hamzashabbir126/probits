import React from "react";

export const Group = (): JSX.Element => {
  return (
    <div className="relative w-full py-16 px-8 lg:px-16">
      <div className="w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left side - Content */}
          <div className="space-y-6 px-4 lg:px-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight">
              Water & Wastewater
            </h2>
            
            <p className="text-base text-[#1e1e1e] leading-6">
              Plan smarter across treatment works, pump stations, rising mains,
              sewer and water networks. AIM helps water utilities and consultants
              optimise investment under regulatory pressure, balancing performance,
              risk, cost and long-term environmental goals.
            </p>

            <button className="inline-flex items-center justify-center">
              <button className="inline-flex h-[52px] items-center justify-center gap-2 pl-6 pr-8 py-6 rounded-[44px] border-[0.8px] border-solid border-[#475467]">
                <div className="font-medium text-[#1e1e1e] text-base whitespace-nowrap">
                  View Details
                </div>
              </button>
              <div className="flex w-[52px] h-[52px] items-center justify-center -ml-5 bg-[#5da502] rounded-full">
                <img
                  className="w-[30px] h-[30px]"
                  alt="Vuesax linear arrow"
                  src="https://c.animaapp.com/mezk8qhiRH69bc/img/vuesax-linear-arrow-right.svg"
                />
              </div>
            </button>
          </div>

          {/* Right side - Image */}
          <div className="relative">
            <img
              className="w-full h-[410px] object-cover rounded-lg"
              alt="Mask group"
              src="https://c.animaapp.com/mezk8qhiRH69bc/img/mask-group-2.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
