import React from 'react';
import { Hero } from '../components/Home/Hero';
import { ServicesPreview } from '../components/Home/ServicesPreview';
import { CostEstimator } from '../components/Home/CostEstimator';
import { Projects } from '../components/Home/Projects';
import { Button } from '../components/UI/Button';
import { Link } from 'react-router-dom';
import { WhoWeServe } from '../components/Home/WhoWeServe';
import { BeforeAfter } from '../components/Home/BeforeAfter';
import { Packages } from '../components/Home/Packages';
import { Testimonials } from '../components/Home/Testimonials';
import { Timeline } from '../components/Shared/Timeline';
import { Badges } from '../components/Shared/Badges';
import { ThermolockTeaser } from '../components/Home/ThermolockTeaser';

export const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Badges />

      {/* Stats Strip - Updated to be dynamic later if needed, but keeping simple for now */}
      <div className="bg-brand-dark border-b border-white/5 py-8">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/5">
            {[
              { label: 'Years Experience', val: '10+' },
              { label: 'Projects Done', val: '500+' },
              { label: 'Services', val: '7+' },
              { label: 'Satisfaction', val: '100%' }
            ].map((stat, i) => (
              <div key={i} className="animate-fade-in [animation-delay:var(--delay)]" style={{ '--delay': `${i * 100}ms` } as React.CSSProperties}>
                <div className="text-3xl md:text-4xl font-bold text-brand-red mb-1">{stat.val}</div>
                <div className="text-xs md:text-sm text-gray-400 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <WhoWeServe />
      <ThermolockTeaser />
      <ServicesPreview />
      <Timeline />
      <Packages />
      <BeforeAfter />
      <Projects />
      <CostEstimator />
      <Testimonials />

      {/* Brands Strip */}
      <div className="py-12 bg-white/5 border-t border-white/5 overflow-hidden">
        <div className="container mx-auto px-6">
          <p className="text-center text-gray-500 text-sm uppercase tracking-widest mb-8">Trusted Partners & Brands</p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            <span className="text-2xl font-bold text-white">JOTUN</span>
            <span className="text-2xl font-bold text-white">Asian Paints</span>
            <span className="text-2xl font-bold text-white">Thermolock</span>
            <span className="text-2xl font-bold text-white">Caparol</span>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-brand-red to-[#A00C24] text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied clients in Oman. Book your free site visit and estimation today. No hidden charges.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button variant="secondary" size="lg" className="shadow-lg">Book Free Site Visit</Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg" className="border-white/30 hover:bg-white/10">Talk to Our Team</Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};