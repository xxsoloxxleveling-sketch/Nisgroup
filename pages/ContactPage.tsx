import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, Loader2 } from 'lucide-react';
import { Button } from '../components/UI/Button';
import { useEmail } from '../hooks/useEmail';
import { useTranslation } from 'react-i18next';

export const ContactPage: React.FC = () => {
    const { t, i18n } = useTranslation();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const { sendEmail, loading, success, error } = useEmail();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await sendEmail(formData);
    };

    return (
        <div className="pt-24 bg-brand-charcoal min-h-screen">
            <div className="container mx-auto px-6 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                    {/* Contact Info */}
                    <div className="animate-fade-in-left">
                        <span className="text-brand-red font-bold tracking-widest text-xs uppercase mb-4 block">{t('contact.subtitle')}</span>
                        <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
                            {t('contact.title')}
                        </h1>
                        <p className="text-gray-400 text-lg mb-12 max-w-md">
                            {t('contact.desc')}
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start gap-6">
                                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-brand-red shrink-0">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-lg mb-1">{t('contact.info.phone')}</h4>
                                    <p className="text-gray-400" dir="ltr">+968 9123 4567</p>
                                    <p className="text-gray-500 text-sm mt-1">{t('contact.info.available')}</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-6">
                                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-brand-red shrink-0">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-lg mb-1">{t('contact.info.email')}</h4>
                                    <p className="text-gray-400">info@nis-oman.com</p>
                                    <p className="text-gray-500 text-sm mt-1">{t('contact.info.response')}</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-6">
                                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-brand-red shrink-0">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-lg mb-1">{t('contact.info.location')}</h4>
                                    <p className="text-gray-400">Office 402, Building 5<br />Ghala Industrial Area, Muscat</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-brand-dark p-8 md:p-10 rounded-3xl border border-white/5 shadow-2xl animate-fade-in-right">
                        {success ? (
                            <div className="h-full flex flex-col items-center justify-center text-center py-20">
                                <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center text-green-500 mb-6">
                                    <CheckCircle className="w-10 h-10" />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-2">{t('contact.successTitle')}</h3>
                                <p className="text-gray-400">{t('contact.successDesc')}</p>
                                <Button onClick={() => window.location.reload()} variant="outline" className="mt-8">
                                    {t('contact.sendAnother')}
                                </Button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <h3 className="text-2xl font-bold text-white mb-6">{t('contact.form.title')}</h3>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-400 uppercase tracking-wider">{t('contact.form.name')}</label>
                                        <input
                                            type="text"
                                            name="name"
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full bg-brand-charcoal border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red transition-all"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-400 uppercase tracking-wider">{t('contact.form.phone')}</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            required
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full bg-brand-charcoal border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red transition-all"
                                            placeholder="+968 ..."
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-400 uppercase tracking-wider">{t('contact.form.email')}</label>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full bg-brand-charcoal border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red transition-all"
                                        placeholder="john@example.com"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-400 uppercase tracking-wider">{t('contact.form.subject')}</label>
                                    <select
                                        name="subject"
                                        aria-label={t('contact.form.subject')}
                                        value={formData.subject}
                                        onChange={handleChange as any}
                                        className="w-full bg-brand-charcoal border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red transition-all"
                                    >
                                        <option value="">{t('contact.form.selectService')}</option>
                                        <option value="General Inquiry">{t('servicesPage.items.painting.title')} (General)</option>
                                        <option value="Painting">{t('servicesPage.items.painting.title')}</option>
                                        <option value="Electrical">{t('servicesPage.items.electrical.title')}</option>
                                        <option value="AC Maintenance">{t('servicesPage.items.ac.title')}</option>
                                        <option value="Civil Works">{t('servicesPage.items.civil.title')}</option>
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-400 uppercase tracking-wider">{t('contact.form.message')}</label>
                                    <textarea
                                        name="message"
                                        rows={4}
                                        required
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="w-full bg-brand-charcoal border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red transition-all resize-none"
                                        placeholder={t('contact.form.messagePlaceholder')}
                                    ></textarea>
                                </div>

                                <Button
                                    className="w-full magnetic-btn flex items-center justify-center gap-2 font-bold text-lg h-12"
                                    disabled={loading}
                                >
                                    {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <><Send className={`w-5 h-5 ${i18n.dir() === 'rtl' ? 'rotate-180' : ''}`} /> {t('contact.form.submit')}</>}
                                </Button>

                                {error && (
                                    <p className="text-red-400 text-sm text-center mt-2">{t('contact.error')}</p>
                                )}
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};