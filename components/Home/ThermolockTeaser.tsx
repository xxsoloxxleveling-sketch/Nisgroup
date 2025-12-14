import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ArrowRight, Flame, Droplets, Waves, Sun } from 'lucide-react';

export const ThermolockTeaser: React.FC = () => {
    const { t, i18n } = useTranslation();
    const isRtl = i18n.dir() === 'rtl';

    return (
        <section className="py-24 relative overflow-hidden bg-brand-charcoal">
            {/* Background Effects */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-emerald-900/10 blur-[120px]"></div>
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-teal-900/10 blur-[100px]"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    {/* Content */}
                    <div className="lg:w-1/2">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-bold uppercase tracking-wider mb-8 animate-pulse-slow">
                            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                            {t('thermolockTeaser.badge')}
                        </div>

                        <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6 leading-tight">
                            {t('thermolockTeaser.title')}
                        </h2>
                        <p className="text-xl text-gray-300 mb-10 leading-relaxed font-light">
                            {t('thermolockTeaser.desc')}
                        </p>

                        <div className="flex gap-6 mb-10">
                            {[
                                { icon: Flame, color: "text-red-400", bg: "bg-red-500/10" },
                                { icon: Droplets, color: "text-blue-400", bg: "bg-blue-500/10" },
                                { icon: Waves, color: "text-amber-400", bg: "bg-amber-500/10" },
                                { icon: Sun, color: "text-emerald-400", bg: "bg-emerald-500/10" },
                            ].map((Item, i) => (
                                <div key={i} className={`w-12 h-12 rounded-xl ${Item.bg} flex items-center justify-center border border-white/5`}>
                                    <Item.icon className={`w-6 h-6 ${Item.color}`} />
                                </div>
                            ))}
                        </div>

                        <Link
                            to="/thermolock"
                            className="inline-flex items-center gap-3 bg-white text-brand-dark px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 hover:scale-105 transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)] group"
                        >
                            {t('thermolockTeaser.cta')}
                            <ArrowRight className={`w-5 h-5 group-hover:translate-x-1 transition-transform ${isRtl ? 'rotate-180 group-hover:-translate-x-1' : ''}`} />
                        </Link>
                    </div>

                    {/* Visual */}
                    <div className="lg:w-1/2 relative">
                        <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl group cursor-pointer">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10"></div>
                            <img
                                src="/images/thermolock/hero-volcanic.png"
                                alt="Thermolock"
                                className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700"
                            />
                            {/* Floating Card */}
                            <div className="absolute bottom-6 left-6 right-6 z-20 bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl">
                                <div className="flex justify-between items-center">
                                    <div>
                                        <div className="text-white font-bold text-lg">THERMOLOCK</div>
                                        <div className="text-emerald-300 text-sm">Eco-Friendly Insulation</div>
                                    </div>
                                    <div className="text-3xl font-bold text-white">4-in-1</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
