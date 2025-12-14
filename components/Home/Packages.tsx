import React from 'react';
import { Check } from 'lucide-react';
import { Button } from '../UI/Button';
import { Link } from 'react-router-dom';

export const Packages: React.FC = () => {
    return (
        <section className="py-20 bg-brand-dark relative overflow-hidden">
            {/* Bg gradient */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-red/5 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <span className="text-brand-red font-bold tracking-widest text-xs uppercase mb-2 block">Maintenance Plans</span>
                    <h2 className="text-3xl font-heading font-bold text-white">Annual Maintenance Packages</h2>
                    <p className="text-gray-400 mt-2">Peace of mind for your property all year round.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {/* Bronze */}
                    <div className="glass-card p-8 rounded-2xl border border-white/5 hover:border-brand-red/30 transition-all duration-300">
                        <h3 className="text-xl font-bold text-white mb-2">Bronze</h3>
                        <p className="text-sm text-gray-400 mb-6">Basic Annual Check-ups</p>
                        <div className="text-3xl font-bold text-brand-red mb-6">Basic</div>
                        <ul className="space-y-4 mb-8">
                            {['2 Scheduled Visits/Year', 'AC Filter Cleaning', 'Plumbing Leak Check', 'Emergency Callouts (Chargeable)'].map(item => (
                                <li key={item} className="flex items-start gap-3 text-gray-300 text-sm">
                                    <Check className="w-5 h-5 text-brand-red shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <Link to="/contact">
                            <Button variant="outline" fullWidth className="hover:bg-brand-red hover:border-brand-red">Get Quote</Button>
                        </Link>
                    </div>

                    {/* Silver */}
                    <div className="glass-card p-8 rounded-2xl border border-brand-red/50 relative transform md:-translate-y-4 shadow-[0_0_50px_rgba(200,16,46,0.15)]">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-red text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Most Popular</div>
                        <h3 className="text-xl font-bold text-white mb-2">Silver</h3>
                        <p className="text-sm text-gray-400 mb-6">Extended Coverage</p>
                        <div className="text-3xl font-bold text-white mb-6">Standard</div>
                        <ul className="space-y-4 mb-8">
                            {['4 Scheduled Visits/Year', 'Deep AC Cleaning', 'Electrical System Check', '2 Emergency Callouts Included', '10% Material Discount'].map(item => (
                                <li key={item} className="flex items-start gap-3 text-white text-sm">
                                    <Check className="w-5 h-5 text-brand-red shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <Link to="/contact">
                            <Button fullWidth>Get Quote</Button>
                        </Link>
                    </div>

                    {/* Gold */}
                    <div className="glass-card p-8 rounded-2xl border border-white/5 hover:border-brand-orange/30 transition-all duration-300">
                        <h3 className="text-xl font-bold text-white mb-2">Gold</h3>
                        <p className="text-sm text-gray-400 mb-6">Full Building Care</p>
                        <div className="text-3xl font-bold text-brand-orange mb-6">Premium</div>
                        <ul className="space-y-4 mb-8">
                            {['6 Scheduled Visits/Year', 'Comprehensive MEP Care', 'Pest Control Included', 'Unlimited Emergency Callouts', 'Priority Response'].map(item => (
                                <li key={item} className="flex items-start gap-3 text-gray-300 text-sm">
                                    <Check className="w-5 h-5 text-brand-orange shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <Link to="/contact">
                            <Button variant="outline" fullWidth className="hover:bg-brand-orange hover:border-brand-orange">Get Quote</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};
