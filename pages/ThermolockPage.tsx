import React, { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import {
    Flame, Droplets, Volume2, ThermometerSun, Leaf, ShieldCheck,
    ArrowRight, CheckCircle2, Download, Phone, Building2,
    Hotel, BrickWall, PaintBucket, Award, Factory, Globe, Recycle, Zap, FileText
} from 'lucide-react';
import { Button } from '../components/UI/Button';

export const ThermolockPage: React.FC = () => {
    const { t, i18n } = useTranslation();
    const isRtl = i18n.dir() === 'rtl';

    // Animation Variants
    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    return (
        <div className="bg-brand-dark min-h-screen text-white overflow-x-hidden font-sans selection:bg-brand-red selection:text-white">

            {/* 1. HERO SECTION */}
            <section className="relative min-h-[95vh] flex items-center pt-32 pb-20 overflow-hidden">
                {/* Backgrounds */}
                <div className="absolute inset-0 z-0 bg-brand-dark">
                    <div className="absolute inset-0 bg-[url('/images/thermolock/nano-bana-pro.png')] opacity-30 bg-cover bg-center mix-blend-overlay"></div>
                    <div className="absolute inset-0 bg-gradient-to-b from-brand-dark via-transparent to-brand-dark/90"></div>
                    {/* Aurora Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-brand-red/10 via-brand-accent/5 to-brand-dark/20 animate-aurora opacity-50 blur-3xl"></div>
                </div>

                {/* Ambient Glows */}
                <div className="absolute top-1/4 -left-64 w-[600px] h-[600px] bg-brand-red/10 rounded-full blur-[120px] animate-pulse-slow"></div>
                <div className="absolute bottom-1/4 -right-64 w-[600px] h-[600px] bg-brand-accent/5 rounded-full blur-[120px] animate-float"></div>

                <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left: Copy */}
                    <motion.div
                        initial="hidden" animate="visible" variants={staggerContainer}
                        className="space-y-8 max-w-2xl"
                    >
                        <motion.div variants={fadeInUp}>
                            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-accent/30 bg-brand-accent/5 text-brand-accent text-xs font-bold uppercase tracking-widest backdrop-blur-sm">
                                <Leaf className="w-3 h-3" /> {t('thermolock.hero.badge', { defaultValue: 'Eco-Construction Evolution' })}
                            </span>
                        </motion.div>

                        <motion.h1 variants={fadeInUp} className="text-5xl lg:text-7xl font-heading font-extrabold leading-[1.1] tracking-tight">
                            Build Better.<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-brand-redLight">
                                Choose Thermolock.
                            </span>
                        </motion.h1>

                        {/* Spec Chips Strip */}
                        <motion.div variants={fadeInUp} className="flex flex-wrap gap-2">
                            {(t('thermolock.hero.chips', { returnObjects: true }) as string[]).map((chip, i) => (
                                <div key={i} className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-[10px] uppercase font-bold tracking-wider text-gray-300">
                                    <div className="w-2 h-2 rounded-full bg-brand-red"></div>
                                    {chip}
                                </div>
                            ))}
                        </motion.div>

                        <motion.p variants={fadeInUp} className="text-xl lg:text-2xl text-gray-200 font-light leading-relaxed">
                            {t('thermolock.hero.subtitle')}
                        </motion.p>

                        <motion.p variants={fadeInUp} className="text-gray-400 text-base leading-relaxed max-w-lg border-l-2 border-brand-red/30 pl-4">
                            {t('thermolock.hero.desc')}
                        </motion.p>

                        <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 pt-4">
                            <Button size="lg" className="bg-brand-red text-white hover:bg-brand-redLight border-none group relative overflow-hidden">
                                <span className="relative z-10 flex items-center">
                                    <Download className="w-5 h-5 mr-2" />
                                    {t('thermolock.hero.ctaDownload')}
                                </span>
                            </Button>
                            <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 group bg-transparent/10 backdrop-blur-sm">
                                <span className="relative z-10 flex items-center">
                                    {t('thermolock.hero.ctaRequest')}
                                    <ArrowRight className={`w-5 h-5 ml-2 transition-transform duration-300 ${isRtl ? 'group-hover:-translate-x-1 rotate-180' : 'group-hover:translate-x-1'}`} />
                                </span>
                                <div className="absolute inset-0 bg-white/5 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
                            </Button>
                        </motion.div>
                    </motion.div>

                    {/* Right: 3D Product Mockup */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, x: 50 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                        className="relative flex justify-center lg:justify-end"
                    >
                        {/* Soft Glow Behind Product */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-red/5 rounded-full blur-[80px]"></div>

                        {/* Placeholder for 3D Bag */}
                        <div className="relative w-[320px] h-[460px] lg:w-[420px] lg:h-[580px] perspective-1000 group cursor-pointer animate-float">
                            <div className="absolute inset-0 bg-gradient-to-br from-[#1E2330] to-[#0A0D14] rounded-[2rem] border border-white/10 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)] flex flex-col items-center justify-between p-8 overflow-hidden transform transition-transform duration-500 group-hover:rotate-y-12 group-hover:scale-105">
                                {/* Texture Overlay */}
                                <div className="absolute inset-0 bg-[url('/images/thermolock/nano-bana-pro.png')] opacity-20 bg-cover mix-blend-overlay"></div>
                                <div className="absolute top-0 right-0 p-6 opacity-50"><Globe className="w-12 h-12 text-white/20" /></div>

                                <div className="z-10 text-center mt-12">
                                    <div className="text-5xl font-heading font-black tracking-tighter text-white mb-2">NIS</div>
                                    <div className="h-px w-24 bg-brand-red mx-auto opacity-50"></div>
                                </div>

                                <div className="z-10 text-center">
                                    <h2 className="text-4xl lg:text-5xl font-heading font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400 italic">
                                        THERMO<br />LOCK
                                    </h2>
                                    <p className="text-brand-accent tracking-[0.3em] text-xs font-bold uppercase mt-4">Eco-Plaster System</p>
                                </div>

                                <div className="z-10 w-full grid grid-cols-2 gap-2 mt-auto">
                                    {['Fireproof', 'Waterproof', 'Thermal', 'Acoustic'].map((feature) => (
                                        <div key={feature} className="bg-white/5 backdrop-blur-sm border border-white/5 py-2 rounded text-center text-[10px] uppercase tracking-wider text-gray-400">
                                            {feature}
                                        </div>
                                    ))}
                                </div>

                                {/* Inner Glow */}
                                <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-brand-red/20 blur-[80px]"></div>
                            </div>

                            {/* Orbiting Icons with Tooltips */}
                            {[
                                { icon: Flame, color: 'text-orange-500', bg: 'bg-orange-950/40', label: 'fire', pos: '-left-8 top-12', delay: 0 },
                                { icon: Droplets, color: 'text-blue-500', bg: 'bg-blue-950/40', label: 'water', pos: '-right-8 top-32', delay: 2 },
                                { icon: Volume2, color: 'text-emerald-500', bg: 'bg-emerald-950/40', label: 'sound', pos: '-left-4 bottom-32', delay: 4 },
                                { icon: ThermometerSun, color: 'text-amber-500', bg: 'bg-amber-950/40', label: 'thermal', pos: '-right-4 bottom-12', delay: 6 },
                            ].map((badge, i) => (
                                <div
                                    key={i}
                                    className={`absolute ${badge.pos} flex flex-col items-center gap-2 z-20 group/icon`}
                                >
                                    <div className={`w-14 h-14 rounded-2xl ${badge.bg} backdrop-blur-md border border-white/10 flex items-center justify-center shadow-lg animate-pulse`} style={{ animationDelay: `${badge.delay}s`, animationDuration: '8s' }}>
                                        <badge.icon className={`w-7 h-7 ${badge.color}`} />
                                    </div>

                                    {/* Tooltip */}
                                    <div className="absolute top-full mt-2 opacity-0 group-hover/icon:opacity-100 transition-opacity whitespace-nowrap z-30">
                                        <span className="text-[10px] uppercase font-bold bg-brand-dark px-3 py-1 rounded-full border border-white/10 text-gray-300 shadow-xl">
                                            {t(`thermolock.hero.badges.${badge.label}`)}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* 2. INTRO SECTION */}
            <section className="py-24 bg-brand-charcoal relative">
                <div className="container mx-auto px-6">
                    {/* Glass Panel Wrapper */}
                    <div className="bg-white/5 backdrop-blur-sm border border-white/5 rounded-[3rem] p-8 lg:p-16 shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-red/20 to-transparent"></div>

                        <div className="grid lg:grid-cols-12 gap-12 items-start relative z-10">
                            {/* Title & Desc */}
                            <div className="lg:col-span-7 space-y-6">
                                <h2 className="text-3xl lg:text-4xl font-heading font-bold leading-tight">
                                    {t('thermolock.intro.title')}
                                </h2>
                                <p className="text-gray-400 text-lg leading-relaxed">
                                    {t('thermolock.intro.desc')}
                                    <span className="block mt-4 text-brand-accent font-medium border-l-2 border-brand-accent pl-4">
                                        {t('thermolock.intro.highlight', { defaultValue: 'Based on pumice & perlite (volcanic aggregates).' })}
                                    </span>
                                </p>

                                <div className="grid sm:grid-cols-2 gap-4 mt-8">
                                    <div className="p-6 rounded-2xl bg-brand-dark/50 border border-white/5 hover:border-brand-accent/50 hover:-translate-y-1 transition-all duration-300 group cursor-default">
                                        <Leaf className="w-8 h-8 text-brand-accent mb-4 group-hover:scale-110 transition-transform" />
                                        <h4 className="font-bold text-lg mb-2 text-white">Natural & Inorganic</h4>
                                        <p className="text-sm text-gray-400">Volcanic rock aggregates base (Pumice & Perlite).</p>
                                    </div>
                                    <div className="p-6 rounded-2xl bg-brand-dark/50 border border-white/5 hover:border-brand-red/50 hover:-translate-y-1 transition-all duration-300 group cursor-default">
                                        <ShieldCheck className="w-8 h-8 text-brand-red mb-4 group-hover:scale-110 transition-transform" />
                                        <h4 className="font-bold text-lg mb-2 text-white">Complete Protection</h4>
                                        <p className="text-sm text-gray-400">Replaces plaster, insulation, and waterproofing.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Highlights Card */}
                            <div className="lg:col-span-5">
                                <div className="bg-brand-dark rounded-3xl p-8 border border-white/10 lg:sticky lg:top-32 shadow-2xl">
                                    <h3 className="text-xl font-bold mb-6 text-white border-b border-white/10 pb-4">Key Highlights</h3>
                                    <div className="space-y-6">
                                        {['substitute', 'natural', 'single'].map((key) => (
                                            <div key={key} className="flex gap-4 group">
                                                <div className="w-8 h-8 rounded-full bg-brand-red/10 flex items-center justify-center shrink-0 mt-1 border border-brand-red/20 group-hover:bg-brand-red/20 transition-colors">
                                                    <CheckCircle2 className="w-5 h-5 text-brand-red" />
                                                </div>
                                                <div>
                                                    <p className="text-gray-300 font-medium group-hover:text-white transition-colors">
                                                        {t(`thermolock.intro.cards.${key}`)}
                                                    </p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. ROADMAP (4-in-1) */}
            <section className="py-32 bg-brand-dark relative overflow-hidden">
                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center mb-24 max-w-3xl mx-auto">
                        <span className="text-brand-accent uppercase tracking-widest text-xs font-bold mb-3 block">4-in-1 Eco-System</span>
                        <h2 className="text-4xl lg:text-5xl font-heading font-bold mb-6">{t('thermolock.roadmap.title')}</h2>
                        <p className="text-gray-400">One product. Four layers of protection. Zero compromises.</p>
                    </div>

                    <div className="relative max-w-5xl mx-auto">
                        {/* Start Label */}
                        <div className="absolute left-8 lg:left-1/2 -top-12 lg:-translate-x-1/2 flex flex-col items-center z-20">
                            <div className="px-3 py-1 rounded-full bg-brand-charcoal border border-white/10 text-[10px] uppercase font-bold text-gray-500 mb-2">
                                {t('thermolock.roadmap.start', { defaultValue: 'Start: Structural Protection' })}
                            </div>
                            <div className="w-0.5 h-8 bg-gradient-to-b from-transparent to-brand-red/50"></div>
                        </div>

                        {/* Central Line with Drawing Animation */}
                        <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-1 bg-brand-charcoal lg:-translate-x-1/2 rounded-full overflow-hidden">
                            <motion.div
                                initial={{ height: 0 }}
                                whileInView={{ height: '100%' }}
                                viewport={{ once: true }}
                                transition={{ duration: 2, ease: "easeInOut" }}
                                className="w-full bg-gradient-to-b from-brand-red via-brand-accent to-brand-red h-full shadow-[0_0_15px_rgba(200,16,46,0.5)]"
                            ></motion.div>
                        </div>

                        {/* End Label */}
                        <div className="absolute left-8 lg:left-1/2 -bottom-12 lg:-translate-x-1/2 flex flex-col items-center z-20">
                            <div className="w-0.5 h-8 bg-gradient-to-b from-brand-red/50 to-transparent"></div>
                            <div className="px-3 py-1 rounded-full bg-brand-charcoal border border-white/10 text-[10px] uppercase font-bold text-brand-accent mt-2">
                                {t('thermolock.roadmap.end', { defaultValue: 'End: Full Envelope Protection' })}
                            </div>
                        </div>

                        <div className="space-y-12 lg:space-y-32 py-8">
                            {[
                                { key: 'fire', icon: Flame, color: 'text-orange-500', glow: 'shadow-orange-500/40 border-orange-500/30' },
                                { key: 'thermal', icon: ThermometerSun, color: 'text-amber-500', glow: 'shadow-amber-500/40 border-amber-500/30' },
                                { key: 'sound', icon: Volume2, color: 'text-emerald-500', glow: 'shadow-emerald-500/40 border-emerald-500/30' },
                                { key: 'water', icon: Droplets, color: 'text-blue-500', glow: 'shadow-blue-500/40 border-blue-500/30' }
                            ].map((item, index) => {
                                const isEven = index % 2 === 0;
                                return (
                                    <div key={item.key} className={`relative flex flex-col lg:flex-row gap-8 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}>

                                        {/* Glowing Orb Node */}
                                        <motion.div
                                            initial={{ scale: 0, opacity: 0 }}
                                            whileInView={{ scale: 1, opacity: 1 }}
                                            viewport={{ once: true, margin: "-100px" }}
                                            transition={{ delay: index * 0.3, duration: 0.5 }}
                                            className={`relative z-10 w-20 h-20 rounded-full bg-brand-dark border-4 flex items-center justify-center shadow-[0_0_30px_rgba(0,0,0,0.5)] lg:absolute lg:left-1/2 lg:-translate-x-1/2 ${item.glow} group cursor-pointer`}
                                        >
                                            <div className="absolute inset-0 rounded-full bg-white/5 animate-ping opacity-20"></div>
                                            <item.icon className={`w-9 h-9 ${item.color} drop-shadow-lg`} />
                                        </motion.div>

                                        {/* Spacer */}
                                        <div className="hidden lg:block lg:w-1/2"></div>

                                        {/* Content Card */}
                                        <motion.div
                                            initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true, margin: "-100px" }}
                                            transition={{ duration: 0.6, delay: 0.2 }}
                                            className={`w-full lg:w-1/2 ${isEven ? 'lg:pl-24' : 'lg:pr-24 lg:text-right'}`}
                                        >
                                            <div className="bg-brand-charcoal/80 backdrop-blur-md p-8 rounded-3xl border border-white/5 hover:border-brand-accent/20 transition-all hover:-translate-y-1 shadow-xl group hover:shadow-2xl">
                                                <h3 className="text-2xl font-bold font-heading mb-3 text-white group-hover:text-brand-accent transition-colors">
                                                    {t(`thermolock.roadmap.steps.${item.key}.title`)}
                                                </h3>
                                                <p className="text-gray-400 leading-relaxed text-sm lg:text-base">
                                                    {t(`thermolock.roadmap.steps.${item.key}.desc`)}
                                                </p>
                                            </div>
                                        </motion.div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. COMPARISON */}
            <section className="py-24 bg-brand-charcoal border-t border-white/5 relative z-10 -mt-10 rounded-t-[3rem] shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <span className="text-gray-500 text-sm uppercase font-bold tracking-widest mb-4 block">
                            {t('thermolock.comparison.label', { defaultValue: 'Choose your approach:' })}
                        </span>
                        <div className="inline-flex bg-black/30 p-1 rounded-full mb-8 backdrop-blur-sm border border-white/5">
                            <span className="px-6 py-2 rounded-full text-sm font-bold text-gray-500">Conventional</span>
                            <span className="px-6 py-2 rounded-full text-sm font-bold bg-brand-accent text-brand-dark shadow-lg">Thermolock®</span>
                        </div>
                        <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-4">{t('thermolock.comparison.title')}</h2>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto items-center">
                        {/* Conventional */}
                        <div className="bg-brand-dark/30 p-8 lg:p-12 rounded-3xl border border-white/5 border-dashed relative overflow-hidden opacity-80 hover:opacity-100 transition-opacity">
                            <div className="absolute top-0 right-0 p-4 opacity-5"><Factory className="w-24 h-24 grayscale" /></div>
                            <h3 className="text-2xl font-bold mb-8 text-gray-400">{t('thermolock.comparison.conv.title')}</h3>
                            <ul className="space-y-4">
                                {(t('thermolock.comparison.conv.points', { returnObjects: true }) as string[]).map((point, i) => (
                                    <li key={i} className="flex gap-4 text-gray-500">
                                        <div className="w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center shrink-0 border border-red-500/20">
                                            <span className="text-red-500 text-xs font-bold">✕</span>
                                        </div>
                                        {point}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Thermolock (Winning) */}
                        <div className="bg-gradient-to-b from-[#1a2030] to-[#0f1219] p-8 lg:p-12 rounded-3xl border border-brand-accent/20 relative overflow-hidden shadow-2xl ring-1 ring-brand-accent/10 transform scale-105 z-10">
                            <div className="absolute top-0 right-0 p-4 opacity-10"><Award className="w-32 h-32 text-brand-accent" /></div>

                            {/* Ribbon */}
                            <div className="absolute top-6 -right-12 bg-brand-accent text-brand-dark text-xs font-bold uppercase py-1 px-12 rotate-45 shadow-lg">
                                Recommended
                            </div>

                            <h3 className="text-2xl font-bold mb-8 text-white flex items-center gap-3">
                                {t('thermolock.comparison.thermo.title')}
                                <Award className="w-6 h-6 text-brand-accent" />
                            </h3>
                            <ul className="space-y-4">
                                {(t('thermolock.comparison.thermo.points', { returnObjects: true }) as string[]).map((point, i) => (
                                    <li key={i} className="flex gap-4 text-gray-200 text-lg">
                                        <div className="w-6 h-6 rounded-full bg-brand-accent flex items-center justify-center shrink-0 shadow-lg shadow-brand-accent/20">
                                            <CheckCircle2 className="w-4 h-4 text-brand-dark" />
                                        </div>
                                        {point}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Stats */}
                    <div className="grid md:grid-cols-3 gap-6 mt-16 max-w-5xl mx-auto">
                        {(t('thermolock.comparison.stats', { returnObjects: true }) as string[]).map((stat, i) => (
                            <div key={i} className="text-center p-6 rounded-2xl bg-white/5 border border-white/5 backdrop-blur-sm">
                                <p className="font-bold text-brand-red text-lg">{stat}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. FEATURES & CHARACTERISTICS */}
            <section className="py-24 bg-brand-dark">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-heading font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                        {t('thermolock.features.title')}
                    </h2>

                    <div className="space-y-16">
                        {/* Characteristics Tags */}
                        <div>
                            <div className="flex items-center justify-center gap-4 mb-8">
                                <div className="h-px bg-white/10 w-20"></div>
                                <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-gray-500">Characteristics</h3>
                                <div className="h-px bg-white/10 w-20"></div>
                            </div>
                            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
                                {(t('thermolock.features.characteristics', { returnObjects: true }) as string[]).map((tag, i) => (
                                    <button key={i} className="px-5 py-2.5 rounded-full bg-brand-charcoal border border-white/10 text-sm font-medium text-gray-400 hover:text-white hover:bg-brand-red/10 hover:border-brand-red/40 hover:scale-105 active:scale-95 transition-all shadow-sm">
                                        {tag}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Features Grid - Glass Tiles */}
                        <div>
                            <div className="flex items-center justify-center gap-4 mb-8">
                                <div className="h-px bg-white/10 w-20"></div>
                                <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-gray-500">Key Features</h3>
                                <div className="h-px bg-white/10 w-20"></div>
                            </div>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
                                {(t('thermolock.features.features', { returnObjects: true }) as string[]).map((feature, i) => (
                                    <div key={i} className="group p-5 rounded-xl bg-white/5 border border-white/5 text-center flex flex-col items-center gap-3 hover:bg-white/10 hover:border-white/20 transition-all duration-300 relative overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-br from-brand-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                        <div className="w-2 h-2 rounded-full bg-brand-accent group-hover:scale-150 transition-transform shadow-[0_0_10px_rgba(255,193,7,0.5)]"></div>
                                        <span className="font-medium text-sm text-gray-300 group-hover:text-white relative z-10">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. TECHNICAL SPECS */}
            <section className="py-24 bg-brand-charcoal">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto bg-brand-dark rounded-3xl p-8 lg:p-12 border border-white/10 shadow-2xl relative overflow-hidden">
                        {/* Background Deco */}
                        <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
                            <FileText className="w-64 h-64 text-white" />
                        </div>

                        {/* Hero Metrics */}
                        <div className="grid grid-cols-3 gap-4 mb-12 border-b border-white/10 pb-12">
                            {(Object.entries(t('thermolock.specs.hero', { returnObjects: true }) as Record<string, { val: string, label: string }>)).map(([key, data]) => (
                                <div key={key} className="text-center">
                                    <div className="text-2xl lg:text-4xl font-heading font-black text-white mb-2 tracking-tight">
                                        {data.val}
                                    </div>
                                    <div className="text-xs uppercase tracking-widest text-brand-accent font-bold">
                                        {data.label}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <h2 className="text-2xl font-heading font-bold mb-8 flex items-center gap-3">
                            <FileText className="w-6 h-6 text-brand-red" />
                            {t('thermolock.specs.title')}
                        </h2>

                        <div className="grid md:grid-cols-2 gap-x-12 gap-y-6 text-sm">
                            {Object.entries(t('thermolock.specs.table', { returnObjects: true })).map(([key, label]) => {
                                // Mock values for display purposes - generally these should be in i18n too or props
                                const values: Record<string, string> = {
                                    sri: "High Reflectance", density: "350 kg/m³", conductivity: "0.05 W/mK",
                                    emittance: "High", sound: "25 dB", fire: "Class A1 (1000°C)",
                                    coverage: "2 m² per 20kg", shelf: "16 Months", app: "Machine / Trowel"
                                };
                                return (
                                    <div key={key} className="flex justify-between items-center border-b border-white/5 pb-3">
                                        <span className="text-gray-400">{label}</span>
                                        <span className="font-mono text-white font-medium">{values[key as keyof typeof values] || "—"}</span>
                                    </div>
                                );
                            })}
                        </div>
                        <p className="mt-8 text-center text-xs text-gray-500 uppercase tracking-widest font-medium">
                            {t('thermolock.specs.note')}
                        </p>
                    </div>
                </div>
            </section>

            {/* 7. SUSTAINABILITY */}
            <section className="py-24 relative overflow-hidden bg-gradient-to-br from-white via-gray-50 to-emerald-50 text-brand-dark">
                {/* Diagonal Reveal Effect */}
                <motion.div
                    initial={{ x: '100%' }}
                    whileInView={{ x: '50%' }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    className="absolute right-0 top-0 w-full h-full bg-white skew-x-12 z-0 opacity-80 pointer-events-none hidden lg:block"
                ></motion.div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 font-bold uppercase text-xs mb-6 shadow-sm border border-emerald-200">
                                <Leaf className="w-4 h-4" /> Planet First
                            </div>
                            <h2 className="text-4xl font-heading font-bold mb-6 text-emerald-950">{t('thermolock.sustainability.title')}</h2>
                            <p className="text-lg text-gray-600 leading-relaxed mb-8">
                                {t('thermolock.sustainability.desc')}
                            </p>
                            <div className="grid grid-cols-2 gap-6">
                                {(t('thermolock.sustainability.points', { returnObjects: true }) as string[]).map((point, i) => (
                                    <div key={i} className="flex items-center gap-3 group">
                                        <div className="w-6 h-6 rounded-full bg-emerald-200 flex items-center justify-center shrink-0 text-emerald-700 group-hover:scale-110 transition-transform">
                                            <CheckCircle2 className="w-4 h-4" />
                                        </div>
                                        <span className="font-bold text-sm text-emerald-900">{point}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="lg:pl-12">
                            <div className="bg-brand-dark text-white p-10 rounded-[2.5rem] relative shadow-2xl overflow-hidden hover:scale-[1.02] transition-transform duration-500">
                                <Globe className="w-48 h-48 text-white/5 absolute -top-12 -right-12 animate-pulse-slow" />
                                <h3 className="text-2xl font-bold mb-6 relative z-10">Our Green Commitment</h3>
                                <ul className="space-y-6 relative z-10">
                                    <li className="flex gap-4 items-start group">
                                        <div className="mt-1 w-2 h-2 bg-emerald-400 rounded-full group-hover:scale-150 transition-transform shadow-[0_0_10px_rgba(52,211,153,0.8)]"></div>
                                        <div>
                                            <strong className="block text-emerald-400 mb-1">Low Carbon Footprint</strong>
                                            <span className="text-gray-400 text-sm leading-snug block">Significantly lower CO2 emissions compared to cement-based plasters.</span>
                                        </div>
                                    </li>
                                    <li className="flex gap-4 items-start group">
                                        <div className="mt-1 w-2 h-2 bg-emerald-400 rounded-full group-hover:scale-150 transition-transform shadow-[0_0_10px_rgba(52,211,153,0.8)]"></div>
                                        <div>
                                            <strong className="block text-emerald-400 mb-1">100% Recyclable</strong>
                                            <span className="text-gray-400 text-sm leading-snug block">Made from natural minerals that can be crushed and reused.</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 8. USE CASES */}
            <section className="py-32 bg-brand-dark">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-heading font-bold mb-16 text-center text-white">
                        {t('thermolock.applications.title')}
                    </h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { key: 'residential', icon: Building2, img: '/images/thermolock/case-villa.jpg' },
                            { key: 'hotels', icon: Hotel, img: '/images/thermolock/case-hotel.jpg' },
                            { key: 'facades', icon: BrickWall, img: '/images/thermolock/case-facade.jpg' },
                            { key: 'interior', icon: PaintBucket, img: '/images/thermolock/case-interior.jpg' }
                        ].map((item) => (
                            <div key={item.key} className="group relative h-80 rounded-3xl overflow-hidden cursor-pointer border border-white/10 hover:border-brand-accent/50 transition-colors">
                                <div className="absolute inset-0 bg-brand-charcoal overflow-hidden">
                                    {/* Background Image Placeholder or Icon Pattern */}
                                    <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
                                    <item.icon className="absolute -bottom-12 -right-12 w-48 h-48 text-white/5 rotate-12 group-hover:rotate-0 transition-transform duration-700" />
                                </div>

                                <div className="absolute inset-0 p-8 flex flex-col justify-end z-10 transition-transform duration-500 group-hover:-translate-y-4">
                                    <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center mb-4 text-brand-accent border border-white/10 group-hover:scale-110 transition-transform origin-bottom-left">
                                        <item.icon className="w-6 h-6" />
                                    </div>
                                    <h3 className="font-bold text-xl text-white mb-2 leading-tight">
                                        {t(`thermolock.applications.items.${item.key}`)}
                                    </h3>

                                    {/* Reveal Content */}
                                    <div className="h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 transition-all duration-300 overflow-hidden">
                                        <p className="text-xs text-brand-accent font-bold uppercase tracking-widest mt-2 border-t border-white/10 pt-2">View Details →</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 9. CALL TO ACTION */}
            <section className="py-32 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-brand-red via-[#d01030] to-orange-700"></div>
                {/* Slow Moving Gradient Texture */}
                <div className="absolute inset-0 opacity-30 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] mix-blend-multiply animate-aurora filter contrast-125"></div>

                <div className="container mx-auto px-6 relative z-10 text-center">

                    {/* Trusted Logos Row */}
                    <div className="flex justify-center gap-8 mb-12 opacity-50 grayscale hover:grayscale-0 transition-all">
                        <div className="h-8 w-24 bg-white/20 rounded"></div>
                        <div className="h-8 w-24 bg-white/20 rounded"></div>
                        <div className="h-8 w-24 bg-white/20 rounded"></div>
                    </div>

                    <h2 className="text-4xl lg:text-6xl font-heading font-extrabold mb-6 text-white text-shadow-lg tracking-tight">
                        {t('thermolock.cta.title')}
                    </h2>
                    <p className="text-xl lg:text-2xl text-white/90 mb-12 max-w-2xl mx-auto font-light">
                        {t('thermolock.cta.subtitle')}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                        <Button size="lg" className="bg-white text-brand-red hover:bg-gray-100 border-none shadow-[0_20px_40px_-5px_rgba(0,0,0,0.4)] px-8 py-6 text-lg group">
                            <Phone className="w-5 h-5 mr-3 group-hover:shake" />
                            {t('thermolock.cta.btnContact')}
                        </Button>
                        <Button size="lg" variant="outline" className="border-white/40 text-white hover:bg-white/10 px-8 py-6 text-lg backdrop-blur-sm">
                            <Download className="w-5 h-5 mr-3" />
                            {t('thermolock.cta.btnProfile')}
                        </Button>
                    </div>

                    <p className="mt-8 text-white/50 text-xs uppercase tracking-widest font-medium">
                        {t('thermolock.cta.disclaimer', { defaultValue: 'No spam, just technical support.' })}
                    </p>
                </div>
            </section>

        </div>
    );
};

export default ThermolockPage;
