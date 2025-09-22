import React from "react";

export const ContactHeader = (): JSX.Element => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 mb-8 sm:mb-12 md:mb-16">
      <div className="font-outfit font-bold text-black text-3xl sm:text-4xl md:text-5xl mb-4 sm:mb-6">
        Contact us
      </div>
      
      <p className="font-outfit text-gray-800 text-sm sm:text-base leading-5 sm:leading-6 max-w-4xl">
        If you'd like to learn more about AIM, request a demo, or discuss how it
        could support your organisation or clients, we'd love to hear from you.
        Please fill out the form and we'll get back to you promptly.
      </p>
    </div>
  );
};
