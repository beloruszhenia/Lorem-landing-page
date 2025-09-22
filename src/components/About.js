import React from 'react';
import { CheckCircleIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

const About = () => {
  return (
    <section id="about" className="py-10  bg-bg-light font-default">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Section Title */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl uppercase md:text-4xl font-bold text-brand-heading mb-6 relative font-heading">
            About Us
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-brand-accent rounded"></span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center p-10">
          {/* Content */}
          <div className="space-y-6" data-aos="fade-up" data-aos-delay="100">
            <p className="text-lg text-brand-default leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua.
            </p>
            
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircleIcon className="w-6 h-6 text-brand-accent mt-1 flex-shrink-0" />
                <span className="text-brand-default">Ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircleIcon className="w-6 h-6 text-brand-accent mt-1 flex-shrink-0" />
                <span className="text-brand-default">Duis aute irure dolor in reprehenderit in voluptate velit.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircleIcon className="w-6 h-6 text-brand-accent mt-1 flex-shrink-0" />
                <span className="text-brand-default">Ullamco laboris nisi ut aliquip ex ea commodo</span>
              </li>
            </ul>
          </div>

          {/* Additional Content */}
          <div className="space-y-6" data-aos="fade-up" data-aos-delay="200">
            <p className="text-brand-default leading-relaxed">
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            
            <a 
              href="#" 
              className="px-8 py-2 inline-flex items-center gap-2 text-brand-accent font-medium transition-colors duration-300 group no-underline 
              border-2 rounded border-brand-accent 
              hover:bg-brand-accent hover:text-white hover:text-primary-600"
            >
              <span>Read More</span>
              <ArrowRightIcon className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
