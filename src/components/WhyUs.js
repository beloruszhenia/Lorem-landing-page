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
    <section id="why-us" className="section why-us light-background">
      <div className="container-fluid">
        <div className="row gy-4">
          <div className="col-lg-7 d-flex flex-column justify-content-center order-2 order-lg-1">
            <div className="content px-xl-5" data-aos="fade-up" data-aos-delay="100">
              <h3>
                <span>Eum ipsam laborum deleniti </span>
                <strong>velit pariatur architecto aut nihil</strong>
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit
              </p>
            </div>

            <div className="faq-container px-xl-5" data-aos="fade-up" data-aos-delay="200">
              {faqItems.map((item, index) => (
                <div 
                  key={index} 
                  className={`faq-item ${activeFaq === index ? 'faq-active' : ''}`}
                >
                  <h3 onClick={() => toggleFaq(index)}>
                    <span>{String(item.id).padStart(2, '0')}</span> {item.question}
                  </h3>
                  <div className="faq-content">
                    <p>{item.answer}</p>
                  </div>
                  <i className="faq-toggle bi bi-chevron-right"></i>
                </div>
              ))}
            </div>
          </div>

          <div className="col-lg-5 order-1 order-lg-2 why-us-img">
            <img src="/assets/img/why-us.png" className="img-fluid" alt="" data-aos="zoom-in" data-aos-delay="100" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
