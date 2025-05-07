import { useEffect, useRef } from 'preact/hooks';
import anime from 'animejs';

export default function SystemDiagram() {
  const diagramRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Animate diagram boxes
          anime({
            targets: '.diagram-box',
            opacity: [0, 1],
            scale: [0.8, 1],
            delay: anime.stagger(200),
            duration: 800,
            easing: 'easeOutElastic(1, .5)'
          });
          
          // Animate arrows
          anime({
            targets: '.diagram-arrow',
            width: [0, 80],
            delay: 800,
            duration: 600,
            easing: 'easeOutQuad'
          });
          
          observer.disconnect();
        }
      });
    }, { threshold: 0.5 });
    
    if (diagramRef.current) {
      observer.observe(diagramRef.current);
    }
    
    return () => observer.disconnect();
  }, []);
  
  return (
    <div className="system-diagram glass" ref={diagramRef}>
      <div className="row flex-center">
        <div className="diagram-box">
          <h4>Frontend</h4>
          <p>Preact + Chota + anime.js</p>
        </div>
        
        <div className="diagram-arrow"></div>
        
        <div className="diagram-box">
          <h4>Backend</h4>
          <p>Express.js</p>
        </div>
        
        <div className="diagram-arrow"></div>
        
        <div className="diagram-box">
          <h4>Database</h4>
          <p>SQLite</p>
        </div>
      </div>
      
      <div className="row">
        <div className="col-12 text-center">
          <p className="text-small">HTTP/JSON requests flow between frontend and backend</p>
          <p className="text-small">SQL queries flow between backend and database</p>
        </div>
      </div>
    </div>
  );
} 