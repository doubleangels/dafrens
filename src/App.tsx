import { useEffect } from 'react';
import Header from './components/Header';
import IconShowcase from './components/IconShowcase';
import VibeRules from './components/VibeRules';
import Features from './components/Features';
import Embed from './components/Embed';
import Join from './components/Join';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    // Annotate the parameter 'e' with a union type:
    function applyPreferredTheme(e: MediaQueryList | MediaQueryListEvent) {
      if (e.matches) {
        document.body.classList.add('dark-mode');
      } else {
        document.body.classList.remove('dark-mode');
      }
    }

    // Initial check: darkModeMediaQuery is of type MediaQueryList.
    applyPreferredTheme(darkModeMediaQuery);

    // Listen for changes: the event listener callback receives a MediaQueryListEvent.
    darkModeMediaQuery.addEventListener('change', applyPreferredTheme);

    return () => {
      darkModeMediaQuery.removeEventListener('change', applyPreferredTheme);
    };
  }, []);

  return (
    <div>
      <Header />
      <IconShowcase />
      <VibeRules />
      <Features />
      <Embed />
      <Join />
      <Footer />
    </div>
  );
}

export default App;