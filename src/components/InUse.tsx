import React from "react";

export const InUse = (): JSX.Element => {
  return (
    <div className="bg-white w-full overflow-x-hidden">
      {/* Hero Section */}
      <div className="relative w-full h-screen">
        <div className="absolute inset-0 bg-[#26262642] z-10"></div>
        <img
          className="absolute inset-0 w-full h-full object-cover"
          alt="Zoshua colah"
          src="https://c.animaapp.com/mf0ibufrGSDetp/img/zoshua-colah-dlopwy9jclm-unsplash-1.png"
        />

        {/* Main Heading */}
        <div className="absolute w-[90%] sm:w-[80%] md:w-[650px] top-[20%] sm:top-[25%] md:top-[221px] left-1/2 transform -translate-x-1/2">
          <div className="w-full sm:w-[90%] md:w-[552px] mx-auto">
            <div className="relative w-full md:w-[650px]">
              <div className="absolute w-full md:w-[650px] h-[50px] sm:h-[60px] md:h-[69px] top-1 left-0 bg-[#d7ffb1] rounded-[30px] sm:rounded-[40px] md:rounded-[49.78px]" />

              <p className="absolute w-full top-0 left-0 md:left-[78px] [font-family:'Outfit',Helvetica] font-normal text-transparent text-[28px] sm:text-[36px] md:text-[52px] text-center tracking-[0] leading-[1.2] md:leading-[52px]">
                <span className="font-bold text-black leading-[0.1px]">
                  Tactical and strategic
                  <br />
                </span>

                <span className="font-bold text-[#ffffff] leading-[1.4] md:leading-[72.8px]">
                  {" "}
                  planning with asset-level clarity.{" "}
                </span>
              </p>
            </div>
          </div>
        </div>
       

        {/* Green Banner */}
        <div className="absolute bottom-0 left-0 right-0 z-20 bg-[#5da502] py-4 px-4 md:px-8">
          <div className="flex flex-wrap justify-center items-center gap-2 md:gap-4 text-[#d7ffb1] text-sm md:text-xl">
            <span>Green the planet</span>
            <img className="w-6 h-6" alt="Fi" src="https://c.animaapp.com/mf0ibufrGSDetp/img/fi-3127084.svg" />
            <span>Cut carbon waste</span>
            <img className="w-6 h-6" alt="Fi" src="https://c.animaapp.com/mf0ibufrGSDetp/img/fi-3127084.svg" />
            <span>Plan for resilience</span>
            <img className="w-6 h-6" alt="Fi" src="https://c.animaapp.com/mf0ibufrGSDetp/img/fi-3127084.svg" />
            <span>Value public outcomes</span>
            <img className="w-6 h-6" alt="Fi" src="https://c.animaapp.com/mf0ibufrGSDetp/img/fi-3127084.svg" />
            <span>Target net zero</span>
            <img className="w-6 h-6" alt="Fi" src="https://c.animaapp.com/mf0ibufrGSDetp/img/fi-3127084.svg" />
            <span>Embed climate thinking</span>
          </div>
        </div>
      </div>

      {/* The AIM Platform Section */}
      <div className="w-full bg-neutral-100 py-8 sm:py-12 md:py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 sm:mb-6 md:mb-8 [font-family:'Outfit',Helvetica]">The AIM platform</h2>
            <p className="text-sm sm:text-base leading-5 sm:leading-6 [font-family:'Outfit',Helvetica]">
              AIM is a powerful decision-support platform for infrastructure owners and operators. It helps you model, compare and optimise investment strategies across complex asset networks, balancing performance, cost, risk and regulatory priorities.
              <br /><br />
              Built specifically for capital-intensive sectors like water, energy and transport, AIM works at the asset level to enable you to make fully justifiable, risk-informed decisions.
              <br /><br />
              It's fast, flexible, and highly configurable, giving consulting firms and infrastructure owners the tools to shape strategies that meet both business and regulatory objectives.
            </p>
          </div>
          <div className="flex justify-center">
            <img
              className="w-full max-w-md"
              alt="Mask group"
              src="https://c.animaapp.com/mf0ibufrGSDetp/img/mask-group.png"
            />
          </div>
        </div>
      </div>

      {/* What makes AIM optimum Section */}
      <div className="w-full py-8 sm:py-12 md:py-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 sm:mb-6 md:mb-8 [font-family:'Outfit',Helvetica]">
            What makes <span className="bg-[#d7ffb1] px-2 sm:px-4 py-1 rounded-full">AIM</span> the optimum solution for planning infrastructure asset investment?
          </h2>
          <p className="text-sm sm:text-base leading-5 sm:leading-6 max-w-3xl mx-auto [font-family:'Outfit',Helvetica]">
            Infrastructure decisions are too important to be driven by guesswork or generalisations. AIM gives you the speed, detail and clarity to plan with precision.
          </p>
        </div>
      </div>

      {/* Asset-Level Precision Section */}
      <div className="w-full py-8 sm:py-12 md:py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 sm:mb-6 md:mb-8 [font-family:'Outfit',Helvetica]">Asset-Level Precision</h2>
            <p className="text-sm sm:text-base leading-5 sm:leading-6 [font-family:'Outfit',Helvetica]">
              AIM's bottom-up design enables investment decisions at the level of individual assets. This level of granularity means every intervention is based on actual need and value rather than averages or assumptions. It's the difference between broad strategy and actionable planning.
            </p>
          </div>
          <div className="flex justify-center">
            <img
              className="w-full max-w-md"
              alt="Mask group"
              src="https://c.animaapp.com/mf0ibufrGSDetp/img/mask-group-1.png"
            />
          </div>
        </div>
      </div>

      {/* Speed and Scalability Section */}
      <div className="w-full py-8 sm:py-12 md:py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div className="flex justify-center order-2 md:order-1">
            <img
              className="w-full max-w-md"
              alt="Mask group"
              src="https://c.animaapp.com/mf0ibufrGSDetp/img/mask-group-3.png"
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 sm:mb-6 md:mb-8 [font-family:'Outfit',Helvetica]">Speed and Scalability</h2>
            <p className="text-sm sm:text-base leading-5 sm:leading-6 [font-family:'Outfit',Helvetica]">
              Powered by Gurobi, AIM runs complex optimisation models at scale, simulating millions of scenarios across vast networks in just minutes. That speed means faster insight, quicker iterations, and better responsiveness to regulatory and operational change.
            </p>
          </div>
        </div>
      </div>

      {/* Integrated Risk and Value Framework Section */}
      <div className="w-full py-8 sm:py-12 md:py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 sm:mb-6 md:mb-8 [font-family:'Outfit',Helvetica]">Integrated Risk and Value Framework</h2>
            <p className="text-sm sm:text-base leading-5 sm:leading-6 [font-family:'Outfit',Helvetica]">
              AIM brings risk, value and performance into a single, configurable framework. It links asset failure probabilities to financial, societal and environmental outcomes, giving you a transparent and justifiable basis for every investment decision.
            </p>
          </div>
          <div className="flex justify-center">
            <img
              className="w-full max-w-md"
              alt="Mask group"
              src="https://c.animaapp.com/mf0ibufrGSDetp/img/mask-group-2.png"
            />
          </div>
        </div>
      </div>

      {/* Flexible and Adaptable SaaS Model Section */}
      <div className="w-full py-8 sm:py-12 md:py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div className="flex justify-center order-2 md:order-1">
            <img
              className="w-full max-w-md"
              alt="Mask group"
              src="https://c.animaapp.com/mf0ibufrGSDetp/img/mask-group-4.png"
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 sm:mb-6 md:mb-8 [font-family:'Outfit',Helvetica]">Flexible and Adaptable SaaS Model</h2>
            <p className="text-sm sm:text-base leading-5 sm:leading-6 [font-family:'Outfit',Helvetica]">
              Delivered as a cloud-based platform, AIM supports collaboration, rapid updates and a low-maintenance footprint. It integrates easily with your data environment and evolves with your business; no on-premise installs, no clunky upgrade cycles.
            </p>
          </div>
        </div>
      </div>

      {/* How AIM compares Section */}
      <div className="w-full py-8 sm:py-12 md:py-16 px-4 md:px-8 ">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 sm:mb-6 md:mb-8 [font-family:'Outfit',Helvetica]">How AIM compares with other asset management tools.</h2>
          <p className="text-sm sm:text-base leading-5 sm:leading-6 max-w-4xl mx-auto mb-8 sm:mb-12 md:mb-16 [font-family:'Outfit',Helvetica]">
            Most asset management tools stop at tracking, reporting, or forecasting maintenance and investment based on fixed asset lives. AIM goes further, optimising investment value, modelling risk, and justifying decisions at the asset level across entire networks.
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 text-left">
            <div className="flex flex-col items-center md:items-start">
              <img className="w-8 h-8 sm:w-10 sm:h-10 mb-3 sm:mb-4" alt="Preferences circle" src="https://c.animaapp.com/mf0ibufrGSDetp/img/preferences-circle.png" />
              <h3 className="text-lg sm:text-xl font-normal mb-2 sm:mb-4 [font-family:'Outfit',Helvetica]">More scalable</h3>
              <p className="text-sm sm:text-base [font-family:'Outfit',Helvetica]">AIM handles networks with millions of assets while maintaining full investment granularity.</p>
            </div>

            <div className="flex flex-col items-center md:items-start">
              <img className="w-8 h-8 sm:w-10 sm:h-10 mb-3 sm:mb-4" alt="Ic shopping cart" src="https://c.animaapp.com/mf0ibufrGSDetp/img/ic-shopping-cart-48px.png" />
              <h3 className="text-lg sm:text-xl font-normal mb-2 sm:mb-4 [font-family:'Outfit',Helvetica]">Faster optimisation</h3>
              <p className="text-sm sm:text-base [font-family:'Outfit',Helvetica]">Our best-in-class solver lets AIM run complex investment scenarios in minutes, rather than days.</p>
            </div>

            <div className="flex flex-col items-center md:items-start">
              <img className="w-7 h-7 sm:w-9 sm:h-9 mb-3 sm:mb-4" alt="Chart bar" src="https://c.animaapp.com/mf0ibufrGSDetp/img/chart-bar-33.png" />
              <h3 className="text-lg sm:text-xl font-normal mb-2 sm:mb-4 [font-family:'Outfit',Helvetica]">transparent and configurable</h3>
              <p className="text-sm sm:text-base [font-family:'Outfit',Helvetica]">You control your risk models, valuation frameworks and decision rules, with no vendor lock-in or hidden logic.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Gurobi Section */}
      <div className="w-full py-8 sm:py-12 md:py-16 px-4 md:px-8 bg-[#dfffb6]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 sm:mb-6 md:mb-8 [font-family:'Outfit',Helvetica]">Gurobi. Supporting AIM's exceptional asset investment planning.</h2>
            <p className="text-sm sm:text-base leading-5 sm:leading-6 [font-family:'Outfit',Helvetica]">
              AIM's unique asset investment planning capability incorporates the world's most powerful mathematical optimisation engine - Gurobi.
              <br /><br />
              Gurobi is the industry benchmark for solving complex optimisation problems at speed and scale, and its seamless integration into AIM provides users with the same underlying technology trusted by some of the most demanding data-driven organisations in the world.
              <br /><br />
              AIM's advanced analytics engine simulates millions of potential investment scenarios in minutes, accounting for constraints, risk factors, performance goals and regulatory requirements - all at the level of individual assets. It then leans on the Gurobi engine to select the optimal scenario.
              <br /><br />
              The result is faster insight, more confident decision-making, and the ability to adapt strategies quickly as conditions change.
            </p>
          </div>
          <div className="flex justify-center">
            <img
              className="w-full max-w-md"
              alt="Mask group"
              src="https://c.animaapp.com/mf0ibufrGSDetp/img/mask-group-5.png"
            />
          </div>
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="w-full py-8 sm:py-12 md:py-16 px-4 md:px-8 bg-[#5da502] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 md:mb-8 leading-tight [font-family:'Outfit',Helvetica]">
            "AIM delivers the confidence that informs our investment strategy. It's a transformative tool in the hands of insightful analysts."
          </p>
          <p className="text-base sm:text-lg md:text-xl [font-family:'Outfit',Helvetica]">
            Bill Secondname, Director of Asset Management, Imaginary Utilities
          </p>
        </div>
      </div>

      {/* Sector Section */}
      <div className="w-full py-8 sm:py-12 md:py-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 sm:mb-6 md:mb-8 [font-family:'Outfit',Helvetica]">
            AIM makes asset management and investment decisions easier, no matter which sector you operate in.
          </h2>

          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 my-4 sm:my-8">
            <div className="bg-[#5da502] text-white px-4 sm:px-6 py-2 sm:py-4 rounded-full text-sm sm:text-base font-bold [font-family:'Outfit',Helvetica]">Gas Networks</div>
            <div className="bg-[#5da502] text-white px-4 sm:px-6 py-2 sm:py-4 rounded-full text-sm sm:text-base font-bold [font-family:'Outfit',Helvetica]">Water & Wastewater</div>
            <div className="bg-[#5da502] text-white px-4 sm:px-6 py-2 sm:py-4 rounded-full text-sm sm:text-base font-bold [font-family:'Outfit',Helvetica]">Transportation</div>
            <div className="bg-[#5da502] text-white px-4 sm:px-6 py-2 sm:py-4 rounded-full text-sm sm:text-base font-bold [font-family:'Outfit',Helvetica]">Other sectors</div>
          </div>
        </div>
      </div>

      {/* Water & Wastewater Section */}
      <div className="w-full py-8 sm:py-12 md:py-16 px-4 md:px-8 bg-neutral-100 rounded-[10px] sm:rounded-[20px] mx-2 sm:mx-4 md:mx-auto max-w-[95%] sm:max-w-6xl my-4 sm:my-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-sm sm:text-base leading-5 sm:leading-6 mb-4 sm:mb-6 md:mb-8 [font-family:'Outfit',Helvetica]">
              AIM helps water companies and sector consultants make confident, value-based decisions about when and where to invest, optimising asset performance while staying within regulatory and environmental constraints.
              <br /><br />
              It enables detailed scenario modelling across treatment works, networks and reservoirs, helping you balance long-term cost, risk and service delivery. The result: smarter capital planning that stands up to scrutiny and adapts to change.
            </p>
            <div className="flex justify-center">
              <button className="inline-flex items-center scale-90 sm:scale-100">
                <button className="inline-flex h-[40px] sm:h-[52px] items-center justify-center gap-1 sm:gap-2 pl-4 sm:pl-6 pr-6 sm:pr-8 py-4 sm:py-6 rounded-[30px] sm:rounded-[44px] border-[0.8px] border-solid border-[#475467]">
                  <div className="text-sm sm:text-base font-medium text-primary-900 whitespace-nowrap">
                    VIEW DETAILS
                  </div>
                </button>

                <div className="flex w-[40px] h-[40px] sm:w-[52px] sm:h-[52px] items-center justify-center -ml-4 sm:-ml-5 bg-[#5da502] rounded-[200px]">
                  <img
                    className="w-[24px] sm:w-[30.05px] h-[24px] sm:h-[30.05px]"
                    alt="Vuesax linear arrow"
                    src="https://c.animaapp.com/mezjxobfmTWCBj/img/vuesax-linear-arrow-right.svg"
                  />
                </div>
              </button>
            </div>
          </div>
          <div className="flex justify-center">
            <img
              className="w-full max-w-md"
              alt="Mask group"
              src="https://c.animaapp.com/mf0ibufrGSDetp/img/mask-group-6.png"
            />
          </div>
        </div>
      </div>

      {/* Get in touch Section */}
      <div className="w-full py-8 sm:py-12 md:py-16 px-4 md:px-8 bg-[#dfffb6]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 sm:mb-6 md:mb-8 [font-family:'Outfit',Helvetica]">Get in touch</h2>
          <p className="text-sm sm:text-base leading-5 sm:leading-6 mb-4 sm:mb-6 md:mb-8 [font-family:'Outfit',Helvetica]">
            If you are an asset owner, or a consulting firm advising on asset value optimisation and investment strategy, let us show you the difference AIM could make.
          </p>
          <div className="flex justify-center">
            <button className="inline-flex items-center scale-90 sm:scale-100">
              <button className="inline-flex h-[40px] sm:h-[52px] items-center justify-center gap-1 sm:gap-2 pl-4 sm:pl-6 pr-6 sm:pr-8 py-4 sm:py-6 rounded-[30px] sm:rounded-[44px] border-[0.8px] border-solid border-[#475467]">
                <div className="text-sm sm:text-base font-medium text-primary-900 whitespace-nowrap">
                  LET'S TALK
                </div>
              </button>

              <div className="flex w-[40px] h-[40px] sm:w-[52px] sm:h-[52px] items-center justify-center -ml-4 sm:-ml-5 bg-[#5da502] rounded-[200px]">
                <img
                  className="w-[24px] sm:w-[30.05px] h-[24px] sm:h-[30.05px]"
                  alt="Vuesax linear arrow"
                  src="https://c.animaapp.com/mezjxobfmTWCBj/img/vuesax-linear-arrow-right.svg"
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Consulting Partners Section */}
      <div className="w-full py-8 sm:py-12 md:py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div className="grid grid-cols-2 gap-2 sm:gap-4">
            <img className="w-full" alt="Image" src="https://c.animaapp.com/mf0ibufrGSDetp/img/image-1.png" />
            <img className="w-full mt-4 sm:mt-8" alt="Image" src="https://c.animaapp.com/mf0ibufrGSDetp/img/image-2.png" />
            <img className="w-full" alt="Image" src="https://c.animaapp.com/mf0ibufrGSDetp/img/image-3.png" />
            <img className="w-full mt-4 sm:mt-8" alt="Image" src="https://c.animaapp.com/mf0ibufrGSDetp/img/image-4.png" />
          </div>
          <div>
            <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 sm:mb-6 md:mb-8 [font-family:'Outfit',Helvetica]">
              Unleash the full capabilities of your consulting partners.
            </h2>
            <p className="text-sm sm:text-base leading-5 sm:leading-6 [font-family:'Outfit',Helvetica]">
              AIM is built to support the way infrastructure owners and consulting partners work together.
              <br /><br />
              For asset owners, it provides transparency, control and confidence, giving your teams and advisors a powerful, shared environment in which to explore scenarios and build optimised strategies.
              <br /><br />
              For consultants, it offers a direct, hands-on way to deliver high-value insight, grounded in real data, real constraints, and a fully configurable optimisation model.
              <br /><br />
              AIM enables a delivery model where owners stay in control and consultants bring expertise, while Probit supports both parties with advanced tooling, technical backup and continuous platform evolution.
            </p>
          </div>
        </div>
      </div>

      {/* Support Services Section */}
      <div className="text-center mb-8 sm:mb-12 md:mb-16 px-4">
        <div className="relative mb-6 sm:mb-8">
          <div className="w-full md:w-1/2 mx-auto h-16 sm:h-20 rounded-[40px] sm:rounded-[68px]" />
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl [font-family:'Outfit',Helvetica] bg-[#d7ffb1] px-3 sm:px-4 py-1 rounded-full">
              Support services
            </span>
            <span className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl [font-family:'Outfit',Helvetica] mt-1 sm:mt-2">
              from Probit.
            </span>
          </div>
        </div>
        <p className="text-sm sm:text-base leading-5 sm:leading-6 max-w-3xl mx-auto [font-family:'Outfit',Helvetica]">
          Although AIM is designed for self-sufficiency, we offer targeted support services to help consulting firms and their infrastructure clients to get the most from the platform, particularly during implementation and for more complex modelling challenges.
        </p>
      </div>
      <div className="max-w-6xl mx-auto">
        <div className="w-full py-8 sm:py-12 md:py-16 px-[5%]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            <div className="w-full h-16 bg-[url(https://c.animaapp.com/mf0ibufrGSDetp/img/rectangle-9724.svg)] bg-cover flex items-center justify-center">
              <div className="[font-family:'Outfit',Helvetica] font-bold text-[#ffffff] text-xs sm:text-sm md:text-base text-center tracking-[0] leading-[normal] px-2">
                Advanced Configuration
                <br />
                &amp; Customisation
              </div>
            </div>

            <div className="w-full h-[63px] bg-[url(https://c.animaapp.com/mf0ibufrGSDetp/img/rectangle-9725.svg)] bg-cover flex items-center justify-center">
              <div className="[font-family:'Outfit',Helvetica] font-bold text-[#ffffff] text-sm sm:text-base md:text-[21px] text-center tracking-[0] leading-[normal] px-2">
                Implementation Support
                <br />
                &amp; Training
              </div>
            </div>

            <div className="w-full h-16 bg-[url(https://c.animaapp.com/mf0ibufrGSDetp/img/rectangle-9726.svg)] bg-cover flex items-center justify-center">
              <div className="[font-family:'Outfit',Helvetica] font-bold text-[#ffffff] text-xs sm:text-sm md:text-base text-center tracking-[0] leading-[normal] px-2">
                Data Integration &amp;
                <br />
                Migration
              </div>
            </div>

            <div className="w-full h-16 bg-[url(https://c.animaapp.com/mf0ibufrGSDetp/img/rectangle-9726-1.svg)] bg-cover flex items-center justify-center">
              <p className="[font-family:'Outfit',Helvetica] font-bold text-[#ffffff] text-xs sm:text-sm md:text-base text-center tracking-[0] leading-[normal] px-2">
                Second-Line Support for
                <br />
                Partners &amp; Clients
              </p>
            </div>
          </div>
        </div>
      </div>
      <div style={{ height: "100px" }} />


      {/* Support Services Details */}
      <div className="mx-auto w-[90%] sm:w-4/5 rounded-2xl py-8 sm:py-12 px-4 sm:pl-8 sm:pt-12 bg-neutral-100 mb-8">
        <div className="w-full py-8 sm:py-12 md:py-16 px-4 md:px-8">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-sm sm:text-base leading-5 sm:leading-6 [font-family:'Outfit',Helvetica]">
                We assist with the initial deployment of AIM to help clients and partners get up and running efficiently.
                <br /><br />
                Our train-the-trainer approach ensures internal teams and consultants have the knowledge and confidence to work with AIM independently, without long-term reliance on us.
              </p>
            </div>
            <div className="flex justify-center">
              <img
                className="w-full max-w-md"
                alt="Mask group"
                src="https://c.animaapp.com/mf0ibufrGSDetp/img/mask-group-7.png"
              />
            </div>
          </div>
        </div>
      </div>
    
    </div>
  );
};