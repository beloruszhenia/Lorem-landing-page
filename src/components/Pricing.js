import React from 'react';

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
    <section id="pricing" className="pricing section light-background">
      <div className="container section-title" data-aos="fade-up">
        <h2>Pricing</h2>
        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      </div>

      <div className="container">
        <div className="row gy-4">
          {pricingPlans.map((plan, index) => (
            <div key={index} className="col-lg-4" data-aos="zoom-in" data-aos-delay={plan.delay}>
              <div className={`pricing-item ${plan.featured ? 'featured' : ''}`}>
                <h3>{plan.name}</h3>
                <h4>
                  <sup>$</sup>{plan.price}<span> / {plan.period}</span>
                </h4>
                <ul>
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} 
                    className={`list-unstyled ${!feature.included ? 'font-italic font-weight-light text-muted' : ''}`}
                    >
                      <i className={`bi ${feature.included ? 'bi-check' : 'bi-x'}`}></i> 
                      <span>{feature.name}</span>
                    </li>
                  ))}
                </ul>
                <button className="buy-btn btn btn-outline-primary border- w-20 rounded-pill">Buy Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
