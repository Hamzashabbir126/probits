import React from "react";

interface InfoBannerProps {
  items: string[];
  backgroundColor?: string;
  textColor?: string;
  iconSrc?: string;
}

export const InfoBanner: React.FC<InfoBannerProps> = ({
  items,
  backgroundColor = "#5da502",
  textColor = "#d7ffb1",
  iconSrc = "https://c.animaapp.com/mezk8qhiRH69bc/img/fi-3127084.svg"
}) => {
  return (
    <div 
      className="w-full h-auto py-3 sm:py-2 sm:h-[61px] flex flex-wrap sm:flex-nowrap items-center justify-center gap-4 sm:gap-8 px-4 sm:px-8 overflow-hidden"
      style={{ backgroundColor }}
    >
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <div 
            className="font-medium text-base sm:text-lg md:text-xl tracking-[0.40px] leading-[24.0px] whitespace-nowrap"
            style={{ color: textColor }}
          >
            {item}
          </div>
          {index < items.length - 1 && (
            <img className="w-6 h-6 sm:w-8 sm:h-8" alt="Separator" src={iconSrc} />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};