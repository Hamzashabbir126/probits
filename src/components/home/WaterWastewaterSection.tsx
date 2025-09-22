import React from "react";
import { ArrowButton } from "../ui";

export const WaterWastewaterSection = (): JSX.Element => {
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

            <ArrowButton onClick={() => console.log("View Details Clicked")}>View Details</ ArrowButton>
         
          </div>

          {/* Right side - Image */}
           <img
        className="hidden md:block  w-[85%] h-[410px] top-0 right-0"
        alt="Mask group"
        src="https://c.animaapp.com/mezjxobfmTWCBj/img/mask-group.png"
      />
        </div>
      </div>
    </div>
  );
};
