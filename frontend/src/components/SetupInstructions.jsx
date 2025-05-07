import { useEffect, useRef } from 'preact/hooks';
import anime from 'animejs';

export default function SetupInstructions() {
  const instructionsRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Animate code blocks
          anime({
            targets: '.code-block',
            opacity: [0, 1],
            translateY: [20, 0],
            delay: anime.stagger(300),
            duration: 800,
            easing: 'easeOutQuad'
          });
          
          observer.disconnect();
        }
      });
    }, { threshold: 0.2 });
    
    if (instructionsRef.current) {
      observer.observe(instructionsRef.current);
    }
    
    return () => observer.disconnect();
  }, []);
  
  return (
    <div ref={instructionsRef}>
      <ol>
        <li>Clone the repository to your Raspberry Pi</li>
        <li>Navigate to the project directory</li>
        <li>Run the following commands:</li>
      </ol>
      
      <div className="code-block">
        <pre><code>npm install
npm run dev</code></pre>
      </div>
      
      <p>Then access the site from another device on the network by visiting:</p>
      
      <div className="code-block">
        <pre><code>http://10.0.0.226:3000</code></pre>
        <p className="text-small">(Replace the IP with your Pi's local IP if different.)</p>
      </div>
      
      <div className="row">
        <div className="col-12 text-center">
          <a className="button primary" href="#" onClick={(e) => e.preventDefault()}>
            Ready to Build
          </a>
          <div className="badge flex-center">
            Built to flex on devs
            <span className="sparkle">✨</span>
          </div>
        </div>
      </div>
    </div>
  );
} 