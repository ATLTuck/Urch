import { useEffect } from 'preact/hooks';
import anime from 'animejs';

export default function Footer() {
  useEffect(() => {
    // Footer animation
    anime({
      targets: '.flex-badge',
      translateY: [20, 0],
      opacity: [0, 1],
      delay: 500,
      duration: 800,
      easing: 'easeOutElastic(1, .5)'
    });
    
    // Badge animation loop
    anime({
      targets: '.sparkle',
      rotate: '360deg',
      loop: true,
      duration: 2000,
      easing: 'linear'
    });
  }, []);
  
  return (
    <footer className="footer">
      <div className="container">
        <p>
          Urch - Web Development Environment for Raspberry Pi
          <span className="flex-badge badge">
            Built to flex on devs
            <span className="sparkle">✨</span>
          </span>
        </p>
        <p className="text-small">Created with Preact, Chota CSS, anime.js, Express and SQLite</p>
      </div>
    </footer>
  );
} 