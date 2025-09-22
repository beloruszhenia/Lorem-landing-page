import React, { useState } from 'react';

const WhyUs = () => {
  const [activeFaq, setActiveFaq] = useState(0);

  const faqItems = [
    {
      id: 1,
      question: "Non consectetur a erat nam at lectus urna duis?",
      answer: "Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non."
    },
    {
      id: 2,
      question: "Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque?",
      answer: "Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui."
    },
    {
      id: 3,
      question: "Dolor sit amet consectetur adipiscing elit pellentesque?",
      answer: "Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis"
    }
  ];

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <section id="why-us" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 order-2 lg:order-1">
            <div className="xl:px-12" data-aos="fade-up" data-aos-delay="100">
              <h3 className="text-3xl font-bold mb-4">
                <span className="text-gray-600">Eum ipsam laborum deleniti </span>
                <strong className="text-brand-heading">velit pariatur architecto aut nihil</strong>
              </h3>
              <p className="text-gray-600 mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit
              </p>
            </div>

            <div className="xl:px-12" data-aos="fade-up" data-aos-delay="200">
              {faqItems.map((item, index) => (
                <div
                  key={index}
                  className={`border-b border-gray-200 py-4 ${activeFaq === index ? 'bg-blue-50' : ''}`}
                >
                  <h3 
                    onClick={() => toggleFaq(index)}
                    className="flex items-center cursor-pointer text-lg font-semibold text-brand-heading hover:text-brand-accent transition-colors"
                  >
                    <span className="text-brand-accent font-bold mr-3">{String(item.id).padStart(2, '0')}</span> 
                    {item.question}
                    <svg 
                      className={`ml-auto w-5 h-5 transform transition-transform ${activeFaq === index ? 'rotate-90' : ''}`}
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </h3>
                  {activeFaq === index && (
                    <div className="mt-3 text-gray-600">
                      <p>{item.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 order-1 lg:order-2">
            <img 
              src="/assets/img/why-us.png" 
              className="w-full h-auto object-cover rounded-lg" 
              alt="Why choose us" 
              data-aos="zoom-in" 
              data-aos-delay="100" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
