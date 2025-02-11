import React, { useEffect } from 'react';

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

    function applyPreferredTheme(e) {
      if (e.matches) {
        document.body.classList.add('dark-mode');
      } else {
        document.body.classList.remove('dark-mode');
      }
    }
    applyPreferredTheme(darkModeMediaQuery);
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