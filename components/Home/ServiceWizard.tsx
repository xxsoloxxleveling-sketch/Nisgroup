import React, { useState } from 'react';
import { Button } from '../UI/Button';
import { Check, ChevronRight, ChevronLeft, Loader2 } from 'lucide-react';
import { useEmail } from '../../hooks/useEmail';
import { useTranslation } from 'react-i18next';

export const ServiceWizard: React.FC = () => {
    const [step, setStep] = useState(1);
    const [selection, setSelection] = useState({ category: '', property: '' });
    const [contact, setContact] = useState({ name: '', phone: '' });
    const { sendEmail, loading, error } = useEmail(); // Use the hook
    const [submitted, setSubmitted] = useState(false);
    const { t, i18n } = useTranslation();

    const categories = ['Painting', 'Electrical', 'Plumbing', 'AC', 'Masonry', 'Cleaning'];
    const properties = ['Villa (Occupied)', 'Villa (New)', 'Apartment', 'Office', 'Shop'];

    const handleNext = () => {
        if (step === 1 && selection.category) setStep(2);
        if (step === 2 && selection.property) setStep(3);
    };

    const handleSubmit = async () => {
        if (!contact.name || !contact.phone) return;

        // Create a message body for the email hook
        const messageBody = `
      New Service Request from Wizard:
      Category: ${selection.category}
      Property: ${selection.property}
    `;

        const success = await sendEmail({
            name: contact.name,
            phone: contact.phone,
            email: 'wizard-lead@nis.com', // Placeholder or add email field
            message: messageBody
        });

        if (success) {
            setSubmitted(true);
        }
    };

    const resetForm = () => {
        setStep(1);
        setSelection({ category: '', property: '' });
        setContact({ name: '', phone: '' });
        setSubmitted(false);
    };

    if (submitted) {
        return (
            <div className="bg-brand-charcoal text-white rounded-2xl p-8 max-w-2xl mx-auto shadow-2xl border border-white/5 text-center animate-fade-in">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6 text-green-500">
                    <Check className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-2">{t('wizard.receivedTitle')}</h3>
                <p className="text-gray-400 mb-6">
                    {t('wizard.receivedDesc')} <span className="text-white font-bold">{selection.category}</span> {t('common.service')}.<br />
                    {t('wizard.callShorty')} <span className="text-brand-red font-mono">{contact.phone}</span>.
                </p>
                <Button onClick={resetForm} variant="outline">{t('wizard.startNew')}</Button>
            </div>
        );
    }

    return (
        <section className="py-20 relative">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto bg-brand-charcoal rounded-3xl shadow-2xl overflow-hidden border border-white/5 flex flex-col md:flex-row min-h-[500px]">

                    {/* Sidebar / Progress */}
                    <div className="bg-brand-dark p-8 md:w-1/3 flex flex-col justify-between border-r border-white/5">
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-white font-bold text-xl mb-1">New Request</h3>
                                <p className="text-gray-500 text-xs">Get help in 3 steps</p>
                            </div>

                            <div className="space-y-0 relative">
                                {/* Line connector */}
                                <div className="absolute left-3 top-2 bottom-2 w-0.5 bg-white/10 -z-10"></div>

                                {[1, 2, 3].map(s => (
                                    <div key={s} className="flex items-center gap-4 py-3">
                                        <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${step >= s ? 'bg-brand-red text-white' : 'bg-white/10 text-gray-500'
                                            }`}>
                                            {step > s ? <Check className="w-3 h-3" /> : s}
                                        </div>
                                        <span className={`text-sm font-medium transition-colors ${step === s ? 'text-white' : 'text-gray-500'}`}>
                                            {s === 1 && t('wizard.steps.service')}
                                            {s === 2 && t('wizard.steps.details')}
                                            {s === 3 && t('wizard.steps.contact')}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="hidden md:block">
                            <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                                <p className="text-gray-400 text-xs italic">
                                    "NIS response time is incredible. They fixed my AC within 2 hours."
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Main Content Area */}
                    <div className="p-8 md:w-2/3 md:p-12 flex flex-col">
                        <div className="flex-1">
                            {step === 1 && (
                                <div className="space-y-6 animate-fade-in">
                                    <h2 className="text-2xl font-bold text-white">{t('wizard.step1')}</h2>
                                    <div className="grid grid-cols-2 gap-4">
                                        {categories.map(cat => (
                                            <button
                                                key={cat}
                                                onClick={() => setSelection({ ...selection, category: cat })}
                                                className={`p-4 rounded-xl border text-left transition-all hover:scale-[1.02] ${selection.category === cat
                                                        ? 'bg-brand-red text-white border-brand-red ring-2 ring-brand-red/20'
                                                        : 'bg-white/5 border-white/10 text-gray-300 hover:border-brand-red/50 hover:bg-white/10'
                                                    }`}
                                            >
                                                <span className="font-medium block">{cat}</span>
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {step === 2 && (
                                <div className="space-y-6 animate-fade-in">
                                    <h2 className="text-2xl font-bold text-white">{t('wizard.step2')}</h2>
                                    <div className="grid grid-cols-1 gap-3">
                                        {properties.map(prop => (
                                            <button
                                                key={prop}
                                                onClick={() => setSelection({ ...selection, property: prop })}
                                                className={`p-4 rounded-xl border text-left flex justify-between items-center transition-all ${selection.property === prop
                                                        ? 'bg-brand-red text-white border-brand-red'
                                                        : 'bg-white/5 border-white/10 text-gray-300 hover:bg-white/10'
                                                    }`}
                                            >
                                                <span className="font-medium">{prop}</span>
                                                {selection.property === prop && <Check className="w-5 h-5" />}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {step === 3 && (
                                <div className="space-y-6 animate-fade-in">
                                    <h2 className="text-2xl font-bold text-white">{t('wizard.step3')}</h2>

                                    <div className="bg-white/5 p-4 rounded-xl border border-white/10 mb-6">
                                        <h4 className="text-gray-400 text-xs uppercase mb-2">{t('wizard.summary')}</h4>
                                        <div className="flex justify-between items-center">
                                            <div>
                                                <p className="text-white font-bold text-lg">{selection.category}</p>
                                                <p className="text-gray-400 text-sm">{selection.property}</p>
                                            </div>
                                            <button onClick={() => setStep(1)} className="text-brand-red text-xs hover:underline">Change</button>
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        <div>
                                            <input
                                                type="text"
                                                placeholder={t('contact.form.name')}
                                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-red transition-colors"
                                                value={contact.name}
                                                onChange={(e) => setContact({ ...contact, name: e.target.value })}
                                            />
                                        </div>
                                        <div>
                                            <input
                                                type="tel"
                                                placeholder={t('contact.form.phone')}
                                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-red transition-colors"
                                                value={contact.phone}
                                                onChange={(e) => setContact({ ...contact, phone: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Navigation Actions */}
                        <div className="flex justify-between items-center mt-8 pt-6 border-t border-white/10">
                            {step > 1 ? (
                                <button
                                    onClick={() => setStep(step - 1)}
                                    className={`flex items-center text-gray-400 hover:text-white transition-colors ${loading ? 'opacity-50 pointer-events-none' : ''}`}
                                    disabled={loading}
                                >
                                    <ChevronLeft className={`w-4 h-4 mr-1 ${i18n.dir() === 'rtl' ? 'rotate-180' : ''}`} /> {t('wizard.back')}
                                </button>
                            ) : <div></div>}

                            <Button
                                onClick={step === 3 ? handleSubmit : handleNext}
                                disabled={
                                    (step === 1 && !selection.category) ||
                                    (step === 2 && !selection.property) ||
                                    (step === 3 && (!contact.name || !contact.phone || loading))
                                }
                                className={`magnetic-btn flex items-center ${loading ? 'opacity-80' : ''}`}
                            >
                                {loading && step === 3 ? (
                                    <><Loader2 className="w-4 h-4 mr-2 animate-spin" /> {t('contact.form.sending')}</>
                                ) : (
                                    <>{step === 3 ? t('wizard.submit') : t('wizard.next')} <ChevronRight className={`ml-2 w-4 h-4 ${i18n.dir() === 'rtl' ? 'rotate-180' : ''}`} /></>
                                )}
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
