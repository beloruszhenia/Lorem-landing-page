import React from 'react';

const Services = () => {
  const services = [
    {
      icon: 'bi-activity',
      title: 'Lorem Ipsum',
      description: 'Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi',
      delay: 100
    },
    {
      icon: 'bi-bounding-box-circles',
      title: 'Sed ut perspici',
      description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore',
      delay: 200
    },
    {
      icon: 'bi-calendar4-week',
      title: 'Magni Dolores',
      description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia',
      delay: 300
    },
    {
      icon: 'bi-broadcast',
      title: 'Nemo Enim',
      description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis',
      delay: 400
    }
  ];

  return (
    <section id="services" className="services section light-background">
      <div className="container section-title" data-aos="fade-up">
        <h2>Services</h2>
        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      </div>

      <div className="container">
        <div className="row gy-4">
          {services.map((service, index) => (
            <div key={index} className="col-xl-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay={service.delay}>
              <div className="service-item position-relative">
                <div className="icon"><i className={`${service.icon} icon`}></i></div>
                <h4><a href="" className="stretched-link">{service.title}</a></h4>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
