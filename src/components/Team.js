import React from 'react';

const Team = () => {
  const teamMembers = [
    {
      image: '/assets/img/person/person-m-7.webp',
      name: 'Walter White',
      position: 'Chief Executive Officer',
      description: 'Explicabo voluptatem mollitia et repellat qui dolorum quasi',
      delay: 100
    },
    {
      image: '/assets/img/person/person-f-8.webp',
      name: 'Sarah Jhonson',
      position: 'Product Manager',
      description: 'Aut maiores voluptates amet et quis praesentium qui senda para',
      delay: 200
    },
    {
      image: '/assets/img/person/person-m-6.webp',
      name: 'William Anderson',
      position: 'CTO',
      description: 'Quisquam facilis cum velit laborum corrupti fuga rerum quia',
      delay: 300
    },
    {
      image: '/assets/img/person/person-f-4.webp',
      name: 'Amanda Jepson',
      position: 'Accountant',
      description: 'Dolorum tempora officiis odit laborum officiis et et accusamus',
      delay: 400
    }
  ];

  return (
    <section id="team" className="team section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Team</h2>
        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      </div>

      <div className="container">
        <div className="row gy-4">
          {teamMembers.map((member, index) => (
            <div key={index} className="col-lg-6" data-aos="fade-up" data-aos-delay={member.delay}>
              <div className="team-member d-flex align-items-start">
                <div className="pic me-4 rounded-full overflow-hidden" style={{ width: '80px', height: '80px', borderRadius: '50%' }}>
                  <img src={member.image} className="img-fluid w-100 h-100" style={{ objectFit: 'cover' }} alt="" />
                </div>
                <div className="member-info">
                  <h4>{member.name}</h4>
                  <span>{member.position}</span>
                  <p>{member.description}</p>
                  <div className="social">
                    <a href=""><i className="bi bi-twitter-x"></i></a>
                    <a href=""><i className="bi bi-facebook"></i></a>
                    <a href=""><i className="bi bi-instagram"></i></a>
                    <a href=""><i className="bi bi-linkedin"></i></a>
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

export default Team;
