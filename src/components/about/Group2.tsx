import React from "react";

export const Group2 = (): JSX.Element => {
  return (
    <div className="w-full sm:w-[85%] md:w-[70.1%] mx-auto py-8 sm:py-12 md:py-16 px-4">
      <div className="relative h-[180px] sm:h-[220px] md:h-[260px] flex flex-col items-center justify-center">
        <div className="w-[45%] h-[40px] sm:h-[55px] md:h-[69px] bg-[#d7ffb1] rounded-[49.78px] absolute top-5 sm:top-8 md:top-14 left-1/2 transform -translate-x-1/2" />
        <div className="flex flex-col w-full h-[172px] sm:h-[212px] md:h-[252px] items-center justify-center gap-2 relative">
          <p className="w-full [font-family:'Outfit',Helvetica] font-bold text-[28px] sm:text-[36px] md:text-[42px] text-center tracking-[0] leading-[1.2] sm:leading-[1.3] md:leading-[62.4px] flex flex-col items-center">
            <span className="text-black">Working with us</span>
            <span className="text-black">at Probit</span>
          </p>
        </div>
      </div>

      <p className="w-full [font-family:'Outfit',Helvetica] font-normal text-[#1e1e1e] text-sm sm:text-base text-center leading-5 sm:leading-6">
        <span className="[font-family:'Outfit',Helvetica] font-normal text-[#1e1e1e] text-sm sm:text-base tracking-[0] leading-5 sm:leading-6">
          We're always interested in hearing from motivated people who would
          like to join us. We're particularly keen on those with experience in
          software development, asset management or business development, but we
          welcome speculative applications too. If you think you could be a good
          fit, please send us: •{" "}
        </span>
        <span className="font-bold">A one-page cover letter</span>
        <span className="[font-family:'Outfit',Helvetica] font-normal text-[#1e1e1e] text-sm sm:text-base tracking-[0] leading-5 sm:leading-6">
          {" "}
          •{" "}
        </span>
        <span className="font-bold">Your CV</span>
        <span className="[font-family:'Outfit',Helvetica] font-normal text-[#1e1e1e] text-sm sm:text-base tracking-[0] leading-5 sm:leading-6">
          {" "}
          We are grateful to all applicants, but are able to reply only to those
          <br className="hidden sm:block" />
          we would like to arrange an interview with.
        </span>
      </p>
    </div>
  );
};
