import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, Phone } from 'lucide-react';
import { Button } from '../UI/Button';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const location = useLocation();
  const { t, i18n } = useTranslation();

  useEffect(() => {
    let requestRunning: number | null = null;

    const handleScroll = () => {
      if (requestRunning === null) {
        requestRunning = window.requestAnimationFrame(() => {
          const currentScroll = window.scrollY;
          const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;

          setIsScrolled(currentScroll > 50);
          setScrollProgress(scrollHeight > 0 ? (currentScroll / scrollHeight) * 100 : 0);

          requestRunning = null;
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (requestRunning) window.cancelAnimationFrame(requestRunning);
    };
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Products', path: '/thermolock' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'ar' : 'en';
    i18n.changeLanguage(newLang);
    document.dir = newLang === 'ar' ? 'rtl' : 'ltr';
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[999] transition-all duration-300 ${isScrolled
        ? 'bg-brand-dark/95 backdrop-blur-3xl shadow-lg py-3'
        : 'bg-transparent py-5'
        }`}
    >
      {/* Scroll Progress Bar */}
      <div className="absolute top-0 left-0 h-[2px] bg-brand-red transition-all duration-100 ease-out z-[60] w-[var(--progress)]" style={{ '--progress': `${scrollProgress}%` } as React.CSSProperties}></div>
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className={`transition-all duration-300 ease-in-out p-3 rounded-xl flex items-center justify-center ${isScrolled
            ? 'bg-[#0b0b0b] scale-95 shadow-md'
            : 'bg-black/45 backdrop-blur-md shadow-sm'
            }`}>
            <img
              src="/images/logo.png"
              alt="NIS Logo"
              className="h-[50px] lg:h-[70px] w-auto object-contain transition-all duration-500 hover:scale-110 hover:rotate-1"
            />
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-sm font-medium transition-colors hover:text-brand-red ${isActive(link.path) ? 'text-brand-red' : 'text-gray-300'
                }`}
            >
              {t(`nav.${link.name.toLowerCase()}`)}
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-4">
          <div className="flex items-center bg-white/5 rounded-full px-1 py-1 border border-white/10">
            <button
              onClick={toggleLanguage}
              className="px-3 py-1 text-xs font-medium text-gray-400 hover:text-white transition-colors"
            >
              {i18n.language === 'en' ? '🇴🇲 AR' : '🇺🇸 EN'}
            </button>
          </div>
          <Link to="/contact">
            <Button size="sm">{t('common.getQuote')}</Button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-white"
          onClick={() => setIsMobileMenuOpen(true)}
          aria-label="Open Menu"
        >
          <Menu className="w-8 h-8" />
        </button>
      </div>

      <MobileMenuOverlay
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        navLinks={navLinks}
        isActive={isActive}
        t={t}
        i18n={i18n}
      />

    </header>
  );
};

// Mobile Menu Portal Component
import { createPortal } from 'react-dom';

const MobileMenuOverlay: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  navLinks: { name: string; path: string }[];
  isActive: (path: string) => boolean;
  t: any;
  i18n: any;
}> = ({ isOpen, onClose, navLinks, isActive, t, i18n }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return createPortal(
    <>
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9999] transition-opacity duration-300"
        onClick={onClose}
      />
      <div
        className="fixed top-0 right-0 h-full w-[80%] max-w-sm bg-brand-dark shadow-2xl z-[10000] flex flex-col border-l border-white/10 animate-fade-in-right"
      >
        <div className="p-6 flex items-center justify-between border-b border-white/10">
          <span className="font-heading font-bold text-xl text-white">Menu</span>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white"
            aria-label="Close Menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto py-6 px-6 flex flex-col gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={onClose}
              className={`text-lg font-medium ${isActive(link.path) ? 'text-brand-red' : 'text-white'
                }`}
            >
              {t(`nav.${link.name.toLowerCase()}`)}
            </Link>
          ))}
          <div className="h-px bg-white/10 my-2"></div>
          <Link to="/contact" onClick={onClose}>
            <Button fullWidth>{t('common.getQuote')}</Button>
          </Link>
          <div className="flex items-center justify-center gap-4 mt-4">
            <span className="text-gray-400 text-sm">Switch Language:</span>
            <button
              className={`font-bold ${i18n.language === 'en' ? 'text-brand-red' : 'text-white'}`}
              onClick={() => { i18n.changeLanguage('en'); document.dir = 'ltr'; }}
            >
              EN
            </button>
            <span className="text-gray-600">|</span>
            <button
              className={`font-bold ${i18n.language === 'ar' ? 'text-brand-red' : 'text-white'}`}
              onClick={() => { i18n.changeLanguage('ar'); document.dir = 'rtl'; }}
            >
              عربي
            </button>
          </div>
        </div>
      </div>
    </>,
    document.body
  );
};