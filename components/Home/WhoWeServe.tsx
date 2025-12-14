import React from 'react';
import { Home, Building2, Briefcase, Factory, HardHat } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const WhoWeServe: React.FC = () => {
    const { t } = useTranslation();

    const clients = [
        { icon: Home, title: t('whoweserve.villas.title'), desc: t('whoweserve.villas.desc') },
        { icon: Building2, title: t('whoweserve.apartments.title'), desc: t('whoweserve.apartments.desc') },
        { icon: Briefcase, title: t('whoweserve.commercial.title'), desc: t('whoweserve.commercial.desc') },
        { icon: Factory, title: t('whoweserve.industrial.title'), desc: t('whoweserve.industrial.desc') },
        { icon: HardHat, title: t('whoweserve.roads.title'), desc: t('whoweserve.roads.desc') },
    ];

    return (
        <section className="py-20 bg-brand-dark/50 border-y border-white/5">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <span className="text-brand-red font-bold tracking-widest text-xs uppercase mb-2 block">{t('whoweserve.subtitle')}</span>
                    <h2 className="text-3xl font-heading font-bold text-white">{t('whoweserve.title')}</h2>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    {clients.map((client, i) => (
                        <div key={i} className="glass-card p-6 rounded-xl text-center group hover:-translate-y-2 transition-transform duration-300">
                            <div className="w-12 h-12 bg-brand-red/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-brand-red group-hover:text-white transition-colors">
                                <client.icon className="w-6 h-6 text-brand-red group-hover:text-white transition-colors" />
                            </div>
                            <h3 className="text-white font-bold text-sm mb-2">{client.title}</h3>
                            <p className="text-xs text-gray-400">{client.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

