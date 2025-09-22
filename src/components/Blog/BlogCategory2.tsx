import React from "react";
import { BlogSlider } from "../ui";

export const BlogCategory2 = () => {
  return (
    <div className="flex flex-col w-full items-start px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16 bg-[#ffffff]">
      <div className="flex flex-col w-full items-start gap-3 mb-8 md:mb-10">
        <div className="[font-family:'Outfit',Helvetica] font-semibold text-[#000000] text-3xl sm:text-4xl md:text-5xl text-left tracking-[0] leading-[1.2] md:leading-[57.6px]">
          Category 2
        </div>

        <p className="w-full md:max-w-[537px] [font-family:'Outfit',Helvetica] font-normal text-[#1e1e1e] text-sm sm:text-base tracking-[0] leading-5 sm:leading-6">
          News, updates, trends and the latest tips about our asset management
          software and our company
        </p>
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
  );
};