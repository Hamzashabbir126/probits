import React from "react";


export const OverlapGroupWrapper = (): JSX.Element => {
  return (
    <div className="w-full mx-auto px-0">
      <div className="flex flex-col sm:flex-row w-full h-auto sm:h-[78px] border border-[#00000033] rounded-[12px] overflow-hidden">
        <div className="flex-1 relative flex items-center px-3 sm:px-6 py-3 sm:py-0">
          <img className="w-[15px] h-[15px] sm:w-[17px] sm:h-[17px] mr-2 sm:mr-3" alt="Search" src="https://c.animaapp.com/mez1gtpiAT6jQW/img/search-1.svg" />
          <span className="font-body-regular-m-web text-primary-900 text-sm sm:text-base truncate">Search Here...</span>
          <img className="w-5 h-5 sm:w-6 sm:h-6 ml-auto" alt="Label" src="https://c.animaapp.com/mez1gtpiAT6jQW/img/label-1.svg" />
          <span className="mx-2 sm:mx-4 w-px h-6 sm:h-9 bg-[#0000001A]"></span>
          <span className="font-body-regular-m-web text-primary-900 text-sm sm:text-base truncate">Select Category</span>
          <img className="w-2 h-2 sm:w-3 sm:h-3 ml-1 sm:ml-2" alt="Arrow down" src="https://c.animaapp.com/mez1gtpiAT6jQW/img/arrow-down-sign-to-navigate-2.svg" />
        </div>
        <button className="w-full sm:w-[180px] h-10 sm:h-auto py-2 sm:py-0 bg-[#5da502] text-white text-sm sm:text-base flex items-center justify-center">Search Now</button>
      </div>
    </div>
  );
};
