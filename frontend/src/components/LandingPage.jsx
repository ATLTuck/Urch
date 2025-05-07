import { useEffect, useRef } from 'preact/hooks';
import anime from 'animejs';
import TechCard from './TechCard';
import SystemDiagram from './SystemDiagram';
import SetupInstructions from './SetupInstructions';

export default function LandingPage() {
  const techStackRef = useRef(null);
  const headerRef = useRef(null);
  
  useEffect(() => {
    // Header animation
    anime({
      targets: headerRef.current,
      opacity: [0, 1],
      translateY: [30, 0],
      duration: 1000,
      easing: 'easeOutQuad'
    });
    
    // Tech stack cards animation on scroll
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          anime({
            targets: '.tech-card',
            opacity: [0, 1],
            translateX: [-30, 0],
            delay: anime.stagger(100),
            easing: 'easeOutQuad'
          });
          observer.disconnect();
        }
      });
    }, { threshold: 0.1 });
    
    if (techStackRef.current) {
      observer.observe(techStackRef.current);
    }
    
    return () => observer.disconnect();
  }, []);
  
  return (
    <div>
      <section className="hero">
        <div className="text-center" ref={headerRef}>
          <h1>Urch: Optimized Web Development</h1>
          <p className="text-lead">A complete web app development environment for Raspberry Pi</p>
          <p>
            <a href="#setup" className="button primary">Get Started</a>
            <a href="#tech-stack" className="button outline">Learn More</a>
          </p>
        </div>
      </section>
      
      <section id="tech-stack" ref={techStackRef} className="row">
        <h2>Tech Stack</h2>
        <div className="col-12">
          <p>Built with modern, performance-optimized technologies:</p>
        </div>
        
        <div className="col-12 col-md-6">
          <TechCard 
            name="Preact" 
            description="Fast 3kB alternative to React with the same modern API. Perfect for resource-constrained environments like Raspberry Pi."
            icon="⚛️" 
          />
        </div>
        
        <div className="col-12 col-md-6">
          <TechCard 
            name="Chota CSS" 
            description="A super lightweight CSS framework, weighing in at around 3kB (minified + gzipped). Responsive, modern, and flexible."
            icon="🎨" 
          />
        </div>
        
        <div className="col-12 col-md-6">
          <TechCard 
            name="anime.js" 
            description="A lightweight JavaScript animation library. It works with CSS, SVG, DOM attributes and JavaScript Objects."
            icon="✨" 
          />
        </div>
        
        <div className="col-12 col-md-6">
          <TechCard 
            name="Express.js" 
            description="Fast, unopinionated, minimalist web framework for Node.js. Perfect for building APIs and serving your frontend."
            icon="🚂" 
          />
        </div>
        
        <div className="col-12 col-md-6">
          <TechCard 
            name="SQLite" 
            description="Self-contained, serverless SQL database engine. Zero configuration and perfect for edge devices."
            icon="🗃️" 
          />
        </div>
      </section>
      
      <section id="system-diagram" className="row">
        <h2>System Diagram</h2>
        <div className="col-12">
          <p>Here's how the components of this application communicate with each other:</p>
          <SystemDiagram />
        </div>
      </section>
      
      <section id="setup" className="row">
        <h2>Setup Instructions</h2>
        <div className="col-12">
          <p>Follow these simple steps to get the application running on your Raspberry Pi:</p>
          <SetupInstructions />
        </div>
      </section>
    </div>
  );
} 