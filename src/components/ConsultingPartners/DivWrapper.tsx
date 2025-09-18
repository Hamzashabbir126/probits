import React from "react";

export const DivWrapper = () => {
  return (
    <div className="w-full">
      {/* CTA Section */}
      <div className="w-full bg-[#dfffb6] py-8 sm:py-12 md:py-16">
        <div className="max-w-[800px] mx-auto px-4 text-center">
          <h2 className="[font-family:'Outfit',Helvetica] font-normal text-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center tracking-[0] leading-[1.2] sm:leading-[1.3] md:leading-[1.3] lg:leading-[57.6px] mb-4 sm:mb-5 md:mb-6 lg:mb-8">
            Interested in using AIM?
          </h2>
          <p className="[font-family:'Outfit',Helvetica] font-normal text-[#1e1e1e] text-sm sm:text-base text-center tracking-[0] leading-5 sm:leading-6 mb-6 sm:mb-7 md:mb-8">
            Get in touch. There's no formal partnership process - just a
            powerful platform, a proven support model, and the shared
            objective of better decisions for infrastructure owners.
          </p>
          <div className="flex justify-center">
            <button className="inline-flex items-center">
              <button className="inline-flex h-[40px] sm:h-[45px] md:h-[52px] items-center justify-center gap-2 pl-4 sm:pl-5 md:pl-6 pr-6 sm:pr-7 md:pr-8 py-4 sm:py-5 md:py-6 rounded-[30px] sm:rounded-[35px] md:rounded-[44px] border-[0.8px] border-solid border-[#475467]">
                <div className="font-body-regular-m-web font-[number:var(--body-regular-m-web-font-weight)] text-primary-900 text-[length:var(--body-regular-m-web-font-size)] tracking-[var(--body-regular-m-web-letter-spacing)] leading-[var(--body-regular-m-web-line-height)] whitespace-nowrap [font-style:var(--body-regular-m-web-font-style)]">
                  LET'S TALK
                </div>
              </button>

              <div className="flex w-[40px] sm:w-[45px] md:w-[52px] h-[40px] sm:h-[45px] md:h-[52px] items-center justify-center -ml-4 sm:-ml-4.5 md:-ml-5 bg-[#5da502] rounded-[100px] sm:rounded-[150px] md:rounded-[200px]">
                <img
                  className="w-[20px] sm:w-[25px] md:w-[30.05px] h-[20px] sm:h-[25px] md:h-[30.05px]"
                  alt="Vuesax linear arrow"
                  src="https://c.animaapp.com/mezjxobfmTWCBj/img/vuesax-linear-arrow-right.svg"
                />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
