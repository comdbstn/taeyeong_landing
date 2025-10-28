import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { companyInfo } from '../../data/companyInfo';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const menuItems = [
    { id: 'about', label: '회사소개' },
    { id: 'capabilities', label: '기술역량' },
    { id: 'portfolio', label: '시공실적' },
    { id: 'partners', label: '협력업체' },
    { id: 'contact', label: '문의하기' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white shadow-sm'
          : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('hero')}
            className="flex items-center gap-3 group"
          >
            <div className="w-10 h-10 bg-primary-600 rounded flex items-center justify-center">
              <span className="text-white font-bold text-lg">태</span>
            </div>
            <div className="flex flex-col">
              <span className="text-gray-900 font-bold text-lg leading-tight group-hover:text-primary-600 transition-colors">
                {companyInfo.name}
              </span>
              <span className="text-gray-500 text-xs leading-tight">
                Since 2012
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="px-5 py-2 text-gray-700 hover:text-primary-600 font-medium text-sm transition-colors relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-600 group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
          </nav>

          {/* Contact Button (Desktop) */}
          <button
            onClick={() => scrollToSection('contact')}
            className="hidden lg:block px-6 py-2.5 bg-primary-600 hover:bg-primary-700 text-white font-medium text-sm rounded transition-colors"
          >
            상담문의
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-gray-700"
          >
            {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
          <nav className="container mx-auto py-4">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-primary-600 font-medium transition-colors"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('contact')}
              className="w-full mt-4 mx-4 px-6 py-3 bg-primary-600 text-white font-medium rounded hover:bg-primary-700 transition-colors"
              style={{ width: 'calc(100% - 2rem)' }}
            >
              상담문의
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
