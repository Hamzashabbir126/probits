import React from "react";
import { BlogBodyContent } from "./BlogDetail/BlogBodyContent";
import { BlogInnerHeader } from "./BlogDetail/BlogInnerHeader";
import { MakeOurWorld } from "./BlogDetail/MakeOurWorld";

export const BlogDetail = (): JSX.Element => {
  return (
    <div
      className="bg-[#ffffff] w-full"
      data-model-id="598:1300"
    >
      <div className="bg-[#ffffff] w-full relative">
        <div className="w-full max-w-[90%] md:max-w-[1153px] mx-auto pt-[100px] sm:pt-[120px] md:pt-[150px]">
          <BlogInnerHeader />
          
          <img
            className="w-full h-auto aspect-[1153/582] object-cover mx-auto mt-[30px] sm:mt-[40px] md:mt-[60px]"
            alt="Https www pexels com"
            src="https://c.animaapp.com/mez24gm7aTt0yA/img/https---www-pexels-com-photo-photo-of-woman-wearing-eyeglasses-3.png"
          />
          
          <BlogBodyContent />
          
          <div className="w-full mt-[50px] sm:mt-[70px] md:mt-[100px] mb-[50px] sm:mb-[70px] md:mb-[100px]">
            <MakeOurWorld />
          </div>
        </div>
      </div>
    </div>
  );
};
