import React from 'react';
import { PaintRoller, Zap, Droplets, Fan, HardHat, Flower2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: PaintRoller,
    title: 'Painting & Repainting',
    desc: 'High-quality finishes for interiors and exteriors.',
    features: ['Interior & Exterior', 'Texture Painting', 'Epoxy Coating']
  },
  {
    icon: Zap,
    title: 'Electrical Works',
    desc: 'Certified electrical installations and maintenance.',
    features: ['Wiring & Fittings', 'Load Balancing', 'Lighting Solutions']
  },
  {
    icon: Droplets,
    title: 'Plumbing Works',
    desc: 'Comprehensive plumbing solutions for all property types.',
    features: ['Pipe Installation', 'Leak Detection', 'Sanitary Fitting']
  },
  {
    icon: Fan,
    title: 'AC & HVAC',
    desc: 'Installation, servicing, and repair of cooling systems.',
    features: ['Split & Ducted', 'Duct Cleaning', 'Annual Maintenance']
  },
  {
    icon: HardHat,
    title: 'Road Works',
    desc: 'Professional road construction and paving services.',
    features: ['Asphalt Paving', 'Interlock', 'Road Marking']
  },
  {
    icon: Flower2,
    title: 'Décor & Landscaping',
    desc: 'Transforming spaces with gypsum and greenery.',
    features: ['Gypsum Board', 'Garden Design', 'Irrigation Systems']
  }
];

export const ServicesPreview: React.FC = () => {
  return (
    <section className="py-20 bg-brand-charcoal relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">Our Core Services</h2>
          <p className="text-gray-400">
            From villas and commercial buildings to roads and landscaped gardens, NIS offers a full spectrum of construction and maintenance services under one roof.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-white/5 border border-white/5 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-brand-red/30"
            >
              <div className="w-14 h-14 bg-brand-dark rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-white/10 group-hover:border-brand-red/50">
                <service.icon className="w-7 h-7 text-brand-red" />
              </div>
              
              <h3 className="text-xl font-heading font-bold text-white mb-2">{service.title}</h3>
              <p className="text-gray-400 text-sm mb-6">{service.desc}</p>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-gray-500 group-hover:text-gray-300 transition-colors">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-red"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              <Link to="/services" className="inline-flex items-center gap-2 text-brand-red font-medium text-sm group-hover:gap-3 transition-all">
                View Details <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};