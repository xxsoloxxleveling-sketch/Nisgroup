import React from 'react';
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-brand-dark border-t border-white/5 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-brand-red rounded-md flex items-center justify-center">
                <span className="text-white font-heading font-bold text-lg">N</span>
              </div>
              <span className="font-heading font-bold text-xl text-white">NIS</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              {t('footer.brandDesc')}
            </p>
            <div className="flex gap-4">
              {[Facebook, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" aria-label="Social Link" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-brand-red hover:text-white transition-all">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-white mb-6">{t('footer.servicesTitle')}</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              {[
                { label: t('servicesPage.items.painting.title'), path: '/services' },
                { label: t('servicesPage.items.electrical.title'), path: '/services' },
                { label: t('servicesPage.items.ac.title'), path: '/services' },
                { label: t('servicesPage.items.civil.title'), path: '/services' },
                { label: t('servicesPage.items.decor.title'), path: '/services' },
                { label: t('servicesPage.items.landscaping.title'), path: '/services' }
              ].map((item, i) => (
                <li key={i}>
                  <Link to={item.path} className="hover:text-brand-red transition-colors">{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-bold text-white mb-6">{t('footer.contactTitle')}</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-red shrink-0" />
                <span>{t('footer.address').split(',').map((part, i) => <span key={i} className="block">{part}</span>)}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-brand-red shrink-0" />
                <span dir="ltr">+968 9000 0000</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-brand-red shrink-0" />
                <span className="font-mono">info@nis-oman.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter / Action */}
          <div>
            <h4 className="font-heading font-bold text-white mb-6">{t('footer.newsletterTitle')}</h4>
            <p className="text-gray-400 text-sm mb-4">{t('footer.newsletterDesc')}</p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder={t('footer.emailPlaceholder')}
                className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm text-white w-full focus:outline-none focus:border-brand-red transition-colors"
              />
              <button type="submit" className="bg-brand-red text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-brand-redLight transition-colors">
                {t('footer.joinBtn')}
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} National Integrated Services LLC. {t('common.rights')}</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">{t('common.privacyPolicy')}</a>
            <a href="#" className="hover:text-white transition-colors">{t('common.terms')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};