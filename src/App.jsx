import React, { useState, useEffect } from 'react';
import { Home } from './components/Home';
import { WaterWastewater } from './components/WaterWastewater';
import { ContactUs } from './components/ContactUs';
import { AboutUs } from './components/AboutUs';
import { ConsultingPartners } from './components/ConsultingPartners';
import { InUse } from './components/InUse';
import { Blog } from './components/Blog';
import { BlogDetail } from './components/BlogDetail';

function App() {
  const [currentPage, setCurrentPage] = useState('home'); 
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  // Check if viewport width is less than 850px
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 850);
    };
    
    // Initial check
    checkIfMobile();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkIfMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  // Expose a simple global navigation helper so nested components can request page changes
  if (typeof window !== 'undefined') {
    window.goToPage = (page) => {
      setCurrentPage(page);
      setMobileMenuOpen(false);
    };
  }
  
  // Function to handle navigation
  const navigateTo = (page) => {
    setCurrentPage(page);
    setMobileMenuOpen(false);
  };
  
  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="App w-full min-h-screen flex flex-col">
      {/* Navigation Bar - Hide on mobile */}
      <div className={`fixed top-0 right-0 left-0 z-50 bg-transparent ${isMobile ? 'hidden' : 'block'}`}>
        <div className="flex items-center justify-between py-6 px-8">
          {/* Logo on the left */}
          <button
            onClick={() => navigateTo('home')}
            className="focus:outline-none"
            style={{ padding: 0, background: 'none', border: 'none' }}
            aria-label="Go to Home"
          >
            <img
              className="w-[136px] h-[29px] object-cover"
              alt="Logo"
              src="https://c.animaapp.com/mezk8qhiRH69bc/img/image-13-1.png"
            />
          </button>

          {/* Navigation Buttons on the right */}
          <div className="flex items-center gap-6">
            <button
              onClick={() => navigateTo('home')}
              className={`font-medium text-black text-sm md:text-base tracking-[0] leading-6 whitespace-nowrap transition-colors hover:text-[#5da502] ${
                currentPage === 'home' ? 'text-[#5da502]' : ''
              }`}
            >
              AIM
            </button>

            <button
              onClick={() => navigateTo('water')}
              className={`font-medium text-black text-sm md:text-base tracking-[0] leading-6 whitespace-nowrap transition-colors hover:text-[#5da502] ${
                currentPage === 'water' ? 'text-[#5da502]' : ''
              }`}
            >
              INDUSTRIES
            </button>

            <button
              onClick={() => navigateTo('consulting')}
              className={`font-medium text-black text-sm md:text-base tracking-[0] leading-6 whitespace-nowrap transition-colors hover:text-[#5da502] ${
                currentPage === 'consulting' ? 'text-[#5da502]' : ''
              }`}
            >
              CONSULTING PARTNERS
            </button>

            <button
              onClick={() => navigateTo('inuse')}
              className={`font-medium text-black text-sm md:text-base tracking-[0] leading-6 whitespace-nowrap transition-colors hover:text-[#5da502] ${
                currentPage === 'inuse' ? 'text-[#5da502]' : ''
              }`}
            >
              RESOURCES
            </button>

            <button
              onClick={() => navigateTo('blog')}
              className={`font-medium text-black text-sm md:text-base tracking-[0] leading-6 whitespace-nowrap transition-colors hover:text-[#5da502] ${
                currentPage === 'blog' ? 'text-[#5da502]' : ''
              }`}
            >
              BLOG
            </button>

            <button
              onClick={() => navigateTo('about')}
              className={`font-medium text-black text-sm md:text-base tracking-[0] leading-6 whitespace-nowrap transition-colors hover:text-[#5da502] ${
                currentPage === 'about' ? 'text-[#5da502]' : ''
              }`}
            >
              ABOUT US
            </button>

            <button
              onClick={() => navigateTo('contact')}
              className={`font-medium text-black text-sm md:text-base tracking-[0] leading-6 whitespace-nowrap transition-colors hover:text-[#5da502] ${
                currentPage === 'contact' ? 'text-[#5da502]' : ''
              }`}
            >
              CONTACT
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu Button - Only show on mobile */}
      {isMobile && (
        <div className="fixed top-4 right-4 z-[100]">
          <button 
            className="bg-[#5da502] text-white p-2 rounded-full shadow-lg"
            onClick={toggleMobileMenu}
            style={{ boxShadow: '0 0 0 4px rgba(255, 255, 255, 0.5)' }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      )}
      
      {/* Mobile Navigation Drawer */}
      <div className={`fixed top-0 right-0 w-64 h-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-[110] ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-4">
          <button 
            onClick={toggleMobileMenu}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          <div className="mt-10 mb-6">
            <img
              className="w-[136px] h-[29px] object-cover"
              alt="Logo"
              src="https://c.animaapp.com/mezk8qhiRH69bc/img/image-13-1.png"
            />
          </div>
          
          <ul className="mt-8 space-y-4">
            <li>
              <button 
                onClick={() => navigateTo('home')}
                className={`block py-2 text-lg text-gray-800 hover:text-[#5da502] ${currentPage === 'home' ? 'text-[#5da502]' : ''}`}
              >
                AIM
              </button>
            </li>
            <li>
              <button 
                onClick={() => navigateTo('water')}
                className={`block py-2 text-lg text-gray-800 hover:text-[#5da502] ${currentPage === 'water' ? 'text-[#5da502]' : ''}`}
              >
                INDUSTRIES
              </button>
            </li>
            <li>
              <button 
                onClick={() => navigateTo('consulting')}
                className={`block py-2 text-lg text-gray-800 hover:text-[#5da502] ${currentPage === 'consulting' ? 'text-[#5da502]' : ''}`}
              >
                CONSULTING PARTNERS
              </button>
            </li>
            <li>
              <button 
                onClick={() => navigateTo('inuse')}
                className={`block py-2 text-lg text-gray-800 hover:text-[#5da502] ${currentPage === 'inuse' ? 'text-[#5da502]' : ''}`}
              >
                RESOURCES
              </button>
            </li>
            <li>
              <button 
                onClick={() => navigateTo('blog')}
                className={`block py-2 text-lg text-gray-800 hover:text-[#5da502] ${currentPage === 'blog' ? 'text-[#5da502]' : ''}`}
              >
                BLOG
              </button>
            </li>
            <li>
              <button 
                onClick={() => navigateTo('about')}
                className={`block py-2 text-lg text-gray-800 hover:text-[#5da502] ${currentPage === 'about' ? 'text-[#5da502]' : ''}`}
              >
                ABOUT US
              </button>
            </li>
            <li>
              <button 
                onClick={() => navigateTo('contact')}
                className={`block py-2 text-lg text-gray-800 hover:text-[#5da502] ${currentPage === 'contact' ? 'text-[#5da502]' : ''}`}
              >
                CONTACT
              </button>
            </li>
          </ul>
        </div>
      </div>

      {/* Page Content */}
      <div className="w-full max-w-none flex-1">
        {currentPage === 'home' && <Home />}
        {currentPage === 'water' && <WaterWastewater />}
        {currentPage === 'contact' && <ContactUs />}
        {currentPage === 'about' && <AboutUs />}
        {currentPage === 'consulting' && <ConsultingPartners />}
        {currentPage === 'inuse' && <InUse />}
        {currentPage === 'blog' && <Blog />}
        {currentPage === 'blogdetail' && <BlogDetail />}
      </div>

      {/* Global Footer (flowing, responsive) */}
      <footer className="w-full bg-white">
        <div className="max-w-[90%] mx-auto px-6 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-start">
            <div>
              <img className="w-[191px] h-[41px] object-cover" alt="Image" src="https://c.animaapp.com/mez1gtpiAT6jQW/img/image-13-1.png" />
            </div>

            <div>
              <div className="[font-family:'Inter',Helvetica] font-normal text-dark text-lg leading-[normal]">CONTACT</div>
              <div className="mt-3 space-y-2 [font-family:'Inter',Helvetica] font-normal text-dark text-sm leading-[normal]">
                <div>+44(0)1606610002</div>
                <div>upport@probitconsulting.com</div>
                <p>M-SParc Menai Scienc Park Gaerwen LL60 6AG United Kingdom</p>
              </div>
            </div>

            <div>
              <div className="[font-family:'Inter',Helvetica] font-normal text-dark text-lg leading-[normal]">PROBIT</div>
              <div className="mt-3 opacity-80 [font-family:'Inter',Helvetica] font-normal text-dark text-sm leading-[30px]">
                ABOUT
                <br />
                CSR
                <br />
                CAREERS
                <br />
                PRIVACY POLICY
              </div>
            </div>

            <div>
              <div className="[font-family:'Inter',Helvetica] font-normal text-dark text-lg leading-[normal]">AIM</div>
              <div className="mt-3 opacity-80 [font-family:'Inter',Helvetica] font-normal text-dark text-sm leading-[30px]">
                AIM
                <br />
                KEY VERTICALS
                <br />
                PARTNER
                <br />
                CONSULTANTS
                <br />
                SUPPORT SERVICES RESOURCES
              </div>
            </div>
          </div>

          <div className="mt-10 flex items-center justify-between gap-4 flex-wrap">
            <div>
              <div className="[font-family:'Inter',Helvetica] font-medium text-dark text-lg leading-[normal]">Social</div>
              <img className="mt-3 w-[193px] h-5" alt="Group" src="https://c.animaapp.com/mez1gtpiAT6jQW/img/group-52.png" />
            </div>
            <div className="flex items-center">
              <div className="inline-flex h-[52px] items-center gap-2 pl-6 pr-8 py-6 rounded-[44px] border-[0.8px] border-solid border-[#475467]">
                <div className="font-body-regular-m-web text-primary-900">View Details</div>
              </div>
              <div className="flex w-[52px] h-[52px] items-center justify-center -ml-5 bg-[#5da502] rounded-full">
                <img className="w-[30.05px] h-[30.05px]" alt="Vuesax linear arrow" src="https://c.animaapp.com/mez1gtpiAT6jQW/img/vuesax-linear-arrow-right.svg" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
