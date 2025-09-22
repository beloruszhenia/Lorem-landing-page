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

  // Social icons components (using simple SVGs as Heroicons doesn't have social media icons)
  const TwitterIcon = () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  );

  const FacebookIcon = () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  );

  const InstagramIcon = () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-2.508 0-4.541-2.033-4.541-4.541s2.033-4.541 4.541-4.541 4.541 2.033 4.541 4.541-2.033 4.541-4.541 4.541zm7.058 0c-2.508 0-4.541-2.033-4.541-4.541s2.033-4.541 4.541-4.541 4.541 2.033 4.541 4.541-2.033 4.541-4.541 4.541z"/>
    </svg>
  );

  const LinkedInIcon = () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );

  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 text-center mb-16" data-aos="fade-up">
        <h2 className="text-3xl lg:text-4xl font-bold text-brand-heading mb-4">Team</h2>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto">Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300" data-aos="fade-up" data-aos-delay={member.delay}>
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <img 
                    src={member.image} 
                    className="w-20 h-20 rounded-full object-cover border-4 border-brand-accent/20" 
                    alt={member.name} 
                  />
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-brand-heading mb-1">{member.name}</h4>
                  <span className="text-brand-accent font-medium mb-3 block">{member.position}</span>
                  <p className="text-gray-600 mb-4 leading-relaxed">{member.description}</p>
                  <div className="flex gap-3">
                    <a href="#" className="inline-flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full text-gray-600 hover:bg-brand-accent hover:text-white transition-colors duration-300">
                      <TwitterIcon />
                    </a>
                    <a href="#" className="inline-flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full text-gray-600 hover:bg-brand-accent hover:text-white transition-colors duration-300">
                      <FacebookIcon />
                    </a>
                    <a href="#" className="inline-flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full text-gray-600 hover:bg-brand-accent hover:text-white transition-colors duration-300">
                      <InstagramIcon />
                    </a>
                    <a href="#" className="inline-flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full text-gray-600 hover:bg-brand-accent hover:text-white transition-colors duration-300">
                      <LinkedInIcon />
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

export default Team;
