import { useEffect } from 'preact/hooks';
import anime from 'animejs';
import Navbar from './Navbar';
import LandingPage from './LandingPage';
import Footer from './Footer';

export default function App() {
  useEffect(() => {
    // Page load animation
    anime({
      targets: 'main',
      opacity: [0, 1],
      translateY: [20, 0],
      duration: 800,
      easing: 'easeOutQuad'
    });
  }, []);

  return (
    <>
      <Navbar />
      <main className="container">
        <LandingPage />
      </main>
      <Footer />
    </>
  );
} 