import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
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

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with real-time inventory, payment processing, and admin dashboard.",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "AWS"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Task Management App",
      description: "Collaborative task management application with real-time updates, file sharing, and team analytics.",
      technologies: ["Next.js", "TypeScript", "Prisma", "Socket.io"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Weather Dashboard",
      description: "Modern weather application with location-based forecasts, interactive maps, and severe weather alerts.",
      technologies: ["React", "OpenWeather API", "Mapbox", "Chart.js"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Portfolio Website",
      description: "Responsive portfolio website with smooth animations, contact form, and CMS integration.",
      technologies: ["React", "Framer Motion", "Sanity", "Vercel"],
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  return (
    <section id="projects" ref={sectionRef} className="bg-background">
      <div className="section-container">
        <div className={`fade-in-up ${isVisible ? 'visible' : ''}`}>
          <h2 className="section-title text-center text-foreground font-light">
            Selected Work
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`fade-in-up ${isVisible ? 'visible' : ''}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="minimal-card p-8 h-full flex flex-col">
                <h3 className="text-xl md:text-2xl font-medium text-foreground mb-4">{project.title}</h3>
                
                <p className="minimal-text mb-6 flex-grow leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-muted text-muted-foreground rounded text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4 pt-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex items-center gap-2 border-foreground text-foreground hover:bg-foreground hover:text-background transition-colors"
                    asChild
                  >
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={16} />
                      Live
                    </a>
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                    asChild
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github size={16} />
                      Code
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;