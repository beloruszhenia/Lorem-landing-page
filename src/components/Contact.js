import React, { useState } from 'react';
import { MapPinIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 text-center mb-16" data-aos="fade-up">
        <h2 className="text-3xl lg:text-4xl font-bold text-brand-heading mb-4">Contact</h2>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto">Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      </div>

      <div className="container mx-auto px-4" data-aos="fade-up" data-aos-delay="100">
        <div className="grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-5">
            <div className="space-y-8">
              <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-lg" data-aos="fade-up" data-aos-delay="200">
                <MapPinIcon className="w-6 h-6 text-brand-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-brand-heading mb-2">Address</h3>
                  <p className="text-gray-600">вул. Михайлівська, 15, Житомир, 10001</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-lg" data-aos="fade-up" data-aos-delay="300">
                <PhoneIcon className="w-6 h-6 text-brand-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-brand-heading mb-2">Call Us</h3>
                  <p className="text-gray-600">+380 (41) 234 56 78</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-lg" data-aos="fade-up" data-aos-delay="400">
                <EnvelopeIcon className="w-6 h-6 text-brand-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-brand-heading mb-2">Email Us</h3>
                  <p className="text-gray-600">info@lorem.com.ua</p>
                </div>
              </div>

              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2541.5!2d28.6576016!3d50.254992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTDCsDE1JzE4LjAiTiAyOMKwMzknMjcuNCJF!5e0!3m2!1sen!2sus!4v1676961268712!5m2!1sen!2sus"
                className="w-full h-64 rounded-lg border-0" 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
          </div>

          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="bg-gray-50 p-8 rounded-lg" data-aos="fade-up" data-aos-delay="200">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name-field" className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
                  <input 
                    type="text" 
                    name="name" 
                    id="name-field" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-accent focus:border-transparent outline-none transition-colors duration-300" 
                    value={formData.name}
                    onChange={handleInputChange}
                    required 
                  />
                </div>

                <div>
                  <label htmlFor="email-field" className="block text-sm font-medium text-gray-700 mb-2">Your Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-accent focus:border-transparent outline-none transition-colors duration-300" 
                    name="email" 
                    id="email-field" 
                    value={formData.email}
                    onChange={handleInputChange}
                    required 
                  />
                </div>

                <div className="md:col-span-2">
                  <label htmlFor="subject-field" className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-accent focus:border-transparent outline-none transition-colors duration-300" 
                    name="subject" 
                    id="subject-field" 
                    value={formData.subject}
                    onChange={handleInputChange}
                    required 
                  />
                </div>

                <div className="md:col-span-2">
                  <label htmlFor="message-field" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-accent focus:border-transparent outline-none transition-colors duration-300 resize-none" 
                    name="message" 
                    rows="6" 
                    id="message-field" 
                    value={formData.message}
                    onChange={handleInputChange}
                    required>
                  </textarea>
                </div>

                <div className="md:col-span-2 text-center">
                  <div className="loading hidden text-brand-accent mb-4">Loading...</div>
                  <div className="error-message hidden text-red-500 mb-4"></div>
                  <div className="sent-message hidden text-green-500 mb-4">Your message has been sent. Thank you!</div>
                  <button 
                    type="submit"
                    className="px-8 py-3 bg-brand-accent text-white rounded-lg font-medium hover:bg-blue-600 transition-colors duration-300 focus:ring-2 focus:ring-brand-accent focus:ring-offset-2"
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
