import { Suspense, lazy, useEffect } from 'react';
import Header from './components/Header';
const LazyGifShowcase = lazy(() => import('./components/GIFShowcase'));
const LazyVibeRules = lazy(() => import('./components/VibeRules'));
const LazyFeatures = lazy(() => import('./components/Features'));
const LazyEmbed = lazy(() => import('./components/Embed'));
const LazySection = lazy(() => import('./components/Section'));
const LazyJoin = lazy(() => import('./components/Join'));
const LazyAppeal = lazy(() => import('./components/Appeal'));
const LazyFooter = lazy(() => import('./components/Footer'));

function App() {
  useEffect(() => {
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    function applyPreferredTheme(e: MediaQueryList | MediaQueryListEvent) {
      if (e.matches) {
        document.body.classList.add('dark');
      } else {
        document.body.classList.remove('dark');
      }
    }

    applyPreferredTheme(darkModeMediaQuery);
    darkModeMediaQuery.addEventListener('change', applyPreferredTheme);

    return () => {
      darkModeMediaQuery.removeEventListener('change', applyPreferredTheme);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#121214] text-gray-100 relative">
      {/* Decorative background elements */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        <div className="absolute -top-32 -left-32 w-64 h-64 bg-[#cd41ff]/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 -right-32 w-96 h-96 bg-[#cd41ff]/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 left-1/4 w-72 h-72 bg-[#cd41ff]/15 rounded-full blur-3xl"></div>
        <div className="hidden md:block absolute top-1/4 left-1/3 w-2 h-2 bg-[#cd41ff] rounded-full shadow-[#cd41ff] shadow-glow animate-pulse"></div>
        <div className="hidden md:block absolute top-3/4 right-1/4 w-3 h-3 bg-[#cd41ff] rounded-full shadow-[#cd41ff] shadow-glow animate-pulse delay-700"></div>
        <div className="hidden md:block absolute bottom-1/3 left-10 w-1 h-1 bg-[#cd41ff] rounded-full shadow-[#cd41ff] shadow-glow animate-pulse delay-1000"></div>
      </div>
      
      <Suspense fallback={
        <div className="flex items-center justify-center min-h-screen z-10 relative">
          <div className="text-center">
            <div className="w-20 h-20 border-4 border-[#cd41ff] border-t-transparent rounded-full animate-spin mx-auto mb-6 shadow-[0_0_15px_rgba(205,65,255,0.5)]"></div>
            <p className="text-xl font-medium text-gray-300">
              <span className="bg-gradient-to-r from-[#cd41ff] to-[#cd41ff]/70 bg-clip-text text-transparent">
                Loading Da Frens...
              </span>
            </p>
          </div>
        </div>
      }>
        <main className="flex flex-col relative z-10">
          <Header />
          <LazyGifShowcase />
          <LazyVibeRules />
          <LazyFeatures />
          <LazyEmbed />
          <LazySection>
            <LazyJoin />
            <LazyAppeal />
          </LazySection>
          <LazyFooter />
        </main>
      </Suspense>
      
      {/* Grid overlay for visual texture */}
      <div className="fixed inset-0 bg-[url('/grid-pattern.png')] bg-repeat opacity-5 pointer-events-none z-[1]"></div>
    </div>
  );
}

export default App;
