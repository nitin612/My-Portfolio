import { useEffect, useRef, useState } from 'react';

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const experiences = [
    {
      title: "Senior Full Stack Developer",
      company: "Tech Innovation Inc.",
      period: "2022 - Present",
      description: "Leading development of cloud-native applications using React, Node.js, and AWS. Mentoring junior developers and architecting scalable solutions.",
      technologies: ["React", "TypeScript", "AWS", "PostgreSQL", "Docker"]
    },
    {
      title: "Frontend Developer",
      company: "Digital Solutions Ltd.",
      period: "2020 - 2022",
      description: "Developed responsive web applications and collaborated with design teams to create exceptional user experiences.",
      technologies: ["React", "JavaScript", "CSS", "Redux", "REST APIs"]
    },
    {
      title: "Junior Developer",
      company: "StartUp Ventures",
      period: "2019 - 2020",
      description: "Built features for web applications, learned modern development practices, and contributed to open source projects.",
      technologies: ["HTML", "CSS", "JavaScript", "Python", "Git"]
    }
  ];

  return (
    <section id="experience" ref={sectionRef} className="bg-muted/30">
      <div className="section-container">
        <div className={`fade-in-up ${isVisible ? 'visible' : ''}`}>
          <h2 className="section-title text-center text-foreground font-light">
            Experience
          </h2>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`fade-in-up ${isVisible ? 'visible' : ''}`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="minimal-card p-8">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-6">
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-medium text-foreground mb-2">{exp.title}</h3>
                    <p className="text-lg text-muted-foreground font-medium">{exp.company}</p>
                  </div>
                  <span className="inline-block px-4 py-2 bg-accent rounded text-sm font-medium text-accent-foreground">
                    {exp.period}
                  </span>
                </div>
                
                <p className="minimal-text mb-6 text-base leading-relaxed">
                  {exp.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-secondary text-secondary-foreground rounded text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;