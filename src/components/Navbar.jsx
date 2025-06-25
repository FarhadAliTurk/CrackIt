import React, { useState, useEffect, useRef } from 'react';
import { FaTimes, FaBars, FaCrown } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const sectionsRef = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const scrollPosition = window.scrollY + 100;
      sectionsRef.current.forEach((section) => {
        if (!section) return;
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(section.id);
        }
      });
    };

    sectionsRef.current = [
      document.getElementById('home'),
      document.getElementById('about'),
      document.getElementById('categories'),
      document.getElementById('premium'),
      document.getElementById('features'),
      document.getElementById('testimonials'),
      document.getElementById('contact')
    ];

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId) => {
    setActiveSection(sectionId);
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : 'auto';
  }, [mobileMenuOpen]);

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''} ${mobileMenuOpen ? 'mobile-open' : ''}`}>
      <div className="container">
        <a href="#home" className="navbar-brand" aria-label="CrackIt Home">
          <span className="logo-text">CrackIt</span>
          <span className="logo-dot"></span>
        </a>

        <button 
          className="mobile-menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
          aria-controls="main-navigation"
        >
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        <nav id="main-navigation" className={`navbar-nav ${mobileMenuOpen ? 'open' : ''}`}>
          <div className="nav-links">
            <a 
              href="#home" 
              className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
              onClick={() => handleNavClick('home')}
              aria-current={activeSection === 'home' ? 'page' : undefined}
            >
              Home
            </a>
            <a 
              href="#about" 
              className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
              onClick={() => handleNavClick('about')}
              aria-current={activeSection === 'about' ? 'page' : undefined}
            >
              About
            </a>
            <a 
              href="#categories" 
              className={`nav-link ${activeSection === 'categories' ? 'active' : ''}`}
              onClick={() => handleNavClick('categories')}
              aria-current={activeSection === 'categories' ? 'page' : undefined}
            >
              Quiz
            </a>
            <a 
              href="#premium" 
              className={`nav-link premium-link ${activeSection === 'premium' ? 'active' : ''}`}
              onClick={() => handleNavClick('premium')}
              aria-current={activeSection === 'premium' ? 'page' : undefined}
            >
              <span>Premium</span>
              <span className="premium-badge" aria-hidden="true"><FaCrown /></span>
            </a>
            <a 
              href="#features" 
              className={`nav-link ${activeSection === 'features' ? 'active' : ''}`}
              onClick={() => handleNavClick('features')}
              aria-current={activeSection === 'features' ? 'page' : undefined}
            >
              Features
            </a>
            <a 
              href="#testimonials" 
              className={`nav-link ${activeSection === 'testimonials' ? 'active' : ''}`}
              onClick={() => handleNavClick('testimonials')}
              aria-current={activeSection === 'testimonials' ? 'page' : undefined}
            >
              Testimonials
            </a>
            <a 
              href="#contact" 
              className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
              onClick={() => handleNavClick('contact')}
              aria-current={activeSection === 'contact' ? 'page' : undefined}
            >
              Contact
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;