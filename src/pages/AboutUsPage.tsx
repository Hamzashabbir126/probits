import React from "react";

// Import existing components with exact paths
import { MissionStatement } from "../components/about/MissionStatement";
import { BuildingBetterWay } from "../components/about/BuildingBetterWay";
import { AboutUsIntro } from "../components/about/AboutUsIntro";
import { ResponsibleBusiness } from "../components/about/ResponsibleBusiness";
import { WorkingWithUs } from "../components/about/WorkingWithUs";
import { TeamSection } from "../components/about/TeamSection";
import { CompanyPrinciples } from "../components/about/CompanyPrinciples";
import { PageHeroSection } from "../components/ui/PageHeroSection";
import { ArrowButton } from "../components/ui/ArrowButton";

export const AboutUsPage = (): JSX.Element => {
  return (
    <div className="bg-[#ffffff] w-full min-h-screen">
      {/* Hero */}
      <PageHeroSection 
        backgroundImage="https://c.animaapp.com/mewzloz6gWYaG0/img/patrick-hendry-6xedizgopaw-unsplash-1.png"
        title="Helping infrastructure organizations make better long-term decisions."
        highlightWords={["Helping infrastructure", "decisions."]}
      />

      {/* Ribbon */}
      <div className="w-full min-h-[61px] bg-[#5da502] overflow-hidden py-2 sm:py-0">
        <div className="flex flex-wrap w-full h-full items-center justify-center gap-4 sm:gap-6 md:gap-8 px-4 sm:px-8">
          <div className="[font-family:'Roboto',Helvetica] text-[#d7ffb1] text-sm sm:text-base md:text-xl">Green the planet</div>
          <img className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" alt="Fi" src="https://c.animaapp.com/mewzloz6gWYaG0/img/fi-3127084.svg" />
          <div className="[font-family:'Roboto',Helvetica] text-[#d7ffb1] text-sm sm:text-base md:text-xl">Cut carbon waste</div>
          <img className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" alt="Fi" src="https://c.animaapp.com/mewzloz6gWYaG0/img/fi-3127084.svg" />
          <div className="[font-family:'Roboto',Helvetica] text-[#d7ffb1] text-sm sm:text-base md:text-xl">Plan for resilience</div>
          <img className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" alt="Fi" src="https://c.animaapp.com/mewzloz6gWYaG0/img/fi-3127084.svg" />
          <div className="[font-family:'Roboto',Helvetica] text-[#d7ffb1] text-sm sm:text-base md:text-xl">Value public outcomes</div>
          <img className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" alt="Fi" src="https://c.animaapp.com/mewzloz6gWYaG0/img/fi-3127084.svg" />
          <div className="[font-family:'Roboto',Helvetica] text-[#d7ffb1] text-sm sm:text-base md:text-xl">Target net zero</div>
        </div>
      </div>

      {/* Flowing sections */}
      <div className="w-full">
        {/* About us overview (light gray) */}
        <div className="w-full bg-neutral-100 py-8 sm:py-12 md:py-16 px-4">
          <AboutUsIntro />
        </div>
     <div className="h-[50px] sm:h-[75px] md:h-[100px]"></div>
        {/* Decorative separator */}
        <img className="w-full top-[100px] h-[100px] sm:h-[140px] md:h-[188px] object-cover" alt="Section" src="https://c.animaapp.com/mezjxobfmTWCBj/img/section.svg" />

        {/* Building a better way */}
        <div className="relative w-full py-8 sm:py-12 md:py-16 px-4">
          <BuildingBetterWay />
        </div>

        {/* Team with heading */}
        <div className="w-full py-8 sm:py-12 md:py-16 px-4">
          <div className="w-full max-w-[300px] sm:max-w-[450px] md:max-w-[562px] mx-auto text-center mb-4 sm:mb-6 md:mb-8">
            <div className="[font-family:'Outfit',Helvetica] font-bold text-black text-3xl sm:text-4xl md:text-5xl leading-[1.2] sm:leading-[1.2] md:leading-[57.6px]">
              Unrivalled experience in
              <br />
              asset analytics.
            </div>
          </div>
          <TeamSection />
        </div>

        {/* Mission block */}
        <div className="w-full bg-[#5da502] rounded-[10px] py-8 sm:py-12 md:py-16">
          <MissionStatement />
        </div>

        {/* Principles */}
        <CompanyPrinciples />

        {/* Working with us */}
        <WorkingWithUs />
        
        {/* Contact Form Section */}
        <div className="relative w-[90%] sm:w-[80%] md:w-[70%] mx-auto py-8 sm:py-12 md:py-16">
          <div className="bg-[#f8f9fa] rounded-[8px] p-6 sm:p-8 md:p-10 shadow-sm">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-6 sm:mb-8">
                <h2 className="[font-family:'Outfit',Helvetica] font-bold text-[#1e1e1e] text-2xl sm:text-3xl md:text-4xl mb-4">
                  Get In Touch
                </h2>
                <p className="[font-family:'Outfit',Helvetica] font-normal text-[#666666] text-sm sm:text-base md:text-lg">
                  Ready to discuss your infrastructure needs? Contact us today.
                </p>
              </div>
              
              <div className="flex flex-col gap-6 sm:gap-8">
                {/* Text Fields Row */}
                {/* <div className="flex flex-col sm:flex-row gap-4 sm:gap-6"> */}
                  <div className="flex-1">
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="w-full px-4 py-3 sm:py-4 rounded-[12px] border border-[#e1e5e9] bg-white text-[#1e1e1e] placeholder-[#999999] [font-family:'Outfit',Helvetica] font-normal text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#5da502] focus:border-transparent transition-all duration-300"
                    />
                  </div>
                  
                  <div className="flex-1">
                    <input
                      type="text"
                      placeholder="First Name"
                      className="w-full px-4 py-3 sm:py-4 rounded-[12px] border border-[#e1e5e9] bg-white text-[#1e1e1e] placeholder-[#999999] [font-family:'Outfit',Helvetica] font-normal text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#5da502] focus:border-transparent transition-all duration-300"
                    />
                  {/* </div> */}
                </div>
                
                {/* Buttons Row */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                    <button className="px-6 py-3 rounded-[25px] border border-[#475467] bg-transparent text-[#475467] [font-family:'Outfit',Helvetica] font-medium text-sm sm:text-base hover:bg-[#475467] hover:text-white transition-all duration-300">
                      ADD CV
                    </button>
                    <button className="px-6 py-3 rounded-[25px] border border-[#475467] bg-transparent text-[#475467] [font-family:'Outfit',Helvetica] font-medium text-sm sm:text-base hover:bg-[#475467] hover:text-white transition-all duration-300">
                      ADD COVER LETTER
                    </button>
                  </div>
                  
                  <ArrowButton onClick={() => console.log("Let's Talk Clicked")}>
                    LET'S TALK
                  </ArrowButton>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};