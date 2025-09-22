import React, { useState } from 'react';
import { MagnifyingGlassIcon, ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('*');

  const portfolioItems = [
    {
      id: 1,
      category: 'filter-app',
      image: '/assets/img/portfolio/portfolio-portrait-1.webp',
      title: 'App 1',
      description: 'Lorem ipsum, dolor sit'
    },
    {
      id: 2,
      category: 'filter-product',
      image: '/assets/img/portfolio/portfolio-1.webp',
      title: 'Product 1',
      description: 'Lorem ipsum, dolor sit'
    },
    {
      id: 3,
      category: 'filter-branding',
      image: '/assets/img/portfolio/portfolio-3.webp',
      title: 'Branding 1',
      description: 'Lorem ipsum, dolor sit'
    },
    {
      id: 4,
      category: 'filter-app',
      image: '/assets/img/portfolio/portfolio-4.webp',
      title: 'App 2',
      description: 'Lorem ipsum, dolor sit'
    },
    {
      id: 5,
      category: 'filter-product',
      image: '/assets/img/portfolio/portfolio-portrait-2.webp',
      title: 'Product 2',
      description: 'Lorem ipsum, dolor sit'
    },
    {
      id: 6,
      category: 'filter-branding',
      image: '/assets/img/portfolio/portfolio-portrait-3.webp',
      title: 'Branding 2',
      description: 'Lorem ipsum, dolor sit'
    },
    {
      id: 7,
      category: 'filter-app',
      image: '/assets/img/portfolio/portfolio-7.webp',
      title: 'App 3',
      description: 'Lorem ipsum, dolor sit'
    },
    {
      id: 8,
      category: 'filter-product',
      image: '/assets/img/portfolio/portfolio-8.webp',
      title: 'Product 3',
      description: 'Lorem ipsum, dolor sit'
    },
    {
      id: 9,
      category: 'filter-branding',
      image: '/assets/img/portfolio/portfolio-9.webp',
      title: 'Branding 3',
      description: 'Lorem ipsum, dolor sit'
    }
  ];

  const filters = [
    { key: '*', label: 'All' },
    { key: 'filter-app', label: 'App' },
    { key: 'filter-product', label: 'Card' },
    { key: 'filter-branding', label: 'Web' }
  ];

  const filteredItems = activeFilter === '*' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-4 text-center mb-16" data-aos="fade-up">
        <h2 className="text-3xl lg:text-4xl font-bold text-brand-heading mb-4">Portfolio</h2>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto">Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      </div>
      
      <div className="container mx-auto px-4">
        {/* Portfolio Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12" data-aos="fade-up" data-aos-delay="100">
          {filters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter.key
                  ? 'bg-brand-accent text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-brand-accent hover:text-white'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-aos="fade-up" data-aos-delay="200">
          {filteredItems.map((item) => (
            <div key={item.id} className="group relative overflow-hidden rounded-lg bg-white shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="relative overflow-hidden">
                <img 
                  src={item.image} 
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500" 
                  alt={item.title} 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Portfolio Info Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                  <p className="text-gray-200 mb-4">{item.description}</p>
                  <div className="flex gap-3">
                    <a 
                      href={item.image} 
                      title={item.title} 
                      className="inline-flex items-center justify-center w-10 h-10 bg-brand-accent rounded-full text-white hover:bg-blue-600 transition-colors duration-300 glightbox"
                    >
                      <MagnifyingGlassIcon className="w-5 h-5" />
                    </a>
                    <a 
                      href="/portfolio-details.html" 
                      title="More Details" 
                      className="inline-flex items-center justify-center w-10 h-10 bg-brand-accent rounded-full text-white hover:bg-blue-600 transition-colors duration-300"
                    >
                      <ArrowTopRightOnSquareIcon className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
