import React from "react";

interface HeroSectionProps {
  title: string;
  backgroundImage: string;
  overlayColor?: string;
  children?: React.ReactNode;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  backgroundImage,
  overlayColor = "#26262642",
  children
}) => {
  return (
    <div className="relative w-full h-[300px] sm:h-[400px] md:h-[526px]">
      <img
        className="w-full h-full object-cover"
        alt="Hero background"
        src={backgroundImage}
      />
      <div className="absolute inset-0" style={{ backgroundColor: overlayColor }} />
      
      <div className="absolute inset-0 flex items-center justify-center px-4">
        <div className="w-full max-w-[562px] text-center">
          <div className="bg-[#d7ffb1] rounded-[49.78px] px-8 py-3 sm:py-4">
            <h1 className="font-outfit font-bold text-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
              {title}
            </h1>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};