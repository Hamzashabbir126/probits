import React from "react";
import { PageHeroSection } from "../components/ui/PageHeroSection";

// Import existing components with exact paths
import { BlogCategory1 } from "../components/Blog/BlogCategory1";
import { BlogCategory2 } from "../components/Blog/BlogCategory2";
import { BlogSearchBar } from "../components/Blog/BlogSearchBar";
import { BlogFeaturedPosts } from "../components/Blog/BlogFeaturedPosts";

export const BlogPage = (): JSX.Element => {
  return (
    <div
      className="bg-[#ffffff] w-full min-h-screen pt-14 sm:pt-0 overflow-x-hidden"
      data-model-id="248:467"
    >
      <div className="bg-[#ffffff] w-full relative">
        {/* Hero section */}
        <PageHeroSection 
          backgroundImage="https://c.animaapp.com/mezk8qhiRH69bc/img/23232-333604632-tiny-1.png"
          title="Our Blog"
          highlightWords={["Our Blog"]}
        />

        {/* Navbar ribbon (flowing) */}
        <div className="w-full h-auto py-3 md:h-[61px] bg-[#5da502] overflow-hidden">
          <div className="flex flex-wrap w-full h-full items-center justify-center gap-3 sm:gap-4 md:gap-8 px-2 sm:px-4 md:px-8 py-0">
            <div className="[font-family:'Roboto',Helvetica] font-normal text-[#d7ffb1] text-sm sm:text-base md:text-xl">Green the planet</div>
            <img className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" alt="Fi" src="https://c.animaapp.com/mez1gtpiAT6jQW/img/fi-3127084.svg" />
            <div className="[font-family:'Roboto',Helvetica] font-normal text-[#d7ffb1] text-sm sm:text-base md:text-xl">Cut carbon waste</div>
            <img className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" alt="Fi" src="https://c.animaapp.com/mez1gtpiAT6jQW/img/fi-3127084.svg" />
            <div className="[font-family:'Roboto',Helvetica] font-normal text-[#d7ffb1] text-sm sm:text-base md:text-xl">Plan for resilience</div>
            <img className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 hidden sm:block" alt="Fi" src="https://c.animaapp.com/mez1gtpiAT6jQW/img/fi-3127084.svg" />
            <div className="[font-family:'Roboto',Helvetica] font-normal text-[#d7ffb1] text-sm sm:text-base md:text-xl hidden sm:block">Value public outcomes</div>
            <img className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 hidden md:block" alt="Fi" src="https://c.animaapp.com/mez1gtpiAT6jQW/img/fi-3127084.svg" />
            <div className="[font-family:'Roboto',Helvetica] font-normal text-[#d7ffb1] text-sm sm:text-base md:text-xl hidden md:block">Target net zero</div>
          </div>
        </div>

        {/* Content Container */}
        <div className="w-full max-w-[1920px] mx-auto">
          {/* Search Bar */}
          <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 py-4 sm:py-6 md:py-8">
            <BlogSearchBar />
          </div>

          {/* Featured + Recent */}
          <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 py-4 sm:py-6 md:py-8">
            <BlogFeaturedPosts />
          </div>

          {/* Category 1 */}
          <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 py-4 sm:py-6 md:py-8">
            <BlogCategory1 />
          </div>

          {/* Category 2 */}
          <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 py-4 sm:py-6 md:py-8">
            <BlogCategory2 />
          </div>
        </div>
      </div>
    </div>
  );
};