import { useEffect, useRef, useState } from 'react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skills = [
    'React', 'TypeScript', 'Node.js', 'Python',
    'PostgreSQL', 'AWS', 'Docker', 'Figma'
  ];

  return (
    <section id="about" ref={sectionRef} className="bg-background">
      <div className="section-container">
        <div className={`fade-in-up ${isVisible ? 'visible' : ''}`}>
          <h2 className="section-title text-center text-foreground font-light">
            About
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className={`fade-in-up ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '200ms' }}>
            <h3 className="text-2xl md:text-3xl font-light mb-8 text-foreground">
              Building Digital Experiences
            </h3>
            
            <div className="space-y-6">
              <p className="minimal-text text-lg">
                I'm a passionate full-stack developer with over 5 years of experience 
                creating modern web applications. I specialize in React, TypeScript, 
                and cloud technologies.
              </p>
              
              <p className="minimal-text text-lg">
                My approach focuses on clean code, exceptional user experiences, 
                and scalable solutions that make a real impact.
              </p>
            </div>
            
            <div className="mt-12">
              <h4 className="text-lg font-medium mb-6 text-foreground">Technologies I work with</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {skills.map((skill, index) => (
                  <div
                    key={skill}
                    className={`fade-in-up ${isVisible ? 'visible' : ''}`}
                    style={{ transitionDelay: `${600 + index * 100}ms` }}
                  >
                    <span className="block px-4 py-3 bg-muted rounded text-sm font-medium text-center hover:bg-accent transition-colors">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className={`fade-in-up ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '400ms' }}>
            <div className="minimal-card p-8">
              <h4 className="text-xl font-medium mb-8 text-foreground">Quick Overview</h4>
              <div className="space-y-6">
                <div className="flex justify-between items-center py-3 border-b border-border">
                  <span className="minimal-text">Experience</span>
                  <span className="font-medium text-foreground">5+ Years</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-border">
                  <span className="minimal-text">Projects</span>
                  <span className="font-medium text-foreground">50+</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-border">
                  <span className="minimal-text">Technologies</span>
                  <span className="font-medium text-foreground">20+</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="minimal-text">Coffee Consumed</span>
                  <span className="font-medium text-foreground">∞</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;