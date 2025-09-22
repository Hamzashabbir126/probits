import React from "react";

export const BlogFeaturedPosts = (): JSX.Element => {
  const onViewDetails = () => {
    if (typeof window !== 'undefined' && (window as any).goToPage) {
      (window as any).goToPage('blogdetail');
    }
  };

  return (
    <div className="w-full mx-auto px-0">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
        {/* Featured Post */}
        <div>
          <div className="[font-family:'Outfit',Helvetica] font-bold text-black text-2xl sm:text-3xl md:text-4xl tracking-[-1px] sm:tracking-[-2.00px] leading-9 sm:leading-[48px]">Featured Post</div>
          <div className="mt-4 sm:mt-6">
            <img
              className="w-full h-[200px] sm:h-[280px] md:h-[352px] object-cover"
              alt="Https www pexels com"
              src="https://c.animaapp.com/mez1gtpiAT6jQW/img/https---www-pexels-com-photo-white-concrete-building-1838640-.png"
            />
            <div className="mt-3 sm:mt-4">
              <p className="[font-family:'Outfit',Helvetica] font-bold text-black text-xl sm:text-2xl md:text-[28px] leading-7 sm:leading-9 md:leading-10">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
              </p>
              <p className="mt-2 sm:mt-3 [font-family:'Outfit',Helvetica] text-xs sm:text-sm">
                <span className="font-medium text-[#4c4c4c]">By </span>
                <span className="font-medium text-[#592ea9]">John Doe</span>
                <span className="font-medium text-[#4c4c4c]">  ·  May 23, 2022</span>
              </p>
            </div>
            <div className="flex items-center mt-4 sm:mt-6">
              <div onClick={onViewDetails} className="inline-flex cursor-pointer h-[40px] sm:h-[52px] items-center gap-2 pl-4 sm:pl-6 pr-6 sm:pr-8 py-4 sm:py-6 rounded-[30px] sm:rounded-[44px] border-[0.8px] border-solid border-[#475467]">
                <div className="font-body-regular-m-web text-primary-900 text-sm sm:text-base">View Details</div>
              </div>
              <div className="flex w-[40px] h-[40px] sm:w-[52px] sm:h-[52px] items-center justify-center -ml-4 sm:-ml-5 bg-[#5da502] rounded-full">
                <img className="w-[20px] h-[20px] sm:w-[30.05px] sm:h-[30.05px]" alt="Vuesax linear arrow" src="https://c.animaapp.com/mez1gtpiAT6jQW/img/vuesax-linear-arrow-right.svg" />
              </div>
            </div>
          </div>
        </div>

        {/* Recent Posts */}
        <div>
          <div className="[font-family:'Outfit',Helvetica] font-bold text-black text-2xl sm:text-3xl md:text-4xl tracking-[-1px] sm:tracking-[-2.00px] leading-9 sm:leading-[48px] mt-6 lg:mt-0">Recent Posts</div>
          <div className="mt-4 sm:mt-6 space-y-4 sm:space-y-6">
            <div className="bg-light p-4 sm:p-6">
              <p className="[font-family:'Outfit',Helvetica] text-xs sm:text-sm">
                <span className="font-medium text-[#4c4c4c]">By </span>
                <span className="font-medium text-[#592ea9]">John Deo</span>
                <span className="font-medium text-[#4c4c4c]">  ·  Aug 23, 2021</span>
              </p>
              <p className="mt-2 sm:mt-3 [font-family:'Outfit',Helvetica] font-bold text-black text-lg sm:text-xl md:text-2xl">
                8 Figma design systems that you can download for free today.
              </p>
            </div>
            <div className="bg-light-yellow p-4 sm:p-6">
              <p className="[font-family:'Outfit',Helvetica] text-xs sm:text-sm">
                <span className="font-medium text-[#4c4c4c]">By </span>
                <span className="font-medium text-[#592ea9]">John Doe</span>
                <span className="font-medium text-[#4c4c4c]">  ·  Aug 23, 2021</span>
              </p>
              <p className="mt-2 sm:mt-3 [font-family:'Outfit',Helvetica] font-bold text-black text-lg sm:text-xl md:text-2xl">
                8 Figma design systems that you can download for free today.
              </p>
            </div>
            <div className="bg-light p-4 sm:p-6">
              <p className="[font-family:'Outfit',Helvetica] text-xs sm:text-sm">
                <span className="font-medium text-[#4c4c4c]">By </span>
                <span className="font-medium text-[#592ea9]">John Doe</span>
                <span className="font-medium text-[#4c4c4c]">  ·  Aug 23, 2021</span>
              </p>
              <p className="mt-2 sm:mt-3 [font-family:'Outfit',Helvetica] font-bold text-black text-lg sm:text-xl md:text-2xl">
                8 Figma design systems that you can download for free today.
              </p>
            </div>
            <div className="bg-light p-4 sm:p-6 hidden sm:block">
              <p className="[font-family:'Outfit',Helvetica] text-xs sm:text-sm">
                <span className="font-medium text-[#4c4c4c]">By </span>
                <span className="font-medium text-[#592ea9]">John Doe</span>
                <span className="font-medium text-[#4c4c4c]">  ·  Aug 23, 2021</span>
              </p>
              <p className="mt-2 sm:mt-3 [font-family:'Outfit',Helvetica] font-bold text-black text-lg sm:text-xl md:text-2xl">
                8 Figma design systems that you can download for free today.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
