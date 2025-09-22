import React from "react";
import { ArrowButton, BlogSlider } from "../ui";

export const ConsultingServicesSection = (): JSX.Element => {
  return (
    <div className="relative w-full">
      {/* Consulting Partners Section */}
      <div className="w-full bg-neutral-100 py-16 sm:py-24 md:py-32 px-4 sm:px-8 lg:px-16">
        <div className="flex flex-col items-center gap-6 sm:gap-8 md:gap-10 w-full">
          <div className="relative w-full max-w-4xl">
            <div className="relative">
              <div className="absolute top-10 sm:top-12 md:top-16 left-0 w-full h-8 sm:h-12 md:h-16 bg-[#d7ffb1] rounded-[30px] sm:rounded-[50px] md:rounded-[68px]" />
              <p className="relative z-10 w-full font-semibold text-black text-xl sm:text-2xl md:text-3xl lg:text-5xl text-center tracking-[0] leading-tight pt-2 sm:pt-3 md:pt-4">
                Put AIM's powerful asset investment planning platform to work for
                your consulting clients.
              </p>
            </div>
          </div>

          <p className="w-full max-w-4xl font-normal text-[#1e1e1e] text-sm sm:text-base text-center tracking-[0] leading-6">
            For consultants working with infrastructure and utility clients, AIM
            provides a unique combination of risk modelling, scenario analysis,
            investment optimisation and strategic justification capabilities in a
            single, integrated platform, and an unparalleled level of insight and
            control.
          </p>

           <ArrowButton onClick={() => console.log("View Details Clicked")}>View Details</ArrowButton>
         
          <img
            className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl"
            alt="Frame"
            src="https://c.animaapp.com/mezk8qhiRH69bc/img/frame-1000011657.svg"
          />
        </div>
      </div>

      {/* Support Services Section */}
      <div className="w-full h-[500px] sm:h-[600px] md:h-[700px] lg:h-[770px] bg-[url(https://c.animaapp.com/mezk8qhiRH69bc/img/content.png)] bg-cover bg-center relative">
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <div className="relative z-10 flex items-center justify-center lg:justify-end h-full px-4 sm:px-8 lg:px-16">
          <div className="w-full max-w-2xl space-y-4 sm:space-y-6 text-center lg:text-right">
            <p className="font-semibold text-[#f5f8f3] text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-[0] leading-tight">
              A full range of support to help you work with AIM.
            </p>

            <p className="font-normal text-[#f5f8f3] text-sm sm:text-base tracking-[0] leading-6">
              While AIM is designed to be used by in-house teams and consulting
              partners working on investment planning, we offer services to
              support implementation, integration, configuration and modelling,
              when these are needed.
            </p>

          <ArrowButton onClick={() => console.log("View Details Clicked")}>View Details</ArrowButton>
         
          </div>
        </div>
      </div>

      {/* Get in Touch Section */}
      <div className="w-full bg-[#dfffb6] py-12 sm:py-16 md:py-24 px-4 sm:px-8 lg:px-16">
        <div className="flex flex-col items-center gap-4 sm:gap-6 w-full">
          <div className="w-full max-w-3xl text-center">
            <div className="font-semibold text-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-[0] leading-tight">
              Get in touch
            </div>

            <p className="mt-3 sm:mt-4 md:mt-6 font-normal text-[#1e1e1e] text-sm sm:text-base text-center tracking-[0] leading-6">
              If you are an asset owner, or a consulting firm advising on asset
              value optimisation and investment strategy, let us show you the
              difference AIM could make.
            </p>
          </div>

        <ArrowButton onClick={() => console.log("View Details Clicked")}>View Details</ArrowButton>
         
        </div>
      </div>

      {/* Probit Section */}
      <div className="w-full py-12 sm:py-16 md:py-24 px-4 sm:px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center w-full">
          {/* Left side - Content */}
          <div className="space-y-4 sm:space-y-6">
            <p className="font-bold text-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-[0] leading-tight">
              Probit. Optimisation and asset analytics for infrastructure
              since 2010.
            </p>

            <p className="font-normal text-[#1e1e1e] text-sm sm:text-base tracking-[0] leading-6">
              Headquartered on Anglesey, Wales, UK, Probit is the software
              company behind AIM, the investment optimisation platform trusted
              by infrastructure operators and advisors around the world
            </p>

        <ArrowButton onClick={() => console.log("View Details Clicked")}>View Details</ArrowButton>
         
          </div>

          {/* Right side - Image */}
          <div className="relative">
            <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[593px] bg-[url(https://c.animaapp.com/mezk8qhiRH69bc/img/mask-group-1.png)] bg-cover bg-center rounded-lg" />
          </div>
        </div>
      </div>

      {/* Blog Section */}
      <div className="w-full bg-[#ffffff] py-12 sm:py-16 md:py-24 px-4 sm:px-8 lg:px-16">
        <div className="flex flex-col gap-8 sm:gap-12 md:gap-16 w-full">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6 md:gap-0 w-full">
            <div className="flex flex-col gap-3">
              <div className="font-semibold text-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center md:text-left tracking-[0] leading-tight whitespace-nowrap">
                Our Blogs
              </div>
              <p className="font-normal text-[#1e1e1e] text-sm sm:text-base tracking-[0] leading-6 max-w-lg">
                News, updates, trends and the latest tips about our asset
                management software and our company
              </p>
            </div>
            <ArrowButton onClick={() => console.log("View Details Clicked")}>View All Blogs</ArrowButton>
         
          </div>

          <BlogSlider 
            posts={[
              {
                id: "1",
                title: "'8767Unlocking Data' Award Winners – Utility Week Awards",
                excerpt: "We had a fantastic evening at the 2023 Utility Week awards where [...]",
                imageUrl: "https://c.animaapp.com/mezk8qhiRH69bc/img/union-1.svg",
                sideImageUrl: "https://c.animaapp.com/mezk8qhiRH69bc/img/group-75.png"
              },
              {
                id: "2",
                title: "Digital Transformation in Water Management",
                excerpt: "Exploring how technology is revolutionizing water utility operations [...]",
                imageUrl: "https://c.animaapp.com/mezk8qhiRH69bc/img/union-1.svg",
                sideImageUrl: "https://c.animaapp.com/mezk8qhiRH69bc/img/group-76.png"
              },
              {
                id: "3",
                title: "Sustainable Infrastructure Planning for the Future",
                excerpt: "Best practices for long-term asset management and sustainability [...]",
                imageUrl: "https://c.animaapp.com/mezk8qhiRH69bc/img/union-1.svg",
                sideImageUrl: "https://c.animaapp.com/mezk8qhiRH69bc/img/group-77.png"
              },
              {
                id: "4",
                title: "AI-Powered Asset Management Solutions",
                excerpt: "How artificial intelligence is changing infrastructure decision-making [...]",
                imageUrl: "https://c.animaapp.com/mezk8qhiRH69bc/img/union-1.svg",
                sideImageUrl: "https://c.animaapp.com/mezk8qhiRH69bc/img/group-75.png"
              },
              {
                id: "4",
                title: "AI-Powered Asset Management Solutions",
                excerpt: "How artificial intelligence is changing infrastructure decision-making [...]",
                imageUrl: "https://c.animaapp.com/mezk8qhiRH69bc/img/union-1.svg",
                sideImageUrl: "https://c.animaapp.com/mezk8qhiRH69bc/img/group-75.png"
              },
              {
                id: "4",
                title: "AI-Powered Asset Management Solutions",
                excerpt: "How artificial intelligence is changing infrastructure decision-making [...]",
                imageUrl: "https://c.animaapp.com/mezk8qhiRH69bc/img/union-1.svg",
                sideImageUrl: "https://c.animaapp.com/mezk8qhiRH69bc/img/group-75.png"
              },
              {
                id: "4",
                title: "AI-Powered Asset Management Solutions",
                excerpt: "How artificial intelligence is changing infrastructure decision-making [...]",
                imageUrl: "https://c.animaapp.com/mezk8qhiRH69bc/img/union-1.svg",
                sideImageUrl: "https://c.animaapp.com/mezk8qhiRH69bc/img/group-75.png"
              },
              {
                id: "4",
                title: "AI-Powered Asset Management Solutions",
                excerpt: "How artificial intelligence is changing infrastructure decision-making [...]",
                imageUrl: "https://c.animaapp.com/mezk8qhiRH69bc/img/union-1.svg",
                sideImageUrl: "https://c.animaapp.com/mezk8qhiRH69bc/img/group-75.png"
              },
            ]}
            onReadMore={(postId) => {
              console.log(`Read more clicked for post: ${postId}`);
              // Navigate to blog detail
              // if (typeof window !== 'undefined' && window.goToPage) {
              //   window.goToPage('blogdetail');
              // }
            }}
          />

          
        </div>
      </div>

     
    </div>
  );
};
