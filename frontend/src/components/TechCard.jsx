import { useEffect, useRef } from 'preact/hooks';
import anime from 'animejs';

export default function TechCard({ name, description, icon }) {
  const cardRef = useRef(null);
  
  useEffect(() => {
    const card = cardRef.current;
    
    // Hover animation
    if (card) {
      card.addEventListener('mouseenter', () => {
        anime({
          targets: card.querySelector('.tech-icon'),
          scale: [1, 1.2],
          rotate: '5deg',
          duration: 300,
          easing: 'easeOutQuad'
        });
      });
      
      card.addEventListener('mouseleave', () => {
        anime({
          targets: card.querySelector('.tech-icon'),
          scale: [1.2, 1],
          rotate: '0deg',
          duration: 300,
          easing: 'easeOutQuad'
        });
      });
    }
  }, []);
  
  return (
    <div className="card tech-card" ref={cardRef}>
      <div className="tech-icon">{icon}</div>
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  );
} 