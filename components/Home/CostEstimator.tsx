import React, { useState, useEffect } from 'react';
import { Button } from '../UI/Button';
import { Calculator, Info } from 'lucide-react';
import { Link } from 'react-router-dom';
import { generateQuotePDF } from '../../utils/pdfGenerator';
import { useTranslation } from 'react-i18next';

export const CostEstimator: React.FC = () => {
  const [service, setService] = useState('Painting');
  const [property, setProperty] = useState('Villa');
  const [area, setArea] = useState(100);
  const [includeMaterial, setIncludeMaterial] = useState(true);
  const [estimate, setEstimate] = useState({ min: 0, max: 0 });

  const { t, i18n } = useTranslation();

  // Dummy calculation logic for frontend demo
  useEffect(() => {
    let baseRate = 0;
    switch (service) {
      case 'Painting': baseRate = 1.5; break;
      case 'Electrical': baseRate = 2.5; break;
      case 'Plumbing': baseRate = 2.0; break;
      case 'AC': baseRate = 3.0; break; // Per unit rough calc
      default: baseRate = 1.0;
    }

    if (property === 'Office') baseRate *= 1.2;
    if (includeMaterial) baseRate *= 1.5;

    const minTotal = Math.round(area * baseRate);
    const maxTotal = Math.round(minTotal * 1.3);

    setEstimate({ min: minTotal, max: maxTotal });
  }, [service, property, area, includeMaterial]);

  const handleDownloadPDF = () => {
    generateQuotePDF({
      service,
      property,
      area,
      includeMaterial,
      minPrice: estimate.min,
      maxPrice: estimate.max
    });
  };

  const services = ['Painting', 'Electrical', 'Plumbing', 'AC', 'Road Works', 'Décor'];
  const properties = ['Villa', 'Flat', 'Office', 'Shop', 'Warehouse'];

  // Map backend value to translated label
  const getServiceLabel = (val: string) => {
    // Basic mapping, in real app might use keys
    return val;
  }

  return (
    <section className="py-20 bg-brand-dark relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-charcoal via-brand-dark to-black opacity-80"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 items-center">

          <div className="lg:w-1/2 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-red/10 border border-brand-red/20 text-brand-red text-xs font-bold uppercase tracking-wide">
              <Calculator className="w-3 h-3" /> {t('estimator.tag')}
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white">
              {t('estimator.title')}
            </h2>
            <p className="text-gray-400 text-lg">
              {t('estimator.desc')}
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                <span className="block text-2xl font-bold text-white mb-1">100%</span>
                <span className="text-xs text-gray-500">{t('estimator.freeVisit')}</span>
              </div>
              <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                <span className="block text-2xl font-bold text-white mb-1">24h</span>
                <span className="text-xs text-gray-500">{t('estimator.response')}</span>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 w-full">
            <div className="bg-white rounded-3xl p-6 md:p-8 shadow-2xl relative overflow-hidden">
              {/* Header of Card */}
              <div className="border-b border-gray-100 pb-6 mb-6">
                <h3 className="text-xl font-bold text-gray-900">{t('estimator.cardTitle')}</h3>
                <p className="text-sm text-gray-500">{t('estimator.cardSubtitle')}</p>
              </div>

              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 uppercase mb-2" id="service-label">{t('estimator.serviceType')}</label>
                    <select
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className="w-full bg-gray-50 border border-gray-200 text-gray-900 rounded-lg px-4 py-3 focus:ring-2 focus:ring-brand-red focus:border-transparent outline-none transition-all"
                      aria-labelledby="service-label"
                    >
                      {services.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 uppercase mb-2" id="property-label">{t('estimator.propertyType')}</label>
                    <select
                      value={property}
                      onChange={(e) => setProperty(e.target.value)}
                      className="w-full bg-gray-50 border border-gray-200 text-gray-900 rounded-lg px-4 py-3 focus:ring-2 focus:ring-brand-red focus:border-transparent outline-none transition-all"
                      aria-labelledby="property-label"
                    >
                      {properties.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <label className="text-xs font-semibold text-gray-700 uppercase" htmlFor="area-input">{t('estimator.area')}</label>
                    <span className="text-sm font-bold text-brand-red">{area} {service === 'AC' ? 'Units' : 'sqm'}</span>
                  </div>
                  <input
                    id="area-input"
                    type="range"
                    min="10"
                    max="500"
                    value={area}
                    onChange={(e) => setArea(Number(e.target.value))}
                    className={`w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-brand-red ${i18n.dir() === 'rtl' ? 'rotate-180' : ''}`}
                  />
                </div>

                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    id="material"
                    checked={includeMaterial}
                    onChange={(e) => setIncludeMaterial(e.target.checked)}
                    className="w-5 h-5 text-brand-red rounded focus:ring-brand-red border-gray-300"
                  />
                  <label htmlFor="material" className="text-sm text-gray-700 font-medium select-none">{t('estimator.material')}</label>
                </div>

                <div className="bg-brand-charcoal rounded-xl p-6 text-center transform transition-all duration-300 relative overflow-hidden group">
                  {/* Shimmer Effect */}
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full animate-[shimmer_2s_infinite] pointer-events-none"></div>

                  <p className="text-gray-400 text-sm mb-2 relative z-10">{t('estimator.estimatedRange')}</p>
                  <div className="text-3xl md:text-4xl font-heading font-bold text-white mb-2 relative z-10" dir="ltr">
                    OMR {estimate.min} <span className="text-gray-600 text-2xl font-normal">-</span> OMR {estimate.max}
                  </div>
                  <div className="flex items-center justify-center gap-1 text-xs text-gray-500 mb-6 relative z-10">
                    <Info className="w-3 h-3" />
                    <span>{t('estimator.subjectToInspection')}</span>
                  </div>
                  <Link to="/contact">
                    <Button fullWidth className="bg-brand-red hover:bg-brand-redLight text-white mb-3 relative z-10 magnetic-btn">
                      {t('estimator.requestQuote')}
                    </Button>
                  </Link>
                  <button
                    onClick={handleDownloadPDF}
                    className="text-gray-500 text-xs hover:text-white underline transition-colors relative z-10"
                  >
                    {t('estimator.downloadPdf')}
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};