import { useEffect, useRef, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
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
    // Handle form submission here
    console.log('Form submitted');
  };

  const contactInfo = [
    { icon: Mail, label: "Email", value: "your.email@example.com", href: "mailto:your.email@example.com" },
    { icon: Phone, label: "Phone", value: "+1 (555) 123-4567", href: "tel:+15551234567" },
    { icon: MapPin, label: "Location", value: "New York, NY", href: "#" }
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" }
  ];

  return (
    <section id="contact" ref={sectionRef} className="py-20 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className={`transition-all duration-800 ${isVisible ? 'fade-in visible' : 'fade-in'}`}>
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 text-gradient">
            Get In Touch
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className={`transition-all duration-800 delay-200 ${isVisible ? 'fade-in visible' : 'fade-in'}`}>
            <Card className="portfolio-card">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold">Send Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Input placeholder="Your Name" className="h-12" />
                    </div>
                    <div>
                      <Input placeholder="Your Email" type="email" className="h-12" />
                    </div>
                  </div>
                  <div>
                    <Input placeholder="Subject" className="h-12" />
                  </div>
                  <div>
                    <Textarea 
                      placeholder="Your Message" 
                      className="min-h-32 resize-none"
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full h-12 bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
          
          {/* Contact Info */}
          <div className={`transition-all duration-800 delay-400 ${isVisible ? 'fade-in visible' : 'fade-in'}`}>
            <div className="space-y-8">
              <Card className="portfolio-card">
                <CardHeader>
                  <CardTitle className="text-2xl font-semibold">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <a
                      key={index}
                      href={item.href}
                      className="flex items-center gap-4 p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors group"
                    >
                      <item.icon className="text-primary group-hover:scale-110 transition-transform" size={24} />
                      <div>
                        <p className="font-medium">{item.label}</p>
                        <p className="text-muted-foreground">{item.value}</p>
                      </div>
                    </a>
                  ))}
                </CardContent>
              </Card>
              
              <Card className="portfolio-card">
                <CardHeader>
                  <CardTitle className="text-2xl font-semibold">Follow Me</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-4">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-12 h-12 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors group"
                        aria-label={social.label}
                      >
                        <social.icon className="group-hover:scale-110 transition-transform" size={20} />
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;