import React, { useState, useEffect } from 'react';

import { ArrowButton } from './components/ui/ArrowButton';
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { 
  HomePage, 
  AboutUsPage, 
  BlogPage, 
  BlogDetailPage, 
  ContactUsPage, 
  ConsultingPartnersPage, 
  WaterWastewaterPage, 
  PlatformPage 
} from './pages';

// Navigation Component that uses React Router
function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  
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
      // Handle special cases for routing
      if (page === 'home') {
        navigate('/');
      } else if (page === 'blogdetail') {
        navigate('/blogdetail');
      } else if (page === 'inuse') {
        navigate('/platform');
      } else {
        navigate(`/${page}`);
      }
      setMobileMenuOpen(false);
    };
  }
  
  // Function to handle navigation
  const navigateTo = (path) => {
    navigate(path);
    setMobileMenuOpen(false);
  };
  
  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Helper function to check if current path matches
  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname === path;
  };

  return (
    <div className="App w-full min-h-screen flex flex-col">
      {/* Navigation Bar - Hide on mobile */}
      <div className={`fixed top-0 right-0 left-0 z-50 bg-transparent ${isMobile ? 'hidden' : 'block'}`}>
        <div className="flex items-center justify-between py-6 px-8">
          {/* Logo on the left */}
          <button
            onClick={() => navigateTo('/')}
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
              onClick={() => navigateTo('/')}
              className={`font-medium text-black text-sm md:text-base tracking-[0] leading-6 whitespace-nowrap transition-colors hover:text-[#5da502] ${
                isActive('/') ? 'text-[#5da502]' : ''
              }`}
            >
              AIM
            </button>

            <button
              onClick={() => navigateTo('/water')}
              className={`font-medium text-black text-sm md:text-base tracking-[0] leading-6 whitespace-nowrap transition-colors hover:text-[#5da502] ${
                isActive('/water') ? 'text-[#5da502]' : ''
              }`}
            >
              INDUSTRIES
            </button>

            <button
              onClick={() => navigateTo('/consulting')}
              className={`font-medium text-black text-sm md:text-base tracking-[0] leading-6 whitespace-nowrap transition-colors hover:text-[#5da502] ${
                isActive('/consulting') ? 'text-[#5da502]' : ''
              }`}
            >
              CONSULTING PARTNERS
            </button>

            <button
              onClick={() => navigateTo('/platform')}
              className={`font-medium text-black text-sm md:text-base tracking-[0] leading-6 whitespace-nowrap transition-colors hover:text-[#5da502] ${
                isActive('/platform') ? 'text-[#5da502]' : ''
              }`}
            >
              RESOURCES
            </button>

            <button
              onClick={() => navigateTo('/blog')}
              className={`font-medium text-black text-sm md:text-base tracking-[0] leading-6 whitespace-nowrap transition-colors hover:text-[#5da502] ${
                isActive('/blog') ? 'text-[#5da502]' : ''
              }`}
            >
              BLOG
            </button>

            <button
              onClick={() => navigateTo('/about')}
              className={`font-medium text-black text-sm md:text-base tracking-[0] leading-6 whitespace-nowrap transition-colors hover:text-[#5da502] ${
                isActive('/about') ? 'text-[#5da502]' : ''
              }`}
            >
              ABOUT US
            </button>

            <button
              onClick={() => navigateTo('/contact')}
              className={`font-medium text-black text-sm md:text-base tracking-[0] leading-6 whitespace-nowrap transition-colors hover:text-[#5da502] ${
                isActive('/contact') ? 'text-[#5da502]' : ''
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
                onClick={() => navigateTo('/')}
                className={`block py-2 text-lg text-gray-800 hover:text-[#5da502] ${isActive('/') ? 'text-[#5da502]' : ''}`}
              >
                AIM
              </button>
            </li>
            <li>
              <button 
                onClick={() => navigateTo('/water')}
                className={`block py-2 text-lg text-gray-800 hover:text-[#5da502] ${isActive('/water') ? 'text-[#5da502]' : ''}`}
              >
                INDUSTRIES
              </button>
            </li>
            <li>
              <button 
                onClick={() => navigateTo('/consulting')}
                className={`block py-2 text-lg text-gray-800 hover:text-[#5da502] ${isActive('/consulting') ? 'text-[#5da502]' : ''}`}
              >
                CONSULTING PARTNERS
              </button>
            </li>
            <li>
              <button 
                onClick={() => navigateTo('/platform')}
                className={`block py-2 text-lg text-gray-800 hover:text-[#5da502] ${isActive('/platform') ? 'text-[#5da502]' : ''}`}
              >
                RESOURCES
              </button>
            </li>
            <li>
              <button 
                onClick={() => navigateTo('/blog')}
                className={`block py-2 text-lg text-gray-800 hover:text-[#5da502] ${isActive('/blog') ? 'text-[#5da502]' : ''}`}
              >
                BLOG
              </button>
            </li>
            <li>
              <button 
                onClick={() => navigateTo('/about')}
                className={`block py-2 text-lg text-gray-800 hover:text-[#5da502] ${isActive('/about') ? 'text-[#5da502]' : ''}`}
              >
                ABOUT US
              </button>
            </li>
            <li>
              <button 
                onClick={() => navigateTo('/contact')}
                className={`block py-2 text-lg text-gray-800 hover:text-[#5da502] ${isActive('/contact') ? 'text-[#5da502]' : ''}`}
              >
                CONTACT
              </button>
            </li>
          </ul>
        </div>
      </div>

      {/* Page Content */}
      <div className="w-full max-w-none flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/water" element={<WaterWastewaterPage />} />
          <Route path="/contact" element={<ContactUsPage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/consulting" element={<ConsultingPartnersPage />} />
          <Route path="/platform" element={<PlatformPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blogdetail" element={<BlogDetailPage />} />
          <Route path="/blog/:id" element={<BlogDetailPage />} />
        </Routes>
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
              <div className="mt-3 opacity-80 [font-family:'Inter',Helvetica] font-normal text-dark text-sm leading-[30px] space-y-2">
                <button 
                  onClick={() => navigateTo('/about')}
                  className="block hover:text-[#5da502] transition-colors cursor-pointer text-left"
                >
                  ABOUT
                </button>
                <button 
                  onClick={() => navigateTo('/csr')}
                  className="block hover:text-[#5da502] transition-colors cursor-pointer text-left"
                >
                  CSR
                </button>
                <button 
                  onClick={() => navigateTo('/careers')}
                  className="block hover:text-[#5da502] transition-colors cursor-pointer text-left"
                >
                  CAREERS
                </button>
                <button 
                  onClick={() => navigateTo('/privacy')}
                  className="block hover:text-[#5da502] transition-colors cursor-pointer text-left"
                >
                  PRIVACY POLICY
                </button>
              </div>
            </div>

            <div>
              <div className="[font-family:'Inter',Helvetica] font-normal text-dark text-lg leading-[normal]">AIM</div>
              <div className="mt-3 opacity-80 [font-family:'Inter',Helvetica] font-normal text-dark text-sm leading-[30px] space-y-2">
                <button 
                  onClick={() => navigateTo('/')}
                  className="block hover:text-[#5da502] transition-colors cursor-pointer text-left"
                >
                  AIM
                </button>
                <button 
                  onClick={() => navigateTo('/water')}
                  className="block hover:text-[#5da502] transition-colors cursor-pointer text-left"
                >
                  KEY VERTICALS
                </button>
                <button 
                  onClick={() => navigateTo('/consulting')}
                  className="block hover:text-[#5da502] transition-colors cursor-pointer text-left"
                >
                  PARTNER
                </button>
                <button 
                  onClick={() => navigateTo('/consulting')}
                  className="block hover:text-[#5da502] transition-colors cursor-pointer text-left"
                >
                  CONSULTANTS
                </button>
                <button 
                  onClick={() => navigateTo('/platform')}
                  className="block hover:text-[#5da502] transition-colors cursor-pointer text-left"
                >
                  SUPPORT SERVICES RESOURCES
                </button>
              </div>
            </div>
          </div>

          <div className="mt-10 flex items-center justify-between gap-4 flex-wrap">
            <div>
              <div className="[font-family:'Inter',Helvetica] font-medium text-dark text-lg leading-[normal]">Social</div>
              <img className="mt-3 w-[193px] h-5" alt="Group" src="https://c.animaapp.com/mez1gtpiAT6jQW/img/group-52.png" />
            </div>
           <ArrowButton onClick={() => console.log("View Details Clicked")}>View Details</ArrowButton>

          </div>
        </div>
      </footer>
    </div>
  );
}

// Main App component with Router
function App() {
  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Navigation />
    </Router>
  );
}

export default App;
