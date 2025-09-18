import React from "react";

export const DivWrapper = (): JSX.Element => {
  return (
    <div className="relative w-full">
      {/* Consulting Partners Section */}
      <div className="w-full bg-neutral-100 py-16 sm:py-24 md:py-32 px-4 sm:px-8 lg:px-16">
        <div className="flex flex-col items-center gap-6 sm:gap-8 md:gap-10 w-full">
          <div className="relative w-full max-w-4xl">
            <div className="relative">
              <div className="absolute top-10 sm:top-12 md:top-16 left-0 w-full h-8 sm:h-12 md:h-16 bg-[#d7ffb1] rounded-[30px] sm:rounded-[50px] md:rounded-[68px]" />
              <p className="relative z-10 w-full font-semibold text-black text-xl sm:text-2xl md:text-3xl lg:text-5xl text-center tracking-[0] leading-tight pt-2 sm:pt-3 md:pt-4">
                Put AIM's powerful asset investment planning platform to work for
                your consulting clients.
              </p>
            </div>
          </div>

          <p className="w-full max-w-4xl font-normal text-[#1e1e1e] text-sm sm:text-base text-center tracking-[0] leading-6">
            For consultants working with infrastructure and utility clients, AIM
            provides a unique combination of risk modelling, scenario analysis,
            investment optimisation and strategic justification capabilities in a
            single, integrated platform, and an unparalleled level of insight and
            control.
          </p>

          <button className="inline-flex items-center justify-center">
            <button className="inline-flex h-[40px] sm:h-[52px] items-center justify-center gap-2 pl-4 sm:pl-6 pr-6 sm:pr-8 py-4 sm:py-6 rounded-[44px] border-[0.8px] border-solid border-[#475467]">
              <div className="font-medium text-[#1e1e1e] text-sm sm:text-base whitespace-nowrap">
                View Details
              </div>
            </button>
            <div className="flex w-[40px] h-[40px] sm:w-[52px] sm:h-[52px] items-center justify-center -ml-4 sm:-ml-5 bg-[#5da502] rounded-full">
              <img
                className="w-[20px] h-[20px] sm:w-[30px] sm:h-[30px]"
                alt="Vuesax linear arrow"
                src="https://c.animaapp.com/mezk8qhiRH69bc/img/vuesax-linear-arrow-right.svg"
              />
            </div>
          </button>

          <img
            className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl"
            alt="Frame"
            src="https://c.animaapp.com/mezk8qhiRH69bc/img/frame-1000011657.svg"
          />
        </div>
      </div>

      {/* Support Services Section */}
      <div className="w-full h-[500px] sm:h-[600px] md:h-[700px] lg:h-[770px] bg-[url(https://c.animaapp.com/mezk8qhiRH69bc/img/content.png)] bg-cover bg-center relative">
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <div className="relative z-10 flex items-center justify-center lg:justify-end h-full px-4 sm:px-8 lg:px-16">
          <div className="w-full max-w-2xl space-y-4 sm:space-y-6 text-center lg:text-right">
            <p className="font-semibold text-[#f5f8f3] text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-[0] leading-tight">
              A full range of support to help you work with AIM.
            </p>

            <p className="font-normal text-[#f5f8f3] text-sm sm:text-base tracking-[0] leading-6">
              While AIM is designed to be used by in-house teams and consulting
              partners working on investment planning, we offer services to
              support implementation, integration, configuration and modelling,
              when these are needed.
            </p>

            <button className="inline-flex items-center justify-center">
              <button className="inline-flex h-[40px] sm:h-[52px] items-center justify-center gap-2 pl-4 sm:pl-6 pr-6 sm:pr-8 py-4 sm:py-6 rounded-[44px] border-[0.8px] border-solid border-[#ffffff]">
                <div className="font-medium text-[#ffffff] text-sm sm:text-base whitespace-nowrap">
                  View Details
                </div>
              </button>
              <div className="flex w-[40px] h-[40px] sm:w-[52px] sm:h-[52px] items-center justify-center -ml-4 sm:-ml-5 bg-[#f5f8f3] rounded-full">
                <img
                  className="w-[20px] h-[20px] sm:w-[30px] sm:h-[30px]"
                  alt="Vuesax linear arrow"
                  src="https://c.animaapp.com/mezk8qhiRH69bc/img/vuesax-linear-arrow-right.svg"
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Get in Touch Section */}
      <div className="w-full bg-[#dfffb6] py-12 sm:py-16 md:py-24 px-4 sm:px-8 lg:px-16">
        <div className="flex flex-col items-center gap-4 sm:gap-6 w-full">
          <div className="w-full max-w-3xl text-center">
            <div className="font-semibold text-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-[0] leading-tight">
              Get in touch
            </div>

            <p className="mt-3 sm:mt-4 md:mt-6 font-normal text-[#1e1e1e] text-sm sm:text-base text-center tracking-[0] leading-6">
              If you are an asset owner, or a consulting firm advising on asset
              value optimisation and investment strategy, let us show you the
              difference AIM could make.
            </p>
          </div>

          <button className="inline-flex items-center justify-center mt-3 sm:mt-4 md:mt-6">
            <button className="inline-flex h-[40px] sm:h-[52px] items-center justify-center gap-2 pl-4 sm:pl-6 pr-6 sm:pr-8 py-4 sm:py-6 rounded-[44px] border-[0.8px] border-solid border-[#475467]">
              <div className="font-medium text-[#1e1e1e] text-sm sm:text-base whitespace-nowrap">
                View Details
              </div>
            </button>
            <div className="flex w-[40px] h-[40px] sm:w-[52px] sm:h-[52px] items-center justify-center -ml-4 sm:-ml-5 bg-[#5da502] rounded-full">
              <img
                className="w-[20px] h-[20px] sm:w-[30px] sm:h-[30px]"
                alt="Vuesax linear arrow"
                src="https://c.animaapp.com/mezk8qhiRH69bc/img/vuesax-linear-arrow-right.svg"
              />
            </div>
          </button>
        </div>
      </div>

      {/* Probit Section */}
      <div className="w-full py-12 sm:py-16 md:py-24 px-4 sm:px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center w-full">
          {/* Left side - Content */}
          <div className="space-y-4 sm:space-y-6">
            <p className="font-bold text-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-[0] leading-tight">
              Probit. Optimisation and asset analytics for infrastructure
              since 2010.
            </p>

            <p className="font-normal text-[#1e1e1e] text-sm sm:text-base tracking-[0] leading-6">
              Headquartered on Anglesey, Wales, UK, Probit is the software
              company behind AIM, the investment optimisation platform trusted
              by infrastructure operators and advisors around the world
            </p>

            <button className="inline-flex items-center justify-center">
              <button className="inline-flex h-[40px] sm:h-[52px] items-center justify-center gap-2 pl-4 sm:pl-6 pr-6 sm:pr-8 py-4 sm:py-6 rounded-[44px] border-[0.8px] border-solid border-[#475467]">
                <div className="font-medium text-[#1e1e1e] text-sm sm:text-base whitespace-nowrap">
                  View Details
                </div>
              </button>
              <div className="flex w-[40px] h-[40px] sm:w-[52px] sm:h-[52px] items-center justify-center -ml-4 sm:-ml-5 bg-[#5da502] rounded-full">
                <img
                  className="w-[20px] h-[20px] sm:w-[30px] sm:h-[30px]"
                  alt="Vuesax linear arrow"
                  src="https://c.animaapp.com/mezk8qhiRH69bc/img/vuesax-linear-arrow-right.svg"
                />
              </div>
            </button>
          </div>

          {/* Right side - Image */}
          <div className="relative">
            <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[593px] bg-[url(https://c.animaapp.com/mezk8qhiRH69bc/img/mask-group-1.png)] bg-cover bg-center rounded-lg" />
          </div>
        </div>
      </div>

      {/* Blog Section */}
      <div className="w-full bg-[#ffffff] py-12 sm:py-16 md:py-24 px-4 sm:px-8 lg:px-16">
        <div className="flex flex-col gap-8 sm:gap-12 md:gap-16 w-full">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6 md:gap-0 w-full">
            <div className="flex flex-col gap-3">
              <div className="font-semibold text-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center md:text-left tracking-[0] leading-tight whitespace-nowrap">
                Our Blogs
              </div>
              <p className="font-normal text-[#1e1e1e] text-sm sm:text-base tracking-[0] leading-6 max-w-lg">
                News, updates, trends and the latest tips about our asset
                management software and our company
              </p>
            </div>

            <button className="inline-flex items-center justify-center self-center md:self-auto">
              <button className="inline-flex h-[40px] sm:h-[52px] items-center justify-center gap-2 pl-4 sm:pl-6 pr-6 sm:pr-8 py-4 sm:py-6 rounded-[44px] border-[0.8px] border-solid border-[#475467]">
                <div className="font-medium text-[#1e1e1e] text-sm sm:text-base whitespace-nowrap">
                  View All Blogs
                </div>
              </button>
              <div className="flex w-[40px] h-[40px] sm:w-[52px] sm:h-[52px] items-center justify-center -ml-4 sm:-ml-5 bg-[#5da502] rounded-full">
                <img
                  className="w-[20px] h-[20px] sm:w-[30px] sm:h-[30px]"
                  alt="Vuesax linear arrow"
                  src="https://c.animaapp.com/mezk8qhiRH69bc/img/vuesax-linear-arrow-right.svg"
                />
              </div>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {/* Blog Card 1 */}
            <div className="flex flex-col gap-2.5 rounded-[20px] sm:rounded-[30px] md:rounded-[50px] bg-white shadow-lg overflow-hidden">
              <div className="relative">
                <img
                  className="w-full h-[250px] sm:h-[304px] object-cover"
                  alt="Union"
                  src="https://c.animaapp.com/mezk8qhiRH69bc/img/union-1.svg"
                />
                <div className="absolute inset-0 p-4 sm:p-6 flex items-end">
                  <div className="flex items-center gap-4 sm:gap-6 w-full">
                    <div className="flex flex-col gap-4 sm:gap-6 flex-1">
                      <div className="flex flex-col gap-2 sm:gap-4">
                        <p className="font-semibold text-black text-base sm:text-xl tracking-[0] leading-tight">
                          'Unlocking Data' Award Winners – Utility Week Awards
                        </p>
                        <p className="font-normal text-[#000000a6] text-xs sm:text-sm tracking-[0] leading-tight">
                          We had a fantastic evening at the 2023 Utility Week
                          awards where [...]
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="font-medium text-[#1e1e1e] text-xs sm:text-sm whitespace-nowrap">
                          Read More
                        </div>
                        <div className="w-4 h-4 border border-solid border-[#667085] flex items-center justify-center rounded-full">
                          <img
                            className="w-3 h-3"
                            alt="Vuesax linear arrow"
                            src="https://c.animaapp.com/mezk8qhiRH69bc/img/vuesax-linear-arrow-right.svg"
                          />
                        </div>
                      </div>
                    </div>
                    <img
                      className="w-[80px] h-[120px] sm:w-[120px] sm:h-[160px] object-cover rounded-lg"
                      alt="Group"
                      src="https://c.animaapp.com/mezk8qhiRH69bc/img/group-75.png"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Blog Card 2 */}
            <div className="flex flex-col gap-2.5 rounded-[20px] sm:rounded-[30px] md:rounded-[50px] bg-white shadow-lg overflow-hidden">
              <div className="relative">
                <img
                  className="w-full h-[250px] sm:h-[304px] object-cover"
                  alt="Union"
                  src="https://c.animaapp.com/mezk8qhiRH69bc/img/union-1.svg"
                />
                <div className="absolute inset-0 p-4 sm:p-6 flex items-end">
                  <div className="flex items-center gap-4 sm:gap-6 w-full">
                    <div className="flex flex-col gap-4 sm:gap-6 flex-1">
                      <div className="flex flex-col gap-2 sm:gap-4">
                        <p className="font-semibold text-black text-base sm:text-xl tracking-[0] leading-tight">
                          'Unlocking Data' Award Winners – Utility Week Awards
                        </p>
                        <p className="font-normal text-[#000000a6] text-xs sm:text-sm tracking-[0] leading-tight">
                          We had a fantastic evening at the 2023 Utility Week
                          awards where [...]
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="font-medium text-[#1e1e1e] text-xs sm:text-sm whitespace-nowrap">
                          Read More
                        </div>
                        <div className="w-4 h-4 border border-solid border-[#667085] flex items-center justify-center rounded-full">
                          <img
                            className="w-3 h-3"
                            alt="Vuesax linear arrow"
                            src="https://c.animaapp.com/mezk8qhiRH69bc/img/vuesax-linear-arrow-right.svg"
                          />
                        </div>
                      </div>
                    </div>
                    <img
                      className="w-[80px] h-[120px] sm:w-[120px] sm:h-[160px] object-cover rounded-lg"
                      alt="Group"
                      src="https://c.animaapp.com/mezk8qhiRH69bc/img/group-76.png"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Blog Card 3 */}
            <div className="flex flex-col gap-2.5 rounded-[20px] sm:rounded-[30px] md:rounded-[50px] bg-white shadow-lg overflow-hidden">
              <div className="relative">
                <img
                  className="w-full h-[250px] sm:h-[304px] object-cover"
                  alt="Union"
                  src="https://c.animaapp.com/mezk8qhiRH69bc/img/union-1.svg"
                />
                <div className="absolute inset-0 p-4 sm:p-6 flex items-end">
                  <div className="flex items-center gap-4 sm:gap-6 w-full">
                    <div className="flex flex-col gap-4 sm:gap-6 flex-1">
                      <div className="flex flex-col gap-2 sm:gap-4">
                        <p className="font-semibold text-black text-base sm:text-xl tracking-[0] leading-tight">
                          'Unlocking Data' Award Winners – Utility Week Awards
                        </p>
                        <p className="font-normal text-[#000000a6] text-xs sm:text-sm tracking-[0] leading-tight">
                          We had a fantastic evening at the 2023 Utility Week
                          awards where [...]
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="font-medium text-[#1e1e1e] text-xs sm:text-sm whitespace-nowrap">
                          Read More
                        </div>
                        <div className="w-4 h-4 border border-solid border-[#667085] flex items-center justify-center rounded-full">
                          <img
                            className="w-3 h-3"
                            alt="Vuesax linear arrow"
                            src="https://c.animaapp.com/mezk8qhiRH69bc/img/vuesax-linear-arrow-right.svg"
                          />
                        </div>
                      </div>
                    </div>
                    <img
                      className="w-[80px] h-[120px] sm:w-[120px] sm:h-[160px] object-cover rounded-lg"
                      alt="Group"
                      src="https://c.animaapp.com/mezk8qhiRH69bc/img/group-77.png"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Pagination */}
          <div className="flex justify-center gap-2">
            <div className="w-5 h-5 bg-neutral-100 border-[0.2px] border-solid border-black rounded-full" />
            <div className="w-5 h-5 bg-[#223f00] rounded-full" />
            <div className="w-5 h-5 bg-neutral-100 border-[0.2px] border-solid border-black rounded-full" />
          </div>
        </div>
      </div>

     
    </div>
  );
};
