import { lazy, Suspense, useCallback, useEffect, useLayoutEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Articles from './components/Articles';
import Contact from './components/Contact';
import CookieConsent from './components/CookieConsent';
import ErrorBoundary from './components/ErrorBoundary';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Loading from './components/Loading';
import Navbar from './components/Navbar';
import Skills from './components/Skills';

// Lazy load route-level components and modals for better performance
const Frameworks = lazy(() => import('./components/Frameworks'));
const SideProjects = lazy(() => import('./components/SideProjects'));
const CertificatesModal = lazy(() => import('./components/CertificatesModal'));
const TestDashboardModal = lazy(() => import('./components/TestDashboardModal'));

function App() {
  const [isCertModalOpen, setIsCertModalOpen] = useState(false);
  const [isTestDashboardOpen, setIsTestDashboardOpen] = useState(false);
  const location = useLocation();

  // Memoize callbacks to prevent unnecessary re-renders
  const handleOpenCertificates = useCallback(() => setIsCertModalOpen(true), []);
  const handleCloseCertificates = useCallback(() => setIsCertModalOpen(false), []);
  const handleCloseTestDashboard = useCallback(() => setIsTestDashboardOpen(false), []);

  useEffect(() => {
    // Initialize Materialize components if needed
    if (window.M) {
      window.M.AutoInit();
    }
  }, []);

  useLayoutEffect(() => {
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      typeof window.matchMedia === 'function' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const REVEAL_TRANSITION_MS = 600;

    // Targets:
    // - regular `.section` blocks (excluding ones inside parallax and `.no-pad-bot`)
    // - parallax banners themselves (`.parallax-container`)
    const sectionTargets = Array.from(document.querySelectorAll('.section')).filter((section) => {
      if (section.classList.contains('no-pad-bot')) return false;
      if (section.closest('.parallax-container')) return false;
      return true;
    });

    const parallaxTargets = Array.from(document.querySelectorAll('.parallax-container'));
    const targets = [...parallaxTargets, ...sectionTargets];

    if (targets.length === 0) return;

    const reveal = (el) => {
      el.style.opacity = '1';
      el.style.pointerEvents = '';
      el.dataset.revealed = '1';
    };

    const hide = (el) => {
      if (el.dataset.revealed === '1') return;
      el.style.opacity = '0';
      el.style.pointerEvents = 'none';
    };

    if (prefersReducedMotion || typeof window.IntersectionObserver !== 'function') {
      targets.forEach(reveal);
      return;
    }

    // Initial hidden state (so the reveal is noticeable)
    targets.forEach((el) => {
      if (!el.dataset.revealInit) {
        el.style.transition = `opacity ${REVEAL_TRANSITION_MS}ms ease-out`;
        el.style.willChange = 'opacity';
        el.dataset.revealInit = '1';
      }
      // hide(el);
    });

    const observer = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          reveal(entry.target);
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -15% 0px',
      }
    );

    targets.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, [location.pathname]);

  return (
    <div className="App">
      <Navbar onOpenCertificates={handleOpenCertificates} />

      <main>
        <ErrorBoundary>
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Hero />
                    <Skills />
                    <Experience />
                    <Articles />
                    <Contact />
                  </>
                }
              />
              <Route path="/side-projects" element={<SideProjects />} />
              <Route path="/frameworks" element={<Frameworks />} />
            </Routes>
          </Suspense>
        </ErrorBoundary>
      </main>

      <Footer />

      <CookieConsent />

      <Suspense fallback={null}>
        <CertificatesModal isOpen={isCertModalOpen} onClose={handleCloseCertificates} />
      </Suspense>

      <Suspense fallback={null}>
        <TestDashboardModal isOpen={isTestDashboardOpen} onClose={handleCloseTestDashboard} />
      </Suspense>

      {/* Floating Action Button for Test Dashboard */}
      <button
        className="dashboard-fab"
        onClick={() => setIsTestDashboardOpen(true)}
        aria-label="Open Test Dashboard"
        title="View Test Results"
      >
        <i className="material-icons">analytics</i>
      </button>
    </div>
  );
}

export default App;
