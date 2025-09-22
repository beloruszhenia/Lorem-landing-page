import React from 'react';
import { CheckIcon, XMarkIcon } from '@heroicons/react/24/outline';

const Pricing = () => {
  const pricingPlans = [
    {
      name: 'Free Plan',
      price: 0,
      period: 'month',
      features: [
        { name: 'Quam adipiscing vitae proin', included: true },
        { name: 'Nec feugiat nisl pretium', included: true },
        { name: 'Nulla at volutpat diam uteera', included: false },
        { name: 'Pharetra massa massa ultricies', included: false },
        { name: 'Massa ultricies mi quis hendrerit', included: false }
      ],
      featured: false,
      delay: 100
    },
    {
      name: 'Business Plan',
      price: 29,
      period: 'month',
      features: [
        { name: 'Quam adipiscing vitae proin', included: true },
        { name: 'Nec feugiat nisl pretium', included: true },
        { name: 'Nulla at volutpat diam uteera', included: true },
        { name: 'Pharetra massa massa ultricies', included: false },
        { name: 'Massa ultricies mi quis hendrerit', included: false }
      ],
      featured: true,
      delay: 200
    },
    {
      name: 'Developer Plan',
      price: 49,
      period: 'month',
      features: [
        { name: 'Quam adipiscing vitae proin', included: true },
        { name: 'Nec feugiat nisl pretium', included: true },
        { name: 'Nulla at volutpat diam uteera', included: true },
        { name: 'Pharetra massa massa ultricies', included: true },
        { name: 'Massa ultricies mi quis hendrerit', included: true }
      ],
      featured: false,
      delay: 300
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 text-center mb-16" data-aos="fade-up">
        <h2 className="text-3xl lg:text-4xl font-bold text-brand-heading mb-4">Pricing</h2>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto">Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div key={index} className="relative" data-aos="zoom-in" data-aos-delay={plan.delay}>
              <div className={`
                relative bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 h-full
                ${plan.featured ? 'ring-2 ring-brand-accent transform scale-105' : ''}
              `}>
                {plan.featured && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-brand-accent text-white px-6 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-xl font-bold text-brand-heading mb-4">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-sm text-gray-500">$</span>
                    <span className="text-4xl font-bold text-brand-heading">{plan.price}</span>
                    <span className="text-gray-500"> / {plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <div className={`
                        flex-shrink-0 w-5 h-5 mr-3 rounded-full flex items-center justify-center
                        ${feature.included ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-400'}
                      `}>
                        {feature.included ? (
                          <CheckIcon className="w-3 h-3" />
                        ) : (
                          <XMarkIcon className="w-3 h-3" />
                        )}
                      </div>
                      <span className={`
                        ${feature.included ? 'text-gray-800' : 'text-gray-400 italic'}
                      `}>
                        {feature.name}
                      </span>
                    </li>
                  ))}
                </ul>

                <button className={`
                  w-full py-3 px-6 rounded-lg font-medium transition-all duration-300
                  ${plan.featured 
                    ? 'bg-brand-accent text-white hover:bg-blue-600 shadow-lg' 
                    : 'bg-gray-100 text-brand-heading hover:bg-brand-accent hover:text-white border border-gray-200'
                  }
                `}>
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
