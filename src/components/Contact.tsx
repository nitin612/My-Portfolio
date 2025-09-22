import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';

const Contact = () => {
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted');
  };

  const contactInfo = [
    { icon: Mail, label: "your.email@example.com", href: "mailto:your.email@example.com" },
    { icon: Phone, label: "+1 (555) 123-4567", href: "tel:+15551234567" },
    { icon: MapPin, label: "New York, NY", href: "#" }
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" }
  ];

  return (
    <section id="contact" ref={sectionRef} className="bg-muted/30">
      <div className="section-container">
        <div className={`fade-in-up ${isVisible ? 'visible' : ''}`}>
          <h2 className="section-title text-center text-foreground font-light">
            Get In Touch
          </h2>
        </div>
        
        <div className="max-w-4xl mx-auto grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className={`fade-in-up ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '200ms' }}>
            <div className="minimal-card p-8">
              <h3 className="text-xl font-medium text-foreground mb-8">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input placeholder="Name" className="bg-background border-border" />
                  <Input placeholder="Email" type="email" className="bg-background border-border" />
                </div>
                <Input placeholder="Subject" className="bg-background border-border" />
                <Textarea 
                  placeholder="Message" 
                  className="min-h-32 resize-none bg-background border-border"
                />
                <Button 
                  type="submit" 
                  className="w-full bg-foreground text-background hover:bg-foreground/90 transition-colors"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>
          
          {/* Contact Info */}
          <div className={`fade-in-up ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '400ms' }}>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-medium text-foreground mb-6">Contact Information</h3>
                <div className="space-y-4">
                  {contactInfo.map((item, index) => (
                    <a
                      key={index}
                      href={item.href}
                      className="flex items-center gap-4 p-4 bg-background rounded border border-border hover:bg-muted/50 transition-colors group"
                    >
                      <item.icon className="text-muted-foreground group-hover:text-foreground transition-colors" size={20} />
                      <span className="minimal-text group-hover:text-foreground transition-colors">{item.label}</span>
                    </a>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-medium text-foreground mb-6">Follow Me</h3>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-12 h-12 bg-background border border-border rounded hover:bg-foreground hover:text-background transition-colors group"
                      aria-label={social.label}
                    >
                      <social.icon className="transition-transform group-hover:scale-110" size={20} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;