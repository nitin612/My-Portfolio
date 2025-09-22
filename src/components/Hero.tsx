import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-background relative">
      {/* Content */}
      <div className="section-container text-center">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-light text-foreground mb-8 tracking-tight leading-none">
            Your Name
          </h1>
          
          <div className="w-16 h-px bg-foreground mx-auto mb-8 opacity-50" />
          
          <h2 className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-12 font-light max-w-2xl mx-auto leading-relaxed">
            Full Stack Developer & Designer
          </h2>
          
          <p className="text-base md:text-lg text-muted-foreground mb-16 max-w-xl mx-auto minimal-text">
            Crafting digital experiences with clean code and thoughtful design
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="outline" 
              size="lg"
              className="min-w-32 border-foreground text-foreground hover:bg-foreground hover:text-background transition-all duration-300"
              onClick={scrollToAbout}
            >
              View Work
            </Button>
            <Button 
              variant="ghost" 
              size="lg"
              className="min-w-32 text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <button 
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-muted-foreground hover:text-foreground transition-colors"
        aria-label="Scroll to about section"
      >
        <ChevronDown size={24} className="animate-bounce" />
      </button>
    </section>
  );
};

export default Hero;