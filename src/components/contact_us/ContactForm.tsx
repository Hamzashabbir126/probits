import React, { useState } from "react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  isConsultant: boolean;
  worksWithinOrganisation: boolean;
  replyBy: 'email' | 'phone';
  message: string;
}

export const ContactForm = (): JSX.Element => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    isConsultant: false,
    worksWithinOrganisation: false,
    replyBy: 'email',
    message: ''
  });

  const handleInputChange = (field: keyof FormData, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleCheckboxChange = (field: 'isConsultant' | 'worksWithinOrganisation') => {
    setFormData(prev => ({
      ...prev,
      [field]: !prev[field],
      // If one is selected, unselect the other
      [field === 'isConsultant' ? 'worksWithinOrganisation' : 'isConsultant']: false
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
      {/* First Row - Name, Email, Phone */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
        <div className="flex flex-col">
          <label className="font-inter text-black text-base sm:text-lg mb-2">
            YOUR NAME *
          </label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => handleInputChange('name', e.target.value)}
            className="pt-2 pb-4 sm:pb-6 px-2 border-b border-gray-300 bg-transparent font-inter text-black text-base sm:text-lg placeholder-gray-400 focus:border-[#5da502] focus:outline-none transition-colors"
            placeholder="Enter your name"
            required
          />
        </div>

        <div className="flex flex-col">
          <label className="font-inter text-black text-base sm:text-lg mb-2">
            EMAIL *
          </label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            className="pt-2 pb-4 sm:pb-6 px-2 border-b border-gray-300 bg-transparent font-inter text-black text-base sm:text-lg placeholder-gray-400 focus:border-[#5da502] focus:outline-none transition-colors"
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="flex flex-col">
          <label className="font-inter text-black text-base sm:text-lg mb-2">
            PHONE
          </label>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => handleInputChange('phone', e.target.value)}
            className="pt-2 pb-4 sm:pb-6 px-2 border-b border-gray-300 bg-transparent font-inter text-black text-base sm:text-lg placeholder-gray-400 focus:border-[#5da502] focus:outline-none transition-colors"
            placeholder="Enter your phone number"
          />
        </div>
      </div>

      {/* Second Row - Company */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
        <div className="flex flex-col">
          <label className="font-inter text-black text-base sm:text-lg mb-2">
            COMPANY
          </label>
          <input
            type="text"
            value={formData.company}
            onChange={(e) => handleInputChange('company', e.target.value)}
            className="pt-2 pb-4 sm:pb-6 px-2 border-b border-gray-300 bg-transparent font-inter text-black text-base sm:text-lg placeholder-gray-400 focus:border-[#5da502] focus:outline-none transition-colors"
            placeholder="Enter your company name"
          />
        </div>
      </div>

      {/* Checkboxes Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
        <div className="flex items-center gap-3 sm:gap-4 cursor-pointer" onClick={() => handleCheckboxChange('isConsultant')}>
          <div className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 flex items-center justify-center transition-colors ${
            formData.isConsultant ? 'bg-[#5da502] border-[#5da502]' : 'border-gray-300'
          }`}>
            {formData.isConsultant && (
              <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            )}
          </div>
          <label className="font-inter text-black text-sm sm:text-base md:text-lg cursor-pointer">
            I AM A CONSULTANT
          </label>
        </div>

        <div className="flex items-center gap-3 sm:gap-4 cursor-pointer" onClick={() => handleCheckboxChange('worksWithinOrganisation')}>
          <div className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 flex items-center justify-center transition-colors ${
            formData.worksWithinOrganisation ? 'bg-[#5da502] border-[#5da502]' : 'border-gray-300'
          }`}>
            {formData.worksWithinOrganisation && (
              <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            )}
          </div>
          <label className="font-inter text-black text-sm sm:text-base md:text-lg cursor-pointer">
            I WORK WITHIN AN ASSET-OWNING ORGANISATION
          </label>
        </div>
      </div>

      {/* Reply Preference Row */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
        <div className="font-inter text-black text-sm sm:text-base md:text-lg flex items-center">
          PLEASE REPLY TO ME BY:
        </div>

        <div className="flex items-center gap-3 sm:gap-4 cursor-pointer" onClick={() => handleInputChange('replyBy', 'email')}>
          <div className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 flex items-center justify-center transition-colors ${
            formData.replyBy === 'email' ? 'bg-[#5da502] border-[#5da502]' : 'border-gray-300'
          }`}>
            {formData.replyBy === 'email' && (
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-white rounded-full"></div>
            )}
          </div>
          <label className="font-inter text-black text-sm sm:text-base md:text-lg cursor-pointer">
            EMAIL
          </label>
        </div>

        <div className="flex items-center gap-3 sm:gap-4 cursor-pointer" onClick={() => handleInputChange('replyBy', 'phone')}>
          <div className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 flex items-center justify-center transition-colors ${
            formData.replyBy === 'phone' ? 'bg-[#5da502] border-[#5da502]' : 'border-gray-300'
          }`}>
            {formData.replyBy === 'phone' && (
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-white rounded-full"></div>
            )}
          </div>
          <label className="font-inter text-black text-sm sm:text-base md:text-lg cursor-pointer">
            PHONE
          </label>
        </div>
      </div>

      {/* Message Field */}
      <div className="w-full mb-6 sm:mb-8">
        <label className="font-inter text-black text-base sm:text-lg mb-2 block">
          MESSAGE *
        </label>
        <textarea
          value={formData.message}
          onChange={(e) => handleInputChange('message', e.target.value)}
          className="w-full pt-2 pb-4 px-2 border-b border-gray-300 bg-transparent font-inter text-black text-base sm:text-lg placeholder-gray-400 focus:border-[#5da502] focus:outline-none transition-colors resize-none min-h-[100px]"
          placeholder="Enter your message here..."
          required
        />
      </div>

      {/* Submit Button */}
      <div className="flex justify-center mb-8">
        <button
          type="submit"
          className="px-8 py-3 bg-[#5da502] text-white font-inter font-medium text-base sm:text-lg rounded-[6px] hover:bg-[#4a8502] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#5da502] focus:ring-offset-2"
        >
          Send Message
        </button>
      </div>
    </form>
  );
};
