import React from "react";


export const DivWrapper = (): JSX.Element => {
  return (
    <div className="w-full max-w-[1200px] mx-auto px-4 py-8 sm:py-12 md:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-start">
        <div>
          <div className="relative h-[120px] sm:h-[140px] md:h-[160px]">
            <div className="w-[75%] top-0 left-[-5%] absolute h-[40px] sm:h-[55px] md:h-[69px] bg-[#d7ffb1] rounded-[49.78px]" />

            <div className="flex flex-col w-full h-[112px] sm:h-[132px] md:h-[152px]  gap-2 relative">
              <p className="w-full [font-family:'Outfit',Helvetica] font-bold text-[28px] sm:text-[36px] md:text-[42px] tracking-[0] leading-[1.2] sm:leading-[1.3] md:leading-[62.4px]">
                <span className="">Building a better</span>
              </p>
              <p className="w-full [font-family:'Outfit',Helvetica] font-bold text-[28px] sm:text-[36px] md:text-[42px] tracking-[0] leading-[1.2] sm:leading-[1.3] md:leading-[62.4px]">
                <span className="text-black">way to plan</span>
              </p>
            </div>
          </div>

          <p className="[font-family:'Outfit',Helvetica] font-normal text-[#1e1e1e] text-sm sm:text-base leading-5 sm:leading-6">
            Probit was established with a clear conviction: that infrastructure investment decisions could, and should, be made with more clarity, rigour and confidence.
            <br />
            <br />
            When we started out on the AIM journey, many organisations were still relying on spreadsheets, static reports, or portfolio-level models to decide how billions in capital would be spent. The process was slow, opaque, and often shaped more by assumptions than by evidence.
            <br />
            <br />
            We believed there was a better way. So we set out to build a platform that could bring together risk, performance, cost and regulatory alignment, and optimise those decisions at the level of individual assets.
            <br />
            <br />
            That platform is AIM. It was designed from the ground up to meet the specific challenges of capital-intensive infrastructure sectors, and has been refined and expanded ever since in collaboration with our clients, partners and regulators.
            <br />
            <br />
            Today, AIM is used across the UK and internationally by organisations responsible for managing water, gas, roads and other critical assets. And we’re still driven by the same principle that started it: better data, better models, better decisions.
          </p>
        </div>
        <div className="hidden sm:block">
          <div className="relative w-full max-w-[300px] sm:max-w-[380px] md:max-w-[460px] h-[300px] sm:h-[400px] md:h-[600px] mt-[-50px] sm:mt-[-75px] md:mt-[-100px] mx-auto bg-[url(https://c.animaapp.com/mewzloz6gWYaG0/img/mask-group-2.png)] bg-cover bg-center" />
        </div>
      </div>
    </div>
  );
};
