import { Suspense, lazy, useEffect } from 'react';
const LazyHeader = lazy(() => import('./components/Header'));
const LazyIconShowcase = lazy(() => import('./components/IconShowcase'));
const LazyVibeRules = lazy(() => import('./components/VibeRules'));
const LazyFeatures = lazy(() => import('./components/Features'));
const LazyEmbed = lazy(() => import('./components/Embed'));
const LazyJoin = lazy(() => import('./components/Join'));
const LazyFooter = lazy(() => import('./components/Footer'));

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
    <Suspense fallback={<div>Loading...</div>}>
      <LazyHeader />
      <LazyIconShowcase />
      <LazyVibeRules />
      <LazyFeatures />
      <LazyEmbed />
      <LazyJoin />
      <LazyFooter />
    </Suspense>
  );
}

export default App;
