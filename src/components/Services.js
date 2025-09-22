import React from 'react';
import { 
  ChartBarIcon, 
  Square3Stack3DIcon, 
  CalendarDaysIcon, 
  RadioIcon 
} from '@heroicons/react/24/outline';

const Services = () => {
  const services = [
    {
      icon: ChartBarIcon,
      title: 'Lorem Ipsum',
      description: 'Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi',
      delay: 100
    },
    {
      icon: Square3Stack3DIcon,
      title: 'Sed ut perspici',
      description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore',
      delay: 200
    },
    {
      icon: CalendarDaysIcon,
      title: 'Magni Dolores',
      description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia',
      delay: 300
    },
    {
      icon: RadioIcon,
      title: 'Nemo Enim',
      description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis',
      delay: 400
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 text-center mb-16" data-aos="fade-up">
        <h2 className="text-3xl lg:text-4xl font-bold text-brand-heading mb-4">Services</h2>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto">Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div key={index} className="flex" data-aos="fade-up" data-aos-delay={service.delay}>
              <div className="relative bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-brand-accent to-blue-500 rounded-lg mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-brand-heading mb-4 group-hover:text-brand-accent transition-colors duration-300">
                  <a href="#" className="stretched-link hover:no-underline">{service.title}</a>
                </h4>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
