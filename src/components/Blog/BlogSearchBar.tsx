import React, { useState } from "react";

export const BlogSearchBar = (): JSX.Element => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const categories = [
    { value: "", label: "Select Category" },
    { value: "infrastructure", label: "Infrastructure" },
    { value: "water-management", label: "Water Management" },
    { value: "asset-management", label: "Asset Management" },
    { value: "sustainability", label: "Sustainability" },
    { value: "technology", label: "Technology" },
    { value: "consulting", label: "Consulting" },
  ];

  const handleSearch = () => {
    console.log("Search clicked:", { searchTerm, selectedCategory });
    // Add your search logic here
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="w-full mx-auto px-0">
      <div className="flex flex-col sm:flex-row w-full h-auto sm:h-[78px] border border-[#00000033] rounded-[12px] overflow-hidden bg-white">
        <div className="flex-1 relative flex items-center px-3 sm:px-6 py-3 sm:py-0">
          {/* Search Input */}
          <div className="flex-1 flex items-center">
            <img className="w-[15px] h-[15px] sm:w-[17px] sm:h-[17px] mr-2 sm:mr-3" alt="Search" src="https://c.animaapp.com/mez1gtpiAT6jQW/img/search-1.svg" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Search Here..."
              className="flex-1 font-body-regular-m-web text-primary-900 text-sm sm:text-base bg-transparent border-none outline-none placeholder-gray-500"
            />
          </div>

          {/* Separator */}
          <span className="mx-2 sm:mx-4 w-px h-6 sm:h-9 bg-[#0000001A]"></span>

          {/* Category Selector */}
          <div className="flex items-center relative">
            <img className="w-5 h-5 sm:w-6 sm:h-6 mr-1 sm:mr-2" alt="Label" src="https://c.animaapp.com/mez1gtpiAT6jQW/img/label-1.svg" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="font-body-regular-m-web text-primary-900 text-sm sm:text-base bg-transparent border-none outline-none cursor-pointer appearance-none pr-4"
            >
              {categories.map((category) => (
                <option key={category.value} value={category.value}>
                  {category.label}
                </option>
              ))}
            </select>
            <img className="w-2 h-2 sm:w-3 sm:h-3 ml-1 sm:ml-2 pointer-events-none" alt="Arrow down" src="https://c.animaapp.com/mez1gtpiAT6jQW/img/arrow-down-sign-to-navigate-2.svg" />
          </div>
        </div>
        
        <button 
          onClick={handleSearch}
          className="w-full sm:w-[180px] h-10 sm:h-auto py-2 sm:py-0 bg-[#5da502] text-white text-sm sm:text-base flex items-center justify-center hover:bg-[#4a8502] transition-colors duration-300 cursor-pointer"
        >
          Search Now
        </button>
      </div>
    </div>
  );
};
