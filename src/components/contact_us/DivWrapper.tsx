import React from "react";

export const DivWrapper = (): JSX.Element => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
      {/* First Row - Name, Email, Phone */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
        <div className="flex items-center gap-2 pt-2 pb-4 sm:pb-6 px-2 border-b border-gray-300">
          <div className="font-inter text-black text-base sm:text-lg">
            YOUR NAME
          </div>
        </div>

        <div className="flex items-center gap-2 pt-2 pb-4 sm:pb-6 px-2 border-b border-gray-300">
          <div className="font-inter text-black text-base sm:text-lg">
            EMAIL
          </div>
        </div>

        <div className="flex items-center gap-2 pt-2 pb-4 sm:pb-6 px-2 border-b border-gray-300">
          <div className="font-inter text-black text-base sm:text-lg">
            PHONE
          </div>
        </div>
      </div>

      {/* Second Row - Company and hidden inputs */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
        <div className="flex items-center gap-2 pt-2 pb-4 sm:pb-6 px-2 border-b border-gray-300">
          <div className="font-inter text-black text-base sm:text-lg">
            COMPANY
          </div>
        </div>

        <input
          className="pt-2 pb-4 sm:pb-6 px-2 border-b border-gray-300 bg-transparent font-inter text-black text-base sm:text-lg placeholder-gray-400"
          placeholder="Email Address"
          type="email"
        />

        <input
          className="pt-2 pb-4 sm:pb-6 px-2 border-b border-gray-300 bg-transparent font-inter text-black text-base sm:text-lg placeholder-gray-400"
          placeholder="Phone Number (optional)"
          type="tel"
        />
      </div>

      {/* Checkboxes Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#5da502] rounded-full" />
          <div className="font-inter text-black text-sm sm:text-base md:text-lg">
            I AM A CONSULTANT
          </div>
        </div>

        <div className="flex items-center gap-3 sm:gap-4">
          <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border border-gray-300" />
          <div className="font-inter text-black text-sm sm:text-base md:text-lg">
            I WORK WITHIN AN ASSET-OWNING ORGANISATION
          </div>
        </div>
      </div>

      {/* Reply Preference Row */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
        <div className="font-inter text-black text-sm sm:text-base md:text-lg">
          PLEASE REPLY TO ME BY:
        </div>

        <div className="flex items-center gap-3 sm:gap-4">
          <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border border-gray-300" />
          <div className="font-inter text-black text-sm sm:text-base md:text-lg">
            EMAIL
          </div>
        </div>

        <div className="flex items-center gap-3 sm:gap-4">
          <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#5da502] rounded-full" />
          <div className="font-inter text-black text-sm sm:text-base md:text-lg">
            PHONE
          </div>
        </div>
      </div>

      {/* Message Field */}
      <div className="w-full pt-2 pb-12 sm:pb-16 md:pb-20 px-2 border-b border-gray-300">
        <div className="font-inter text-black text-base sm:text-lg">
          Message
        </div>
      </div>
    </div>
  );
};
