import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Mail, ChevronDown, Menu, X, MessageCircle } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsDropdownOpen(false);
  }, [location]);

  const navigationItems = [
    // { label: 'Home', path: '/', key: 'home' },
  ];

  const isCurrentPage = (path) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  const isResourcesActive = () => {
    const resourcePaths = ['/case-studies', '/insights', '/whitepapers', '/blog'];
    return resourcePaths.some(path => location.pathname.startsWith(path));
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-xl shadow-slate-900/10 py-4' 
          : 'bg-white/10 backdrop-blur-sm py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0 flex-1">
            <Link to="/" className="flex items-center group">
              <div className="relative">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                  isScrolled 
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600' 
                    : 'bg-white/20 backdrop-blur-sm '
                }`}>
                  <img src="/RERA-INSIGHTS/logo.png" className='rounded-xl' alt="RERA INSIGHTS" />
                  {/* <span className={`text-xl font-bold transition-colors duration-300 ${
                    isScrolled ? 'text-white' : 'text-slate-900'
                  }`}>
                    R
                  </span> */}
                </div>
              </div>
              <div className="ml-3">
                <div className={`text-xl font-bold tracking-tight transition-colors duration-300 ${
                  isScrolled ? 'text-slate-900' : 'text-slate-900'
                }`}>
                  RERA INSIGHTS
                </div>
                <div className={`text-xs font-medium transition-colors duration-300 ${
                  isScrolled ? 'text-blue-600' : 'text-slate-700'
                }`}>
                  Expert RERA Consultancy
                </div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex mx-10 items-center space-x-1">
            {navigationItems.map((item) => (
              <div key={item.key} className="relative">
                {item.dropdown ? (
                  <div className="relative">
                    <button
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      className={`flex items-center space-x-1 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                        isResourcesActive()
                          ? isScrolled
                            ? 'text-blue-600 bg-blue-50'
                            : 'text-slate-900 bg-white/20 backdrop-blur-sm'
                          : isScrolled 
                            ? 'text-slate-700 hover:text-slate-900 hover:bg-slate-50' 
                            : 'text-slate-900/90 hover:text-slate-900 hover:bg-white/20 backdrop-blur-sm'
                      }`}
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-300 ${
                          isDropdownOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>

                    {/* Dropdown Menu */}
                    {isDropdownOpen && (
                      <div className="absolute top-full left-0 mt-2 w-64 bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-slate-200/50 py-3 z-50">
                        <div className="px-3 py-2 text-xs font-semibold text-slate-500 uppercase tracking-wider border-b border-slate-100 mb-2">
                          Resources
                        </div>
                        {item.dropdown.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.key}
                            to={dropdownItem.path}
                            className={`block px-4 py-3 text-sm transition-all duration-200 rounded-xl mx-2 ${
                              isCurrentPage(dropdownItem.path)
                                ? 'text-blue-600 bg-blue-50 font-medium shadow-sm'
                                : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900'
                            }`}
                            onClick={() => setIsDropdownOpen(false)}
                          >
                            {dropdownItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                      isCurrentPage(item.path)
                        ? isScrolled
                          ? 'text-blue-600 bg-blue-50'
                          : 'text-slate-900 bg-white/20 backdrop-blur-sm'
                        : isScrolled
                          ? 'text-slate-700 hover:text-slate-900 hover:bg-slate-50'
                          : 'text-slate-900/90 hover:text-slate-900 hover:bg-white/20 backdrop-blur-sm'
                    }`}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <a
              href="tel:+918010193788"
              className={`flex items-center space-x-2 px-4 py-2.5 text-sm font-medium rounded-xl transition-all duration-300 ${
                isScrolled 
                  ? 'text-slate-700 hover:text-slate-900 hover:bg-slate-50' 
                  : 'text-slate-900/90 hover:text-slate-900 hover:bg-white/20 backdrop-blur-sm'
              }`}
            >
              <Phone className="w-4 h-4" />
              <span>80101 93788</span>
            </a>
            <a
              href="https://wa.me/918010193788?text=Hello%2C%20I%20want%20to%20know%20more%20about%20RERA%20Registration.%20Can%20you%20please%20help%20me%20with%20it%3F"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center px-6 py-2.5 bg-gradient-to-r from-green-500 to-green-600 text-white text-sm font-semibold rounded-xl hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              WhatsApp
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2.5 rounded-xl transition-all duration-300 ${
              isScrolled ? 'hover:bg-slate-50' : 'hover:bg-white/20 backdrop-blur-sm'
            }`}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className={`w-6 h-6 ${isScrolled ? 'text-slate-900' : 'text-slate-900'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? 'text-slate-900' : 'text-slate-900'}`} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-screen mt-6 pb-6' : 'max-h-0'
        }`}>
          <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-slate-200/50 py-4">
            <nav className="flex flex-col">
              {navigationItems.map((item) => (
                <div key={item.key}>
                  {item.dropdown ? (
                    <div>
                      <button
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        className={`w-full flex items-center justify-between px-6 py-4 transition-colors text-left ${
                          isResourcesActive() ? 'text-blue-600 bg-blue-50' : 'text-slate-700 hover:bg-slate-50'
                        }`}
                      >
                        <span className="font-medium">{item.label}</span>
                        <ChevronDown
                          className={`w-4 h-4 transition-transform ${
                            isDropdownOpen ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      <div className={`bg-slate-50 overflow-hidden transition-all duration-300 ${
                        isDropdownOpen ? 'max-h-screen' : 'max-h-0'
                      }`}>
                        {item.dropdown.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.key}
                            to={dropdownItem.path}
                            className={`block px-10 py-3 text-sm transition-colors ${
                              isCurrentPage(dropdownItem.path)
                                ? 'text-blue-600 font-medium'
                                : 'text-slate-600 hover:text-slate-900'
                            }`}
                          >
                            {dropdownItem.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      to={item.path}
                      className={`block px-6 py-4 font-medium transition-colors ${
                        isCurrentPage(item.path)
                          ? 'text-blue-600 bg-blue-50 border-r-4 border-blue-600'
                          : 'text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
              
              {/* Mobile CTA Buttons */}
              <div className="px-6 pt-6 border-t border-slate-200 space-y-3">
                <a
                  href="tel:+918010193788"
                  className="flex items-center justify-center space-x-2 w-full px-4 py-3 text-slate-700 font-medium hover:bg-slate-50 rounded-xl transition-colors border-2 border-slate-200"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call: 80101 93788</span>
                </a>
                <a
                  href="https://wa.me/918010193788"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 w-full px-4 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-xl hover:from-green-600 hover:to-green-700 transition-all shadow-lg"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;