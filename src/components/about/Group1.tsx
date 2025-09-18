import React from "react";

export const Group1 = (): JSX.Element => {
  return (
    <div className="w-full sm:w-[85%] md:w-[74.2%] mx-auto py-8 sm:py-12 md:py-16 px-4">
      <p className="w-full sm:w-[80%] md:w-[70%] mx-auto [font-family:'Outfit',Helvetica] font-normal text-[#1e1e1e] text-sm sm:text-base text-center leading-5 sm:leading-6 mb-8 sm:mb-12 md:mb-16">
        At Probit, we believe in responsible business practices that support not
        just our clients, but the wider communities and environments in which we
        all operate. We're committed to fairness, transparency, sustainability,
        and social value — both within our own business and in the impact our
        technology helps others achieve.
        <br />
        <br />
        Explore our approach across five key areas:
      </p>

      <div className="flex flex-wrap justify-center gap-2">
        <div className="relative mb-2">
          <img
            className="h-[30px] sm:h-[35px] md:h-[40px]"
            alt="Rectangle"
            src="https://c.animaapp.com/mewzloz6gWYaG0/img/rectangle-9724.svg"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 [font-family:'Outfit',Helvetica] font-bold text-white text-xs sm:text-sm md:text-base tracking-[0] leading-[normal]">
            Diversity & Employment
          </div>
        </div>

        <div className="relative mb-2">
          <img
            className="h-[30px] sm:h-[35px] md:h-[40px]"
            alt="Rectangle"
            src="https://c.animaapp.com/mewzloz6gWYaG0/img/rectangle-9725.svg"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 [font-family:'Outfit',Helvetica] font-bold text-white text-xs sm:text-sm md:text-[21.9px] tracking-[0] leading-[normal]">
            Modern slavery
          </div>
        </div>

        <div className="relative mb-2">
          <img
            className="h-[30px] sm:h-[35px] md:h-[40px]"
            alt="Rectangle"
            src="https://c.animaapp.com/mewzloz6gWYaG0/img/rectangle-9726-1.svg"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 [font-family:'Outfit',Helvetica] font-bold text-white text-xs sm:text-sm md:text-base tracking-[0] leading-[normal]">
            Ethics
          </div>
        </div>

        <div className="relative mb-2">
          <img
            className="h-[30px] sm:h-[35px] md:h-[40px]"
            alt="Rectangle"
            src="https://c.animaapp.com/mewzloz6gWYaG0/img/rectangle-9726.svg"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 [font-family:'Outfit',Helvetica] font-bold text-white text-xs sm:text-sm md:text-base tracking-[0] leading-[normal]">
            Sustainability
          </div>
        </div>
      </div>

      <img
        className="w-full mt-2"
        alt="Vector"
        src="https://c.animaapp.com/mewzloz6gWYaG0/img/vector-360.svg"
      />
    </div>
  );
};
