import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
      
      {/* Footer */}
      <footer className="border-t border-border">
        <div className="section-container py-8">
          <p className="text-center minimal-text">
            © 2024 Your Name. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
