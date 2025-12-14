import React, { useEffect, useState } from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { Button } from '../UI/Button';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const Hero: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Split title manually for styling
  const title = t('hero.title');
  // Simple heuristic: split by space or first few words if needed, but for now just rendering full title
  // Or better, let's keep the split structure if possible, but translations vary in length.
  // We'll render the full title for i18n safely.

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden">
      {/* Background with Gradient Overlay & Parallax */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{ '--scroll-y': `${scrollY}px` } as React.CSSProperties}
        >
          <img
            src="/images/home/hero-main.png"
            alt="Muscat City Skyline Construction"
            className="w-full h-[120%] object-cover opacity-40"
          />
        </div>
        {/* Animated Aurora Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/90 via-purple-900/40 to-brand-dark/90 animate-aurora mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/80 via-transparent to-brand-dark"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          {/* Left Content */}
          <div className="lg:w-1/2 space-y-8 animate-fade-in-up">
            <div>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-orange-500 font-bold tracking-[0.2em] text-xs uppercase mb-4 block">
                {t('hero.tagline')}
              </span>
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                {title}
                {/* Visual accent only for English usually, but we can keep simpler for now */}
              </h1>
            </div>

            <p className="text-gray-300 text-lg leading-relaxed max-w-xl">
              {t('hero.description')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <Button size="lg" className="shadow-[0_0_30px_-5px_rgba(200,16,46,0.4)] animate-pulse hover:animate-none">
                  {t('hero.btnPrimary')}
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="outline" size="lg">
                  {t('hero.btnSecondary')}
                </Button>
              </Link>
            </div>

            <div className="flex items-center gap-6 pt-4 text-sm font-medium text-gray-400">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-brand-green/20 flex items-center justify-center">
                  <CheckCircle2 className="text-brand-green w-3.5 h-3.5" />
                </div>
                <span>{t('hero.freeConsult')}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-brand-green/20 flex items-center justify-center">
                  <CheckCircle2 className="text-brand-green w-3.5 h-3.5" />
                </div>
                <span>{t('hero.transPricing')}</span>
              </div>
            </div>
          </div>

          {/* Right Visuals - Layered Cards */}
          <div className="lg:w-1/2 relative hidden md:block perspective-1000">
            {/* Decorative blob behind */}
            <div className="absolute -top-20 -right-20 w-96 h-96 bg-brand-red/20 rounded-full blur-3xl animate-blob"></div>

            <div className="relative transform-style-3d hover:rotate-y-2 transition-transform duration-700">
              {/* Main Large Image - Clickable */}
              <div
                onClick={() => navigate('/services')}
                className="cursor-pointer glass-card rounded-2xl overflow-hidden relative z-10 transform hover:scale-[1.02] transition-all duration-500 group"
              >
                <img
                  src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1000&auto=format&fit=crop"
                  alt="Construction Site"
                  className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

                {/* Active Border Top */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-red to-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>

                <div className="absolute bottom-6 left-6 text-white rtl:right-6 rtl:left-auto">
                  <p className="font-heading font-bold text-xl mb-1">{t('hero.cardCommercial')}</p>
                  <p className="text-sm opacity-80 flex items-center gap-2">
                    {t('common.viewPortfolio')} <ArrowRight className={`w-4 h-4 ${i18n.dir() === 'rtl' ? 'rotate-180' : ''}`} />
                  </p>
                </div>
              </div>

              {/* Floating Card 1 - Clickable */}
              <div
                onClick={() => navigate('/services')}
                className="cursor-pointer absolute -bottom-10 -left-10 w-48 h-56 glass-card rounded-xl overflow-hidden z-20 animate-fade-in delay-300 transform hover:-translate-y-2 transition-all duration-300 group rtl:-right-10 rtl:left-auto"
              >
                <img
                  src="https://images.unsplash.com/photo-1562259949-e8e7689d7828?q=80&w=500&auto=format&fit=crop"
                  alt="Painting"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/50 flex items-end p-4 hover:bg-black/40 transition-colors">
                  <span className="text-white font-bold text-sm leading-tight text-center w-full">{t('hero.cardPainting')}</span>
                </div>
              </div>

              {/* Floating Card 2 - Stats */}
              <div className="absolute -top-10 -right-5 w-48 glass-card rounded-xl p-4 flex flex-col justify-between z-20 animate-fade-in delay-500 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] transition-shadow rtl:-left-5 rtl:right-auto">
                <div className="flex justify-between items-start mb-3">
                  <div className="p-2 bg-brand-red/20 rounded-lg">
                    <ArrowRight className={`text-brand-red w-5 h-5 ${i18n.dir() === 'rtl' ? 'rotate-180' : ''}`} />
                  </div>
                  <span className="text-green-400 font-bold text-xl">98%</span>
                </div>
                <div>
                  <p className="text-white font-bold text-sm">{t('hero.statsSatisfaction')}</p>
                  <p className="text-xs text-gray-400 mt-1">{t('hero.statsReviews')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};