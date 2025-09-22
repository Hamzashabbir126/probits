import React from "react";
import { ArrowButton } from "../ui";

export const GasNetworksSection = (): JSX.Element => {
  return (
    <div className="relative w-full py-16 px-8 lg:px-16">
      <div className="w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left side - Image */}
          <div className="relative">
            <img
              className="w-full h-[410px] object-cover rounded-lg"
              alt="Mask group"
              src="https://c.animaapp.com/mezk8qhiRH69bc/img/mask-group-4.png"
            />
          </div>

          {/* Right side - Content */}
          <div className="space-y-6 px-4 lg:px-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight">
              Gas Networks
            </h2>
            
            <p className="text-base text-[#1e1e1e] leading-6">
              Optimise investment strategies across complex gas networks. AIM
              supports scenario planning, regulatory alignment and the transition to
              low-carbon infrastructure, including hydrogen readiness and
              emissions-driven programme design
            </p>

           <ArrowButton onClick={() => console.log("View Details Clicked")}>View Details</ArrowButton>
         
          </div>
        </div>
      </div>
    </div>
  );
};
