import { useEffect } from 'preact/hooks';
import anime from 'animejs';

export default function Navbar() {
  useEffect(() => {
    // Animate navbar elements
    anime({
      targets: '.nav-item',
      opacity: [0, 1],
      translateY: [-20, 0],
      delay: anime.stagger(100),
      easing: 'easeOutQuad'
    });
  }, []);

  return (
    <nav className="nav glass">
      <div className="nav-left">
        <a className="brand" href="/">
          <span className="nav-item">Urch</span>
        </a>
      </div>
      
      <div className="nav-right">
        <a className="nav-item" href="#tech-stack">Tech Stack</a>
        <a className="nav-item" href="#system-diagram">System Diagram</a>
        <a className="nav-item" href="#setup">Setup</a>
        <a className="button primary nav-item" href="https://github.com/your-repo/urch" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
      </div>
    </nav>
  );
} 