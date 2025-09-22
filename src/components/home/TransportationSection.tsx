import React from "react";
import { ArrowButton } from "../ui";

export const TransportationSection = (): JSX.Element => {
  return (
    <div className="relative w-full py-16 px-8 lg:px-16">
      <div className="w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left side - Content */}
          <div className="space-y-6 px-4 lg:px-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight">
              Transportation
            </h2>
            
            <p className="text-base text-[#1e1e1e] leading-6">
              From roads and highways to rail and light transit, AIM helps transport
              operators and consultants plan, prioritise and justify investment,
              balancing safety, service, cost and long-term resilience.
            </p>

            <ArrowButton onClick={() => console.log("View Details Clicked")}>View Details</ArrowButton>
         
          </div>

          {/* Right side - Image */}
          <div className="relative">
             <img
        className="hidden md:block  w-[85%] h-[410px] top-0 right-0"
        alt="Mask group"
        src="https://c.animaapp.com/mezjxobfmTWCBj/img/mask-group.png"
      />
            {/* <img
              className="w-full h-[410px] object-cover rounded-lg"
              alt="Mask group"
              src=""
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
};
