import React, { useEffect, useRef } from 'react';

const Skills = () => {
  const skillsRef = useRef(null);

  const skills = [
    { name: 'HTML', percentage: 100 },
    { name: 'CSS', percentage: 90 },
    { name: 'JavaScript', percentage: 75 },
    { name: 'Photoshop', percentage: 60 }
  ];

  useEffect(() => {
    const animateSkills = () => {
      const progressBars = skillsRef.current?.querySelectorAll('.progress-bar');
      progressBars?.forEach((bar, index) => {
        const percentage = skills[index].percentage;
        // Очищаємо попередні стилі
        bar.style.width = '1px';
        // Додаємо невелику затримку для кожного бара
        setTimeout(() => {
          bar.style.width = `${percentage}%`;
        }, index * 300 + 200);
      });
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateSkills();
          // Відключаємо observer після першої анімації
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => observer.disconnect();
  }, [skills]);

  return (
    <section id="skills" className="py-20 bg-white" ref={skillsRef}>
      <div className="container mx-auto px-4" data-aos="fade-up" data-aos-delay="100">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="flex items-center justify-center">
            <img src="/assets/img/illustration/illustration-10.webp" className="w-full h-auto max-w-md" alt="Skills illustration" />
          </div>

          <div className="pt-4 lg:pt-0">
            <h3 className="text-3xl font-bold text-brand-heading mb-4">Voluptatem dignissimos provident quasi corporis voluptas</h3>
            <p className="italic text-gray-600 mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="flex justify-between items-center mb-2">
                    <span className="uppercase font-medium text-brand-heading">{skill.name}</span>
                    <span className="text-brand-accent font-semibold">{skill.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                    <div 
                      className="progress-bar h-full bg-gradient-to-r from-brand-accent to-brand-heading rounded-full transition-all duration-1000 ease-out" 
                      role="progressbar" 
                      aria-valuenow={skill.percentage} 
                      aria-valuemin="0" 
                      aria-valuemax="100"
                      style={{ width: '1px' }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
