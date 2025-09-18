import React from "react";
import { DivWrapper } from "./contact_us/DivWrapper";
import { Group } from "./contact_us/Group";
import { GroupWrapper } from "./contact_us/GroupWrapper";
import { Navbar } from "./contact_us/Navbar";

export const ContactUs = (): JSX.Element => {
  return (
    <div
      className="bg-white min-h-screen w-full"
      data-model-id="248:467"
    >
      <div className="bg-white overflow-hidden w-full relative">
        {/* Hero Section */}
        <div className="relative w-full h-[300px] sm:h-[400px] md:h-[486px] bg-gradient-to-b from-gray-800/25 to-gray-800/25">
          <img
            className="absolute inset-0 w-full h-full object-cover"
            alt="Background"
            src="https://c.animaapp.com/mezkaj2xx8nkRA/img/23232-333604632-tiny-1.png"
          />
          
          <div className="absolute inset-0 bg-gray-800/25" />

          {/* Hero Title */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="relative">
              <div className="bg-[#d7ffb1] rounded-[50px] px-6 sm:px-8 md:px-12 py-3 sm:py-4">
                <div className="font-outfit font-bold text-black text-3xl sm:text-4xl md:text-5xl text-center">
                  Lets Chat
                </div>
              </div>
            </div>
          </div>

          <Navbar />
        </div>

        {/* Contact Section */}
        <div className="relative py-8 sm:py-12 md:py-16">
          <GroupWrapper />
          <DivWrapper />
          
          <div className="flex justify-center mt-8 sm:mt-12 md:mt-16 px-4">
            <button className="inline-flex items-center gap-2 pl-4 sm:pl-6 pr-6 sm:pr-8 py-4 sm:py-6 rounded-[44px] border border-gray-400 all-[unset] box-border items-start inline-flex justify-center">
              <button className="all-[unset] box-border inline-flex h-[40px] sm:h-[52px] items-center justify-center gap-2 pl-4 sm:pl-6 pr-6 sm:pr-8 py-4 sm:py-6 relative flex-[0_0_auto] rounded-[44px] border-[0.8px] border-solid border-[#475467]">
                <div className="relative w-fit mt-[-10.80px] mb-[-9.20px] font-body-regular-m-web font-[number:var(--body-regular-m-web-font-weight)] text-primary-900 text-sm sm:text-base tracking-[var(--body-regular-m-web-letter-spacing)] leading-[var(--body-regular-m-web-line-height)] whitespace-nowrap [font-style:var(--body-regular-m-web-font-style)]">
                GET IN TOUCH
                </div>
              </button>

              <div className="flex w-[40px] h-[40px] sm:w-[52px] sm:h-[52px] items-center justify-center relative -ml-5 bg-[#5da502] rounded-[200px]">
                <img
                  className="relative w-[20px] h-[20px] sm:w-[30.05px] sm:h-[30.05px]"
                  alt="Vuesax linear arrow"
                  src="https://c.animaapp.com/mevfv4lgJQJIM3/img/vuesax-linear-arrow-right.svg"
                />
              </div>
            </button>
          </div>
        </div>

        {/* How to Find Us Section */}
        <div className="relative bg-[#dfffb6] py-8 sm:py-12 md:py-16">
          <Group />
        </div>

      </div>
    </div>
  );
};

