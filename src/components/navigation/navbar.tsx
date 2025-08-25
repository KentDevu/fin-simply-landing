import React, { useState, useEffect } from 'react';
import { Button } from '../ui/button';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>('hero');

  useEffect(() => {
    const handleScroll = (): void => {
      const scrolled = window.scrollY > 50;
      setIsScrolled(scrolled);

      // Determine active section based on scroll position
      const sections = ['hero', 'team', 'about', 'mission-vision', 'customers', 'contacts'];
      const scrollPosition = window.scrollY + 150; // Offset for navbar height
      
      let currentSection = 'hero';

      // Find the section that's most visible in the viewport
      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionId = sections[i];
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          const elementTop = window.scrollY + rect.top;
          
          // If we've scrolled past the beginning of this section
          if (scrollPosition >= elementTop) {
            currentSection = sectionId;
            break;
          }
        }
      }

      // Special case for the very top of the page
      if (window.scrollY < 100) {
        currentSection = 'hero';
      }

      // Special case for the bottom of the page
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
        currentSection = 'contacts';
      }

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once to set initial state
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string): void => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false); // Close mobile menu on navigation
  };

  const navigationItems = [
    { label: 'Landing', sectionId: 'hero' },
    { label: 'Team', sectionId: 'team' },
    { label: 'About', sectionId: 'about' },
    { label: 'Mission & Vision', sectionId: 'mission-vision' },
    { label: 'Customers', sectionId: 'customers' },
    { label: 'Contacts', sectionId: 'contacts' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-sm shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">FS</span>
            </div>
            <span className="text-xl font-bold text-gray-900">Fin-Simply</span>
          </div>

          {/* Desktop Navigation Items */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <button
                key={item.sectionId}
                onClick={() => scrollToSection(item.sectionId)}
                className={`relative font-medium transition-all duration-300 px-3 py-2 rounded-lg ${
                  activeSection === item.sectionId
                    ? 'text-green-600 bg-green-50'
                    : 'text-gray-700 hover:text-green-600 hover:bg-green-50/50'
                }`}
              >
                {item.label}
                {/* Active indicator */}
                <span
                  className={`absolute -bottom-0.5 left-3 right-3 h-0.5 bg-green-600 transition-all duration-300 ${
                    activeSection === item.sectionId ? 'opacity-100' : 'opacity-0'
                  }`}
                ></span>
              </button>
            ))}
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <Button 
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg transition-colors duration-200"
              onClick={() => scrollToSection('contacts')}
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 hover:text-green-600 transition-colors duration-200"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-sm shadow-lg border-t">
            <div className="container mx-auto px-4 py-4">
              <div className="flex flex-col space-y-4">
                {navigationItems.map((item) => (
                  <button
                    key={item.sectionId}
                    onClick={() => scrollToSection(item.sectionId)}
                    className={`text-left font-medium py-2 px-4 rounded-lg transition-all duration-300 ${
                      activeSection === item.sectionId
                        ? 'text-green-600 bg-green-50 border-l-4 border-green-600'
                        : 'text-gray-700 hover:text-green-600 hover:bg-gray-50'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
                <Button 
                  className="bg-green-600 hover:bg-green-700 text-white w-full mt-4"
                  onClick={() => scrollToSection('contacts')}
                >
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
