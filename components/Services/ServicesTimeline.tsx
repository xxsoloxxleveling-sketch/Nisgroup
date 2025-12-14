import React, { useRef, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "../UI/Button";

type Service = {
    id: string;
    image: string;
};

// Map images separately to keep i18n clean. 
// Using high-quality Unsplash construction/service images.
const SERVICE_IMAGES: Record<string, string> = {
    painting: "/images/services/painting.png",
    mep: "/images/services/mep.png",
    ac: "/images/services/ac.png",
    civil: "/images/services/civil.png",
    decor: "/images/services/decor.png",
    landscaping: "/images/services/landscaping.png"
};

export const ServicesTimeline: React.FC = () => {
    const { t, i18n } = useTranslation();
    const isRTL = i18n.dir() === 'rtl';
    const containerRef = useRef<HTMLDivElement>(null);
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    // Data definition
    const services = [
        { id: "painting", key: "servicesPage.items.painting" },
        { id: "mep", key: "servicesPage.items.electrical" },
        { id: "ac", key: "servicesPage.items.ac" },
        { id: "civil", key: "servicesPage.items.civil" },
        { id: "decor", key: "servicesPage.items.decor" },
        { id: "landscaping", key: "servicesPage.items.landscaping" }
    ];

    // Scroll Logic
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Map scroll progress to active index (0 to services.length - 1)
    const activeScrollIndex = useTransform(scrollYProgress, [0, 1], [0, services.length - 1]);
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const unsubscribe = activeScrollIndex.on("change", (latest) => {
            setActiveIndex(Math.round(latest));
        });
        return () => unsubscribe();
    }, [activeScrollIndex]);

    // Derived State
    const currentDisplayIndex = hoveredIndex !== null ? hoveredIndex : activeIndex;
    const activeService = services[currentDisplayIndex];
    const activeImage = SERVICE_IMAGES[activeService.id];

    // Smooth line height for the center line
    const springScroll = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
    const lineHeight = useTransform(springScroll, [0, 1], ["0%", "100%"]);

    return (
        <section ref={containerRef} className="relative bg-brand-charcoal" style={{ height: `${services.length * 100}vh` }}>
            {/* Alive Background Elements */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                {/* 1. Animated Aurora Gradient */}
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_50%_50%,_var(--nis-accent-soft),_transparent_70%)] animate-breathe blur-3xl"></div>

                {/* 2. Moving mesh gradients */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-red/10 rounded-full blur-[100px] animate-aurora opacity-30 mix-blend-screen"></div>
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-orange/10 rounded-full blur-[120px] animate-aurora opacity-30 mix-blend-screen delay-1000"></div>

                {/* 3. Noise Overlay for texture */}
                <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] mix-blend-overlay"></div>
            </div>

            {/* Sticky Container */}
            <div className={`sticky top-0 h-screen overflow-hidden flex flex-col md:flex-row ${isRTL ? 'md:flex-row-reverse' : ''}`}>

                {/* 1. Left Side: Navigation / Steps */}
                <div className="w-full md:w-1/3 lg:w-1/4 h-full flex flex-col justify-center px-6 z-20 relative bg-brand-charcoal/90 backdrop-blur-sm md:bg-transparent">
                    <div className="space-y-6 md:space-y-8">
                        {services.map((service, index) => {
                            const isActive = index === currentDisplayIndex;
                            const isPast = index < currentDisplayIndex;

                            return (
                                <div
                                    key={service.id}
                                    className={`group cursor-pointer flex items-center gap-4 transition-all duration-300 ${isActive ? 'translate-x-4' : 'opacity-50 hover:opacity-100'}`}
                                    onMouseEnter={() => setHoveredIndex(index)}
                                    onMouseLeave={() => setHoveredIndex(null)}
                                // Make clickable to smooth scroll to that section if we were mapping directly, 
                                // but since it's one big sticky section, we'd need to scroll the window.
                                // For now, hover-preview is implemented.
                                >
                                    <span className={`text-sm font-bold tracking-widest transition-colors duration-300 ${isActive ? 'text-brand-red' : 'text-gray-500'}`}>
                                        0{index + 1}
                                    </span>
                                    <h3 className={`text-lg md:text-xl font-heading font-bold transition-colors duration-300 ${isActive ? 'text-white' : 'text-gray-400 group-hover:text-gray-200'}`}>
                                        {t(`${service.key}.title`)}
                                    </h3>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* 2. Center: Glowing Line */}
                <div className="absolute left-0 md:left-1/3 lg:left-1/4 top-0 bottom-0 w-16 flex justify-center z-10 hidden md:flex">
                    {/* Base Track */}
                    <div className="w-[2px] h-full bg-white/10 relative">
                        {/* Active Progress Bar */}
                        <motion.div
                            className="absolute top-0 w-full bg-gradient-to-b from-brand-red to-brand-amber box-shadow-glow"
                            style={{ height: lineHeight }}
                        />
                    </div>
                </div>

                {/* 3. Right Side: Big Hero Card */}
                <div className="w-full md:w-2/3 lg:w-3/4 h-full relative flex items-center justify-center p-6 md:p-12 lg:p-20">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentDisplayIndex} // Triggers animation on change
                            initial={{ opacity: 0, x: 50, scale: 0.95 }}
                            animate={{ opacity: 1, x: 0, scale: 1 }}
                            exit={{ opacity: 0, x: -50, scale: 0.95 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            className="w-full max-w-5xl h-[60vh] md:h-[70vh] flex flex-col md:flex-row rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-brand-charcoal/80 backdrop-blur-xl group"
                        >
                            {/* Left Half: Text Content */}
                            <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center relative z-10">
                                {/* Subtle background gradient based on service? */}
                                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />

                                <span className="inline-block text-brand-red font-bold tracking-[0.2em] text-sm uppercase mb-4 animate-fade-in-up">
                                    {t(`${activeService.key}.label`)}
                                </span>

                                <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6 leading-tight animate-fade-in-up delay-100">
                                    {t(`${activeService.key}.title`)}
                                </h2>

                                <p className="text-gray-300 text-lg leading-relaxed mb-8 animate-fade-in-up delay-200">
                                    {t(`${activeService.key}.details`)}
                                </p>

                                <div className="space-y-3 mb-8 animate-fade-in-up delay-300">
                                    {(Array.isArray(t(`${activeService.key}.features`, { returnObjects: true }))
                                        ? (t(`${activeService.key}.features`, { returnObjects: true }) as string[])
                                        : []
                                    ).slice(0, 3).map((feature, i) => (
                                        <div key={i} className="flex items-center gap-3 text-gray-400">
                                            <CheckCircle2 className="w-5 h-5 text-brand-red shrink-0" />
                                            <span>{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="animate-fade-in-up delay-400">
                                    <Button className="magnetic-btn group-hover:scale-105 transition-transform duration-300">
                                        {t('common.readMore', "Learn More")} <ArrowRight className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
                                    </Button>
                                </div>
                            </div>

                            {/* Right Half: Image */}
                            <div className="w-full md:w-1/2 relative overflow-hidden hidden md:block">
                                <motion.img
                                    src={activeImage}
                                    alt={t(`${activeService.key}.title`)}
                                    className="w-full h-full object-cover"
                                    initial={{ scale: 1.1 }}
                                    animate={{ scale: 1 }}
                                    transition={{ duration: 0.7 }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-l from-transparent to-brand-charcoal/80 md:to-brand-charcoal/20"></div>
                            </div>

                        </motion.div>
                    </AnimatePresence>
                </div>

            </div>
        </section>
    );
};
