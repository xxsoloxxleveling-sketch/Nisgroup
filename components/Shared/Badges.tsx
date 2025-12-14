import React from 'react';
import { Shield, Award, Briefcase, MapPin } from 'lucide-react';

export const Badges: React.FC = () => {
    const badges = [
        { icon: Shield, text: 'Licensed & Insured' },
        { icon: Award, text: 'HSE Compliant' },
        { icon: Briefcase, text: 'Registered SME' },
        { icon: MapPin, text: '100% Omani Owned' },
        // Duplicates for seamless loop if list is short, 
        // but standard marquee usually duplicates the entire set in the render
    ];

    return (
        <div className="py-8 border-y border-white/5 bg-black/20 overflow-hidden relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-transparent to-brand-dark z-10 pointer-events-none"></div>

            <div className="flex w-max gap-16 animate-[marquee_20s_linear_infinite] group-hover:[animation-play-state:paused]">
                {/* First Set */}
                {badges.map((badge, i) => (
                    <div key={`a-${i}`} className="flex items-center gap-3 shrink-0">
                        <badge.icon className="w-5 h-5 text-brand-red" />
                        <span className="text-sm font-medium uppercase tracking-wider text-gray-400">{badge.text}</span>
                    </div>
                ))}
                {/* Second Set */}
                {badges.map((badge, i) => (
                    <div key={`b-${i}`} className="flex items-center gap-3 shrink-0">
                        <badge.icon className="w-5 h-5 text-brand-red" />
                        <span className="text-sm font-medium uppercase tracking-wider text-gray-400">{badge.text}</span>
                    </div>
                ))}
                {/* Third Set (for safety on wide screens) */}
                {badges.map((badge, i) => (
                    <div key={`c-${i}`} className="flex items-center gap-3 shrink-0">
                        <badge.icon className="w-5 h-5 text-brand-red" />
                        <span className="text-sm font-medium uppercase tracking-wider text-gray-400">{badge.text}</span>
                    </div>
                ))}
                {/* Fourth Set (extra safety) */}
                {badges.map((badge, i) => (
                    <div key={`d-${i}`} className="flex items-center gap-3 shrink-0">
                        <badge.icon className="w-5 h-5 text-brand-red" />
                        <span className="text-sm font-medium uppercase tracking-wider text-gray-400">{badge.text}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};
