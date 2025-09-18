import React from "react";

export const Group = (): JSX.Element => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-16">
      <div className="mb-8 sm:mb-10 md:mb-12">
        <div className="font-outfit font-bold text-black text-3xl sm:text-4xl md:text-5xl mb-4 sm:mb-6">
          How to find us
        </div>
        
        <p className="font-outfit text-gray-800 text-sm sm:text-base leading-5 sm:leading-6 max-w-4xl">
          Beautiful as it is, we're a little out of the way here on Anglesey, in
          North Wales, on the east coast of Britain. But if you have occasion to
          write to us or to visit us, we are at:
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        <div>
          <p className="font-outfit font-bold text-gray-800 text-base sm:text-lg md:text-xl leading-7 sm:leading-9">
            Probit Ltd. M-SParc Menai Science Park Gaerwen, Anglesey LL60 6AG
            United Kingdom
          </p>
        </div>

        <div>
          <p className="font-outfit text-gray-800 text-sm sm:text-base mb-1 sm:mb-2">
            You can reach us by phone on
          </p>
          <div className="font-outfit font-bold text-gray-800 text-base sm:text-lg md:text-xl">
            +44 (0)1606 610002
          </div>
        </div>

        <div>
          <p className="font-outfit text-gray-800 text-sm sm:text-base mb-1 sm:mb-2">
            Or email us directly to:
          </p>
          <div className="font-outfit font-bold text-gray-800 text-base sm:text-lg md:text-xl break-words">
            support@probitconsulting.com
          </div>
        </div>

        <div>
          <p className="font-outfit text-gray-800 text-sm sm:text-base mb-1 sm:mb-2">
            The address of this site is
          </p>
          <div className="font-outfit font-bold text-gray-800 text-base sm:text-lg md:text-xl">
            www.probit.io
          </div>
        </div>
      </div>
    </div>
  );
};
