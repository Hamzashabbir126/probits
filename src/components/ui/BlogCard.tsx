import React from "react";

interface BlogCardProps {
  title: string;
  excerpt: string;
  imageUrl: string;
  sideImageUrl: string;
  onReadMore?: () => void;
}

export const BlogCard = ({ 
  title, 
  excerpt, 
  imageUrl, 
  sideImageUrl, 
  onReadMore 
}: BlogCardProps): JSX.Element => {
  return (
    <div className="relative rounded-[16px] overflow-hidden h-[304px] ">
      <img
        className="w-full h-full object-cover absolute inset-0"
        alt="Blog background"
        src={imageUrl}
      />

      <div className="relative z-10 p-6 sm:p-8 flex flex-col h-full">
        <div className="flex flex-col gap-4 max-w-[65%] pr-4">
          <p className="[font-family:'Outfit',Helvetica] font-semibold text-[#000000] text-xl sm:text-2xl tracking-[0] leading-[1.2] sm:leading-[28.8px]">
            {title}
          </p>

          <p className="[font-family:'Outfit',Helvetica] font-normal text-[#000000a6] text-sm sm:text-base tracking-[0] leading-5 sm:leading-[22.4px]">
            {excerpt}
          </p>
        </div>

        <div className="flex items-center gap-2 mt-4 sm:mt-6">
          <button 
            onClick={onReadMore}
            className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity"
          >
            <div className="font-medium text-[#475467] text-sm sm:text-base">
              Read More
            </div>

            <div className="flex w-4 h-4 items-center justify-center rounded-full border border-solid border-[#667085]">
              <img
                className="w-[10.93px] h-[10.93px]"
                alt="Arrow"
                src="https://c.animaapp.com/mezk8qhiRH69bc/img/vuesax-linear-arrow-right.svg"
              />
            </div>
          </button>
        </div>
        
        <img
          className="absolute right-4 bottom-4 w-[80px] sm:w-[120px] md:w-[140px] h-auto max-h-[70%] object-cover"
          alt="Blog side image"
          src={sideImageUrl}
        />
      </div>
    </div>
  );
};