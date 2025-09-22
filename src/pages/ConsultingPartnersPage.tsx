import React from "react";
import { HeroSection } from "../components/ui/HeroSection";
import { InfoBanner } from "../components/ui/InfoBanner";
import { PageHeroSection } from "../components/ui/PageHeroSection";

// Import ConsultingPartners components
import { AIMInConsulting } from "../components/ConsultingPartners/AIMInConsulting";
import { ConsultingDelivery } from "../components/ConsultingPartners/ConsultingDelivery";
import { ConsultingAdvantages } from "../components/ConsultingPartners/ConsultingAdvantages";
import { ConsultingTestimonial } from "../components/ConsultingPartners/ConsultingTestimonial";
import { ConsultingSupport } from "../components/ConsultingPartners/ConsultingSupport";
import { ConsultingCTA } from "../components/ConsultingPartners/ConsultingCTA";

export const ConsultingPartnersPage = (): JSX.Element => {
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
      {/* Hero Section */}
      <PageHeroSection 
        backgroundImage="https://c.animaapp.com/mezk8qhiRH69bc/img/23232-333604632-tiny-1.png"
        title="Consulting Partners"
        highlightWords={["Consulting Partners"]}
      />

      {/* Info Banner */}
      <InfoBanner items={bannerItems} />

      {/* Main Content Sections */}
      <div className="w-full">
        {/* AIM in Consulting */}
        <AIMInConsulting />

        {/* Using AIM to deliver for your clients */}
        <ConsultingDelivery />
        
        {/* Decorative Section */}
        <img
          className="w-full h-[100px] sm:h-[140px] md:h-[188px] object-cover"
          alt="Section"
          src="https://c.animaapp.com/mezjxobfmTWCBj/img/section.svg"
        />
        
        {/* AIM. A robust competitive advantage in consulting. */}
        <ConsultingAdvantages />
        
        {/* Testimonial Section */}
        <ConsultingTestimonial />
        
        {/* How Probit supports you. */}
        <ConsultingSupport />
        
        {/* Interested in using AIM? */}
        <ConsultingCTA />
      </div>
    </div>
  );
};