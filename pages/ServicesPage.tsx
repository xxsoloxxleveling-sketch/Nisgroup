import React from 'react';
import { ServicesTimeline } from '../components/Services/ServicesTimeline';
import { useTranslation } from 'react-i18next';

export const ServicesPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-brand-charcoal min-h-screen flex flex-col">
      {/* Header Section */}
      <div className="pt-32 pb-12 bg-brand-charcoal relative z-20">
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6 animate-fade-in-up">
            {t('servicesPage.hero.title')}
          </h1>
          <p className="text-gray-400 text-lg animate-fade-in-up delay-100">
            {t('servicesPage.hero.desc')}
          </p>
        </div>
      </div>

      {/* Premium Roadmap Section */}
      <ServicesTimeline />

    </div>
  );
};