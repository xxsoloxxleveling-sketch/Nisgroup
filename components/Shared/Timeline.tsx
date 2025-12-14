import React from 'react';
import { Phone, ClipboardCheck, FileText, Hammer, Key, Headset } from 'lucide-react';

export const Timeline: React.FC = () => {
    const steps = [
        { icon: Phone, title: 'Inquiry', desc: 'Call or message us.' },
        { icon: ClipboardCheck, title: 'Site Visit', desc: 'Free inspection.' },
        { icon: FileText, title: 'Quote', desc: 'Detailed estimation.' },
        { icon: Hammer, title: 'Execution', desc: 'Work begins.' },
        { icon: Key, title: 'Handover', desc: 'Final inspection.' },
        { icon: Headset, title: 'Aftercare', desc: 'Maintenance support.' },
    ];

    return (
        <section className="py-20 border-t border-white/5">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="text-brand-red font-bold tracking-widest text-xs uppercase mb-2 block">Our Process</span>
                    <h2 className="text-3xl font-heading font-bold text-white">From Start to Finish</h2>
                </div>

                <div className="relative">
                    {/* Connecting Line */}
                    <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-brand-red/0 via-brand-red/30 to-brand-red/0 -translate-y-1/2 z-0"></div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                        {steps.map((step, i) => (
                            <div key={i} className="relative z-10 flex flex-col items-center text-center group">
                                <div className="w-16 h-16 bg-brand-charcoal border border-white/10 rounded-full flex items-center justify-center mb-4 shadow-xl group-hover:border-brand-red group-hover:bg-brand-red group-hover:text-white transition-all duration-300 text-gray-400">
                                    <step.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-white font-bold text-sm mb-1">{step.title}</h3>
                                <p className="text-xs text-gray-500">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
