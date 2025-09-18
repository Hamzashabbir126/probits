import React from "react";

export const AIMInConsulting = () => {
  return (
    <div className="relative w-full py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-16 bg-gray-100">
      <div className="w-full max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 items-center">
          {/* Left side - Content */}
          <div className="space-y-4 sm:space-y-5 md:space-y-6 px-0 sm:px-2 lg:px-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight">
              AIM in Consulting
            </h2>
            <p className="text-sm sm:text-base text-[#1e1e1e] leading-5 sm:leading-6">
              AIM is the investment optimisation platform used by infrastructure owners across water, gas, highways and multi-utility sectors to plan smarter, more transparent investment strategies
            </p>
            <p className="text-sm sm:text-base text-[#1e1e1e] leading-5 sm:leading-6">
              If you advise organisations in any of these areas, helping them decide how, where and when to invest, AIM can give you a clear advantage
            </p>
            <p className="text-sm sm:text-base text-[#1e1e1e] leading-5 sm:leading-6">
              It brings speed, precision and clarity to your modelling, helping you deliver better insights, stronger business cases, and more confident recommendations
            </p>
            <p className="text-sm sm:text-base text-[#1e1e1e] leading-5 sm:leading-6">
              AIM is a platform, not a consulting service , and our role is to support you with the technical backup you need to get the most from it.
            </p>
          </div>

          {/* Right side - Image */}
          <div className="relative mt-6 lg:mt-0">
            <img
              className="w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[410px] object-cover rounded-lg"
              alt="AIM in Consulting"
              src="https://c.animaapp.com/mezk8qhiRH69bc/img/mask-group-2.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};


