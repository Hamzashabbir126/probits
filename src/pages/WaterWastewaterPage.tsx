import React from "react";
import { HeroSection } from "../components/ui/HeroSection";
import { InfoBanner } from "../components/ui/InfoBanner";
import { PageHeroSection } from "../components/ui/PageHeroSection";

// Import water components
import { WaterHeroSection } from "../components/water/WaterHeroSection";
import { WaterPurposeBuilt } from "../components/water/WaterPurposeBuilt";
import { WaterFeaturesList } from "../components/water/WaterFeaturesList";
import { WaterPlanningBenefits } from "../components/water/WaterPlanningBenefits";
import { WaterContactCTA } from "../components/water/WaterContactCTA";
import { WaterCaseStudies } from "../components/water/WaterCaseStudies";

export const WaterWastewaterPage = (): JSX.Element => {
  const bannerItems = [
    "Green the planet",
    "Cut carbon waste", 
    "Plan for resilience",
    "Value public outcomes",
    "Target net zero",
    "Embed climate thinking"
  ];

  return (
    <div className="bg-[#ffffff] w-full min-h-screen">
      <div className="bg-[#ffffff] overflow-hidden w-full relative">
        {/* Hero Section */}
        <PageHeroSection 
          backgroundImage="https://c.animaapp.com/mezjxobfmTWCBj/img/23232-333604632-tiny-1.png"
          title="Water & Wastewater"
          highlightWords={["Water & Wastewater"]}
        />

        {/* Info Banner */}
        <InfoBanner items={bannerItems} />

        {/* Main Content */}
        <div className="relative w-full py-8 sm:py-12 md:py-16 bg-neutral-100">
          <img
            className="absolute w-48 sm:w-64 md:w-80 h-auto sm:h-[400px] md:h-[537px] top-5 right-[5%] md:right-[10%] opacity-70 sm:opacity-100"
            alt="Group"
            src="https://c.animaapp.com/mezjxobfmTWCBj/img/group-1000004260.png"
          />
          <WaterHeroSection />
        </div>

        {/* Decorative Section */}
        <img
          className="w-full h-[100px] sm:h-[140px] md:h-[188px] object-cover"
          alt="Section"
          src="https://c.animaapp.com/mezjxobfmTWCBj/img/section.svg"
        />

        <WaterPurposeBuilt />

        {/* Content Sections */}
        <div className="relative w-full py-8 sm:py-12 md:py-16 bg-[#dfffb6]">
          <WaterFeaturesList />
        </div>

        <div className="relative w-full py-8 sm:py-12 md:py-16">
          <img
            className="absolute w-[30%] sm:w-[35%] md:w-[40%] h-auto sm:h-[140px] md:h-[179px] bottom-0 right-[5%] sm:right-[10%] opacity-70 sm:opacity-100"
            alt="Group"
            src="https://c.animaapp.com/mezjxobfmTWCBj/img/group-1000004275.png"
          />
          <WaterPlanningBenefits />
        </div>

        <WaterContactCTA />
        <WaterCaseStudies />
      </div>
    </div>
  );
};