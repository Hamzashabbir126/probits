import React from "react";

export const DivMain = (): JSX.Element => {
  return (
    <div className="w-[95%] sm:w-[90%] md:w-[78.2%] mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-16">
      <div className="w-full md:w-[50.4%]">
        <div className="[font-family:'Outfit',Helvetica] font-bold text-white text-3xl sm:text-4xl md:text-5xl tracking-[0] leading-[1.2] sm:leading-[1.3] md:leading-[57.6px] mb-4 sm:mb-6 md:mb-8">
          Better decisions, better outcomes
        </div>

        <p className="[font-family:'Outfit',Helvetica] font-normal text-white text-base sm:text-lg md:text-[21.7px] tracking-[-0.52px] leading-[1.4] sm:leading-[1.5] md:leading-[33.0px]">
          Our mission is to help infrastructure organisations make better
          decisions about how they invest in the assets that matter most.
          <br />
          <br />
          We believe that smarter, more transparent decision-making leads to
          better infrastructure, stronger performance and lower risk, not just
          for operators, but for the communities and environments they serve.
          <br />
          <br />
          Our mission is delivered through AIM, our platform built to optimise
          complex investment choices in real-world conditions. It gives users
          the speed, control and clarity they need to plan with confidence -
          balancing cost, performance, regulatory requirements and long-term
          value.
        </p>
      </div>

      <img
        className="w-full md:w-[42.7%] h-auto md:h-[43.4vh] object-cover"
        alt="Mask group"
        src="https://c.animaapp.com/mewzloz6gWYaG0/img/mask-group-3.png"
      />
    </div>
  );
};
