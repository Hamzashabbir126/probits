import React from "react";
import { PageHeroSection } from "../components/ui/PageHeroSection";

// Import contact_us components
import { ContactForm } from "../components/contact_us/ContactForm";
import { ContactInfo } from "../components/contact_us/ContactInfo";
import { ContactHeader } from "../components/contact_us/ContactHeader";
import { ContactBanner } from "../components/contact_us/ContactBanner";
import { ArrowButton } from "../components/ui";

export const ContactUsPage = (): JSX.Element => {
  return (
    <div
      className="bg-white min-h-screen w-full"
      data-model-id="248:467"
     >
      <div className="bg-white overflow-hidden w-full relative">
        {/* Hero Section */}
        <PageHeroSection
          backgroundImage="https://c.animaapp.com/mezkaj2xx8nkRA/img/23232-333604632-tiny-1.png"
          title="Let's Chat"
          highlightWords={["Let's Chat"]}
        />

        <ContactBanner />

        {/* Contact Section */}
        <div className="relative py-8 sm:py-12 md:py-16">
          <ContactHeader />
          <ContactForm />

          <div className="flex justify-center mt-8 sm:mt-12 md:mt-16 px-4">
             <ArrowButton onClick={() => console.log("View Details Clicked")}>Get in Touch</ArrowButton>
         
          </div>
        </div>

        {/* How to Find Us Section */}
        <div className="relative bg-[#dfffb6] py-8 sm:py-12 md:py-16">
          <ContactInfo />
        </div>

      </div>
    </div>
  );
};