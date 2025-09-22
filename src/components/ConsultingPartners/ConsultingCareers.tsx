import React from "react";


export const ConsultingCareers = () => {
  return (
    <div className="w-full max-w-[1000px] mx-auto px-4 py-8 sm:py-12 md:py-16">
      <div className="text-center mb-6 sm:mb-7 md:mb-8">
        <div className="relative w-[250px] sm:w-[320px] md:w-[403px] h-[90px] sm:h-[100px] md:h-[118px] mx-auto mb-4 sm:mb-6 md:mb-8">
          <div className="w-full h-[40px] sm:h-[50px] md:h-[63px] bg-[#d7ffb1] rounded-[40px] sm:rounded-[50px] md:rounded-[68px] absolute top-0 left-0" />
          <div className="absolute top-0.5 left-[15px] sm:left-[20px] md:left-[27px] [font-family:'Outfit',Helvetica] font-bold text-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center tracking-[0] leading-[1.2] sm:leading-[1.3] md:leading-[1.3] lg:leading-[57.6px]">
            Working with us
            <br />
            at Probit
          </div>
        </div>
      </div>

      <p className="font-normal text-[#1e1e1e] text-sm sm:text-base text-center leading-5 sm:leading-6 [font-family:'Outfit',Helvetica] tracking-[0] max-w-4xl mx-auto">
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
