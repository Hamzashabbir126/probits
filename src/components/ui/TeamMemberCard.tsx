import React, { useState } from "react";

interface TeamMemberCardProps {
  name: string;
  title: string;
  description?: string;
  imageUrl: string;
}

export const TeamMemberCard = ({ 
  name, 
  title, 
  description, 
  imageUrl 
}: TeamMemberCardProps): JSX.Element => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`w-[80%] sm:w-[45%] md:w-[18.8%] rounded-[11.46px] bg-cover bg-center relative mb-4 sm:mb-0 transition-all duration-300 ease-in-out ${
        isHovered ? 'h-[240px] sm:h-[260px] md:h-[30.8vh]' : 'h-[200px] sm:h-[220px] md:h-[26.3vh]'
      }`}
      style={{ backgroundImage: `url(${imageUrl})` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 rounded-[16.37px] bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0.38)_30%,rgba(0,0,0,1)_100%)]" />
      
      <div className="absolute w-[90%] sm:w-[80%] left-[15px] sm:left-[1.2vw] right-[15px] sm:right-[1.2vw] bottom-[10px] sm:bottom-[1.4vh]">
        <div className="[font-family:'Outfit',Helvetica] font-light text-[#c2c2c2] text-xs sm:text-[14.7px] tracking-[0.25px] leading-[normal] mb-2">
          {title}
        </div>
        
        {isHovered && description && (
          <p className="[font-family:'Outfit',Helvetica] font-light text-[#c2c2c2] text-xs sm:text-sm tracking-[0.25px] leading-[1.4] mb-2 overflow-hidden line-clamp-3 sm:line-clamp-4 transition-opacity duration-300 ease-in-out">
            {description}
          </p>
        )}
        
        <div className="[font-family:'Outfit',Helvetica] font-normal text-white text-xs sm:text-[14.7px] tracking-[0.25px] leading-[normal]">
          {name}
        </div>
      </div>
    </div>
  );
};