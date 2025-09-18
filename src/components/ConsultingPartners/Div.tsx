import React from "react";

export const Div = () => {
  return (
    <div className="w-full max-w-[1200px] mx-auto px-4 py-8 sm:py-12 md:py-16">
      <div className="flex flex-col lg:flex-row items-center gap-6 sm:gap-8 md:gap-10 lg:gap-12">
        <div className="flex-1 w-full">
          <img
            className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[622px] object-cover rounded-lg"
            alt="Mask group"
            src="https://c.animaapp.com/mex1vqwcVI8Lk7/img/mask-group-1.png"
          />
        </div>
        <div className="flex-1 w-full mt-6 lg:mt-0">
          <h2 className="[font-family:'Outfit',Helvetica] font-bold text-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-[0] leading-[1.2] sm:leading-[1.3] md:leading-[1.3] lg:leading-[57.6px] mb-4 sm:mb-5 md:mb-6">
            Using AIM to deliver for your clients
          </h2>
          <p className="[font-family:'Outfit',Helvetica] font-normal text-[#1e1e1e] text-sm sm:text-base tracking-[0] leading-5 sm:leading-6">
            As a consulting firm, you may use AIM in a variety of ways,
            depending on your client, the challenge, and the scope of your
            engagement. You might be working on behalf of an infrastructure
            owner who already has AIM installed, using it to develop long-term
            strategies, business cases, or programme-level plans
            <br />
            <br />
            You might introduce AIM to a client who needs a more robust way to
            justify investment or meet regulatory requirements
            <br />
            <br />
            Or you might embed AIM within your own frameworks, using it to
            support resilience planning, asset risk analysis, or carbon-aligned
            capital strategies.
            <br />
            <br />
            In many cases, consultants work directly within the client's AIM
            environment. In others, they operate their own instance to support
            multiple engagements.
            <br />
            <br />
            However you choose to use it, AIM gives you the tools to work
            smarter, move faster, and deliver more, while keeping the client
            relationship firmly in your hands.
          </p>
        </div>
      </div>
    </div>
  );
};
