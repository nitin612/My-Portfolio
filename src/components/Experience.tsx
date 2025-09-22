import { useEffect, useRef, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

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
    <section id="experience" ref={sectionRef} className="py-20 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className={`transition-all duration-800 ${isVisible ? 'fade-in visible' : 'fade-in'}`}>
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 text-gradient">
            Experience
          </h2>
        </div>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`transition-all duration-800 ${isVisible ? 'fade-in visible' : 'fade-in'}`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <Card className="portfolio-card">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <div>
                      <CardTitle className="text-2xl font-semibold">{exp.title}</CardTitle>
                      <p className="text-lg text-muted-foreground font-medium">{exp.company}</p>
                    </div>
                    <Badge variant="outline" className="self-start md:self-center px-4 py-2 text-sm">
                      {exp.period}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="px-3 py-1">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;