import React from 'react';
import { Award, Users, Globe2, Shield, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const About: React.FC = () => {
    const { t, i18n } = useTranslation();

    const stats = [
        { label: t('about.stats.experience'), value: "10+", icon: Award },
        { label: t('about.stats.projects'), value: "500+", icon: Globe2 },
        { label: t('about.stats.clients'), value: "1200+", icon: Users },
        { label: t('about.stats.guarantee'), value: "100%", icon: Shield }
    ];



    return (
        <div className="bg-brand-charcoal min-h-screen">
            {/* Hero Section */}
            <div className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/images/about/hero-skyline.png"
                        alt="Muscat Skyline"
                        className="w-full h-full object-cover opacity-30"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-brand-charcoal/80 via-brand-charcoal/50 to-brand-charcoal"></div>
                </div>

                <div className="relative z-10 text-center px-6 max-w-4xl mx-auto animate-fade-in-up">
                    <span className="text-brand-red font-bold tracking-[0.2em] text-sm uppercase mb-4 block">{t('about.hero.subtitle')}</span>
                    <h1 className="text-5xl md:text-7xl font-heading font-bold text-white mb-6 leading-tight">
                        {t('about.hero.titleLine1')} <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-brand-orange">{t('about.hero.titleHighlight')}</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                        {t('about.hero.desc')}
                    </p>
                </div>
            </div>

            {/* Mission & Vision */}
            <div className="container mx-auto px-6 py-24 -mt-20 relative z-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-brand-dark p-10 rounded-3xl border-t-4 border-brand-red shadow-2xl hover:-translate-y-2 transition-transform duration-500">
                        <h3 className="text-3xl font-heading font-bold text-white mb-6">{t('about.mission.title')}</h3>
                        <p className="text-gray-400 leading-relaxed text-lg mb-8">
                            {t('about.mission.desc')}
                        </p>
                        <div className="flex items-center text-brand-red font-bold uppercase tracking-wide text-xs">
                            <span className="w-8 h-0.5 bg-brand-red mr-2"></span> {t('about.mission.tag')}
                        </div>
                    </div>
                    <div className="bg-brand-dark p-10 rounded-3xl border-t-4 border-brand-orange shadow-2xl hover:-translate-y-2 transition-transform duration-500 delay-100">
                        <h3 className="text-3xl font-heading font-bold text-white mb-6">{t('about.vision.title')}</h3>
                        <p className="text-gray-400 leading-relaxed text-lg mb-8">
                            {t('about.vision.desc')}
                        </p>
                        <div className="flex items-center text-brand-orange font-bold uppercase tracking-wide text-xs">
                            <span className="w-8 h-0.5 bg-brand-orange mr-2"></span> {t('about.vision.tag')}
                        </div>
                    </div>
                </div>
            </div>

            {/* Stats */}
            <div className="border-y border-white/5 bg-white/[0.02]">
                <div className="container mx-auto px-6 py-20">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
                        {stats.map((stat, i) => (
                            <div key={i} className="text-center group">
                                <div className="w-16 h-16 mx-auto bg-white/5 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300 group-hover:bg-brand-red group-hover:shadow-[0_0_20px_rgba(220,38,38,0.4)]">
                                    <stat.icon className="w-8 h-8" />
                                </div>
                                <h4 className="text-4xl lg:text-5xl font-bold text-white mb-2">{stat.value}</h4>
                                <p className="text-gray-500 uppercase tracking-widest text-xs">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>



            {/* CTA */}
            <div className="container mx-auto px-6 pb-24">
                <div className="bg-brand-red rounded-3xl p-12 md:p-20 text-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-8">{t('about.cta.title')}</h2>
                        <Link to="/contact" className="inline-flex items-center gap-3 bg-white text-brand-red px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 hover:scale-105 transition-all shadow-xl">
                            {t('about.cta.btn')} <ArrowRight className={`w-5 h-5 ${i18n.dir() === 'rtl' ? 'rotate-180' : ''}`} />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};