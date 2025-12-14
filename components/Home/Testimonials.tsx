import React from 'react';
import { Star, Quote } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const Testimonials: React.FC = () => {
    const { t } = useTranslation();

    const reviews = [
        {
            text: t('testimonials.reviews.1.text'),
            author: "Mohammed Al Balushi",
            role: t('testimonials.reviews.1.role'),
            city: "Muscat",
            rating: 5
        },
        {
            text: t('testimonials.reviews.2.text'),
            author: "Sarah Johnson",
            role: t('testimonials.reviews.2.role'),
            city: "Seeb",
            rating: 5
        },
        {
            text: t('testimonials.reviews.3.text'),
            author: "Said Al Harthy",
            role: t('testimonials.reviews.3.role'),
            city: "Barka",
            rating: 5
        }
    ];

    return (
        <section className="py-20 bg-brand-dark relative">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="text-brand-red font-bold tracking-widest text-xs uppercase mb-2 block">{t('testimonials.subtitle')}</span>
                    <h2 className="text-3xl font-heading font-bold text-white">{t('testimonials.title')}</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {reviews.map((rev, i) => (
                        <div key={i} className="glass-card p-8 rounded-2xl relative">
                            <div className="text-brand-red/20 absolute top-6 right-6 rtl:left-6 rtl:right-auto font-serif text-6xl leading-none">"</div>
                            <div className="flex gap-1 mb-6">
                                {[...Array(rev.rating)].map((_, r) => (
                                    <Star key={r} className="w-4 h-4 text-brand-orange fill-brand-orange" />
                                ))}
                            </div>
                            <p className="text-gray-300 mb-6 italic leading-relaxed relative z-10">"{rev.text}"</p>

                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center font-bold text-white">
                                    {rev.author[0]}
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-sm">{rev.author}</h4>
                                    <p className="text-xs text-gray-500">{rev.role} • {rev.city}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
