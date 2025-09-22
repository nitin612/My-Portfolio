import { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';

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
    'React & Next.js', 'TypeScript', 'Node.js', 'Python',
    'PostgreSQL', 'AWS', 'Docker', 'UI/UX Design'
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className={`transition-all duration-800 ${isVisible ? 'fade-in visible' : 'fade-in'}`}>
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 text-gradient">
            About Me
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className={`transition-all duration-800 delay-200 ${isVisible ? 'fade-in visible' : 'fade-in'}`}>
            <h3 className="text-3xl font-semibold mb-6">
              Building Digital Experiences
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              I'm a passionate full-stack developer with over 5 years of experience 
              creating modern web applications. I specialize in React, TypeScript, 
              and cloud technologies, always focusing on clean code and exceptional user experiences.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              When I'm not coding, you'll find me exploring new technologies, 
              contributing to open source projects, or sharing knowledge with the developer community.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {skills.map((skill, index) => (
                <div
                  key={skill}
                  className={`transition-all duration-500 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                  style={{ animationDelay: `${800 + index * 100}ms` }}
                >
                  <span className="inline-block bg-secondary px-3 py-2 rounded-lg text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors cursor-default">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
          
          <div className={`transition-all duration-800 delay-400 ${isVisible ? 'fade-in visible' : 'fade-in'}`}>
            <Card className="portfolio-card p-8">
              <CardContent className="p-0">
                <h4 className="text-2xl font-semibold mb-6">Quick Stats</h4>
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Projects Completed</span>
                    <span className="text-2xl font-bold">50+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Years Experience</span>
                    <span className="text-2xl font-bold">5+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Technologies</span>
                    <span className="text-2xl font-bold">20+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Coffee Cups</span>
                    <span className="text-2xl font-bold">∞</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;