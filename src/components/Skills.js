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
        }
      });
    }, { threshold: 0.3 });

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => observer.disconnect();
  }, [skills]);

  return (
    <section id="skills" className="skills section" ref={skillsRef}>
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row">
          <div className="col-lg-6 d-flex align-items-center">
            <img src="/assets/img/illustration/illustration-10.webp" className="img-fluid" alt="" />
          </div>

          <div className="col-lg-6 pt-4 pt-lg-0 content">
            <h3>Voluptatem dignissimos provident quasi corporis voluptas</h3>
            <p className="fst-italic">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <div className="skills-content skills-animation">
              {skills.map((skill, index) => (
                <div key={index} className="progress">
                  <span className="skill">
                    <span>{skill.name}</span> <i className="val">{skill.percentage}%</i>
                  </span>
                  <div className="progress-bar-wrap">
                    <div 
                      className="progress-bar" 
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
