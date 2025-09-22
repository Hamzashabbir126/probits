import React from "react";
import { ArrowButton } from "../ui";

export const AimPlatformSection = (): JSX.Element => {
  return (
    <div className="relative w-full py-16 px-8 lg:px-16">
      <div className="w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left side - Image */}
          <div className="relative">
            <img
        className=" md:block  w-full h-[593px] top-0 right-0"
        alt="Mask group"
        src="https://c.animaapp.com/mezk8qhiRH69bc/img/mask-group.png"
      />
            {/* <div className="w-full h-[593px] bg-[url(https://c.animaapp.com/mezk8qhiRH69bc/img/mask-group.png)] bg-cover bg-center rounded-lg" /> */}
          </div>

          {/* Right side - Content */}
          <div className="space-y-6 px-4 lg:px-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight">
                Aim . Smarter infrastructure asset investment planning.
              </h2>
              
              <p className="text-base text-[#1e1e1e] leading-6">
                If you manage or consult on infrastructure assets, AIM gives you the
                insight to handle asset investment planning more effectively. AIM's
                asset-level analytics and optimisation tools make it faster, easier
                and more defensible to explore scenarios, compare options and make
                high-impact decisions. Whether you're planning for compliance,
                resilience or longterm value, AIM helps you move from complexity to
                clarity with confidence.
              </p>
            </div>

          <ArrowButton onClick={() => console.log("View Details Clicked")}>View Details</ArrowButton>
         
          </div>
        </div>
      </div>
    </div>
  );
};
