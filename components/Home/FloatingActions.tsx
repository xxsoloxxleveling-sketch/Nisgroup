import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, ArrowUp } from 'lucide-react';

export const FloatingActions: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3 items-end">
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="w-10 h-10 bg-brand-charcoal text-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-700 transition-all animate-fade-in"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      <a
        href="tel:+96890000000"
        className="group flex items-center gap-2 bg-brand-red text-white p-3 rounded-full shadow-lg hover:bg-brand-redLight transition-all animate-breathe"
        title="Call Us"
      >
        <Phone className="w-6 h-6" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 text-sm font-medium whitespace-nowrap px-0 group-hover:px-2">
          Call NIS
        </span>
      </a>

      <a
        href="https://wa.me/96890000000"
        className="group flex items-center gap-2 bg-[#25D366] text-white p-3 rounded-full shadow-lg hover:bg-[#20b85a] transition-all animate-breathe delay-[3000ms]"
        title="WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 text-sm font-medium whitespace-nowrap px-0 group-hover:px-2">
          WhatsApp
        </span>
      </a>
    </div>
  );
};