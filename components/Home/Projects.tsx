import React, { useState } from 'react';
import { ProjectItem } from '../../types';
import { useTranslation } from 'react-i18next';

export const Projects: React.FC = () => {
    const [filter, setFilter] = useState('All');
    const { t, i18n } = useTranslation();

    const categories = [
        'All', 'Painting', 'Electrical', 'AC & HVAC', 'Roadworks', 'Décor', 'Landscaping'
    ];

    const PROJECTS: ProjectItem[] = [
        { id: '1', title: t('projects.items.1.title'), category: 'Painting', location: 'Muscat Hills', image: '/images/projects/painting-villa.png', description: t('projects.items.1.desc'), tags: ['Jotun Fenomastic', 'Waterproofing'] },
        { id: '2', title: t('projects.items.2.title'), category: 'Décor', location: 'Ruwi', image: '/images/projects/decor-office.png', description: t('projects.items.2.desc'), tags: ['Gypsum Board', 'LED Lighting'] },
        { id: '3', title: t('projects.items.3.title'), category: 'Roadworks', location: 'Seeb', image: '/images/projects/road-interlock.png', description: t('projects.items.3.desc'), tags: ['Asphalt', 'Interlock'] },
        { id: '4', title: t('projects.items.4.title'), category: 'AC & HVAC', location: 'Barka', image: '/images/projects/ac-mep.png', description: t('projects.items.4.desc'), tags: ['Duct Cleaning', 'Maintenance'] },
        { id: '5', title: t('projects.items.5.title'), category: 'Landscaping', location: 'Al Mouj', image: '/images/projects/landscaping-turf.png', description: t('projects.items.5.desc'), tags: ['Irrigation', 'Turf'] },
        { id: '6', title: t('projects.items.6.title'), category: 'Electrical', location: 'Qurum', image: '/images/projects/electrical-smart.png', description: t('projects.items.6.desc'), tags: ['3-Phase', 'Smart Home'] },
    ];

    // Helper to translate category names for display 
    // (Note: we filter by english keys to match 'category' in project items, but display translated)
    const getCategoryLabel = (cat: string) => {
        const key = cat.replace(' & ', '').replace(' ', ''); // Simple mapping or just use map
        // Better map:
        const map: { [key: string]: string } = {
            'All': 'All', 'Painting': 'Painting', 'Electrical': 'Electrical', 'AC & HVAC': 'AC', 'Roadworks': 'Roadworks', 'Décor': 'Decor', 'Landscaping': 'Landscaping'
        };
        return t(`projects.categories.${map[cat] || 'All'}`);
    }

    const filteredProjects = filter === 'All'
        ? PROJECTS
        : PROJECTS.filter(p => p.category === filter);

    return (
        <section className="py-20 bg-brand-charcoal">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                    <div className="mb-6 md:mb-0">
                        <h2 className="text-3xl font-heading font-bold text-white mb-2">{t('projects.title')}</h2>
                        <p className="text-gray-400">{t('projects.subtitle')}</p>
                    </div>

                    {/* Filter Tabs with Sliding Underline Effect */}
                    <div className="flex flex-wrap gap-x-6 gap-y-2 relative border-b border-white/10 pb-1">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`py-2 text-sm font-medium transition-colors relative group/btn ${filter === cat ? 'text-brand-red' : 'text-gray-400 hover:text-white'
                                    }`}
                            >
                                {getCategoryLabel(cat)}
                                <span className={`absolute bottom-[-1px] left-0 w-full h-[2px] bg-brand-red transform transition-transform duration-300 origin-left ${filter === cat ? 'scale-x-100' : 'scale-x-0 group-hover/btn:scale-x-50'
                                    }`}></span>
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project) => (
                        <div key={project.id} className="group relative h-[500px] rounded-3xl overflow-hidden cursor-pointer hover-lift shadow-card hover:shadow-card-hover border border-white/5">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover transition duration-300 group-hover:scale-105 group-hover:brightness-75"
                            />
                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500"></div>

                            <div className="absolute inset-x-0 bottom-0 p-8 md:p-10 z-20 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                <h3 className="text-3xl md:text-5xl font-heading font-extrabold text-white mb-2 leading-tight drop-shadow-lg">
                                    {t(`projects.items.${project.id}.title`)}
                                </h3>
                                <div className="h-1 w-20 bg-brand-red rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left mb-4"></div>
                                <p className="text-gray-200 text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 max-w-lg mb-4 drop-shadow-md">
                                    {t(`projects.items.${project.id}.desc`)}
                                </p>

                                {project.tags && (
                                    <div className="flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200">
                                        {project.tags.map(tag => (
                                            <span key={tag} className="text-[10px] bg-white/10 backdrop-blur-sm text-white px-3 py-1 rounded-full border border-white/10">{tag}</span>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>

                    ))}
                </div>
            </div>
        </section >
    );
};