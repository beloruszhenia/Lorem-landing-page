import React from 'react';
import { PlayCircleIcon } from '@heroicons/react/24/outline';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center bg-brand-heading text-nav-default relative overflow-hidden pt-20 font-default">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1 flex flex-col justify-center space-y-6" data-aos="zoom-out">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight font-heading">
              Better Solutions For Your Business
            </h1>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              We are team of talented designers making websites with Bootstrap
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#about" 
                className="inline-flex items-center justify-center px-8 py-3 bg-brand-accent hover:bg-primary-600 text-brand-contrast font-medium rounded-full transition-colors duration-300 no-underline"
              >
                Get Started
              </a>
              <a 
                href="https://www.youtube.com/watch?v=Y7f98aduVJ8" 
                className="inline-flex items-center gap-3 px-6 py-3 text-nav-default hover:text-brand-accent transition-colors duration-300 no-underline"
              >
                <PlayCircleIcon className="w-8 h-8" />
                <span className="font-medium">Watch Video</span>
              </a>
            </div>
          </div>
          
          {/* Image */}
          <div className="order-1 lg:order-2 flex justify-center" data-aos="zoom-out" data-aos-delay="200">
            <img 
              src="/assets/img/hero-img.png" 
              className="w-full max-w-lg lg:max-w-full h-auto animate-bounce-slow" 
              alt="Hero" 
            />
          </div>
        </div>
      </div>
      
      {/* Background decorations */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-heading via-surface-dark to-bg-dark -z-10"></div>
    </section>
  );
};

export default Hero;
