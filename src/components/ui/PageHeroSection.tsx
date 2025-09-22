import React from "react";

interface PageHeroSectionProps {
  backgroundImage: string;
  title: string;
  subtitle?: string;
  highlightWords?: string[]; // Words that should have green background
}

export const PageHeroSection = ({ 
  backgroundImage, 
  title, 
  subtitle, 
  highlightWords = [] 
}: PageHeroSectionProps): JSX.Element => {
  
  // Function to highlight specific words
  const renderTextWithHighlights = (text: string) => {
    if (highlightWords.length === 0) {
      return <span className="text-black">{text}</span>;
    }

    let parts = [text];
    
    highlightWords.forEach(word => {
      const newParts: string[] = [];
      parts.forEach(part => {
        if (typeof part === 'string') {
          const splitParts = part.split(new RegExp(`(${word})`, 'gi'));
          newParts.push(...splitParts);
        } else {
          newParts.push(part);
        }
      });
      parts = newParts;
    });

    return parts.map((part, index) => {
      const isHighlighted = highlightWords.some(word => 
        part.toLowerCase() === word.toLowerCase()
      );
      
      return (
        <span 
          key={index}
          className={isHighlighted ? "text-black bg-[#d7ffb1] px-2 py-1 rounded-full" : "text-white"}
        >
          {part}
        </span>
      );
    });
  };

  return (
    <div className="relative w-full h-[300px] sm:h-[400px] md:h-[526px]">
      <img
        className="w-full h-full object-cover"
        alt="Hero background"
        src={backgroundImage}
      />
      <div className="absolute inset-0 bg-[#26262642]" />
      
      <div className="absolute inset-0 flex items-center justify-center px-4">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-xs sm:max-w-xl md:max-w-2xl px-4">
          <div className="flex flex-col w-full items-center gap-2 relative">
            <p className="w-full [font-family:'Outfit',Helvetica] font-bold text-[28px] sm:text-[40px] md:text-[52px] text-center tracking-[0] leading-[1.2]">
              {renderTextWithHighlights(title)}
            </p>
            {subtitle && (
              <p className="w-full [font-family:'Outfit',Helvetica] font-normal text-[#ffffff] text-[16px] sm:text-[18px] md:text-[20px] text-center tracking-[0] leading-[1.3] mt-2">
                {subtitle}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};