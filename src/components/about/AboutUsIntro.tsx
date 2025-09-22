import React from "react";

export const AboutUsIntro = () => {
  return (
    <div className="w-full max-w-[1200px] mx-auto px-4 py-8 sm:py-12 md:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
        <div className="hidden sm:block">
          <div className="relative w-full max-w-[300px] sm:max-w-[380px] md:max-w-[460px] h-[300px] sm:h-[450px] md:h-[593px] mt-[-25px] sm:mt-[-40px] md:mt-[-54px] mx-auto bg-[url(https://c.animaapp.com/mewzloz6gWYaG0/img/mask-group-1.png)] bg-cover bg-center" />
        </div>
        <div>
          <h2 className="[font-family:'Outfit',Helvetica] font-bold text-black text-3xl sm:text-4xl md:text-5xl tracking-[0] leading-[1.2] sm:leading-[1.3] md:leading-[57.6px] mb-4 sm:mb-5 md:mb-6">About us</h2>
          <p className="[font-family:'Outfit',Helvetica] font-normal text-[#1e1e1e] text-sm sm:text-base leading-5 sm:leading-6">
            Probit are infrastructure planning software specialists, helping organisations make smarter, more transparent decisions about their long-term investments.
            <br />
            <br />
            Founded in 2010 and based in Wales, UK, we've built our business around a single platform, AIM, initially branded as Asset Investment Manager.
            <br />
            <br />
            AIM is used by utilities, energy networks, transport agencies and local authorities to plan billions of dollars in investment, balancing performance, cost, risk and sustainability at the level of individual assets.
            <br />
            <br />
            We're a product-first company, rather than a consultancy. Our focus is on building adaptable, powerful software that supports our users, partners and regulators in making better decisions under real-world constraints.
          </p>
        </div>
      </div>
    </div>
  );
};
